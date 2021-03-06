import React from "react";
import { FooterItem, ImageWithLazyFill } from "./";
type Props = {};

const Footer = (props: Props) => {
  const dropDownContents = [
    {
      to: "/WhatNewPage",
      context: ["お知らせ", "What's new"],
    },
    {
      to: "/Excursive",
      context: ["こだわり", "Excursive"],
    },
    {
      to: "/FoodMenu",
      context: ["お食事", "Food Menu"],
    },
    {
      to: "/Drink",
      context: ["お飲み物", "Drinks"],
    },
    {
      to: "/Business",
      context: ["営業時間/アクセス", "Business Hours/Access"],
    },
  ];
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row justify-around items-center">
          {dropDownContents.map((dropDownContent, index) => {
            return <FooterItem data={dropDownContent} key={index} />;
          })}
        </div>
      </div>
      <div className="my-2 px-3">
        <p className="text-center">
          Copyright © 2022ワラガモ吉祥寺 All right reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
