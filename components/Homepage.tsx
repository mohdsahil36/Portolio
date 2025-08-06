import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Socials, Contact } from "@/data/data";

export default function Homepage() {
  return (
    <>
      <div className="mt-8 md:mt-12">
        <h1
          className="text-4xl md:text-[2.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-l from-blue-400 via-teal-400 via-cyan-400 via-green-400 to-blue-400 via-red-400 via-pink-400"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradientMove 3s ease infinite",
            backgroundImage:
              "linear-gradient(to left, #60a5fa, #2dd4bf, #22d3ee, #4ade80, #60a5fa)",
          }}
        >
          Mohd Sahil Siddiqui
          <style>
            {`
          @keyframes gradientMove {
            0% { background-position: 100% 50%; }
            50% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
          </style>
        </h1>
        <p className="mt-8 tracking-wider text-base md:text-xl leading-8 md:leading-10">
          {" "}
          A frontend developer passionate about crafting rich and seamless web
          experiences. Currently working as a Software Engineer (React) at{" "}
          <Link
            href="https://www.simplify3x.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline underline-offset-6 decoration-gray-700 decoration-2">
              Simplify3X
            </span>
          </Link>
        </p>
        <div className="mt-6 grid grid-flow-row gap-y-4">
          {Contact.map((item) => (
            <div className="flex items-center gap-x-3" key={item.index}>
              <span className="bg-gray-600 p-1.5 rounded-md">{item.icon}</span>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 text-neutral-300 text-sm"
              >
                {item.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-2xl font-semibold mt-10">Presence</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4 mt-3 md:mt-6">
        {Socials.map((item) => (
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item.name}
          >
            <div className="border border-stone-900 flex justify-between p-5 cursor-pointers rounded-sm">
              <div className="grid grid-flow-col gap-x-3">
                <Image
                  src={item.icon}
                  alt="social-icon"
                  height={50}
                  width={50}
                  className="pe-0 rounded-md"
                />
                <div className="grid grid-flow-row gap-y-0.5 mt-0.5">
                  <span className="text-sm font-semibold">{item.name}</span>
                  <span className="text-sm text-neutral-600">
                    {item.username}
                  </span>
                </div>
              </div>
              <FiArrowUpRight />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
