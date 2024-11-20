import Image from "next/image";
import Count from "../components/Count";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <header></header>
      <main>
        <section>
          <h1>Home</h1>
          <Count />
        </section>
      </main>
      <Footer />
    </div>
  );
}
