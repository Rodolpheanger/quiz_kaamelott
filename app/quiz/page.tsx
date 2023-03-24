import { RandomQuote } from "~/app/quiz/RandomQuote";
import { ChoicesForm } from "./ChoicesForm";

export default function Quiz() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="p-5 sm:w-3/4 bg-white/75 h-fit">
        <RandomQuote />
        <ChoicesForm />
      </div>
    </main>
  );
}
