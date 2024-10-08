import { getLayout } from "@/components/layouts/layout";
import React, { useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import contactusanimation from "../../public/assets/lottie/contactusanimation.json";
import {
  AddressIcon,
  CallIcon,
  EmailIcon,
} from "@/components/icons/footer-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingAnim from "@/components/common/loading-animation";
import ButtonLink from "@/components/common/button";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    place: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      const apiUrl = "https://techbeeshive.com/api/sendmail";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (response?.status == 200) {
        toast.success("Mail sent Successfully!", {
          // position: toast."top-right",
          autoClose: 3000,
        });

        setFormData({
          name: "",
          email: "",
          number: "",
          place: "",
          message: "",
        });
      } else {
        toast.error("Error sending mail!", {
          // position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      toast.success("Message sent Successfully!", {
        // position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      setFormData({
        name: "",
        email: "",
        number: "",
        place: "",
        message: "",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <div className="w-full">
        <ToastContainer />
      </div> */}
      {/* <div className=" max-lg:pt-12 max-md:mx-2  max-md:mt-10 pt-14 md:pt-28 lg:pb-14">
        <h3 className="text-primary text-2xl pb-20 text-center font-bold">
          Get in touch with us
        </h3>
        <div className=" flex flex-wrap justify-center lg:gap-32 max-md:gap-10">
          <div className="leading-snug h-36 w-80  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 bg-cyan-600 border  rounded-custom p-5  -px-3">
            <h2 className="font-bold text-lg  capitalize flex items-center md:text-2xl">
              <AddressIcon className="mr-3 icons-color text-primary h-5 w-5  md:h-7 md:w-7" />
              Location
            </h2>
            <p className="text-[17px] md:pt-5 text-center">
              21A, Phase 2, New Housing Board, <br /> Wahab Nagar, Krishnagiri,{" "}
              <br /> Tamil Nadu 635001
            </p>
          </div>
          <div className="leading-snug h-36 w-80 max-md:gap-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 bg-cyan-600 border  rounded-custom p-5  -px-3">
            <h2 className="font-bold  flex items-center md:text-2xl">
              <CallIcon className="mr-3 icons-color text-primary h-5 w-5  md:h-7 md:w-7" />
              Phone Numbers
            </h2>
            <p className="text-[17px] md:pt-5 text-center">+91 43432 95003</p>
            <p className="text-[17px] md:pt-2 text-center">+91 80153 11592</p>
          </div>
          <div className="leading-snug h-36 w-80 max-md:gap-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 bg-cyan-600 border  rounded-custom p-5  -px-3">
            <h2 className="font-bold  flex items-center md:text-2xl">
              <EmailIcon className="mr-3 icons-color text-primary h-5 w-5  md:h-7 md:w-7" />
              E-mail
            </h2>
            <p className="text-[17px] md:pt-5 text-center">
              369wellnessfitness@gmail.com
            </p>
          </div>
        </div>
      </div> */}
      {/* <div
        className=" grid lg:grid-cols-2 max-md:grid-cols-1 grid-rows-1  items-center 
       bg-center bg-cover lg:mx-28 rounded-lg max-md:mt-10 max-md:py-5 max-md:mx-2 max-md:px-2 px-2"
      >
        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          className="max-w-[545px] container flex justify-end"
        >
          <div className="flex min-h-screen items-center justify-start max-md:-my-14">
            <div className="mx-auto w-full max-w-lg">
              <h3 className="text-primary text-2xl pb-4 text-center font-bold">
                Let&apos;s Work Together
              </h3>
              <h1 className="text-4xl font-medium">Contact us</h1>
              <p className="mt-3">
                Email us at 369wellnessfitness@gmail.com or message us here:
              </p>
              <form onSubmit={handleSubmit} className="mt-10">
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY_HERE"
                />
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative z-0">
                    <input
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                      name="name"
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Your Name
                    </label>
                  </div>
                  <div className="relative z-0">
                    <input
                      name="number"
                      id="number"
                      type="number"
                      required
                      value={formData.number}
                      onChange={handleInputChange}
                      className="list-none [&::-webkit-inner-spin-button]:appearance-none peer block w-full border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Contact Number
                    </label>
                  </div>
                  <div className="relative z-0 col-span-2">
                    <input
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                      name="email"
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Your Email
                    </label>
                  </div>
                  <div className="relative z-0 col-span-2">
                    <input
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                      name="place"
                      id="place"
                      type="text"
                      value={formData.place}
                      onChange={handleInputChange}
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Your Place
                    </label>
                  </div>
                  <div className="relative z-0 col-span-2">
                    <textarea
                      rows={3}
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Type Your Message here...
                    </label>
                  </div>
                </div>
                <button
                  // onSubmit={}
                  type="submit"
                  className="mt-5 rounded-md bg-primary px-8 py-2 text-white flex items-center gap-2"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  {loading ? (
                    <LoadingAnim />
                  ) : (
                    <Image
                      src={"/assets/images/paper.svg"}
                      width={35}
                      height={35}
                      alt="sent-icon"
                    ></Image>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          className=""
        ></div>
      </div> */}
      {/* <div className="pb-20 mt-10">
        <h2 className="container max-md:text-center max-w-6xl mx-auto md:text-5xl font-bold text-3xl pb-12">
          Other ways to <span className="text-primary">Reach Us</span>
        </h2>

        <div className="flex flex-wrap justify-evenly items-center">
          <iframe
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            className="relative z-10"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31158.799177045417!2d78.1810060347656!3d12.526101200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac3369a3c3b071%3A0xa286ad83966b805a!2sTechbeeshive%20Technologies!5e0!3m2!1sen!2sin!4v1686810239080!5m2!1sen!2sin"
            width="1300"
            height="600"
            loading="lazy"
          /> */}
      {/* <div
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            className="max-w-xs max-lg:pt-12 flex flex-col gap-4"
          >
            <div className="leading-loose">
              <h2 className="font-bold text-lg text-primary flex items-center">
                <AddressIcon className="mr-3 h-5 w-5" />
                LOCATION
              </h2>
              <p className="">
                21A, Phase 2, New Housing Board, <br /> Wahab Nagar,
                Krishnagiri, <br /> Tamil Nadu 635001
              </p>
            </div>
            <div className="leading-loose">
              <h2 className="font-bold text-primary flex items-center">
                <CallIcon className="mr-3 h-5 w-5" />
                PHONE NUMBERS
              </h2>
              <p>+91 43432 95003</p>
              <p>+91 80153 11592</p>
            </div>
            <div className="leading-loose">
              <h2 className="font-bold text-primary flex items-center">
                <EmailIcon className="mr-3 h-5 w-5" />      
                EMAIL
              </h2>
              <p>techbeeshive@gmail.com</p>
            </div>
          </div> */}
      {/* </div> */}
      {/* </div> */}

      {/* Contact us - 2 */}

      <div className="p-4 mt-16 m-auto h-auto min-h-[500px] flex justify-center items-center">
        <div className="bg-[#F9FAFB] p-8 md:p-8 w-full max-w-4xl h-auto relative shadow-lg rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary h-full p-6 rounded-lg relative lg:-left-1">
              <h2 className="text-center text-white font-bold text-2xl md:text-3xl mb-10">
                Contact Us
              </h2>
              <div className="space-y-5 text-white">
                <p className="flex flex-col items-center text-center gap-1 sm:flex-row sm:items-start sm:text-left sm:gap-3 max-md:gap-5">
                  <AddressIcon className="icons-color text-white  h-12 w-16 " />
                  <span className="max-md:w-[200px]">
                    4,Pillyar Kovil Street Velachery, Main Road, Madipakkam, Chennai, Tamil Nadu 600091
                  </span>
                </p>
                <p className="flex flex-col items-center text-center gap-1 sm:flex-row sm:items-start sm:text-left sm:gap-3 max-md:gap-5">
                  <EmailIcon className="icons-color text-white h-7 w-7 " />
                  <span className="whitespace-pre-wrap overflow-auto">
                    369awc@gmail.com
                  </span>
                </p>
                <p className="flex flex-col items-center text-center gap-1 sm:flex-row sm:items-start sm:text-left sm:gap-3 max-md:gap-5">
                  <CallIcon className="icons-color text-white h-7 w-7 " />
                  <span>
                    98847 51803
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl md:text-3xl">Get in Touch</h2>
              <p className="text-gray-700">Feel free to drop us a line below</p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 text-gray-600 border-gray-400 border outline-none focus:ring-2 focus:ring-primary rounded-md"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 text-gray-600 border-gray-400 border outline-none focus:ring-2 focus:ring-primary rounded-md"
                />
                <textarea
                  rows={4}
                  placeholder="Leave a message here"
                  className="w-full p-3 text-gray-600 border-gray-400 border outline-none focus:ring-2 focus:ring-primary rounded-md"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-all duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-20 mt-10">
        <h2 className="container max-md:text-center max-w-6xl mx-auto md:text-5xl font-bold text-3xl pb-12">
          Other ways to <span className="text-primary">Reach Us</span>
        </h2>

        <div className="flex flex-wrap justify-evenly items-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1112347576864!2d80.19432387358893!3d12.964733415031823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525ddd6f6e3257%3A0xf2a3579581540aa9!2s369%20Fitness%20wellness!5e0!3m2!1sen!2sin!4v1728299968126!5m2!1sen!2sin" width="1300" height="450" loading="lazy"></iframe>
        </div>

        {/* Contact us - 3 */}

        {/* <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] m-auto h-auto mt-5 mb-5 justify-center items-center relative">
        {/* Contact Info Section */}
        {/* <div className="bg-primary w-full h-[570px] text-white flex flex-col items-center text-left px-5 md:pl-20 ">
          <h1 className="font-extrabold text-2xl md:text-3xl tracking-widest p-16  md:-mt-[] mb-5 max-md:text-3xl">
            get in <br /> touch
          </h1>
          <div className="flex flex-col text-left gap-4 md:gap-8 max-md:text-xl">
            <p className="flex gap-2 md:gap-6">
              Email: <span>369wellnessfitness@gmail.com</span>
            </p>
            <p className="flex gap-2 md:gap-4">
              Phone: <span>+91 43432 95003 / +91 80153 11592</span>
            </p>
            <p className="flex gap-2">
              Address:
              <span>
                21A, Phase 2, New Housing Board, <br />
                Wahab Nagar, Krishnagiri, <br />
                Tamil Nadu 635001.
              </span>
            </p>
          </div>
        </div> */}

        {/* Image Section */}
        {/* <div className="absolute left-0 hidden md:hidden order-1 md:order-2 lg:hidden xl:block">
          <Image
            className="relative h-96"
            width={200}
            height={300}
            src="/assets/images/hero.png"
            alt="Hero Image"
          />
        </div> */}

        {/* Form Section */}
        {/* <div className="bg-secondary w-full md:w-[550px]  h-[570px]">
          <h2 className="font-bold text-2xl md:text-3xl text-white flex justify-center pt-4 mt-5 mb-5">
            Contact Us
          </h2>
          <form className="space-y-4 md:space-y-6 m-6 md:m-20">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full md:w-80 p-4 text-gray-600 border-gray-400 rounded-md "
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full md:w-80 p-4 text-gray-600 border-gray-400 rounded-md"
            />
            <textarea
              rows={4}
              placeholder="Leave a message here"
              className="w-full md:w-80 p-4 text-gray-600 border-gray-400 rounded-md"
            />
            <button
              type="submit"
              className="bg-primary text-white px-8 py-2 rounded-md flex ml-auto"
            >
              Send
            </button>
          </form>
        </div> */}
        {/* </div>  */}
      </div>
    </div>
  );
}

export default ContactUs;
ContactUs.getLayout = getLayout;
