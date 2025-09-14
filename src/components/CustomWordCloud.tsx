"use client";

import React from "react";
import D3WordCloud from "react-d3-cloud";
import { useTheme } from "next-themes";

type Props = {};

const data = [
  { text: "Hi", value: 13 },
  { text: "Hey", value: 32 },
  { text: "Hello", value: 19 },
  { text: "Whatsup", value: 27 },
  { text: "How You Doin", value: 2 },
];

const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16;
};

const CustomWordCloud = (props: Props) => {
  const { theme } = useTheme();

  return (
    <D3WordCloud
      data={data}
      height={550}
      font="Times"
      fontSize={fontSizeMapper}
      rotate={0}
      padding={10}
      fill={theme === "dark" ? "white" : "black"}
    />
  );
};

export default CustomWordCloud;
