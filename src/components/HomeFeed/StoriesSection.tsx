import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Plus, Archive, Settings } from 'lucide-react';

interface Story {
  id: string;
  userName: string;
  userAvatarUrl: string;
  storyImageUrl: string;
  isCurrentUserStory?: boolean;
}

const storiesData: Story[] = [
  {
    id: 'add-story',
    userName: 'Add to Story',
    userAvatarUrl: '', // Not used for this special card type
    storyImageUrl: '', // Not used for this special card type
    isCurrentUserStory: true,
  },
  {
    id: '1',
    userName: 'Olivia Davis',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=1',
    storyImageUrl: 'https://picsum.photos/seed/story1/200/300',
  },
  {
    id: '2',
    userName: 'James Wilson',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=2',
    storyImageUrl: 'https://picsum.photos/seed/story2/200/300',
  },
  {
    id: '3',
    userName: 'Sophia Miller',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=3',
    storyImageUrl: 'https://picsum.photos/seed/story3/200/300',
  },
  {
    id: '4',
    userName: 'Liam Garcia',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=4',
    storyImageUrl: 'https://picsum.photos/seed/story4/200/300',
  },
  {
    id: '5',
    userName: 'Ava Rodriguez',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=5',
    storyImageUrl: 'https://picsum.photos/seed/story5/200/300',
  },
];

interface StoriesSectionProps {
  className?: string;
}

const StoriesSection: React.FC<StoriesSectionProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-primaryText">Stories</CardTitle>
        <div className="space-x-2">
          <Button variant="ghost" size="sm" className="text-primaryText hover:bg-accent">
            <Archive className="mr-2 h-4 w-4" /> Archive
          </Button>
          <Button variant="ghost" size="sm" className="text-primaryText hover:bg-accent">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex space-x-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
          {storiesData.map((story) => (
            <div
              key={story.id}
              className={cn(
                'flex-shrink-0 w-28 h-48 rounded-lg overflow-hidden relative shadow-md cursor-pointer group',
                story.isCurrentUserStory ? 'bg-card border border-border' : ''
              )}
            >
              {story.isCurrentUserStory ? (
                <div className="flex flex-col h-full">
                  <div className="flex-grow bg-muted group-hover:bg-accent transition-colors flex items-center justify-center">
                    {/* This part can be an image or an icon container */}
                  </div>
                  <div className="p-2 text-center bg-card border-t border-border">
                     <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Plus className="h-5 w-5" />
                     </div>
                    <p className="text-xs font-medium text-primaryText truncate">Add to Story</p>
                    <p className="text-[10px] text-secondaryText leading-tight mt-0.5">Share something</p>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src={story.storyImageUrl}
                    alt={`${story.userName}'s story`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <Avatar className="absolute top-2 left-2 w-9 h-9 border-2 border-primary">
                    <AvatarImage src={story.userAvatarUrl} alt={story.userName} />
                    <AvatarFallback>{story.userName.substring(0, 1)}</AvatarFallback>
                  </Avatar>
                  <p className="absolute bottom-2 left-0 right-0 px-2 text-center text-white text-xs font-semibold truncate">
                    {story.userName}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StoriesSection;
