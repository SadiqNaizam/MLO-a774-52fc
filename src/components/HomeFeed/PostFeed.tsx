import React from 'react';
import { cn } from '@/lib/utils';
import PostCard, { Post } from './PostCard'; // Assuming PostCard exports Post type

// Define dummy data directly in the component
const postsData: Post[] = [
  {
    id: 'post1',
    user: {
      name: 'Julia Fillory',
      avatarUrl: 'https://i.pravatar.cc/150?img=6',
    },
    timestamp: '2 hrs ago',
    content: 'Checking out some new stores downtown! The vibe is amazing and I found a couple of hidden gems. Highly recommend exploring the area. 🛍️✨',
    mediaUrl: 'https://picsum.photos/seed/post1/600/400',
    mediaType: 'image' as const,
    location: 'Raleigh, North Carolina',
    likes: 125,
    commentsCount: 12,
    sharesCount: 5,
  },
  {
    id: 'post2',
    user: {
      name: 'Alex Chen',
      avatarUrl: 'https://i.pravatar.cc/150?img=7',
    },
    timestamp: '5 hrs ago',
    content: 'Just finished a great book! "The Midnight Library" by Matt Haig. Such a thought-provoking read. What are you all reading these days? 📚',
    mediaUrl: null,
    mediaType: null,
    location: null,
    likes: 88,
    commentsCount: 23,
    sharesCount: 2,
  },
  {
    id: 'post3',
    user: {
      name: 'Samantha Bee',
      avatarUrl: 'https://i.pravatar.cc/150?img=8',
    },
    timestamp: '1 day ago',
    content: 'Beautiful sunset hike today! Nature is the best therapy. 🌅⛰️ Who else loves spending time outdoors?',
    mediaUrl: 'https://picsum.photos/seed/post3/600/400',
    mediaType: 'image' as const,
    location: 'Mountain View Trail',
    likes: 230,
    commentsCount: 45,
    sharesCount: 15,
  },
];

interface PostFeedProps {
  className?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ className }) => {
  const [posts, setPosts] = React.useState<Post[]>(postsData);

  // Example: function to add a new post (could be triggered by a different component)
  // const addPost = (newPost: Post) => {
  //   setPosts(prevPosts => [newPost, ...prevPosts]);
  // };

  return (
    <div className={cn('space-y-6', className)}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
