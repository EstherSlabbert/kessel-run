import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip as TooltipBase,
} from './ui/Tooltip';

export type TooltipProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  hidden?: boolean;
  delayDuration?: number;
};

export const Tooltip = ({ trigger, content, side, align, hidden, delayDuration }: TooltipProps) => {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <TooltipBase>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          hidden={hidden}
          className="max-w-sm whitespace-pre-wrap"
        >
          {content}
        </TooltipContent>
      </TooltipBase>
    </TooltipProvider>
  );
};
