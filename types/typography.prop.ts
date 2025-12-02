import { JSX } from 'react';

export type TypographyProp<T extends keyof JSX.IntrinsicElements> = {
  element: T;
  text?: string | number;
  className?: string;
} & Omit<JSX.IntrinsicElements[T], 'className' | 'children'>;
