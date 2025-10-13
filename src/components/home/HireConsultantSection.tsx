import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const consultants = [
  {
    name: 'John Doe',
    role: 'Business Consultant',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Consultant',
    avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
  },
  {
    name: 'Peter Jones',
    role: 'Financial Consultant',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
  {
    name: 'Sarah Williams',
    role: 'IT Consultant',
    avatar: 'https://randomuser.me/api/portraits/women/76.jpg',
  },
];

const HireConsultantSection = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Hire a Consultant
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Our expert consultants are here to help you with your business needs.
        </p>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {consultants.map((consultant) => (
            <div key={consultant.name} className="text-center">
              <Avatar className="mx-auto h-24 w-24">
                <AvatarImage src={consultant.avatar} alt={consultant.name} />
                <AvatarFallback>{consultant.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                {consultant.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">{consultant.role}</p>
            </div>
          ))}
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          '[mask-image:radial-gradient(ellipse_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12',
        )}
      />
    </div>
  );
};

export default HireConsultantSection;
