import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and ensures Tailwind classes
 * merge properly using tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Scrolls to an element with the given ID with smooth scrolling
 */
export function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Creates a smooth scroll link that works with both hash links and full URLs
 */
export function smoothScrollTo(target: string) {
  // Handle hash links
  if (target.startsWith('#')) {
    const element = document.getElementById(target.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return true;
    }
    return false;
  }
  return false;
}
