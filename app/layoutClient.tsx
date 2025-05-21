"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Container } from "@/components/Container";
import PageTransition from "@/components/PageTransition";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <NavBar />
      <Container>
        <PageTransition>{children}</PageTransition>
      </Container>
      <Footer />
    </>
  );
}
