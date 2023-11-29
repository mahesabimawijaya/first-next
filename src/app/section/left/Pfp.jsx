function Pfp() {
  return (
    <div id="pfp-section" className="w-full flex-col h-auto pt-6">
      <img
        id="pfp"
        src="profile-ngotak.png"
        className="rounded-full w-52 mx-auto"
        alt=""
      />
      <p className="text-white text-center mt-4 font-sans font-semibold text-2xl">
        MAHESA BIMA
        <br />
        WIJAYA
      </p>
      <p className="text-white text-center mt-3 text-sm">
        WEB DEVELOPMENT STUDENT
      </p>
      <hr className="mt-6 w-10/12 mx-auto" />
    </div>
  );
}

export default Pfp;
