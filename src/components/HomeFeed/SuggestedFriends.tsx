import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { UserPlus, X } from 'lucide-react';

interface FriendSuggestion {
  id: string;
  name: string;
  avatarUrl: string;
  mutualFriends?: number;
}

const suggestedFriendsData: FriendSuggestion[] = [
  {
    id: 'friend1',
    name: 'Ethan Miller',
    avatarUrl: 'https://i.pravatar.cc/150?img=20',
    mutualFriends: 12,
  },
  {
    id: 'friend2',
    name: 'Chloe Davis',
    avatarUrl: 'https://i.pravatar.cc/150?img=21',
    mutualFriends: 5,
  },
  {
    id: 'friend3',
    name: 'Noah Brown',
    avatarUrl: 'https://i.pravatar.cc/150?img=22',
  },
  {
    id: 'friend4',
    name: 'Isabella Wilson',
    avatarUrl: 'https://i.pravatar.cc/150?img=24',
    mutualFriends: 8,
  },
];

interface SuggestedFriendsProps {
  className?: string;
}

const SuggestedFriends: React.FC<SuggestedFriendsProps> = ({ className }) => {
  const [friends, setFriends] = React.useState<FriendSuggestion[]>(suggestedFriendsData);

  const handleDismiss = (friendId: string) => {
    setFriends(prevFriends => prevFriends.filter(friend => friend.id !== friendId));
  };

  const handleAddFriend = (friendId: string) => {
    // Logic to add friend, e.g., send API request
    console.log(`Adding friend: ${friendId}`);
    // For demo, remove from suggestions
    handleDismiss(friendId);
  };

  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold text-primaryText">People You May Know</CardTitle>
        <Button variant="link" className="text-sm text-primary h-auto p-0">See All</Button>
      </CardHeader>
      <CardContent className="p-3 space-y-1">
        {friends.map((friend) => (
          <div key={friend.id} className="flex items-center space-x-3 p-2 hover:bg-accent rounded-md group/item">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src={friend.avatarUrl} alt={friend.name} />
              <AvatarFallback>{friend.name.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <div className="flex-grow min-w-0">
              <p className="font-semibold text-sm text-primaryText truncate">{friend.name}</p>
              {friend.mutualFriends && (
                <p className="text-xs text-secondaryText">{friend.mutualFriends} mutual friends</p>
              )}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-sm ml-auto shrink-0" 
              onClick={() => handleAddFriend(friend.id)}
            >
              <UserPlus className="mr-1.5 h-4 w-4" /> Add
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-7 h-7 text-secondaryText hover:bg-muted shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity"
              onClick={() => handleDismiss(friend.id)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        {friends.length === 0 && (
             <p className="text-sm text-secondaryText text-center py-4">No friend suggestions right now.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default SuggestedFriends;
