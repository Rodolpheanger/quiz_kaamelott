import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-wrap content-center justify-center min-h-screen text-center">
      <div className="flex-col content-between justify-center w-screen max-w-screen-md py-14 sm:p-14 bg-white/75 md:rounded-3xl">
        <h1 className="pb-6 mb-8 text-6xl font-folk sm:text-8xl sm:pt-6">
          Bienvenue Chevalier
        </h1>
        <Link
          href={"/quiz"}
          className="px-6 pt-4 pb-2 text-xl font-semibold bg-white border-2 border-gray-500 rounded-md sm:px-8 sm:pt-6 sm:pb-4 font-folk hover:bg-gray-200 sm:text-2xl "
        >
          Commencer le Quiz
        </Link>
      </div>
    </main>
  );
}
