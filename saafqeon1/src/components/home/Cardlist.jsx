import React from "react";
import Card from "./Card";
import { FaBrain } from "react-icons/fa6";

const CardList = () => {
  const cardData = [
    {
      title: "Card Title 1",
      description:
        "At the forefront of technological innovation, we provide advanced AI services  machine learning, natural language processing",
      icon: <FaBrain size={50} />,
      time: "2 hours ago",
    },
    {
      title: "Card Title 1",
      description:
        "At the forefront of technological innovation, we provide advanced AI services  machine learning, natural language processing",
      icon: <FaBrain size={50} />,
      time: "2 hours ago",
    },
    {
      title: "Card Title 1",
      description:
        "At the forefront of technological innovation, we provide advanced AI services  machine learning, natural language processing",
      icon: <FaBrain size={50} />,
      time: "2 hours ago",
    },
    {
      title: "Card Title 1",
      description:
        "At the forefront of technological innovation, we provide advanced AI services  machine learning, natural language processing",
      icon: <FaBrain size={50} />,
      time: "2 hours ago",
    },
    {
      title: "Card Title 1",
      description:
        "At the forefront of technological innovation, we provide advanced AI services  machine learning, natural language processing",
      icon: <FaBrain size={50} />,
      time: "2 hours ago",
    },
    {
      title: "Card Title 1",
      description:
        "At the forefront of technological innovation, we provide advanced AI services  machine learning, natural language processing",
      icon: <FaBrain size={50} />,
      time: "2 hours ago",
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            time={card.time}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
