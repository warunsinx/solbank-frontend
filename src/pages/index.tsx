import InitAccount from "@/components/InitAccount";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} h-screen w-full bg-gray-800 flex flex-col`}
    >
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        <InitAccount />
      </div>
    </main>
  );
}
