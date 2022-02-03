import { useState } from 'react';
import Image from 'next/image';
import Tilt from 'react-tilt';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useSelector } from 'react-redux';
import { selectTheme } from '../slices/themeSlice';
import Bounce from 'react-reveal/Bounce';
import { useRouter } from 'next/router';

function HeroSection() {
  const darkTheme = useSelector(selectTheme);
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`student/${search}`);
  };

  return (
    <section className="overflow-hidden mt-10" id="home">
      <div className="flex flex-col-reverse md:flex-row min-h-screen md:max-w-5xl lg:max-w-7xl mx-auto p-4">
        <Bounce left>
          <div className="flex flex-col items-start md:items-start space-y-16 h-auto md:h-full md:w-[50%]">
            <div className="flex flex-col space-y-10 mt-10 max-w-md">
              <h3 className="text-foodie-first text-lg font-serif capitalize">
                Resturant
              </h3>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-serif capitalize">
                Face Recognition <br />
                Student System
              </h1>
              <p className="text-xs md:text-sm">
                It&apos;s tIme to get rid of tedious &amp; traditional way of
                fetching.We help you to save your precios time and make your
                work automated. Switch to BTI-SMS and get your job done in
                fraction.
              </p>
            </div>
            <form
              className="flex w-full md:w-7/12 relative"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                placeholder="Search student..."
                className="w-full border-0 outline-none
                bg-foodie-third rounded-full h-10 p-4 text-foodie-second
                placeholder-gray-400 text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                className="absolute right-0 h-10"
                color="red"
                buttonType="filled"
                size="md"
                rounded={true}
                block={false}
                iconOnly={false}
                ripple="dark"
                type="submit"
              >
                Search
              </Button>
            </form>
            <Button
              className="flex animate-bounce"
              color="deepOrange"
              buttonType="link"
              size="md"
              rounded={true}
              iconOnly={true}
              ripple="dark"
            >
              <a href="#menu">
                <Icon name="local_pizza" size="3xl" />
              </a>
            </Button>
          </div>
        </Bounce>
        <Bounce right>
          <div className="h-full md:w-[50%] flex ">
            <Tilt>
              <Image
                className={`${
                  darkTheme
                    ? 'invert transition duration-1000 ease-in'
                    : 'invert-0 transition duration-1000 ease-in-out'
                }`}
                src="/images/san.png"
                alt="hero"
                objectFit="contain"
                height="700"
                width="700"
              />
            </Tilt>
          </div>
        </Bounce>
      </div>
    </section>
  );
}

export default HeroSection;
