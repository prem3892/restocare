import { Carousel } from '../components/carousel';
import { Navbar } from '../components/header';
import { WhyRestoCare } from '@/components/whyrestocare';
import { HowItWorks } from '@/components/howitworks';
import Testimonial from '@/components/testimonial';
import Faq from '@/components/faq';
import Blog from '@/components/blog';

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
      <div className="p-6">hello next app</div>
    </>
  );
}
