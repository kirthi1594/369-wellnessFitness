import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { WhatsappIcon2 } from "../icons/whatsapp-icon";

const SiteLayout = ({ children }: any) => {

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main
				className="relative flex-grow  overflow-hidden"
				style={{
					minHeight: "-webkit-fill-available",
					WebkitOverflowScrolling: "touch",
				}}
			>
				{children}
			</main>
			{/* <a
        	  href="https://api.whatsapp.com/send/?phone=+918015311592&text=Hi&type=phone_number&app_absent=0"
        	  className="float"
        	  target="_blank"
      		>
        		<WhatsappIcon2 className="mt-4"/>
        		<i className="fa fa-whatsapp my-float"></i>
      		</a> */}
			<Footer />
		</div>
	);
};

export const getLayout = (page: React.ReactElement) => (
	<SiteLayout>{page}</SiteLayout>
)

export default SiteLayout;
