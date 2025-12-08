'use client';

export default function Video() {
  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Video Section */}
        <div className="w-full h-full md:h-[450px] rounded-xl overflow-hidden">
          <video
            src="/RCReel.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full rounded-md"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Booking Process</h1>

          <p className="text-gray-600 leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel malesuada lorem.
            Suspendisse potenti.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow">
              Visit Website
            </button>

            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium shadow">
              Download App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
