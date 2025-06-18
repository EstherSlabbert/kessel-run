import { ReactNode } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { cn } from '@/utils/classUtils';

type UtilityCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
};

export const UtilityCard = ({
  icon,
  title,
  description,
  children,
  className,
}: UtilityCardProps) => (
  <Card className={cn('min-w-4xs flex h-full flex-col justify-between', className)}>
    <CardHeader className="gap-2">
      <div className="flex size-12 items-center justify-center rounded-md bg-muted/50 text-muted-foreground [&>svg]:size-6 [&>svg]:stroke-2">
        {icon}
      </div>

      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-xs font-semibold">{description}</CardDescription>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);
