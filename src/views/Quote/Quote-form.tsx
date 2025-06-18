import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/TextArea';
import { Button } from '@/components/ui/button/Button';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  surname: z.string().optional(),
  email: z.string().email('Valid email is required'),
  cell: z.string().min(7, 'Phone number is required'),
  service: z.string().optional(),
});

export type QuoteForm = z.infer<typeof formSchema>;

export const QuoteForm = () => {
  const form = useForm<QuoteForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      cell: '',
      service: '',
    },
  });
  const subjectRef = useRef<HTMLInputElement>(null);
  const nextRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const id = Math.random().toString(36).substring(2, 8).toUpperCase(); // simple 6-char ID
    if (subjectRef.current) {
      subjectRef.current.value = `Quote Request #${id}`;
    }
    if (nextRef.current) {
      nextRef.current.value = window.location.href;
    }
  }, []);

  return (
    <Form {...form}>
      <form
        action="https://formsubmit.co/super.ejs@gmail.com"
        method="POST"
        className="flex flex-col gap-8"
      >
        {/* Hidden inputs to configure Formsubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" ref={subjectRef} />
        <input type="hidden" name="_next" ref={nextRef} />

        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input required placeholder="John" {...field} />
              </FormControl>
              <FormMessage role="alert" />
            </FormItem>
          )}
        />

        <FormField
          name="surname"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Surname</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage role="alert" />
            </FormItem>
          )}
        />

        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input required placeholder="example@gmail.com" type="email" {...field} />
              </FormControl>
              <FormMessage role="alert" />
            </FormItem>
          )}
        />

        <FormField
          name="cell"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact number</FormLabel>
              <FormControl>
                <Input required placeholder="075..." type="tel" {...field} />
              </FormControl>
              <FormMessage role="alert" />
            </FormItem>
          )}
        />

        <FormField
          name="service"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Required</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us what you need..." {...field} />
              </FormControl>
              <FormMessage role="alert" />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
