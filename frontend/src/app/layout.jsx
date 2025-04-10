import { Inter, Quando } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Quick from "@/components/layout/quick";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "강남 더원서울안과 - 강남안과,강남역안과,강남 망막안과",
  description:
    "강남구 신사역 6.8번 출구 신사스퀘어 8.9층 망막녹내장백내장노안 일반 안질환진료등 예약 상담안내 강남안과, 강남역 안과, 망막안과, 강남안과추천",
  keywords:
    "강남안과, 강남추천안과, 신사역, 망막녹내장백내장노안, 안질환진료등, 강남더원서울안과, 강남 신사스퀘어, 강남노안, 강남망막, 강남녹내장, 강남백내장, 강남 안과",
  openGraph: {
    title: "강남 더원서울안과 - 강남안과,강남역안과,강남 망막안과",
    description:
      "강남구 신사역 6.8번 출구 신사스퀘어 8.9층 망막녹내장백내장노안 일반 안질환진료등 예약 상담안내 강남안과, 강남역 안과, 망막안과, 강남안과추천",
    images: ["/images/ogimage.png"],
  },
  icons: {
    icon: "/images/theone.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/images/theone.ico" />
        <link rel="shortcut icon" href="/images/theone.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Quick />
      </body>
    </html>
  );
}
