import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const CustomPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center z-50 justify-center ${
        showPopup ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-7 mt-10 rounded-md relative">
        <div className="p-3">
          <Image
            src={"/assets/images/Techbeeshive-broucher.jpg"}
            alt="Brouche"
            width={600}
            height={100}
            quality={100}
          />

          <div className="flex justify-center flex-wrap lg:gap-5 max-md:gap-1">
            <Link href={"/contact-us"}>
              <button className="text-white button bg-primary hover:bg-primary/90 text-md rounded-full px-6 p-3 mt-6">
                 Join Free Demo Class
              </button>
            </Link>
            <Link href={"/contact-us"}>
              <button className="text-white button bg-primary hover:bg-primary/90 text-md rounded-full px-6 p-3 mt-6">
                Enquiry
              </button>
            </Link>
          </div>
        </div>
        <button
          className="absolute top-2 right-2 close-icon"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CustomPopup;