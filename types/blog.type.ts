import { StaticImageData } from 'next/image';

export interface BlogType {
  img: string | StaticImageData;
  title: string;
  content: string;
  button: string;
  date: string;
}
