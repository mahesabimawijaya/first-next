"use client";

const Surprise = () => {
  return (
    <button
      onClick={() => {
        const pfp = document
          .getElementById("pfp")
          .setAttribute(
            "src",
            "https://media.tenor.com/o656qFKDzeUAAAAC/rick-astley-never-gonna-give-you-up.gif"
          );
      }}
      className="bg-white p-2 px-3 text-[#082F49] hover:opacity-80 duration-300 font-extrabold rounded"
    >
      CLICK FOR SURPRISE
    </button>
  );
};

export default Surprise;
