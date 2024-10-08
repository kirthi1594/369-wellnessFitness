import React, { useState } from 'react';



const Accordion = ({ data }: any) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Allow null value

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle logic
  };

  return (
    <div className="space-y-4  rounded-md"
    data-aos="fade-top"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false">
      {data?.map((item: any, index: any) => (
        <div key={index} className="border rounded-lg shadow-md ">
          <button
            className="w-full flex justify-between items-center p-4 font-semibold bg-white rounded-lg focus:outline-none text-primary"
            onClick={() => toggleAccordion(index)}
          >
            <span className='text-lg font-gemsbuck '>{item.title}</span>
            <span>
              {activeIndex === index ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 12h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 4v16M4 12h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
          </button>
          <div
            className={`transition-all duration-500 overflow-hidden ${activeIndex === index ? 'p-4' : 'max-h-0'}`}
          >
            {activeIndex === index && (

              <p className="text-secondary font-rodin text-lg">{item.content}</p>

            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
