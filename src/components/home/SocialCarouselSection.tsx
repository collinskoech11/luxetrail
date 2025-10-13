import React from 'react';
import { cn } from '@/lib/utils';

const socialPosts = [
  {
    id: 1,
    platform: 'Twitter',
    content: 'Excited to announce our new partnership! #innovation #tech',
    author: '@Luxetrail',
  },
  {
    id: 2,
    platform: 'Instagram',
    content: 'Behind the scenes at our latest photoshoot. ✨ #worklife #creative',
    author: '@LuxetrailOfficial',
  },
  {
    id: 3,
    platform: 'LinkedIn',
    content: 'Our team is growing! Check out our career opportunities. #hiring #career',
    author: 'Luxetrail Inc.',
  },
  {
    id: 4,
    platform: 'Facebook',
    content: 'Join us for our upcoming webinar on digital marketing strategies. Link in bio! #webinar #marketing',
    author: 'Luxetrail',
  },
];

const SocialCarouselSection = () => {
  return (
    <div className="container mx-auto py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          What People Are Saying
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Stay updated with our latest news and community buzz.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {socialPosts.map((post) => (
          <div
            key={post.id}
            className={cn(
              "rounded-lg border bg-card text-card-foreground shadow-sm p-6 flex flex-col justify-between",
            )}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {post.platform}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {post.content}
              </p>
            </div>
            <p className="mt-4 text-sm font-bold text-indigo-600 dark:text-indigo-400">
              {post.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialCarouselSection;
