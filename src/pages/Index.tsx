import React from 'react';
import { cn } from '@/lib/utils';
import Header from '../components/layout/Header';
import SidebarLeft from '../components/layout/SidebarLeft';
import SidebarRight from '../components/layout/SidebarRight';
import StoriesSection from '../components/HomeFeed/StoriesSection';
import PostFeed from '../components/HomeFeed/PostFeed';

/**
 * HomeFeed Page (Index.tsx)
 *
 * This page serves as the main entry point for the social media feed interface,
 * typically representing the user's home feed.
 *
 * It assembles the primary layout components:
 * - Header: For top navigation, search, and user actions.
 * - SidebarLeft: For main navigation links and shortcuts.
 * - SidebarRight: For suggestions like groups, friends, and other contextual information.
 * - Main Content Area: Dynamically populated with StoriesSection and PostFeed.
 *
 * The layout is structured with fixed Header, SidebarLeft, and SidebarRight components.
 * The main content area is scrollable and appropriately padded to prevent overlap
 * with the fixed elements.
 *
 * Data Handling:
 * In this specific implementation, child components like StoriesSection and PostFeed
 * are responsible for managing their own data (e.g., dummy data defined within them).
 * The Index page focuses on structural assembly rather than data propagation for these sections.
 * If the overall layout or page itself required specific data, it would be defined or fetched here.
 */
const Index: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Header is fixed positioned and will overlay content if not accounted for */}
      <Header />

      {/* SidebarLeft is fixed positioned */}
      <SidebarLeft />

      {/* Main content area that will be scrollable and sit between fixed elements */}
      <main
        className={cn(
          // Sizing and scrolling behavior for the main content area
          "min-h-screen min-w-0 overflow-y-auto",
          // Padding to account for fixed elements:
          "pt-[60px]",  // For the Header (height: 60px)
          "pl-64",      // For the SidebarLeft (width: w-64 / 256px)
          "pr-72",      // For the SidebarRight (width: w-72 / 288px)
          // Consistent scrollbar styling, assuming these utilities are globally available
          // (as seen in other provided components like StoriesSection)
          "scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent"
        )}
      >
        {/* Inner wrapper for the feed content itself */}
        {/* This container centers the content and applies specific padding and layout */}
        <div
          className={cn(
            "max-w-2xl mx-auto",     // Centers content with a max-width (common for feeds)
            "p-6",                    // Padding for the content area (as per mainContent.layout requirement)
            "flex flex-col gap-6"     // Stacks feed items vertically with spacing (as per mainContent.layout requirement)
          )}
        >
          <StoriesSection />
          <PostFeed />
        </div>
      </main>

      {/* SidebarRight is fixed positioned */}
      <SidebarRight />
    </div>
  );
};

export default Index;
