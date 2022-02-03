import Image from "next/image";
import Tilt from "react-tilt";
import Button from "@material-tailwind/react/Button";
import { useSelector } from "react-redux";
import { selectTheme } from "../slices/themeSlice";
import Fade from "react-reveal/Fade";

function AddBanner() {
  const darkTheme = useSelector(selectTheme);
  return (
    <section className="overflow-hidden h-auto mb-16" id="banner">
      <div className="flex flex-col md:flex-row md:max-w-5xl lg:max-w-7xl lg:mx-auto md:mx-4  p-4 bg-[#2E050A] md:rounded-3xl">
        <Fade left>
          <div className="h-full md:w-[50%] flex">
            <Tilt>
              <Image
                className={`${
                  darkTheme
                    ? "invert transition duration-1000 ease-in"
                    : "invert-0 transition duration-1000 ease-in-out"
                }`}
                src="/images/cta.png"
                alt="hero"
                objectFit="contain"
                height="700"
                width="700"
              />
            </Tilt>
          </div>
        </Fade>
        <Fade right>
          <div className="flex flex-col items-start md:items-start space-y-16 h-auto md:h-full md:w-[50%]">
            <div className="flex flex-col space-y-10 mt-10 max-w-md">
              <h3 className="text-white text-lg font-serif capitalize">
                10% Cashback
              </h3>
              <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-black font-serif capitalize">
                Now you can order <br />
                from mobile
              </h1>
              <p className="text-white text-xs md:text-sm">
                <span>
                  Nam et felis et lorem suscipit luctus et eu nisl. Praesent
                  vestibulum,augue sed volutpat egestas, tortor enim efficitur
                  mauris, id sodales
                  <br />
                </span>
                <span>
                  <br />
                  augue sed volutpat egestas, tortor enim efficitur mauris, id
                  sodales,velit augue sed ligula. Vestibulum eu ullamcorper
                  orci.
                </span>
              </p>
            </div>
            <div className="flex w-full md:w-7/12">
              <Button
                className="h-10"
                color="white"
                buttonType="filled"
                size="regular"
                rounded={true}
                block={false}
                iconOnly={false}
                ripple="dark"
              >
                <img
                  src="/images/google-play.svg"
                  alt="play store"
                  className="transition ease-in-out duration-700 hover:scale-105"
                  loading="lazy"
                />
              </Button>

              <Button
                className="h-10"
                color="white"
                buttonType="filled"
                size="regular"
                rounded={true}
                block={false}
                iconOnly={false}
                ripple="dark"
              >
                <img
                  loading="lazy"
                  src="/images/apple-store.svg"
                  alt="apple store"
                  className="transition ease-in-out duration-700 hover:scale-105"
                />
              </Button>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default AddBanner;
