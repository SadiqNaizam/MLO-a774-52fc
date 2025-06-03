import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import SuggestedGroups from '../HomeFeed/SuggestedGroups'; // Adjusted import path
import SuggestedFriends from '../HomeFeed/SuggestedFriends'; // Adjusted import path
// Import StoriesSection if it's meant to be here, based on image, it's there. However, requirements only specify SuggestedGroups and SuggestedFriends.
// import StoriesSection from '../HomeFeed/StoriesSection';

const SidebarRight: React.FC = () => {
  return (
    <aside className={cn(
      'fixed top-0 right-0 h-screen z-30',
      'w-72 bg-surface text-primaryText',
      'flex flex-col border-l border-border',
      'pt-[60px]' // Account for fixed header
    )}>
      <ScrollArea className="flex-1 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
        <div className="p-4 space-y-6">
          {/* 
            Based on the image, Stories section might appear here. 
            However, component hierarchy for SidebarRight only lists SuggestedGroups and SuggestedFriends.
            <StoriesSection className="bg-transparent shadow-none border-none" /> 
          */}
          <SuggestedGroups className="bg-transparent shadow-none border-none" />
          <Separator className="my-4" />
          <SuggestedFriends className="bg-transparent shadow-none border-none" />
          {/* Placeholder for Chat or other elements often found here */}
          {/* <div className="mt-6 p-3 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-sm mb-2">Chat</h3>
            <p className="text-xs text-secondaryText">Chat functionality coming soon.</p>
          </div> */}
        </div>
      </ScrollArea>
    </aside>
  );
};

export default SidebarRight;
