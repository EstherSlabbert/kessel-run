import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

import { Button } from '@/components/ui/button/Button';
import { Link } from '@/components/links/Link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/NavigationMenu';
import { Separator } from '@/components/ui/Separator';
import { QuoteDialog } from '@/views/Quote/Quote-dialog';

export const NavMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Menu */}
      <NavigationMenu className="hidden md:flex" viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className="no-underline!">
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/services" className="no-underline!">
                Services
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/about" className="no-underline!">
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/contact-us" className="no-underline!">
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <QuoteDialog />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Toggle Button */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          className="text-foreground"
        >
          {!isMobileMenuOpen && <MenuIcon className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-background px-6 py-6 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Top bar with close button */}
          <div className="mb-12 flex items-center justify-between">
            <span className="mt-3 text-lg font-semibold">
              <Link to="/" className="no-underline!" onClick={() => setIsMobileMenuOpen(false)}>
                <img
                  src="/krlogo-removebg-preview.png"
                  alt="Company Logo"
                  className="h-8 w-auto object-contain"
                />
                <span className="font-company-logo text-xl font-bold">Kessel Run</span>
              </Link>
            </span>
            <Button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="text-foreground"
              variant={'ghost'}
            >
              <XIcon className="size-8" />
            </Button>
          </div>

          {/* Nav items */}
          <nav className="flex flex-col gap-6">
            <div className="flex flex-col">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-semibold no-underline!"
              >
                Home
              </Link>
              <Separator orientation="horizontal" className="h-4" />
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-semibold no-underline!"
              >
                Services
              </Link>
              <Separator orientation="horizontal" className="h-4" />
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-semibold no-underline!"
              >
                About
              </Link>
              <Separator orientation="horizontal" className="h-4" />
              <Link
                to="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-semibold no-underline!"
              >
                Contact
              </Link>
            </div>
            <QuoteDialog />
          </nav>
        </div>
      )}
    </>
  );
};
