import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PetPet</title>
      </Head>
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        teste
      </main>
    </div>
  );
}
