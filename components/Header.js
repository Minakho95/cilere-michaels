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
            <Image
              src="https://priviledger.fr/img/searchIcon.svg"
              width={13}
              height={13}
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* 2nd nav */}
      <NavTest />
    </div>
  );
}

export default Header;
