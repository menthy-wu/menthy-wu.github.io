import React from "react";
import Title from "../Title";
import Image from "next/image";
import { useMemo } from "react";
const imagePath = require.context("../../../public/arts", true);
const Arts = () => {
  const imgList = useMemo(() =>
    imagePath.keys().map((image) => imagePath(image)),
  );

  return (
    <section id="arts" className="justify-center flex flex-col w-6/12 my-10">
      <Title text="ARTS">
        <div className="h-6 w-24 absolute bg-custom-theme -left-4 -bottom-1 z-10" />
      </Title>
      <div className="columns-4 gap-4 w-full">
        {imgList.map((img, index) => {
          return (
            <Image
              key={index}
              src={img}
              width={500}
              height={500}
              className="my-4"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Arts;
