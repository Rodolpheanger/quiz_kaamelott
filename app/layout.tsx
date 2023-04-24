import "./globals.css";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Quiz Kaamelott",
  description:
    "Vous aimez Kaamelott ? Voici un petit quiz de citations sans prétentions ! 'Ouais c'est pas faux !' ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-fixed bg-center bg-cover bg-main-bg">
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
