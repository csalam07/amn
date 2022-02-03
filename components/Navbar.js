import { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import Icon from "@material-tailwind/react/Icon";
import NavLink from "@material-tailwind/react/NavLink";
import Image from "next/image";

function NavBar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <Navbar color="white" className="bg-white sticky top-0 z-10" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>
            <Image
              src="/images/logo.svg"
              alt="logo"
              width="128"
              height="16"
              objectFit="contain"
            />
          </NavbarBrand>
          <NavbarToggler
            color="deepOrange"
            onClick={() => setOpenNavbar(!openNavbar)}
            ripple="light"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav className="">
            <NavLink active="dark" href="#home" ripple="light">
              <span className="text-black hover:text-foodie-first">Home</span>
            </NavLink>
            <NavLink href="#menu" ripple="light">
              <span className="text-black hover:text-foodie-first">Menu</span>
            </NavLink>
            <NavLink href="#about" ripple="light">
              <span className="text-black hover:text-foodie-first">About</span>
            </NavLink>
            <NavLink href="#services" ripple="light">
              <span className="text-black hover:text-foodie-first">
                Services
              </span>
            </NavLink>
            <NavLink href="#navbar" ripple="light">
              <Icon name="account_circle" size="3xl" color="gray" />
            </NavLink>
            <NavLink href="#navbar" ripple="light">
              <Icon name="shopping_basket" size="3xl" color="deepOrange" />
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}

export default NavBar;
