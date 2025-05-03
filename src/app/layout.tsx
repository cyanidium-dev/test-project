import type { Metadata } from "next";
import { Raleway } from 'next/font/google';
import localFont from 'next/font/local';
import "./globals.css";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const actayRegular = localFont({
  src: '../fonts/Actay-Regular.otf',
  display: 'swap',
  variable: '--font-actay-regular',
});

const actayRegularItalic = localFont({
  src: '../fonts/Actay-RegularItalic.otf',
  display: 'swap',
  variable: '--font-actay-regular-italic',
});

const actayCondensedThin = localFont({
  src: '../fonts/ActayCondensed-Thin.otf',
  display: 'swap',
  variable: '--font-actay-condensed-thin',
});

const actayCondensedThinItalic = localFont({
  src: '../fonts/ActayCondensed-ThinItalic.otf',
  display: 'swap',
  variable: '--font-actay-condensed-thin-italic',
});

const actayWideBold = localFont({
  src: '../fonts/ActayWide-Bold.otf',
  display: 'swap',
  variable: '--font-actay-wide-bold',
});

const actayWideBoldItalic = localFont({
  src: '../fonts/ActayWide-BoldItalic.otf',
  display: 'swap',
  variable: '--font-actay-wide-bold-italic',
});

export const metadata: Metadata = {
  title: "Cyanidium-dev",
  description: "Розробка швидких сайтiв якi продають",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ukr">
      <body className={`${raleway.className} ${actayRegular.variable} ${actayRegularItalic.variable} ${actayCondensedThin.variable} ${actayCondensedThinItalic.variable} ${actayWideBold.variable} ${actayWideBoldItalic.variable}`}>
        {children}
      </body>
    </html>
  );
}