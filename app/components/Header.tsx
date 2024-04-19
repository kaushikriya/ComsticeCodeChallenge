import { Button } from ".";
import Logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <div className="px-10 pt-10 flex justify-between items-center text-gray w-full h-10 bg-white">
      <div className="col-span-2">
        <Logo />
      </div>
      <div className="justify-center gap-4 col-span-4 hidden md:flex">
        <div>Solutions</div>
        <p>Use Cases</p>
        <p>About</p>
      </div>
      <div className="col-span-2 hidden md:flex">
        <Button title="Request Demo" />
      </div>
    </div>
  );
};
