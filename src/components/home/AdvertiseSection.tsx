import React from 'react';
import { cn } from '@/lib/utils';

const advertisingOptions = [
  {
    title: 'Banner Ads',
    description: 'Reach a wide audience with prominent banner placements.',
    price: 'Starting from Kes5000/month',
  },
  {
    title: 'Sponsored Content',
    description: 'Integrate your brand message seamlessly with our content.',
    price: 'Starting from Kes10000/post',
  },
  {
    title: 'Email Marketing',
    description: 'Directly engage with our subscribers through dedicated email campaigns.',
    price: 'Starting from Kes7500/campaign',
  },
  {
    title: 'Social Media Promotion',
    description: 'Amplify your reach across our social media channels.',
    price: 'Starting from Kes3000/post',
  },
];

const AdvertiseSection = () => {
  return (
    <div className="container mx-auto py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Advertise With Us
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Choose from a variety of advertising options to boost your brand visibility.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {advertisingOptions.map((option) => (
          <div
            key={option.title}
            className={cn(
              "rounded-lg border bg-card text-card-foreground shadow-sm p-6 flex flex-col justify-between",
            )}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {option.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {option.description}
              </p>
            </div>
            <p className="mt-4 text-lg font-bold text-indigo-600 dark:text-indigo-400">
              {option.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertiseSection;
