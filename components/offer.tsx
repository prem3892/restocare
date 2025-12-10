'use client';

import { Typography } from '@/typography/typography';
import { OfferData } from '@/variant/offer.variant';

export default function Offer() {
  return (
    <section className="py-8 bg-white text-black">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
          <Typography
            element="h2"
            text="What can I offer to you?"
            className="text-lg font-bold leading-none sm:text-2xl"
          />

          <Typography
            element="p"
            text="Graeco causae vim cu, alii option ancillae sea ut. Ad mea alii pertinax, ei sed falli ponderum adipisci. Vis iisque scripta cu."
            className="px-2 md:px-8 my-4 text-md md:text-lg"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-4 p-4 md:p-8">
          {/* Offer Cards */}
          <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
            {OfferData.map((offer, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center space-y-3 md:items-start"
              >
                {offer.icon}

                <Typography element="h5" text={offer.title} className="text-xl font-semibold" />

                <Typography element="p" text={offer.content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
