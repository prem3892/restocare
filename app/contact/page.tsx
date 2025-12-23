import Letstalk from '@/components/letstalk';
import { Typography } from '@/typography/typography';

function contact() {
  return (
    <div>
      <div className="bg-gray-100 py-2 md:py-5">
        <Typography
          element="h1"
          text="Contact Us"
          className="text-2xl md:text-3xl font-bold text-center"
        />
      </div>
      <Letstalk />
    </div>
  );
}

export default contact;
