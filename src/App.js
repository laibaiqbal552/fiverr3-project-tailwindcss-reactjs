import React from "react";
import profileImg from "./images/1.png";
import barlines from "./images/bars.png";
import headerLine from "./images/headerLine.png";
import { FaStar, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import bars2 from "./images/bars2.png";
const App = () => {
  return (
    <div className=" relative max-w-4xl mx-auto pt-16 px-4">
      <div className="  w-full lg:mb-28 md:mb-20 mb-8">
        <div className="bg-primary max-w-[500px] w-full h-[70px]  lg:flex hidden justify-center items-center absolute -rotate-90 rounded-b-[40px] -left-[290px] top-[32rem]">
          <p className="font-extrabold text-3xl">WORK INVOLVEMENT</p>
        </div>
        <div className="bg-black text-primary max-w-[500px] w-full h-[70px]  lg:flex hidden justify-center items-center absolute -rotate-90 rounded-t-[40px] -right-[290px] top-52">
          <p className="font-extrabold text-3xl">MY PROFILE</p>
        </div>
        <div className="flex md:flex-nowrap flex-wrap gap-4 max-w-7xl mx-auto ">
          <div className="flex justify-center">
            <img
              src={profileImg}
              alt="profileImg"
              className="max-w-[280px] object-contain"
            />
          </div>

          <div className="flex gap-4 col-span-2">
            <div className="">
              <img
                src={headerLine}
                alt="headerLine"
                className="max-w-[100px] h-[150px] "
              />
            </div>
            <div className="mb-6 ">
              <h1 className="md:text-4xl  text-3xl font-bold">ALICE WHITNES</h1>
              <h2 className="md:text-2xl text-xl font-bold mb-4">
                VISUAL DESIGNER
              </h2>

              <p className="text-xl font-bold">PROFILE</p>
              <p className="max-w-2xl">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps over the lazy
                dog. The quick brown fox jumps over the lazy dog. The quick
                brown fox jumps over the lazy dog. The quick brown fox jumps
                over the lazy dog. The quick brown fox jumps over the lazy dog.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* tabel */}

      <table className="lg:mb-40 md:mb-32 mb-28">
        <tr>
          <td className="relative">
            <div className="container-timeline2 md:pr-7 pr-3 md:py-7 py-3">
              <h2 className="sm:text-2xl text-lg font-bold text-dark">
                2000 <span className="mx-2">-</span>2002
              </h2>
              <p className="md:text-base text-sm">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps
              </p>
            </div>
          </td>
          <td className="relative">
            <div className="md:pl-7 pl-3 md:py-7 py-3 container-timeline3">
              <h2 className="sm:text-2xl text-lg font-bold text-dark">
                2000 <span className="mx-2">-</span>2002
              </h2>
              <p className="md:text-base text-sm">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td className="relative">
            <div className="container-timeline2 md:pr-7 pr-3 md:py-7 py-3">
              <p className="md:text-base text-sm">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps
              </p>
              <div>
                <img src={bars2} alt="border" className="w-full" />
              </div>
              <h2 className="sm:text-2xl text-lg font-bold text-dark">
                2000 <span className="mx-2">-</span>2002
              </h2>
              <p className="md:text-base text-sm">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps
              </p>
            </div>
          </td>
          <td className="relative">
            <div className="md:pl-7 pl-3 md:py-7 py-3 container-timeline3">
              <p className="md:text-base text-sm">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps
              </p>
              <div>
                <img src={bars2} alt="border" className="w-full" />
              </div>
              <h2 className="sm:text-2xl text-lg font-bold text-dark">
                2000 <span className="mx-2">-</span>2002
              </h2>
              <p className="md:text-base text-sm">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="md:pr-7 pr-3 md:py-7 py-3">
              <p>
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps
              </p>
            </div>
          </td>
          <td className="relative">
            <div className="md:pl-7 pl-3 md:py-7 py-3 container-timeline4">
              <p className="">
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps
              </p>
            </div>
          </td>
        </tr>
      </table>

      <div className="relative mt-16">
        <div className=" absolute sm:left-[70px] left-16 -top-16 z-0 sm:max-w-[250px] max-w-[200px]  w-full min-h-[70px] flex justify-center rounded-tl-[400px]  items-center bg-black text-primary">
          <p className="font-bold text-2xl uppercase">skills</p>
        </div>
        <div className="bg-primary  p-8 rounded-tl-[85px] relative z-10">
          <div className="grid sm:grid-cols-4 grid-cols-1 mb-7">
            {skills.map(({ id, name, icon }) => {
              return (
                <div key={id} className="mb-5">
                  <h4 className="text-center mb-1 md:text-xl text-lg">
                    {name}
                  </h4>
                  <div className="flex justify-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className="md:text-3xl sm:text-2xl text-3xl"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="md:mb-12 mb-8">
            <img src={barlines} alt="" className="min-h-[42px]" />
          </div>
          <div>
            <p className="font-bold text-xl mb-1">SITES</p>
            <p>The quick brown fox jumps over the lazy dog.</p>
            <p>The quick brown fox jumps over the lazy dog.</p>
            <ul className="md:grid-cols-3 grid grid-cols-1 gap-4 mt-5 ">
              {socials.map(({ id, icon, desc }) => {
                return (
                  <li key={id} className="flex gap-3 items-center">
                    <div className="text-2xl">{icon}</div>
                    <p className=" sm:text-base text-sm">{desc}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
const skills = [
  {
    id: 1,
    name: "GRAPHIC DESIGN",
    icon: <FaStar />,
  },
  {
    id: 2,
    name: "FLASH",
    icon: <FaStar />,
  },
  {
    id: 3,
    name: "ANIMATION",
    icon: <FaStar />,
  },

  {
    id: 4,
    name: "ILLUSTRATOR",
    icon: <FaStar />,
  },
];
const socials = [
  {
    id: 1,
    desc: `The quick brown the lazy dog.`,
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    desc: `The quick brown the lazy dog.`,
    icon: <FaTwitter />,
  },
  {
    id: 3,
    desc: `The quick brown the lazy dog.`,
    icon: <FaFacebook />,
  },
];
