export default function PartnersSection() {
  const partners = [
    {
      link: "https://www.hansonmedical.com/",
      image: "hanson-medical-logo.png",
      title: "Hanson Medical",
    },
    {
      link: "https://dline.ee/",
      image: "dline.svg",
      title: "dLine",
    },
    {
      link: "https://www.unicarebiomedical.com/",
      image: "unicare-biomedical.svg",
      title: "UNICARE BIOMEDICAL",
    },
    {
      link: "https://www.sanctuary-dental.com/",
      image: "Sanctuary-logo.png",
      title: "Sanctuary",
    },
    {
      link: "http://www.neosil.co.kr/?lang=e&ckattempt=2",
      image: "neosil.png",
      title: "neosil",
    },
    {
      link: "https://planbdental.com/",
      image: "planbdental.webp",
      title: "PlanB Dental",
    },
    {
      link: "https://www.dencodent.com/",
      image: "dencodent.png",
      title: "Dencodent",
    },
    {
      link: "https://www.dentonics.com/",
      image: "dentonics.png",
      title: "Dentonics",
    },
    {
      link: "https://www.itldental.com/",
      image: "itldental.gif",
      title: "ITL DENTAL",
    },
    {
      link: "https://www.wiedent.com/",
      image: "wiedent.png",
      title: "Wiedent",
    },
  ];

  return (
    <div className="px-8 sm:px-16 py-12">
      <div>
        <h2 className="font-bold text-3xl pb-5">Our Partners</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {partners.map((partner, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src={partner.image}
                alt={partner.title}
                className="w-full h-36 object-contain" // Ensures all images have the same width and height
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg">{partner.title}</h2>
              <div className="card-actions justify-end">
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary bg-purple-color text-white hover:bg-purple-color border-none"
                >
                  Visit now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
