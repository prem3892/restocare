import { Typography } from '@/typography/typography';
import { HowItWorksData } from '@/variant/howitworks.variant';

export const HowItWorks = () => {
  return (
    <section>
      <header>
        <Typography text={HowItWorksData.heading} element="h2" />
        <Typography text={HowItWorksData.subHeading} element="h4" />
      </header>
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {HowItWorksData.process.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-6 shadow-sm hover:shadow-md transition-all bg-white"
          >
            <div className="flex flex-col items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black text-white shadow-md">
                {/* <Image src={item.icon} alt={item.title} className="w-8 h-8" /> */}
              </div>

              <h3 className="text-xl font-semibold">{item.processTitle}</h3>

              <p className="text-[15px] text-gray-600 leading-relaxed">{item.processInfo}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
