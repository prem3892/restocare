import { OurCompanyData } from '@/variant/ourcompany.variant';

export const OurCompany = () => {
  return (
    <div className="space-y-12 dark:bg-gray-100 dark:text-black">
      {/* our company page */}
      <section>
        <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            <span className="dark:text-[#C00404]">{OurCompanyData.headingP1}</span>
            {OurCompanyData.headingP2}
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">{OurCompanyData.subHeading}</p>
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-[#C00404] dark:text-gray-50 cursor-pointer">
              {OurCompanyData.button1}
            </button>
            <button
              className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dar
            k:border-[#C00404] cursor-pointer"
            >
              {OurCompanyData.button2}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
