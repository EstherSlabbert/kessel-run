import { useState } from 'react';

import { QuoteForm } from './Quote-form';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import { buttonVariants } from '@/components/ui/button/buttonVariants';
import { cn } from '@/utils/classUtils';

type QuoteDialogProps = {
  buttonVariant?: 'default' | 'secondary';
};

export const QuoteDialog = ({ buttonVariant = 'default' }: QuoteDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cn(
          buttonVariants({ variant: buttonVariant }),
          buttonVariant == 'default'
            ? 'ml-6 no-underline! hover:text-primary-foreground'
            : 'no-underline!'
        )}
      >
        Request a quote
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request a quote</DialogTitle>
        </DialogHeader>
        <QuoteForm />
      </DialogContent>
    </Dialog>
  );
};
