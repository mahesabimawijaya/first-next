function Education() {
  return (
    <div id="education" className="flex-col px-5 mt-2 space-y-5">
      <p className="text-white font-semibold text-lg mb-5">EDUCATION</p>
      <div id="college" className="font-sans">
        <p className="text-[#03A9D8] text-sm font-semibold">2021-2077</p>
        <p className="text-white font-bold text-[16px] tracking-wider leading-6">
          Undergraduate Informatics Engineering Student
        </p>
        <p className="text-white text-[16px]">
          Sultan Ageng Tirtayasa University
        </p>
      </div>
      <div id="highschool" className="font-sans">
        <p className="text-[#03A9D8] text-sm font-semibold">2018-2021</p>
        <p className="text-white font-bold text-[16px] tracking-wider leading-6">
          Math Science
        </p>
        <p className="text-white text-[16px]">SMAN 1 Cikande</p>
      </div>
    </div>
  );
}

export default Education;
