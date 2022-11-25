import React from "react";
import { Row, Col } from "react-bootstrap";
import RollingText from "./RollingText";

const imgLists = [
  "arts/img (1).jpg",
  "arts/img (1).png",
  "arts/img (2).jpg",
  "arts/img (2).png",
  "arts/img (3).jpg",
  "arts/img (3).png",
  "arts/img (4).jpg",
  "arts/img (5).jpg",
  "arts/img (6).jpg",
  "arts/img (7).jpg",
  "arts/img (8).jpg",
  "arts/img (9).jpg",
  "arts/img (10).jpg",
  "arts/img (11).jpg",
  "arts/img (12).jpg",
  "arts/img (13).jpg",
  "arts/img (14).jpg",
  "arts/img (15).jpg",
  "arts/img (16).jpg",
];
const Arts = () => {
  return (
    <div
      id="arts"
      className="z-30 w-full flex flex-row justify-center items-start bg-black pb-32"
    >
      <Row className="flex justify-start w-10/12 items-center">
        {imgLists.map((img, index) => {
          return (
            <Col key={index} md={2} className="m-1">
              <img src={img} />
            </Col>
          );
        })}
      </Row>
      <div className="h-screen w-[105px] flex justify-center items-center overflow-hidden ">
        <div className="rotate-270 whitespace-nowrap  ">
          <RollingText
            wrapper=" w-full md:h-[105px]"
            font="text-left font-abril text-10xl text-white"
            baseVelocity={5}
          >
            Arts •
          </RollingText>
        </div>
      </div>
    </div>
  );
};
export default Arts;
