import Navbar from '@/components/header';
import HowItWorks from '@/components/howitworks';
import { NeedSupport } from '@/components/needsupport';
import Subfooter from '@/components/subfooter';
import Video from '@/components/video';

const page = () => {
  return (
    <>
      <Navbar />
      <HowItWorks />
      <Video />
      <NeedSupport />
      <Subfooter />
    </>
  );
};

export default page;
