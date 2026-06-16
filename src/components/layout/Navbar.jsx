import { useEffect, useState } from "react";

import {
  HiOutlineMenuAlt3,
  HiX,
} from "react-icons/hi";

import {
  FaArrowRight,
} from "react-icons/fa";

import logo from "../../assets/images/Logo_Bunda_Wash.png";

import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

import {
  navigationLinks,
} from "../../constants/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 50
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300

        ${
          scrolled
            ? "bg-[#02131F]/80 backdrop-blur-md"
            : "bg-transparent"
        }
      `}
    >
      <nav
        className="
          max-w-7xl
          mx-auto
          px-5
          lg:px-8
          py
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          {/* Logo */}

          <a href="#home">
            <img
              src={logo}
              alt="Bunda Car Wash"
              className="
                h-14
                md:h-16
                lg:h-20
                object-contain
              "
            />
          </a>

          {/* Desktop Menu */}

          <div
            className="
              hidden
              md:flex
              items-center
              gap-8
            "
          >
            {navigationLinks.map(
              (item, index) => (
                <NavLink
                  key={item.id}
                  href={item.href}
                  label={item.label}
                  active={index === 0}
                />
              )
            )}
          </div>

          {/* Desktop CTA */}

          <button
            className="
              hidden
              md:flex
              items-center
              gap-3

              bg-lime-400
              text-black

              px-6
              py-2.5

              rounded-xl

              font-semibold

              hover:scale-105
              transition-all
              duration-300
            "
          >
            Join Today

            <FaArrowRight />
          </button>

          {/* Mobile Toggle */}

          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="
              md:hidden
              text-white
              text-3xl
            "
          >
            {isOpen ? (
              <HiX />
            ) : (
              <HiOutlineMenuAlt3 />
            )}
          </button>
        </div>

        <MobileMenu
          isOpen={isOpen}
        />
      </nav>
    </header>
  );
};

export default Navbar;