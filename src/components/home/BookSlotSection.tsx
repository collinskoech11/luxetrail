import React from 'react';
import { cn } from '@/lib/utils';

const BookSlotSection = () => {
  return (
    <div className="container mx-auto py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Book a Slot
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Schedule a meeting with our experts to discuss your needs.
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-md">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookSlotSection;
