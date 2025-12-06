import { Carousel } from '../components/carousel';
import { Navbar } from '../components/header';
import { WhyRestoCare } from '@/components/whyrestocare';
import { HowItWorks } from '@/components/howitworks';

export default function Home() {
  return (
    <>
      {/* <nav className="z-50 fixed top-0 w-screen"> */}
      <Navbar />
      {/* </nav> */}
      <Carousel />
      <WhyRestoCare />
      <HowItWorks />
      {/* <Testimonial /> */}
      <div className="p-6">hello next app</div>
    </>
  );
}
