import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, ThumbsUp, MessageCircle, Share2, MapPin, Bookmark, UserX, Flag, EyeOff } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export interface User {
  name: string;
  avatarUrl: string;
}

export interface Post {
  id: string;
  user: User;
  timestamp: string;
  content: string;
  mediaUrl?: string | null;
  mediaType?: 'image' | 'video' | null;
  location?: string | null;
  likes: number;
  commentsCount: number;
  sharesCount: number;
}

interface PostCardProps {
  post: Post;
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, className }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(post.likes);

  const handleLike = React.useCallback(() => {
    setIsLiked(prev => !prev);
    setLikeCount(prev => isLiked ? prev -1 : prev + 1);
  }, [isLiked]);

  return (
    <Card className={cn('w-full shadow-md', className)}>
      <CardHeader className="flex flex-row items-start space-x-3 p-4">
        <Avatar className="w-10 h-10 border">
          <AvatarImage src={post.user.avatarUrl} alt={post.user.name} />
          <AvatarFallback>{post.user.name.substring(0, 1)}</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <p className="font-semibold text-primaryText">{post.user.name}</p>
          <p className="text-xs text-secondaryText">{post.timestamp}
            {post.location && (
                <span className='inline-flex items-center'>
                    <span className='mx-1'>•</span> 
                    {post.location}
                </span>
            )}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-secondaryText hover:bg-accent">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem><Bookmark className="mr-2 h-4 w-4" /> Save Post</DropdownMenuItem>
            <DropdownMenuItem><EyeOff className="mr-2 h-4 w-4" /> Hide Post</DropdownMenuItem>
            <DropdownMenuItem><Flag className="mr-2 h-4 w-4" /> Report Post</DropdownMenuItem>
            <DropdownMenuItem><UserX className="mr-2 h-4 w-4" /> Unfollow {post.user.name}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-primaryText mb-3 whitespace-pre-line">{post.content}</p>
        {post.mediaUrl && post.mediaType === 'image' && (
          <div className="rounded-lg overflow-hidden border border-border mb-3">
            <AspectRatio ratio={16 / 9}>
              <img src={post.mediaUrl} alt="Post media" className="object-cover w-full h-full" />
            </AspectRatio>
          </div>
        )}
        {/* Add video player here if mediaType is 'video' */}
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 pt-0">
        {(likeCount > 0 || post.commentsCount > 0 || post.sharesCount > 0) && (
             <div className="flex items-center space-x-4 text-xs text-secondaryText mb-2 w-full">
                {likeCount > 0 && <span>{likeCount} Likes</span>}
                {post.commentsCount > 0 && <span>{post.commentsCount} Comments</span>}
                {post.sharesCount > 0 && <span>{post.sharesCount} Shares</span>}
             </div>
        )}
        <div className="flex justify-around w-full pt-2 border-t border-border">
          <Button variant="ghost" className={cn('w-full text-secondaryText hover:bg-accent', isLiked && 'text-primary')} onClick={handleLike}>
            <ThumbsUp className={cn('mr-2 h-5 w-5', isLiked ? 'fill-primary' : '')} /> Like
          </Button>
          <Button variant="ghost" className="w-full text-secondaryText hover:bg-accent">
            <MessageCircle className="mr-2 h-5 w-5" /> Comment
          </Button>
          <Button variant="ghost" className="w-full text-secondaryText hover:bg-accent">
            <Share2 className="mr-2 h-5 w-5" /> Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
