import { TypographyProp } from '@/types/typography.prop';
import React, { JSX } from 'react';

export function Typography<T extends keyof JSX.IntrinsicElements>({
  element,
  text,
  className,
  ...rest
}: TypographyProp<T>) {
  return React.createElement(element, { className, ...rest }, text);
}
