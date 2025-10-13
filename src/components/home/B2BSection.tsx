import  BentoGrid  from "@/components/magicui/bento-grid";

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { BentoCard } from "../magicui/bento-card";

const features = [
  {
    Icon: FileTextIcon,
    name: "Enterprise Solutions",
    description: "Customized solutions for your business needs.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Integration Services",
    description: "Seamless integration with your existing systems.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: GlobeIcon,
    name: "Global Reach",
    description: "Expand your business to a global market.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:row-end-4 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: CalendarIcon,
    name: "24/7 Support",
    description: "Dedicated support to help you every step of the way.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-4 lg:row-end-5 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: BellIcon,
    name: "Priority Access",
    description: "Get priority access to new features and updates.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-4 lg:row-end-5 lg:col-start-2 lg:col-end-3",
  },
];

export default function B2BSection() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
