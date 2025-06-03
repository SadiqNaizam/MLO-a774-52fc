import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Plus, X, Users } from 'lucide-react';

interface GroupSuggestion {
  id: string;
  name: string;
  membersCount: number;
  coverImageUrl: string;
  memberPreviewUrls: string[];
}

const suggestedGroupsData: GroupSuggestion[] = [
  {
    id: 'group1',
    name: 'Mad Men (MADdicts)',
    membersCount: 6195,
    coverImageUrl: 'https://picsum.photos/seed/group1cover/300/100',
    memberPreviewUrls: [
      'https://i.pravatar.cc/150?img=10',
      'https://i.pravatar.cc/150?img=11',
      'https://i.pravatar.cc/150?img=12',
    ],
  },
  {
    id: 'group2',
    name: 'Dexter Morgan Fan Club',
    membersCount: 6984,
    coverImageUrl: 'https://picsum.photos/seed/group2cover/300/100',
    memberPreviewUrls: [
      'https://i.pravatar.cc/150?img=13',
      'https://i.pravatar.cc/150?img=14',
    ],
  },
  {
    id: 'group3',
    name: 'React Developers Community',
    membersCount: 12500,
    coverImageUrl: 'https://picsum.photos/seed/group3cover/300/100',
    memberPreviewUrls: [
      'https://i.pravatar.cc/150?img=15',
      'https://i.pravatar.cc/150?img=16',
      'https://i.pravatar.cc/150?img=17',
      'https://i.pravatar.cc/150?img=18',
    ],
  },
];

interface SuggestedGroupsProps {
  className?: string;
}

const SuggestedGroups: React.FC<SuggestedGroupsProps> = ({ className }) => {
  const [groups, setGroups] = React.useState<GroupSuggestion[]>(suggestedGroupsData);

  const handleDismiss = (groupId: string) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId));
  };

  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold text-primaryText">Suggested Groups</CardTitle>
        <Button variant="link" className="text-sm text-primary h-auto p-0">See All</Button>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
        {groups.map((group) => (
          <div key={group.id} className="border border-border rounded-lg overflow-hidden relative group/item">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-1 right-1 w-7 h-7 z-10 text-secondaryText hover:bg-black/20 hover:text-white bg-black/10 opacity-0 group-hover/item:opacity-100 transition-opacity"
              onClick={() => handleDismiss(group.id)}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="relative h-24 bg-muted overflow-hidden">
              <img 
                src={group.coverImageUrl} 
                alt={`${group.name} cover`} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-105"
              />
              <div className="absolute bottom-2 left-2 flex -space-x-1.5">
                {group.memberPreviewUrls.slice(0, 4).map((url, index) => (
                  <Avatar key={index} className="w-6 h-6 border-2 border-card">
                    <AvatarImage src={url} />
                    <AvatarFallback><Users className="w-3 h-3"/></AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-semibold text-sm text-primaryText truncate">{group.name}</h4>
              <p className="text-xs text-secondaryText">{group.membersCount.toLocaleString()} members</p>
              <Button variant="outline" size="sm" className="w-full mt-2 text-sm">
                <Plus className="mr-1.5 h-4 w-4" /> Join
              </Button>
            </div>
          </div>
        ))}
        {groups.length === 0 && (
            <p className="text-sm text-secondaryText text-center py-4">No group suggestions at the moment.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default SuggestedGroups;
