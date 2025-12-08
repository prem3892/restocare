import { LetsTalkData } from '@/variant/letstalk.variant';
import { ContactForm } from './contactform';

export const LetsTalk = () => {
  return (
    <div className="space-y-12 bg-gray-100 text-black">
      <div className="grid max-w-7xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        {/* let's talk section */}
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-[#C00404]">
              {LetsTalkData.heading}
            </h2>
            <div className="dark:text-gray-600">{LetsTalkData.subHeading}</div>
          </div>
          <img
            src={LetsTalkData.image}
            alt="Contact our customer support"
            className="p-6 h-52 md:h-64"
          />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
