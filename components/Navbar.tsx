import Navlink from "./Navlink";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center sticky top-0 z-50 backdrop-blur-md">
      <Navlink href="/">
        <span className="font-normal text-base md:text-lg tracking-[1px] text-gray-300 hover:text-white cursor-pointer transition-all ease-in-out delay-150 duration-200">
          sahil.fyi
        </span>
      </Navlink>
      <div className="flex gap-x-6 items-center">
        <Navlink href="/" exact>
          Home
        </Navlink>
        <Navlink href="/about">About</Navlink>
        <Navlink href="/career">Work</Navlink>
      </div>
    </nav>
  );
}
