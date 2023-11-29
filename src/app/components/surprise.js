"use client";

const Surprise = () => {
  return (
    <button
      onClick={() => {
        const pfp = document
          .getElementById("pfp")
          .setAttribute(
            "src",
            "https://i1.sndcdn.com/artworks-XJdVplPCbvDvJlH7-jF9c4A-t500x500.jpg"
          );
      }}
      className="bg-white p-2 px-3 text-[#082F49] hover:opacity-80 duration-300 font-extrabold rounded"
    >
      CLICK FOR SURPRISE
    </button>
  );
};

export default Surprise;
