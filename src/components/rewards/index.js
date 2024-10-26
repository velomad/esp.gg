"use client";

import React, { useState } from "react";
import { ProgressIndicator } from "../ui/progress-indicator";
import { Typography } from "../ui/typography";
import Swiper from "../ui/swiper";

const Rewards = ({ data }) => {
  const [activeSlideIndex, setActiveIndex] = useState(0);

  const handleChange = (slide) => {
    setActiveIndex(slide.realIndex);
  };

  return (
    <div className="grid grid-cols-8 items-center px-4">
      <div className="col-span-5">
        <Typography>{data[activeSlideIndex].name}</Typography>
        <Typography>{data[activeSlideIndex].coins}</Typography>
        <div>
          <ProgressIndicator
            progressPercent={data[activeSlideIndex].progress}
          />
        </div>
        <Typography>{data[activeSlideIndex].coinsToGo}Coins to go</Typography>
      </div>
      <div className="col-span-3">
        <Swiper handleSlideChange={handleChange} slides={data} />
      </div>
    </div>
  );
};

export default Rewards;
