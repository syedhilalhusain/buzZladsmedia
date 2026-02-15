import { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export interface MetricProps {
  label: string;
  value: string;
  description: string;
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
}
