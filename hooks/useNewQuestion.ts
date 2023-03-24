import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRandomQuote } from "./useRandomQuote";

export const useNewQuestion = () => {
  const router = useRouter();
  const { refetch } = useRandomQuote();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isNewQuestion, setIsNewQuestion] = useState<boolean>(false);

  const getNewQuestion = async () => {
    setIsNewQuestion(true);
    await refetch();
    setIsSubmitted(false);
    router.refresh();
  };

  return {
    isSubmitted,
    setIsSubmitted,
    getNewQuestion,
    isNewQuestion,
    setIsNewQuestion,
  };
};
