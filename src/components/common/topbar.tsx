import React from 'react';
import Link from 'next/link';

function Topbar({title}:any) {
  return (
    <div className="flex flex-wrap justify-between items-center">
        <h2 className="text-primary font-sans font-bold text-2xl flex items-center gap-3">
          <div className="h-7 w-1 bg-primary"></div>
          {title}
        </h2>
      
          <Link href="/contact-us">
            <button className="bg-primary text-white rounded-full py-2 px-5 hover:bg-primary/90">
              Enroll Now
            </button>
          </Link>

      </div>
  )
}

export default Topbar
