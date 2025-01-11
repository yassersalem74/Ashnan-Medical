export default function AboutUs() {
  return (
    <div className="px-8 sm:px-16 py-12 bg-gray-100 flex flex-col lg:flex-row items-baseline gap-9">
      {/* Section Title */}
      <div className="flex flex-col items-start h-full w-full lg:w-3/5 gap-12">
        <div>
          <h2 className="font-bold text-4xl pb-2">About Us</h2>
        </div>
        <div>
          <p className="text-gray-600 text-justify">
            ASHNAN Medical EST. is a trading name under which the health care
            business operates in the Gulf Area and North Africa. ASHNAN Medical
            EST has been expanding its activities over this year and its range
            of products The range of product being distributed is extensive
            enough to cover all the needs of a trading company from top end
            medical product/instrument to top end dental product/instrument.
            ASHNAN Medical EST has a dynamic group of personnel and a staff of
            which are fully trained medical representative. We Are Your Partner
            in Business.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col gap-5 w-full lg:w-2/5">
        {/* Card 1 */}
        <div className="card bg-purple-color w-full shadow-xl text-white">
          <div className="card-body flex-col items-start sm:flex-row sm:items-center">
            <div className="w-32">
              <img
                src="/icons8-dental-treatment-50.png"
                alt="Dental Treatment"
              />
            </div>
            <p className="pt-3">
              ASHNAN Medical EST. is a trading name for a healthcare business
              operating in the Gulf Area and North Africa.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-purple-color w-full shadow-xl text-white">
          <div className="card-body flex-col items-start sm:flex-row sm:items-center">
            <div className="w-32">
              <img src="/icons8-earth-50.png" alt="Global Reach" />
            </div>
            <p className="pt-3">
              Over the years, ASHNAN Medical EST has expanded its activities and
              product range to meet growing market demands.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-purple-color w-full shadow-xl text-white">
          <div className="card-body flex-col items-start sm:flex-row sm:items-center">
            <div className="w-32">
              <img src="/icons8-medicine-50 (1).png" alt="Medical Equipment" />
            </div>
            <p className="pt-3">
              The distributed products cover all trading needs, from top-end
              medical instruments to advanced dental equipment.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-purple-color w-full shadow-xl text-white">
          <div className="card-body flex-col items-start sm:flex-row sm:items-center">
            <div className="w-32">
              <img src="/icons8-doctor-50.png" alt="Professional Team" />
            </div>
            <p className="pt-3">
              ASHNAN Medical EST has a dynamic team, including fully trained
              medical representatives, making us your trusted business partner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
