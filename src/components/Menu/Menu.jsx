import React from 'react';
import blackCoffee1 from '../../assets/black.png';
import blackCoffee2 from '../../assets/es.png';
import cortadoMilkCoffee from '../../assets/cr.png';
import coldCoffee from '../../assets/cold.jpg';
import coldCoffee2 from '../../assets/iced.jpg';
import milkCoffee from '../../assets/flat.png';

import latte from '../../assets/latte.png';
import am from '../../assets/am.png';
import nitros from '../../assets/nitros.png';

const CoffeeCard = ({ name, price, tag, description, image }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
    
    <div className="relative w-full h-96"> 
      <img src={image} alt={name} className="object-cover w-full h-full" />
      <span className="absolute top-2 left-2 bg-[#301D16]/90 text-white text-xs px-3 py-1 rounded-full">
        {tag}
      </span>
      <span className="absolute bottom-2 right-2 bg-[#301D16]/90 text-white text-sm px-3 py-1 rounded-full font-semibold">
        {price}
      </span>
    </div>
    <div className="p-4">
      <h3 className="text-lg text-[#301D16] font-bold mb-1">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const CoffeeSection = ({ title, subtitle, items }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-light text-[#301D16] mb-1">{title}</h2>
    <p className="text-gray-500 mb-6 text-sm">{subtitle}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <CoffeeCard key={index} {...item} />
      ))}
    </div>
  </div>
);

const MenuLayout = () => {
  const sections = [
    {
      title: 'Single Origin',
      subtitle: 'Pure, unblended coffee from a single farm',
      items: [
        {
          name: 'Black Coffee',
          price: '$4.50',
          tag: 'Black Coffee',
          image: blackCoffee1,
          description: 'Intense, earthy and bold single origin brew.',
        },
        {
          name: 'Espresso',
          price: '$4.00',
          tag: 'Black Coffee',
          image: blackCoffee2,
          description: 'Classic Italian-style strong short coffee.',
        },
        { 
          name: 'Americano',
          price: '$4.20',
          tag: 'Black Coffee',
          image: am, 
          description: 'Espresso with hot water for a milder taste.',
        },
      ],
    },
    {
      title: 'Milk-Based',
      subtitle: 'Smooth blends of espresso and steamed milk',
      items: [
        {
          name: 'Cortado Milk Coffee',
          price: '$5.50',
          tag: 'Milk Coffee',
          image: cortadoMilkCoffee,
          description: 'Warm milk mixed with balanced espresso.',
        },
        {
          name: 'Flat White',
          price: '$5.80',
          tag: 'Milk Coffee',
          image: milkCoffee,
          description: 'Smooth microfoam and double-shot espresso.',
        },
        { 
          name: 'Latte',
          price: '$6.00',
          tag: 'Milk Coffee',
          image: latte, 
          description: 'Creamy espresso drink with a generous amount of steamed milk.',
        },
      ],
    },
    {
      title: 'Cold Brews',
      subtitle: 'Refreshing and chilled espresso blends',
      items: [
        {
          name: 'Nitro Cold Brew',
          price: '$6.00',
          tag: 'Cold Coffee',
          image: nitros,
          description: 'Infused with nitrogen for smooth texture.',
        },
        {
          name: 'Iced Americano',
          price: '$4.50',
          tag: 'Cold Coffee',
          image: coldCoffee2,
          description: 'Espresso served over ice and cold water.',
        },
        { 
          name: 'Cold Brew',
          price: '$5.50',
          tag: 'Cold Coffee',
          image: coldCoffee, 
          description: 'Slow-steeped coffee concentrate, served over ice.',
        },
      ],
    },
  ];

  return (
    <main className="max-w-screen-xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-light text-[#301D16]">Perk & Pause MENU</h1>
        <p className="text-gray-600 mt-2">Curated selections from our coffee bar</p>
      </div>

      <div className="space-y-16">
        {sections.map((section, idx) => (
          <CoffeeSection key={idx} {...section} />
        ))}
      </div>
    </main>
  );
};

export default MenuLayout;