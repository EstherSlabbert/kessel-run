import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { cn } from '@/utils/classUtils';
import { Link } from '@/components/links/Link';
import { buttonVariants } from '@/components/ui/button/buttonVariants';

export const ContactUsCard = () => (
  <Card className={cn('flex flex-col bg-muted/65')}>
    <CardHeader>
      <CardTitle className="text-2xl">
        {'Special projects? Site maintenance? Shuts? We have your transport needs covered.'}
      </CardTitle>
      <CardDescription className="p-1 text-sm font-semibold text-secondary-foreground">
        {`We have offered national transportation services within the mining, freight and logistic,
          and engineering industries. Although we are based out of Gauteng we can offer national as
          well as cross border options.`}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Link
        className={cn(buttonVariants({ variant: 'default' }), 'no-underline!')}
        to={'/contact-us'}
        label="Contact Us"
      />
    </CardContent>
  </Card>
);
