import dynamic from 'next/dynamic';
const Carousel = dynamic(() => import('../components/carousel'));
const WhyRestoCare = dynamic(() => import('@/components/whyrestocare'), { ssr: true });
const HowItWorks = dynamic(() => import('@/components/howitworks'), { ssr: true });
const Testimonial = dynamic(() => import('@/components/testimonial'));
const Faq = dynamic(() => import('@/components/faq'));
const Blog = dynamic(() => import('@/components/blog'), { ssr: true });
import { LetsTalk } from '@/components/letstalk';
import { NeedSupport } from '@/components/needsupport';

export default function Home() {
  return (
    <>
      <Carousel />
      <WhyRestoCare />
      <HowItWorks />
      <Testimonial />
      <Faq />
      <Blog />
      <LetsTalk />
      <NeedSupport />
    </>
  );
}
