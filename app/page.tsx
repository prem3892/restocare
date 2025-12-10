const Navbar = dynamic(() => import('../components/header'), { ssr: true });
const Carousel = dynamic(() => import('../components/carousel'));
const WhyRestoCare = dynamic(() => import('@/components/whyrestocare'), { ssr: true });
const HowItWorks = dynamic(() => import('@/components/howitworks'), { ssr: true });
const Testimonial = dynamic(() => import('@/components/testimonial'));
const Faq = dynamic(() => import('@/components/faq'));
const Blog = dynamic(() => import('@/components/blog'), { ssr: true });
const Subfooter = dynamic(() => import('@/components/subfooter'), { ssr: true });
import { OurCompany } from '@/components/ourcompany';
import { LetsTalk } from '@/components/letstalk';
import { OurClients } from '@/components/ourclients';
import { NeedSupport } from '@/components/needsupport';
import Video from '@/components/video';
import dynamic from 'next/dynamic';
import Offer from '@/components/offer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <WhyRestoCare />
      <HowItWorks />
      <Video />
      <Testimonial />
      <Faq />
      <Blog />
      <NeedSupport />
      <Subfooter />
      <OurCompany />
      <LetsTalk />
      <OurClients />
      <Offer />
    </>
  );
}
