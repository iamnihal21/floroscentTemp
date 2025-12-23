import { Header } from "@/app/(frontend)/components/layout/header";
import { Footer } from "@/app/(frontend)/components/layout/footer";
// import { NavbarColorFix } from "@/app/(frontend)/components/layout/NavbarColorFix";
export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="frontend">
      {/* <NavbarColorFix /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
