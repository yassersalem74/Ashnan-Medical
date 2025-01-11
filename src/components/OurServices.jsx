export default function OurServices() {
  return (
    <div className="px-8 sm:px-16 py-12">
      <div>
        <h2 className="font-bold text-3xl pb-5">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="card bg-purple-color w-full shadow-xl text-white">
          <div className="card-body">
            <div className="w-16">
              <img src="/icons8-dental-treatment-50.png" alt="" />
            </div>
            <p className="pt-3">
              ASHNAN Medical EST. is a trading name for a healthcare business
              operating in the Gulf Area and North Africa.
            </p>
          </div>
        </div>

        <div className="card bg-purple-color w-full shadow-xl text-white">
          <div className="card-body">
            <div className="w-16">
              <img src="/icons8-earth-50.png" alt="" />
            </div>
            <p className="pt-3">
              Over the years, ASHNAN Medical EST has expanded its activities and
              product range to meet growing market demands.
            </p>
          </div>
        </div>

        <div className="card bg-purple-color w-full shadow-xl text-white">
          <div className="card-body">
            <div className="w-16">
              <img src="/icons8-medicine-50 (1).png" alt="" />
            </div>
            <p className="pt-3">
              The distributed products cover all trading needs, from top-end
              medical instruments to advanced dental equipment.
            </p>
          </div>
        </div>

        <div className="card bg-purple-color w-full shadow-xl text-white">
          <div className="card-body">
            <div className="w-16">
              <img src="/icons8-doctor-50.png" alt="" />
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
