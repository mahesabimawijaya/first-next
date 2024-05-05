import Link from "next/link";

function Experience() {
  return (
    <div id="experiences" className="flex-col mt-5">
      <p className="text-[#082F49] font-semibold text-2xl mb-4">PROJECTS</p>
      <div id="ex-1" className="flex space-x-5 mb-5">
        <div id="ex-left" className=" w-40 h-auto">
          <p className="text-sm font-semibold text-[#848C90]">MARCH 2024</p>
          <p className="text-sm font-semibold text-[#848C90]">PURWADHIKA DIGITAL TECHNOLOGY SCHOOL</p>
        </div>
        <div id="ex-right">
          <p className="text-[#2A7DA2] font-semibold mb-2">PALUGADA STORE</p>
          <ul className="list-disc text-[15px] mb-2">
            <li>Product Search, Filter, Sort, and Pagination</li>
            <li>Product List</li>
            <li>Product CRUD</li>
            <li>Product Category CRUD</li>
            <li>Stock Mutation</li>
            <li>Stock Report</li>
            <li>Sales Report</li>
          </ul>
          <div className="bg-[#082F49] text-white inline-block px-2 py-1 rounded-md">
            <Link href={"https://github.com/purwadhikafullstack/JCWDOL012-04"}>Github</Link>
          </div>
        </div>
      </div>
      <div id="ex-1" className="flex space-x-5 mb-5">
        <div id="ex-left" className=" w-40 h-auto">
          <p className="text-sm font-semibold text-[#848C90]">JANUARY 2024</p>
          <p className="text-sm font-semibold text-[#848C90]">PURWADHIKA DIGITAL TECHNOLOGY SCHOOL</p>
        </div>
        <div id="ex-right">
          <p className="text-[#2A7DA2] font-semibold mb-2">UNIFY</p>
          <ul className="list-disc text-[15px] mb-2">
            <li>Event Search, Filter, Sort, and Pagination</li>
            <li>Event List</li>
            <li>Event CRUD</li>
            <li>Event Discount & Promotion</li>
            <li>Event Reviews and Ratings</li>
            <li>Landing Page</li>
          </ul>
          <div className="bg-[#082F49] text-white inline-block px-2 py-1 rounded-md">
            <Link href={"https://github.com/mahesabimawijaya/event-management-platform"}>Github</Link>
          </div>
        </div>
      </div>
      <div id="ex-1" className="flex space-x-5 mb-5">
        <div id="ex-left" className=" w-40 h-auto">
          <p className="text-sm font-semibold text-[#848C90]">NOVEMBER 2023</p>
          <p className="text-sm font-semibold text-[#848C90]">PURWADHIKA DIGITAL TECHNOLOGY SCHOOL</p>
        </div>
        <div id="ex-right">
          <p className="text-[#2A7DA2] font-semibold mb-2">ASABA INNOTECH</p>
          <ul className="list-disc text-[15px] mb-2">
            <li>Landing Page</li>
            <li>About Page</li>
            <li>Product & Services Page</li>
            <li>Teams Page</li>
          </ul>
          <div className="flex items-center space-x-5">
            <div className="bg-[#082F49] text-white inline-block px-2 py-1 rounded-md">
              <Link href={"https://github.com/mahesabimawijaya/code-challange-2"}>Github</Link>
            </div>
            <div className="bg-[#2A7DA2] text-white inline-block px-2 py-1 rounded-md">
              <Link href={"https://code-challange-2.vercel.app/"}>Live</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
