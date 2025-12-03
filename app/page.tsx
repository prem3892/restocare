import { Carousel } from '../components/carousel';
import { Navbar } from '../components/header';

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="p-6">hello next app</div>
    </>
  );
}
