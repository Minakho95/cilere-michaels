import Image from "next/image";
import NavTest from "./NavTest";

function Header() {
  return (
    <div>
      {/* 1rst nav */}
      <div className="flex justify-between px-4 lg:px-16 bg-black text-white font-lato text-xs">
        {/* left */}
        <div className="py-1">
          <p>
            WELCOME TO <span className="underline">PARIS</span>
          </p>{" "}
        </div>
        {/* right */}
        <div className="flex justify-around w-48 ">
          <button className="bg-red-500 px-1">JOIN NOW</button>
          <div className="border-l pl-3 py-1">EN</div>
          <div className="border-l pl-3 py-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 2nd nav */}
      <NavTest />
    </div>
  );
}

export default Header;
