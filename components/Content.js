import Image from "next/image";
import { useState } from "react";

function Content() {
  const [dismiss, setDismiss] = useState(false);
  const handleClose = () => {
    setDismiss(!dismiss);
  };
  return (
    <>
      <div className="my-6 mx-4 flex flex-wrap ">
        {/* text */}
        <div className="text-center w-full mb-4 lg:w-3/5 lg:h-40 lg:text-left lg:pt-20">
          <p className="font-Farnham lg:text-3xl">Treasure around the globe</p>
          <p className="pt-2 font-Romina lg:text-3xl mt-4">
            THE ULTIMATE CROSS-BORDER SHOPPING GUIDE
          </p>
          <p className="pt-2 font-Farnham lg:text-2xl mt-4">
            dedicated to luxury and high-end lovers from all over the world
          </p>
        </div>

        {/* image */}
        <div className="flex lg:-order-1 w-1/2 lg:w-1/3 lg:mr-8">
          <div className="sm:text-center sm:w-full lg:text-right">
            <Image
              src="/iPhone.png"
              width={264}
              height={500}
              objectFit="contain"
            />
          </div>
        </div>
        {/* buttons */}
        <div className="flex flex-col w-1/2 items-center justify-evenly lg:justify-start lg:flex-row lg:w-3/5 lg:h-40 lg:absolute lg:self-end lg:right-20 lg:bottom-40 lg:pl-8">
          <button className="w-40 border border-blue-600 rounded-lg shadow-xl lg:mr-4">
            <div className="flex items-center">
              {/* img button */}
              <div className="basis-1/4 items-centrer  ">
                <Image
                  src="/Apple.png"
                  width={25}
                  height={25}
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs">Download on the</p>
                <p>App Store</p>
              </div>
            </div>
          </button>
          <button className="w-40 border border-blue-600 rounded-lg shadow-xl lg:mr-4">
            <div className="flex items-center">
              {/* img button */}
              <div className="basis-1/4 items-centrer ">
                <Image
                  src="/Android.png"
                  width={25}
                  height={25}
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-xs">Get it from</p>
                <p>Google Play</p>
              </div>
            </div>
          </button>
          <button className="w-40 border border-blue-600 rounded-lg shadow-xl">
            <div className="flex items-center">
              {/* img button */}
              <div className="basis-1/4 items-center ">
                <Image
                  src="/weChat.png"
                  width={25}
                  height={25}
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-xs">Avalaible on WeChat</p>
                <p>MiniProgram</p>
              </div>
            </div>
          </button>
        </div>
      </div>
      {/* find more */}
      <div
        className={
          dismiss
            ? "hidden"
            : "flex bg-[#2F273D] text-white px-4 py-4 rounded lg:mt-30 lg:w-4/5 lg:mx-auto"
        }
      >
        <p>
          By continuing to browse this site, you are agreeing to our use of
          cookies for analytical and targeting purposes.{" "}
          <span className="underline">Find out more</span>
        </p>
        <button className="self-start ml-4 lg:ml-auto" onClick={handleClose}>
          X
        </button>
      </div>
    </>
  );
}

export default Content;
