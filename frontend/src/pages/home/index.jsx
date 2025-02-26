import Footer from "@comp/layout/footer";
import Header from "@comp/layout/header";
import Hero from "@comp/page/home/hero";
import Features from "@comp/page/home/features";

function Home() {
  return (
    <>
      <Header />
      <>
        <Hero />
        <Features />
      </>
      <Footer />
    </>
  );
}

export default Home;