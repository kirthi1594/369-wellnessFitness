// import { useEffect, useRef, useState } from 'react';

// interface Tab {
//     label: string;
//     content: string;
// }

// interface VerticalTabsProps {
//     tabs: Tab[];
//     defaultActiveIndex?: number;
// }

// export function VerticalTabs({ tabs, defaultActiveIndex = 0 }: VerticalTabsProps) {
//     const [activeTabIndex, setActiveTabIndex] = useState(defaultActiveIndex);
//     const [hoveredTabIndex, setHoveredTabIndex] = useState<any>();
//     const tabsRef = useRef<HTMLButtonElement[]>([]);

//     const [tabUnderlineTop, setTabUnderlineTop] = useState(0);
//     const [tabUnderlineHeight, setTabUnderlineHeight] = useState(0);
//     const [fadeIn, setFadeIn] = useState(false);
//     useEffect(() => {
//         const setTabPosition = () => {
//             const currentTab = tabsRef.current[activeTabIndex];
//             if (currentTab) {
//                 setTabUnderlineTop(currentTab.offsetTop);
//                 setTabUnderlineHeight(currentTab.clientHeight);
//                 setFadeIn(false);
//                 setTimeout(() => setFadeIn(true), 50);
//             }
//         };

//         setTabPosition();
//         window.addEventListener('resize', setTabPosition);

//         return () => {
//             window.removeEventListener('resize', setTabPosition);
//         };
//     }, [activeTabIndex]);

//     const getActiveTabIndex = () => (hoveredTabIndex !== null ? hoveredTabIndex : activeTabIndex);

//     return (
//         <div className="flex relative bg-white  px-5 ">
//             <div className="flex flex-col w-5/12   relative  shadow-lg">
//                 {tabs.map((tab, idx) => (
//                     <button
//                         key={idx}
//                         ref={(el) => (tabsRef.current[idx] = el!)}
//                         className={`relative py-7 px-3  transition-all duration-300 border  text-end  border-dashed border-b-primary ${activeTabIndex === idx ? 'font-bold text-primary bg-primary/10' : 'text-gray-600'
//                             }`}
//                         onMouseEnter={() => setHoveredTabIndex(idx)}
//                         onMouseLeave={() => setHoveredTabIndex(null)}
//                         onClick={() => setActiveTabIndex(idx)}
//                     >
//                         {tab.label}
//                     </button>
//                 ))}


//                 <span
//                     className="absolute right-0 block bg-primary transition-all duration-300"
//                     style={{
//                         top: tabsRef.current[getActiveTabIndex()]?.offsetTop,
//                         height: tabUnderlineHeight,
//                         width: '4px',
//                         transform: 'translateX(-2px)',
//                     }}
//                 />
//             </div>

//             {/* Tab Content */}
//             <div className="flex-1 p-6  rounded-r-lg transition-opacity duration-500 !max-w-2xl">
//                 <h2 className="text-3xl font-gemsbuck font-semibold mb-2 ">{tabs[getActiveTabIndex()]?.label}</h2>
//                 <p className={`text-gray-800 mt-10 font-rodin text-lg ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>{tabs[getActiveTabIndex()]?.content}</p>
//             </div>
//         </div>
//     );
// }


import { useEffect, useRef, useState } from 'react';

interface Tab {
    label: string;
    content: string;
}

interface VerticalTabsProps {
    tabs: Tab[];
    defaultActiveIndex?: number;
}

export function VerticalTabs({ tabs, defaultActiveIndex = 0 }: VerticalTabsProps) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [hoveredTabIndex, setHoveredTabIndex] = useState<any>(activeTabIndex);
    const tabsRef = useRef<HTMLButtonElement[]>([]);

    const [tabUnderlineTop, setTabUnderlineTop] = useState(0);
    const [tabUnderlineHeight, setTabUnderlineHeight] = useState(0);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const setTabPosition = () => {
            const currentTab = tabsRef.current[activeTabIndex];
            if (currentTab) {
                setTabUnderlineTop(currentTab.offsetTop);
                setTabUnderlineHeight(currentTab.clientHeight);
                setFadeIn(false);
                setTimeout(() => setFadeIn(true), 50);
            }
        };

        setTabPosition();
        window.addEventListener('resize', setTabPosition);

        return () => {
            window.removeEventListener('resize', setTabPosition);
        };
    }, [activeTabIndex]);

    const getActiveTabIndex = () => (hoveredTabIndex !== null ? hoveredTabIndex : activeTabIndex);

    return (
        <div className="flex flex-col md:flex-row relative bg-white px-5 ">
            {/* Tabs Container */}
            <div className="flex flex-col sm:flex-col md:flex-col w-full md:w-5/12 md:h-auto h-auto relative shadow-lg">
                {tabs.map((tab, idx) => (
                    <button
                        key={idx}
                        ref={(el) => (tabsRef.current[idx] = el!)}
                        className={`relative py-3 px-4 md:py-7 md:px-3 transition-all duration-300 border border-dashed text-center md:text-end border-b-primary max-md:h-20 ${activeTabIndex === idx ? 'font-bold text-primary bg-primary/10 max-sm:h-20 md:h-20' : 'text-gray-600'
                            }`}
                        onMouseEnter={() => setHoveredTabIndex(idx)}
                        onMouseLeave={() => setHoveredTabIndex(null)}
                        onClick={() => setActiveTabIndex(idx)}
                    >
                        {tab.label}
                    </button>
                ))}

                {/* <span
                    className="absolute md:right-0 block bg-primary transition-all duration-300"
                    style={{
                        top: tabsRef.current[getActiveTabIndex()]?.offsetTop,
                        height: tabUnderlineHeight,
                        width: '4px',
                        transform: 'translateX(-2px)',
                    }}
                /> */}

<span
  className="absolute md:right-0 block bg-primary transition-all duration-300"
  style={{
    top: tabsRef.current[getActiveTabIndex()]?.offsetTop,
    height: tabsRef.current[getActiveTabIndex()]?.clientHeight, // Dynamically get the height of the current tab
    width: '4px',
    transform: 'translateX(-2px)',
  }}
/>

            </div>

            {/* Tab Content */}
            <div className="flex-1 p-6 rounded-r-lg transition-opacity duration-500 max-w-2xl">
                <h2 className="text-3xl font-semibold mb-2 ">{tabs[getActiveTabIndex()]?.label}</h2>
                <p className={`text-gray-800 mt-10 text-lg ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>{tabs[getActiveTabIndex()]?.content}</p>
            </div>
        </div>
    );
}
