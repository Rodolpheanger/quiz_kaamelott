import { RandomQuote } from "./RandomQuote";
import { ChoicesForm } from "./ChoicesForm";

export default function Quiz() {
  return (
    <main className="flex items-center justify-center min-h-screen overflow-x-hidden">
      <div className="flex flex-col items-center justify-evenly p-5 lg:w-3/4 bg-white/75 min-h-[75vh] md:py-12">
        <RandomQuote />
        <ChoicesForm />
      </div>
    </main>
  );
}
