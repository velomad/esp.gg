import Rewards from "@/components/rewards";
import React from "react";

const Home = () => {
  const rewards = [
    {
      name: "Hyprex Headphones",
      coins: 1000,
      progress: Math.round((829 / 1000) * 100),
      coinsToGo: 829,
      imageUrl: "/images/headphones.png",
    },
    {
      name: "Logitech G102",
      coins: 700,
      progress: Math.round((200 / 700) * 100),
      coinsToGo: 200,
      imageUrl: "/images/mouse.png",
    },
  ];

  return (
    <div>
      <Rewards data={rewards} />
      <div className="flex justify-end">yest</div>
    </div>
  );
};

export default Home;
