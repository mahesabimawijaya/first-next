function Experience() {
  return (
    <div id="experiences" className="flex-col mt-5">
      <p className="text-[#082F49] font-semibold text-2xl mb-4">EXPERIENCES</p>
      <div id="ex-1" className="flex mb-5">
        <div id="ex-left" className=" w-44 h-auto">
          <p className="text-sm font-semibold text-[#848C90]">
            OCTOBER 2023 - PRESENT
          </p>
          <p className="text-sm font-semibold text-[#848C90]">
            PT. PURWADHIKA KIRANA NUSANTARA
          </p>
        </div>
        <div id="ex-right">
          <p className="text-[#2A7DA2] font-semibold mb-2">
            WEB DEVELOPMENT STUDENT
          </p>
          <ul className="list-disc text-[15px]">
            <li>Build Advanced Website using Vanilla JS (Hello World)</li>
            <li>Do Code Challange on LeetCode</li>
            <li>A good student 😁</li>
          </ul>
        </div>
      </div>
      <div id="ex-2" className="flex">
        <div id="ex-left" className=" w-52 h-auto">
          <p className="text-sm font-semibold text-[#848C90]">
            AUGUST 2021 - FOR GOOD
          </p>
          <p className="text-sm font-semibold text-[#848C90]">
            UNIVERSITAS SULTAN AGENG TIRTAYASA
          </p>
        </div>
        <div id="ex-right">
          <p className="text-[#2A7DA2] font-semibold mb-2">
            INFORMATICS ENGINEERING STUDENT
          </p>
          <ul className="list-disc text-[15px]">
            <li>
              Build Relational Insurance CRUD Website Using PHPMyAdmin and PHP
            </li>
            <li>Build Cafe Order App using java (no i didn&apos;t)</li>
            <li>A Drop Out Student 😞</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
