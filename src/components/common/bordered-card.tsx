import React from "react";
import Image from "next/image";

function CardBordered({ val }: any) {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-mirror="true"
      data-aos-once="false"
      className="flex flex-wrap justify-center gap-11 text-center pt-5"
    >
      {val?.map((v: any, i: any) => (
        <div
          key={i}
          className="border flex flex-col gap-1 justify-end items-center border-gray-300 rounded-lg w-96 p-8 px-16 shadow-md"
        >
          <Image
            src={"/assets/images/" + v?.image}
            alt={v?.title}
            height={100}
            width={100}
            className={v?.classprops}
          ></Image>
          <div className="text-lg pt-3 font-bold">{v?.title}</div>
          <div className="pt-3">{v?.desc}</div>
        </div>
      ))}
    </div>
  );
}

export default CardBordered;
