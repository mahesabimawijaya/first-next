import Contact from "./section/left/Contact";
import Education from "./section/left/Education";
import Languages from "./section/left/Languages";
import Pfp from "./section/left/Pfp";
import Experience from "./section/right/Experience";
import Profile from "./section/right/Profile";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div style={{ width: "1000px" }} className="bg-white mt-12 flex h-auto" id="main-container">
        <div className="w-1/3 bg-sky-950 h-full flex-col pb-8" id="left">
          <Pfp />
          <Contact />
          <Education />
          <Languages />
        </div>
        <div className="w-2/3 flex-col p-10" id="right">
          <Profile />
          <Experience />
          <div id="skills" className="flex-col space-y-4">
            <div className="mb-4">
              <p className="text-[#082F49] text-2xl font-semibold mt-4">Skills</p>
            </div>
            <div className="flex space-x-10" id="skill1">
              <div className="w-28">
                <p className="text-[#848C99] font-semibold tracking-wide">HTML & CSS</p>
              </div>
              <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 my-2">
                <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="flex space-x-10" id="skill2">
              <div className="w-28">
                <p className="text-[#848C99] font-semibold tracking-wide">JAVASCRIPT</p>
              </div>
              <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 my-2">
                <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="flex space-x-10" id="skill2">
              <div className="w-28">
                <p className="text-[#848C99] font-semibold tracking-wide">REACT JS</p>
              </div>
              <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 my-2">
                <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style={{ width: "78%" }}></div>
              </div>
            </div>
            <div className="flex space-x-10" id="skill2">
              <div className="w-28">
                <p className="text-[#848C99] font-semibold tracking-wide">NEXT JS</p>
              </div>
              <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 my-2">
                <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style={{ width: "78%" }}></div>
              </div>
            </div>
            <div className="flex space-x-10" id="skill2">
              <div className="w-28">
                <p className="text-[#848C99] font-semibold tracking-wide">TYPESCRIPT</p>
              </div>
              <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 my-2">
                <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style={{ width: "50%" }}></div>
              </div>
            </div>
            <div className="flex space-x-10" id="skill2">
              <div className="w-28">
                <p className="text-[#848C99] font-semibold tracking-wide">NODE JS</p>
              </div>
              <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 my-2">
                <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style={{ width: "50%" }}></div>
              </div>
            </div>
            <div className="flex space-x-10" id="skill2">
              <div className="w-28">
                <p className="text-[#848C99] font-semibold tracking-wide">EXPRESS JS</p>
              </div>
              <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 my-2">
                <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className="flex space-x-10" id="skill2">
              <div className="w-28">
                <p className="text-[#848C99] font-semibold tracking-wide">TAILWIND CSS</p>
              </div>
              <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 my-2">
                <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="flex space-x-10" id="skill2">
              <div className="w-28">
                <p className="text-[#848C99] font-semibold tracking-wide">RDBMS & PRISMA ORM</p>
              </div>
              <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 my-2">
                <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="flex space-x-10" id="skill3">
              <div className="w-28">
                <p className="text-[#848C99] font-semibold tracking-wide">C & C++</p>
              </div>
              <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 my-2">
                <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style={{ width: "40%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
