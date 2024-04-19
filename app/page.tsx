import Image from "next/image";
import { Dashboard } from "./components/Dashboard";

export default function Home() {
  return (
    <div className="text-gray min-h-screen w-screen overflow-y-scroll bg-white h-[100%]">
      <Dashboard />
    </div>
  );
}
