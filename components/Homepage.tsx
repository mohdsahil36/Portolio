import Link from "next/link";

export default function Homepage() {
  return (
    <div className="mt-8 md:mt-12">
      <h1
        className="text-4xl md:text-[2.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-l from-blue-400 via-teal-400 via-cyan-400 via-green-400 to-blue-400 via-red via-pink-400"
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
    </div>
  );
}
