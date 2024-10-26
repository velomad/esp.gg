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
    <div className="flex justify-between items-center p-4">
      <div>
        <Typography>{data[activeSlideIndex].name}</Typography>
        <Typography>{data[activeSlideIndex].coins}</Typography>
        <div>
          <ProgressIndicator
            progressPercent={data[activeSlideIndex].progress}
          />
        </div>
        <Typography>{data[activeSlideIndex].coinsToGo} coins to go</Typography>
      </div>
      <div>
        <Swiper handleSlideChange={handleChange} slides={data} />
      </div>
    </div>
  );
};

export default Rewards;
