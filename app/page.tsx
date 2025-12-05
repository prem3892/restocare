import Testimonial from '@/components/testimonial';
import { Carousel } from '../components/carousel';
import { Navbar } from '../components/header';
import Faq from '@/components/faq';

export default function Home() {
  return (
    <>
      {/* <nav className="z-50 fixed top-0 w-screen"> */}
      <Navbar />
      {/* </nav> */}
      <Carousel />
      <Testimonial />
      <Faq />
      <div className="p-6">hello next app</div>
    </>
  );
}
