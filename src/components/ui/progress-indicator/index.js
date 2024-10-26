"use client";

import React from "react";
import * as Progress from "@radix-ui/react-progress";

const ProgressIndicator = ({ progressPercent }) => {
  return (
    <Progress.Root
      className="relative h-4 w-full overflow-hidden rounded-full bg-black"
      style={{
        // Fix overflow clipping in Safari
        transform: "translateZ(0)",
      }}
      value={progressPercent}
    >
      <Progress.Indicator
        className="size-full bg-white transition-transform "
        style={{ transform: `translateX(-${100 - progressPercent}%)` }}
      />
    </Progress.Root>
  );
};

export { ProgressIndicator };