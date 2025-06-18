import { LoaderCircleIcon } from 'lucide-react';
import { AccessibleIcon } from '@/components/ui/AccessibleIcon';

export const Loading = () => (
  <div role="status" className="flex h-[80vh] w-full items-center justify-center">
    <AccessibleIcon label="Loading...">
      <LoaderCircleIcon className="text-primary size-16 animate-spin" />
    </AccessibleIcon>
  </div>
);
