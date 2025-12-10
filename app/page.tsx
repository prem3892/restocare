import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('../components/header'), { ssr: true });
const Carousel = dynamic(() => import('../components/carousel'));
const WhyRestoCare = dynamic(() => import('@/components/whyrestocare'), { ssr: true });
const HowItWorks = dynamic(() => import('@/components/howitworks'), { ssr: true });
const Testimonial = dynamic(() => import('@/components/testimonial'));
const Faq = dynamic(() => import('@/components/faq'));
const Blog = dynamic(() => import('@/components/blog'), { ssr: true });
const Subfooter = dynamic(() => import('@/components/subfooter'), { ssr: true });
import { LetsTalk } from '@/components/letstalk';
import { NeedSupport } from '@/components/needsupport';

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <WhyRestoCare />
      <HowItWorks />
      <Testimonial />
      <Faq />
      <Blog />
      <LetsTalk />
      <NeedSupport />
      <Subfooter />
    </>
  );
}
