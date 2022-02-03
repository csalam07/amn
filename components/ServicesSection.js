import Image from "next/image";
import Tilt from "react-tilt";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useSelector } from "react-redux";
import { selectTheme } from "../slices/themeSlice";
import Fade from "react-reveal/Fade";

function ServicesSection({ serviceRef }) {
  const darkTheme = useSelector(selectTheme);

  return (
    <section className="overflow-hidden mt-16" ref={serviceRef}>
      <div className="flex flex-col md:flex-row min-h-screen md:max-w-5xl lg:max-w-7xl mx-auto p-4">
        <Fade left>
          <div className="h-full md:w-[50%] flex p-5">
            <Tilt>
              <Image
                className={`${
                  darkTheme
                    ? "invert transition duration-1000 ease-in"
                    : "invert-0 transition duration-1000 ease-in-out"
                }`}
                src="/images/services.png"
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
              <h3 className="text-foodie-first text-lg font-serif capitalize">
                Our services
              </h3>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-serif capitalize">
                Book your <br />
                next order now
              </h1>
              <p className="text-xs md:text-sm">
                <span>
                  Nam et felis et lorem suscipit luctus et eu nisl. Praesent
                  vestibulum, augue sed volutpat egestas, tortor enim efficitur
                  mauris, id sodales velit augue sed ligula. Vestibulum eu
                  ullamcorper orci.
                  <br />
                </span>
                <span>
                  <br />
                  Hello world this is something is going in this world which is
                  not good for Etiam mattis ante metus, quis vulputate est
                  malesuada non. Proin blandit urna nulla, ac tincidunt sapien
                  pharetra nec. Nulla a faucibus odio. Duis tincidunt arcu vel
                  pretium ultrices
                </span>
              </p>
            </div>
            <div className="flex w-full md:w-7/12">
              <Button
                className="h-10"
                color="deepOrange"
                buttonType="filled"
                size="regular"
                rounded={true}
                block={false}
                iconOnly={false}
                ripple="dark"
              >
                Read More
              </Button>
            </div>
            <Button
              className="flex animate-bounce"
              color="deepOrange"
              buttonType="link"
              size="md"
              rounded={true}
              iconOnly={true}
              ripple="dark"
            >
              <a href="#banner">
                <Icon name="local_pizza" size="3xl" />
              </a>
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default ServicesSection;
