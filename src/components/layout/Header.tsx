import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import {
  Facebook,
  Search,
  Home as HomeIcon,
  Users2,
  Clapperboard,
  Store as StoreIcon,
  Users as UsersIcon,
  PlusCircle,
  MessageSquare,
  Bell,
  ChevronDown,
  Settings,
  LogOut,
  HelpCircle
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
}

const mainNavItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: HomeIcon, href: '#', isActive: true },
  { id: 'friends', label: 'Friends', icon: Users2, href: '#' },
  { id: 'watch', label: 'Watch', icon: Clapperboard, href: '#' },
  { id: 'marketplace', label: 'Marketplace', icon: StoreIcon, href: '#' },
  { id: 'groups', label: 'Groups', icon: UsersIcon, href: '#' },
];

const Header: React.FC = () => {
  const [activeNav, setActiveNav] = React.useState<string>('home');

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 h-[60px]',
      'flex items-center justify-between px-4',
      'bg-card text-primaryText border-b border-border shadow-sm'
    )}>
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <a href="#" aria-label="Homepage">
          <Facebook className="h-10 w-10 text-primary fill-primary" />
        </a>
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search Facebook"
            className="pl-9 pr-3 py-2 h-10 w-60 rounded-full bg-secondary focus-visible:ring-primary"
          />
        </div>
      </div>

      {/* Center Section - Navigation */}
      <nav className="flex-1 flex justify-center items-stretch h-full max-w-xl">
        {mainNavItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            asChild
            className={cn(
              'flex-1 h-full px-2 sm:px-6 rounded-none hover:bg-accent',
              'text-muted-foreground data-[active=true]:text-primary data-[active=true]:border-b-2 data-[active=true]:border-primary',
              'hidden md:flex items-center justify-center'
            )}
            data-active={item.id === activeNav}
            onClick={() => setActiveNav(item.id)}
          >
            <a href={item.href} aria-label={item.label}>
              <item.icon className={cn('h-6 w-6', item.id === activeNav ? 'text-primary' : 'text-muted-foreground')} />
            </a>
          </Button>
        ))}
      </nav>

      {/* Right Section - Actions & User Menu */}
      <div className="flex items-center space-x-1 sm:space-x-2">
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-secondary hover:bg-accent text-primaryText hidden lg:flex">
          <PlusCircle className="h-5 w-5" />
          <span className="sr-only">Create</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-secondary hover:bg-accent text-primaryText">
          <MessageSquare className="h-5 w-5" />
          <span className="sr-only">Messenger</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-secondary hover:bg-accent text-primaryText">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="rounded-full p-0 w-10 h-10">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://i.pravatar.cc/150?u=olenna" alt="Olenna Mason" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              {/* <ChevronDown className="h-4 w-4 text-muted-foreground ml-1 hidden sm:inline-block" /> */} 
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            <DropdownMenuItem className="p-2">
                <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://i.pravatar.cc/150?u=olenna" alt="Olenna Mason" />
                        <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold text-sm text-primaryText">Olenna Mason</p>
                        <p className="text-xs text-secondaryText">See your profile</p>
                    </div>
                </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /> Settings & Privacy</DropdownMenuItem>
            <DropdownMenuItem><HelpCircle className="mr-2 h-4 w-4" /> Help & Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" /> Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
