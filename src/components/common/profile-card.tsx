import Image from 'next/image';
import React from 'react';

interface UserProfileCardProps {
    name: string;
    title: string;
    imageUrl: string;

}

const ProfileCard: React.FC<UserProfileCardProps> = ({
    name, title, imageUrl

}) => {
  return (
    <section className="flex items-center justify-center h-screen bg-[#071e34]">
      <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </span>
        </div>
        <div className="mt-6 w-fit mx-auto">
          <Image src={imageUrl} width={120} height={120} className="rounded-full w-28" alt="profile picture" />
        </div>

        <div className="mt-8">
          <h2 className="text-white font-bold text-2xl tracking-wide">
            {name} 
          </h2>
        </div>


      </section>
    </section>
  );
};

export default ProfileCard;
