import React from 'react';

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-[#990000]">
      <div className="font-bold text-xl mb-2 text-white">{title}</div>
      <p className="text-white text-base">{description}</p>
    </div>
  );
};

const CardGrid: React.FC = () => {
  const cardsData = [
    { title: 'Speciality', description: 'Internal Medicine' },
    { title: 'Setting', description: 'Outpatient' },
    { title: 'Outcome', description: '90-day Mortality' },
    { title: 'Name', description: 'Doe, Joe' },
    { title: 'Location Name', description: 'Keck Medicine of USC' },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cardsData.slice(0, 3).map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {cardsData.slice(3, 5).map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
