'use client';

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const trainingPlans = [
  {
    name: "Beginner",
    description: "A beginner-friendly course to get you started.",
    monthlyPrice: 49,
    yearlyPrice: 499,
    features: [
      "Introduction to the platform",
      "Basic features walkthrough",
      "Community support",
    ],
    isRecommended: false,
  },
  {
    name: "Intermediate",
    description: "An intermediate course for users who want to level up their skills.",
    monthlyPrice: 99,
    yearlyPrice: 999,
    features: [
      "Advanced features and techniques",
      "Priority support",
      "1-on-1 sessions",
    ],
    isRecommended: true,
  },
  {
    name: "Advanced",
    description: "An advanced course for power users.",
    monthlyPrice: 149,
    yearlyPrice: 1499,
    features: [
      "In-depth platform mastery",
      "24/7 dedicated support",
      "Personalized training plan",
    ],
    isRecommended: false,
  },
];

export default function TrainingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="container mx-auto py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Our Training Programs
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Choose the program that best fits your needs and level up your skills.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center space-x-4">
          <Label htmlFor="billing-cycle" className="text-gray-600 dark:text-gray-300">
            Monthly
          </Label>
          <Switch
            id="billing-cycle"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <Label htmlFor="billing-cycle" className="text-gray-600 dark:text-gray-300">
            Yearly (2 months free)
          </Label>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {trainingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-3xl p-8 ring-1 ring-gray-200 dark:ring-gray-800",
                plan.isRecommended
                  ? "bg-gray-50 dark:bg-gray-900/50"
                  : "bg-white dark:bg-gray-950",
                "relative flex flex-col justify-between"
              )}
            >
              {plan.isRecommended && (
                <div className="absolute top-0 right-0 -mt-3 mr-3">
                  <div className="rounded-full bg-indigo-600 px-3 py-1 text-sm font-semibold text-white">
                    Recommended
                  </div>
                </div>
              )}
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Kes{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">
                    {isYearly ? "/year" : "/month"}
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className={cn(
                  "mt-8 w-full",
                  plan.isRecommended
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "bg-white text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:hover:ring-gray-600"
                )}
              >
                Enroll Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
