export default function ContactUs() {
  return (
    <div className="px-8 sm:px-16 py-12 bg-gray-100 mb-14">
      {/* Page Title */}
      <div>
        <h2 className="font-bold text-3xl pb-5">Contact US</h2>
      </div>

      {/* First Table: Company Information */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg mb-8">
        <table className="table table-zebra">
          {/* Table Head */}
          <thead className="bg-purple-color text-white">
            <tr>
              <th>Position</th>
              <th>Email</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {/* Row 1: Executive Manager */}
            <tr>
              <td>Executive Manager</td>
              <td>
                <a
                  href="mailto:dr.medhat@ashnan-med.com"
                  className="text-purple-600 hover:underline"
                >
                  dr.medhat@ashnan-med.com
                </a>
              </td>
            </tr>
            {/* Row 2: Customer Service */}
            <tr>
              <td>Customer Service</td>
              <td>
                <a
                  href="mailto:info@ashnan-med.com"
                  className="text-purple-600 hover:underline"
                >
                  info@ashnan-med.com
                </a>
              </td>
            </tr>
            {/* Row 3: Financial */}
            <tr>
              <td>Financial</td>
              <td>
                <a
                  href="mailto:accountant@ashnan-med.com"
                  className="text-purple-600 hover:underline"
                >
                  accountant@ashnan-med.com
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Second Table: Regional Contacts */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="table">
          {/* Table Head */}
          <thead className="bg-purple-color text-white">
            <tr>
              <th>Area</th>
              <th>Contact Person</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {/* Row 1: Central Area */}
            <tr>
              <td>Central Area</td>
              <td>Mr. Ahmed</td>
              <td>+966562779037</td>
              <td>
                <a
                  href="mailto:accountant@ashnan-med.com"
                  className="text-purple-600 hover:underline"
                >
                  accountant@ashnan-med.com
                </a>
              </td>
            </tr>
            {/* Row 2: Western Area */}
            <tr>
              <td>Western Area</td>
              <td>Dr. Mohamed</td>
              <td>+966564770991</td>
              <td>
                <a
                  href="mailto:dr.melrashedy@ashnan-med.com"
                  className="text-purple-600 hover:underline"
                >
                  dr.melrashedy@ashnan-med.com
                </a>
              </td>
            </tr>
            {/* Row 3: Quaseem Area */}
            <tr>
              <td>Quaseem Area</td>
              <td>Mohamed Bahjat</td>
              <td>+966547514511</td>
              <td>
                <a
                  href="mailto:Mbahgat@ashnan-med.com"
                  className="text-purple-600 hover:underline"
                >
                  Mbahgat@ashnan-med.com
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
