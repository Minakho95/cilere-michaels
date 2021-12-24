import { useState } from "react";

function Banner() {
  const [dismiss, setDismiss] = useState(false);
  const handleClose = () => {
    setDismiss(!dismiss);
  };
  return (
    <div
      className={
        dismiss
          ? "hidden"
          : "absolute text-center bg-slate-50 opacity-95 h-screen py-6 px-3 z-10 sm:h-1/2 sm:px-20 sm:text-left lg:h-1/3"
      }
    >
      {/* text */}
      <div className="flex flex-col h-1/2 justify-around">
        <p className="sm:mb-4">
          This website stores cookies on your computer. These cookies are used
          to improve your website experience and provide more personalised
          services to you, both on this website and through other media. To find
          out more about the cookies we use, see our{" "}
          <span className="underline">Privacy Policy</span>.
        </p>
        <p>
          We won't track your information when you visit our site. But in order
          to comply with your preferences, we'll have to use just one tiny
          cookie so that you're not asked to make this choice again.
        </p>
      </div>
      {/* button  */}
      <div className="flex flex-col h-1/3 items-center text-xs sm:flex-row sm:justify-end ">
        <button
          className="rounded-full text-white bg-black w-36 mt-4 py-1"
          onClick={handleClose}
        >
          ACCEPT
        </button>
        <button
          className="rounded-full text-white bg-black w-36 mt-4 py-1 sm:ml-2"
          onClick={handleClose}
        >
          DECLINE
        </button>
      </div>
    </div>
  );
}

export default Banner;
