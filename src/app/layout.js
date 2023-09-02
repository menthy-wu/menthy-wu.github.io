/* eslint-disable camelcase */
/* eslint-disable new-cap */
import Navigation from "@/components/Navigation";
import "./globals.css";
import { Antic_Didone, Montserrat } from "next/font/google";

const anticDidone = Antic_Didone({
  subsets: ["latin"],
  variable: "--font-anticDidone",
  weight: ["400"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Menthy Wu",
  description: "Menthy Wu's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${anticDidone.variable} ${montserrat.variable}`}
    >
      <body>
        <div className="bg-custom-black w-full flex items-center justify-center">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
