import Head from "next/head";
import Header from "../components/Header";
import Delete from "../components/Delete";
import HeroSection from "../components/HeroSection";
import MenuSection from "../components/MenuSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import AddBanner from "../components/AddBanner";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectTheme } from "../slices/themeSlice";
import Slide from "react-reveal/Slide";
import config from "react-reveal/globals";

config({ ssrFadeout: true });

export default function Home() {
  const darkTheme = useSelector(selectTheme);

  return (
    <div
      className={` bg-white ${
        darkTheme && "invert transition duration-1000 ease-in"
      } min-h-screen transition duration-1000 ease-in`}
    >
      <Head>
        <title>Foodie.Order</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <mian className="">
        {/* <Delete /> */}

        <Header />
        <HeroSection />
        <Slide bottom>
          <MenuSection />
        </Slide>
        <AboutSection />

        <ServicesSection />

        <AddBanner />

        <Footer />
      </mian>
    </div>
  );
}
