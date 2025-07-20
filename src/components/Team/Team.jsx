import React from "react";

import emma from '../../assets/emma.png';
import marcus from '../../assets/marcus.jpg';
import sofia from '../../assets/sofia.png';

 

const teamMembers = [
  {
    name: "Emma",
    position: "LEAD BARISTA",
    description: "World Barista Championship finalist with 8 years experience",
    image: emma,
  },
  {
    name: "Marcus",
    position: "COFFEE ROASTER",
    description: "Specialty roaster focused on single-origin profiles",
    image: marcus,
  },
  {
    name: "Sofia",
    position: "BREW MASTER",
    description: "Expert in alternative brewing methods and extraction",
    image: sofia,
  },
];

const customTextColor = "#301D16";

const TeamMemberCard = ({ member }) => (
  <div className="flex flex-col items-center text-center px-4">
  
    <div className="w-52 h-52 rounded-full overflow-hidden mb-6 flex items-center justify-center">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* Név, pozíció, leírás */}
    <h3
      className="text-2xl font-semibold mb-1"
      style={{ color: customTextColor }}
    >
      {member.name}
    </h3>
    <p
      className="text-sm font-medium tracking-widest uppercase mb-3"
      style={{ color: customTextColor }}
    >
      {member.position}
    </p>
    <p className="text-gray-600 text-sm leading-snug max-w-xs mx-auto">
      {member.description}
    </p>
  </div>
);

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      <main className="container mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1
            className="text-4xl font-light mb-4"
            style={{ color: customTextColor }}
          >
            TEAM
            <div className="w-16 h-px bg-gray-300 mx-auto mt-2"></div>{" "}
            {/* Aláhúzás */}
          </h1>
          <p className="text-lg text-gray-600">
            Meet the artisans behind every perfect cup
          </p>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Team;
