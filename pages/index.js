import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PetPet</title>
      </Head>
      <Header />
      <main className="flex bg-[#FFE867] flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Left Sidebar */}
        <Sidebar/>
        {/* Feed */}
        {/* Right Sidebar */}
      </main>
    </div>
  );
}
