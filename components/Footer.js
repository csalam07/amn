import LeadText from '@material-tailwind/react/LeadText';
import Image from 'next/image';
import Slide from 'react-reveal/Slide';

export default function Footer() {
  return (
    <div className="bg-foodie-third border-t">
      <footer className="relative pt-8 pb-6">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left pt-6">
            <Slide bottom>
              <div className="w-full lg:w-6/12 px-4">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width="128"
                  height="16"
                  objectFit="contain"
                />
                <div className="-mt-4">
                  <LeadText color="black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sodales ultrices est sit amet malesuada. Donec
                    malesuada elementum sem, vel interdum urna fringilla quis.
                  </LeadText>
                </div>
              </div>
            </Slide>

            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top">
                <div className="w-full lg:w-4/12 px-4 ml-auto md:mb-0 mb-8">
                  <Slide bottom>
                    <span className="block uppercase text-foodie-first text-sm font-serif font-medium mb-2">
                      Useful Links
                    </span>
                  </Slide>
                  <ul className="list-unstyled">
                    <Slide bottom>
                      <li>
                        <a
                          href=""
                          rel="noreferrer"
                          className="te hover:text-foodie-first block pb-2 text-sm"
                        >
                          About Us
                        </a>
                      </li>
                    </Slide>
                    <Slide bottom>
                      <li>
                        <a
                          className="te hover:text-foodie-first block pb-2 text-sm"
                          href=""
                        >
                          Careers
                        </a>
                      </li>
                    </Slide>
                    <Slide bottom>
                      <li>
                        <a
                          href=""
                          rel="noreferrer"
                          className="te hover:text-foodie-first block pb-2 text-sm"
                        >
                          Press Releases
                        </a>
                      </li>
                    </Slide>
                    <Slide bottom>
                      <li>
                        <a
                          href=" "
                          rel="noreferrer"
                          className="te hover:text-foodie-first block pb-2 text-sm"
                        >
                          Feed a Smile
                        </a>
                      </li>
                    </Slide>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <Slide bottom>
                    <span className="block uppercase text-foodie-first text-sm font-serif font-medium mb-2">
                      Other Resources
                    </span>
                  </Slide>
                  <ul className="list-unstyled">
                    <Slide bottom>
                      <li>
                        <a
                          href=""
                          rel="noreferrer"
                          className="te hover:text-foodie-first block pb-2 text-sm"
                        >
                          Sell on Foodie.Order
                        </a>
                      </li>
                    </Slide>
                    <Slide bottom>
                      <li>
                        <a
                          href=""
                          rel="noreferrer"
                          className="te hover:text-foodie-first block pb-2 text-sm"
                        >
                          Become an Affiliate
                        </a>
                      </li>
                    </Slide>
                    <Slide bottom>
                      <li>
                        <a
                          href=""
                          rel="noreferrer"
                          className="te hover:text-foodie-first block pb-2 text-sm"
                        >
                          Advertise Your Products
                        </a>
                      </li>
                    </Slide>
                    <Slide bottom>
                      <li>
                        <a
                          href=""
                          rel="noreferrer"
                          className="te hover:text-foodie-first block pb-2 text-sm"
                        >
                          Contact Us
                        </a>
                      </li>
                    </Slide>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center md:justify-between justify-center border-t-2 border-gray-300">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm font-medium py-1">
                No Copyright © {new Date().getFullYear()} Face.Recognition by{' '}
                <a href="" className="text-foodie-first transition-all">
                  Sania
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
