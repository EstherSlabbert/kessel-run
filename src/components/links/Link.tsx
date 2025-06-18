import { ExternalLinkIcon } from 'lucide-react';
import React from 'react';
import { Link as RouterLink } from 'react-router';

import { AccessibleIcon } from '@/components/ui/AccessibleIcon';
import { buttonVariants } from '@/components/ui/button/buttonVariants';
import { cn } from '@/utils/classUtils';
import { VariantProps } from 'class-variance-authority';

interface BaseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  isExternal?: boolean;
  size?: VariantProps<typeof buttonVariants>['size'];
}

interface LinkChildren extends BaseLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  isExternal?: boolean;
  size?: VariantProps<typeof buttonVariants>['size'];
}

interface LinkLabel extends BaseLinkProps {
  to: string;
  className?: string;
  label: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  size?: VariantProps<typeof buttonVariants>['size'];
}

export type LinkProps = LinkChildren | LinkLabel;

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  if ('children' in props && props.isExternal) {
    return (
      <a
        ref={ref}
        href={props.to}
        target="_blank"
        rel="noreferrer"
        className={cn(
          buttonVariants({ variant: 'link', size: props.size }),
          'justify-start',
          props.className
        )}
      >
        {props.children}
      </a>
    );
  }
  if ('children' in props && !props.isExternal) {
    return (
      <RouterLink
        ref={ref}
        to={props.to}
        onClick={props.onClick}
        className={cn(
          buttonVariants({ variant: 'link', size: props.size }),
          'justify-start',
          props.className
        )}
      >
        {props.children}
      </RouterLink>
    );
  }
  if ('label' in props && props.isExternal) {
    const iconPosition = props.iconPosition || 'end';
    const icon = props.icon || (
      <AccessibleIcon label="External Link">
        <ExternalLinkIcon className="size-3!" />
      </AccessibleIcon>
    );
    return (
      <a
        ref={ref}
        href={props.to}
        target="_blank"
        rel="noreferrer"
        className={cn(
          buttonVariants({ variant: 'link', size: props.size }),
          'justify-start',
          props.className
        )}
      >
        {iconPosition === 'start' ? icon : null}
        {props.label}
        {iconPosition === 'end' ? icon : null}
      </a>
    );
  }
  if ('label' in props && !props.isExternal) {
    const iconPosition = props.iconPosition || 'start';
    return (
      <RouterLink
        ref={ref}
        to={props.to}
        className={cn(
          buttonVariants({ variant: 'link', size: props.size }),
          'justify-start',
          props.className
        )}
      >
        {iconPosition === 'start' ? props.icon : null}
        {props.label}
        {iconPosition === 'end' ? props.icon : null}
      </RouterLink>
    );
  }

  return null;
});

Link.displayName = 'Link';

export { Link };
