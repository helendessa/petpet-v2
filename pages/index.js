import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import RightSidebar from "../components/RightSidebar";
import { getSession } from "next-auth/react";
import Feed from "../components/Feed";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>PetPet</title>
      </Head>
      <Header />
      <main className="flex bg-[#FFE867]">
        {/* Left Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Right Sidebar */}
        <RightSidebar />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}