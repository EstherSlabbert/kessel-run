import { VariantProps } from 'class-variance-authority';

import { Tooltip } from '@/components/Tooltip';
import { buttonVariants } from '../ui/button/buttonVariants';
import { Link } from './Link';

export type LinkWithTooltipProps = {
  label: string;
  to: string;
  isExternal?: boolean;
  tooltip: string;
  icon?: React.ReactNode;
  className?: string;
  size?: VariantProps<typeof buttonVariants>['size'];
};

export const LinkWithTooltip = ({
  tooltip,
  to,
  isExternal = false,
  label,
  icon,
  className,
  size,
}: LinkWithTooltipProps) => {
  return (
    <Tooltip
      trigger={
        <span>
          <Link
            to={to}
            isExternal={isExternal}
            label={label}
            iconPosition="end"
            icon={icon}
            className={className}
            size={size}
          />
        </span>
      }
      content={tooltip}
      delayDuration={0}
    />
  );
};
