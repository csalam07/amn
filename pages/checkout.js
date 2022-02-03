import Head from "next/head";
import Header from "../components/Header";
import Delete from "../components/Delete";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectTheme } from "../slices/themeSlice";
import Slide from "react-reveal/Slide";
import config from "react-reveal/globals";

config({ ssrFadeout: true });

export default function Checkout() {
  const darkTheme = useSelector(selectTheme);

  return (
    <div
      className={` bg-white ${
        darkTheme && "invert transition duration-1000 ease-in"
      } min-h-screen transition duration-1000 ease-in`}
    >
      <Head>
        <title>Checkout || Foodie.Order</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <mian className="">
        {/* <Delete /> */}

        <div className="checkout__banner"></div>
        <div className="checkout__products">
          <div>product</div>
          <div>checkout</div>
        </div>
      </mian>
      <Footer />
    </div>
  );
}
