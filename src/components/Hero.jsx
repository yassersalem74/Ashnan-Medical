export default function Hero() {
    return (
      <div className="relative h-[580px] md:h-[580px] lg:h-[580px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {/* Image for small screens */}
          <img
            src="/mobileCover.webp"
            alt="Hero Background"
            className="w-full h-full object-cover sm:hidden" // Show only on small screens
          />
          {/* Image for medium screens */}
          <img
            src="/mediumCover.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover hidden sm:block md:hidden" // Show only on medium screens
          />
          {/* Image for large screens */}
          <img
            src="/healthy-tooth.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover hidden md:block" // Show on medium and larger screens
          />
          {/* Purple Overlay */}
          <div className="absolute inset-0 bg-purple-color opacity-60"></div>
        </div>
  
        {/* Centered Quote */}
        <div className="relative z-10 text-center text-white max-w-2xl px-4">
          <h1 className="text-5xl font-bold mb-6">ASHNAN Medical EST.</h1>
          <p className="text-xl">
            Trading name under which the health care business operates in the Gulf
            Area and North Africa
          </p>
        </div>
      </div>
    );
  }