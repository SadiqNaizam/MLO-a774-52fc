import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  User,
  Newspaper,
  MessageSquare,
  Clapperboard,
  Store as StoreIcon,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  List,
  HandHeart,
  ChevronDown,
  Megaphone,
  CalendarPlus,
  Settings,
  ShieldQuestion
} from 'lucide-react';

interface SidebarNavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
  isSectionHeader?: boolean;
  avatarUrl?: string;
}

const sidebarNavItems: SidebarNavItem[] = [
  { id: 'profile', label: 'Olenna Mason', icon: User, href: '#', avatarUrl: 'https://i.pravatar.cc/150?u=olenna' },
  { id: 'newsfeed', label: 'News Feed', icon: Newspaper, href: '#', isActive: true },
  { id: 'messenger', label: 'Messenger', icon: MessageSquare, href: '#' },
  { id: 'watch', label: 'Watch', icon: Clapperboard, href: '#' },
  { id: 'marketplace', label: 'Marketplace', icon: StoreIcon, href: '#' },
  { id: 'shortcutsHeader', label: 'Shortcuts', icon: User /* Placeholder*/, href: '#', isSectionHeader: true },
  { id: 'farmville', label: 'FarmVille 2', icon: Gamepad2, href: '#' },
  // Add more shortcuts here
  { id: 'seeMoreShortcuts', label: 'See More', icon: ChevronDown, href: '#' },
  { id: 'exploreHeader', label: 'Explore', icon: User /* Placeholder*/, href: '#', isSectionHeader: true },
  { id: 'events', label: 'Events', icon: CalendarDays, href: '#' },
  { id: 'pages', label: 'Pages', icon: Flag, href: '#' },
  { id: 'groups', label: 'Groups', icon: Users, href: '#' },
  { id: 'friendlists', label: 'Friend Lists', icon: List, href: '#' },
  { id: 'fundraisers', label: 'Fundraisers', icon: HandHeart, href: '#' },
  { id: 'seeMoreExplore', label: 'See More', icon: ChevronDown, href: '#' },
  { id: 'createHeader', label: 'Create', icon: User /* Placeholder*/, href: '#', isSectionHeader: true },
  { id: 'createAd', label: 'Ad', icon: Megaphone, href: '#' }, 
  { id: 'createPage', label: 'Page', icon: Flag, href: '#' },
  { id: 'createGroup', label: 'Group', icon: Users, href: '#' },
  { id: 'createEvent', label: 'Event', icon: CalendarPlus, href: '#' },
  { id: 'createFundraiser', label: 'Fundraiser', icon: HandHeart, href: '#' },
];

const SidebarLeft: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<string>('newsfeed');

  return (
    <aside className={cn(
      'fixed top-0 left-0 h-screen z-40',
      'w-64 bg-sidebar text-sidebar-foreground',
      'flex flex-col border-r border-sidebar-border',
      'pt-[60px]' // Account for fixed header
    )}>
      <ScrollArea className="flex-1 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
        <nav className="p-2 space-y-1">
          {sidebarNavItems.map((item, index) => {
            if (item.isSectionHeader) {
              return (
                <React.Fragment key={item.id}>
                  {index !== 0 && <Separator className="my-2 bg-sidebar-border" />}
                  <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </h3>
                </React.Fragment>
              );
            }

            const IconComponent = item.icon;
            const isActive = item.id === activeItem;

            return (
              <Button
                key={item.id}
                variant="ghost"
                asChild
                className={cn(
                  'w-full justify-start text-sm font-medium rounded-md px-3 py-2 h-auto',
                  'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-primary',
                  isActive && 'bg-sidebar-accent text-sidebar-primary'
                )}
                onClick={() => item.href !== '#' && setActiveItem(item.id)} // Prevent active state change for 'See More'
              >
                <a href={item.href} className="flex items-center">
                  {item.avatarUrl ? (
                    <Avatar className="mr-3 h-7 w-7">
                      <AvatarImage src={item.avatarUrl} alt={item.label} />
                      <AvatarFallback>{item.label.substring(0, 1)}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <IconComponent className="mr-3 h-5 w-5 flex-shrink-0" />
                  )}
                  <span className="truncate">{item.label}</span>
                </a>
              </Button>
            );
          })}
        </nav>
      </ScrollArea>
      <Separator className="bg-sidebar-border" />
      <div className="p-2">
          <Button variant="ghost" className="w-full justify-start text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-primary rounded-md px-3 py-2">
              <Settings className="mr-3 h-5 w-5" /> Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-primary rounded-md px-3 py-2">
              <ShieldQuestion className="mr-3 h-5 w-5" /> Help & Support
          </Button>
      </div>
    </aside>
  );
};

export default SidebarLeft;
