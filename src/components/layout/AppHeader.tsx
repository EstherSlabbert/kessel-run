import { Separator } from '@/components/ui/Separator';

type AppHeaderProps = { children: React.ReactNode };

export const AppHeader = ({ children }: AppHeaderProps) => (
  <header className="z-10 flex h-17 shrink-0 items-center border-b px-4">
    <div className="flex w-full items-center justify-between">
      {/* Left side: Logo */}
      <div className="flex items-center gap-2">
        <Separator orientation="vertical" className="mr-2 h-4" />
        {Array.isArray(children) ? children[0] : children}
      </div>

      {/* Right side: NavMenu */}
      <div className="flex items-center gap-2">
        {Array.isArray(children) ? children.slice(1) : null}
      </div>
    </div>
  </header>
);
