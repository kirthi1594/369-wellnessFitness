import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import path from "path";
import { useRouter } from "next/router";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const router = useRouter();

  const path = usePathname();
  let navigation = [
    { title: "About Us", link: "/about-us" },
    { title: "Services", link: "/services" },
    // { title: "Classes", link: "/courses" },
    // { title: "Trainers", link: "/careers" },
    { title: "Blog", link: "/blog" },
    { title: "Contact Us", link: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (router.pathname === "/" || router.pathname === "/about-us") {
        if (window.scrollY > 500) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  return (
    <header>
      <nav className="w-full backdrop-blur fixed top-0 left-0 right-0 z-50">
        <div className="justify-between px-2 mx-auto  lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:block py-5">
              <Link href="/" className={`${isScrolling ? "" :  "bg-white"} bg-white`}>
                <Image
                  src={"/assets/gym/log-2.png"}
                  alt="techbees-logo"
                  width={130}
                  height={130}
                  className={`${isScrolling ? "transition  duration-700" :  "bg-white p-1 rounded-md transition  duration-700"}`}
                />
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-x-lg fill-zinc-600"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-list fill-zinc-600"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center text-zinc-600 justify-center md:flex font-bold">
                {navigation?.map((v, i) => (
                  <li
                    key={i + "NAV"}
                    className={`pb-5 pt-4 text-base  py-2 md:px-6 text-center border-b-2 md:border-b-0 lg:hover:text-primary  md:hover:bg-transparent
                   `}
                  >
                    <Link
                      className={` ${
                        v.link === path
                          ? "!text-primary border-b-2 pb-2 border-b-primary"
                          : ""
                      }  ${
                        (router.pathname === "/" || router.pathname === "/about-us") 
                          ? (isScrolling ? "text-zinc-600" : "text-white")
                          : "text-zinc-600"
                      } hover:text-primary`}
                      href={v?.link}
                      onClick={() => setNavbar(!navbar)}
                    >
                      {v?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
