import React from "react";
import { TextCard } from "./Text";

export const TextWarper = ({ Mas }) => {
  return (
    <>
      {Mas.map((item, index) => {
        return <TextCard key={index} massege={item.massege} />;
      })}
    </>
  );
};
