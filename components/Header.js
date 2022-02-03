import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../slices/themeSlice';
import { selectItems, selectTotalItems } from '../slices/basketSlice';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import DropdownLink from '@material-tailwind/react/DropdownLink';
import { signIn, signOut, useSession } from 'next-auth/client';

const navItems = [
  {
    title: 'Home',
    id: 'home',
  },
  {
    title: 'Menu',
    id: 'menu',
  },
  {
    title: 'About',
    id: 'about',
  },
  {
    title: 'Add Students',
    id: 'students',
  },
];
function Header() {
  const router = useRouter();
  const dispatch = useDispatch();

  const dishes = useSelector(selectItems);
  const tottalDishes = useSelector(selectTotalItems);

  const [navFixed, setNavFixed] = useState(false);
  const [session, laoding] = useSession();

  const changeNavbar = () => {
    if (window.scrollY >= 40) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);
  });

  return (
    <header
      className={`${
        navFixed
          ? 'sticky top-0 nb border-t md:border-b shadow-lg z-50 w-full transition ease-in duration-700 bg-white'
          : ''
      }`}
    >
      <div className="py-2 md:py-4 max-w-7xl mx-auto">
        <nav className="flex justify-between items-center">
          <div
            className="ml-4 md:ml-4 cursor-pointer"
            onClick={() => router.push('/')}
          >
            <Image
              src="/images/logo.svg"
              alt="logo"
              width="128"
              height="16"
              objectFit="contain"
            />
          </div>

          <Dropdown
            className="md:hidden hover:animate-bounce"
            color="gray"
            placement="bottom-start"
            buttonText={
              <div className="w-12">
                <Icon
                  name="lunch_dining"
                  size="3xl"
                  style={{
                    color: '#ED5A6C',
                  }}
                />
              </div>
            }
            buttonType="link"
            rounded
            style={{
              padding: 0,
              color: 'transparent',
              margin: 0,
            }}
            ripple="light"
          >
            <DropdownLink
              href="#menu"
              color="deepOrange"
              ripple="light"
              onClick={(e) => e.preventDefault()}
            >
              Menu
            </DropdownLink>
            <DropdownLink
              href="#about"
              color="deepOrange"
              ripple="light"
              onClick={(e) => e.preventDefault()}
            >
              About
            </DropdownLink>
            <DropdownLink
              href="/addstudents"
              color="deepOrange"
              ripple="light"
              onClick={(e) => {
                e.preventDefault();
                router.push('/addstudents');
              }}
            >
              Add Students
            </DropdownLink>
            <DropdownLink
              href="/profile"
              color="deepOrange"
              ripple="light"
              onClick={(e) => {
                e.preventDefault();
                router.push('/students');
              }}
            >
              Students
            </DropdownLink>
            <DropdownLink
              href="/checkout"
              color="lightBlue"
              ripple="light"
              onClick={(e) => e.preventDefault()}
            >
              <div className="relative flex cursor-pointer">
                <Icon name="logout" size="3xl" color="deepOrange" />
              </div>
            </DropdownLink>
            <br />
            <DropdownItem
              className="group"
              color="deepOrange"
              ripple="light"
              onClick={(e) => {
                e.preventDefault();
                dispatch(setTheme());
              }}
            >
              <Icon name="brightness_6" size="3xl" />
            </DropdownItem>
          </Dropdown>

          <div className="hidden md:inline-flex">
            <ul className="flex space-x-8 mr-10">
              {navItems.map((item, i) => (
                <li className="cursor-pointer group" key={i}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      router.push('/addstudents');
                    }}
                    style={{ scrollBehavior: 'smooth' }}
                    className="group-hover:text-foodie-first transition duration-300 ease-in "
                  >
                    {item.title}
                  </a>
                </li>
              ))}

              <Button
                color="white"
                buttonType="link"
                size="regular"
                rounded={true}
                block={false}
                iconOnly={true}
                ripple="dark"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/students');
                }}
              >
                <Icon name="account_circle" size="3xl" color="gray" />
              </Button>

              <div
                className="relative flex cursor-pointer"
                onClick={() => router.push('/checkout')}
              >
                <Icon name="logout" size="3xl" color="deepOrange" />
              </div>

              <Button
                color="white"
                buttonType="link"
                size="regular"
                rounded={true}
                block={false}
                iconOnly={true}
                ripple="dark"
                onClick={() => dispatch(setTheme())}
              >
                <Icon name="brightness_6" size="3xl" color="gray" />
              </Button>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
