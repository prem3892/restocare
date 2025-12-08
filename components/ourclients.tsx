import { OurClientData } from '@/variant/ourclient.variant';
import { Count } from './ui/count';

export const OurClients = () => {
  return (
    <div className="space-y-12 bg-gray-100 text-black">
      <section className="p-6 bg-gray-100">
        {/* matrix */}
        <div className="container grid justify-center grid-cols-1 gap-3 sm:gap-0 mx-auto text-center lg:grid-cols-3">
          {OurClientData.map((item, idx) => (
            <div className="flex flex-col justify-start m-2 lg:m-6" key={idx}>
              <p className="text-2xl font-bold leading-none lg:text-4xl text-[#C00404]">
                <Count end={item.value} />
                {item.label ? (item.label.includes('Years') ? '+' : '') : ''}
                {item.label ? (item.label.includes('Clients') ? '+' : '') : ''}
                {item.label ? (item.label.includes('Followers') ? 'K+' : '') : ''}
              </p>
              <p className="text-sm sm:text-base ">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
