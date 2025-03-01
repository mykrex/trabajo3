import Image from "next/image";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-10">
        <Navigation/>
        <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center">
            <h1 className="text-4xl font-bold">  </h1>
         </main>
    </div>
  );
}
