import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavTest() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className="flex items-center flex-wrap p-3 border justify-center">
        <Link href="/">
          <a className="inline-flex items-center w-1/2 sm:w-1/3 justify-items-center">
            <Image
              src="/logo.png"
              width={333}
              height={74}
              objectFit="contain"
            />
          </a>
        </Link>
        <button
          className="absolute left-2 inline-flex p-3 rounded lg:hidden text-black ml-auto hover:text-black outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className=" absolute z-10 left-0 mt-3 bg-white border lg:border-none lg:relative lg:inline-flex lg:flex-row lg:mt-auto lg:ml-auto lg:bg-inherit lg:w-auto w-full items-start lg:items-center flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center focus:text-blue-800 focus:underline">
                HOME
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center ">
                CUSTOMER
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center ">
                BUSINESS
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center ">
                INVESTOR
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center ">
                MAGAZINE
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavTest;
