
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/icons/social-icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; 

const Footer = () => {

  const navigation = [
    { title: "About Us", link: "/about-us" },
    { title: "Services", link: "/services" },
    { title: "Blog", link: "/blog" },
    { title: "Contact Us", link: "/contact-us" },
  ];

  const companies = [
    { name: 'Instagram', link: 'https://instagram.com/369fitaesthetics?igshid=YmMyMTA2M2Y=', icon: <InstagramIcon /> },
    { name: 'Youtube', link: 'https://youtube.com', icon: <YoutubeIcon /> },
    { name: 'Facebook', link: 'https://facebook.com', icon: <FacebookIcon /> },
  ];

  return (
    <footer className="bg-white lg:grid lg:grid-cols-5 shadow-lg">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <Image
          src="/assets/gym/service/gym-30.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          alt="Gym Hero"
          height={500}
          width={500}
          quality={100}
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-primary font-bold">Call us</span>
              <a href="tel:9884751803" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                98847 51803
              </a>
            </p>

            <ul className="mt-8 space-y-3 text-sm text-gray-700">
              <li className="flex  gap-3">
                <span>Monday to Friday:</span>
                <span>5:30 AM - 9:30 PM</span>
              </li>
              <li className="flex gap-3">
                <span>Weekend:</span>
                <span className='flex flex-col'>
                  <span>6:00 AM – 10:00 AM</span>
                  <span>5:00 PM – 9:00 PM</span>
                </span>
              </li>
            </ul>

            <div className="mt-6 space-y-4">
              <p className="text-sm text-gray-700 flex gap-3">
                <strong>Address:</strong>
                <span>
                  4,Pillyar Kovil Street Velachery, Main Road, Madipakkam, Chennai, Tamil Nadu 600091
                </span>
              </p>
              <p className="text-sm text-gray-700 flex gap-5">
                <strong>Email:</strong>
                <span>369awc@gmail.com</span>
              </p>
            </div>

            <ul className="mt-8 flex gap-6">
              {companies.map((company) => (
                <li key={company.name}>
                  <Link
                    href={company.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-primary"
                    aria-label={company.name}
                  >
                    {company.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-md:gap-6">
            <div>
              <p className="font-bold text-primary ">Quick Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} >
                      <span className="text-gray-700 transition hover:opacity-75">{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold text-primary">Social</p>
              <ul className="mt-6 space-y-4 text-sm">
                {companies.map(company => (
                  <li key={company.name}>
                    <Link href={company.link} passHref>
                      <span className="text-gray-700 transition hover:text-primary flex items-center gap-2 ">
                        <span className=''>
                          {company.icon}
                        </span>
                        <span>
                          {company.name}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; 2024. 369 Fitness & Wellness . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
