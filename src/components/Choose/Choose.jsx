import React from 'react';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Choose() {
  const iconColor = "#301D16";

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: iconColor }}>
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg">
            <CoffeeIcon style={{ fontSize: 60, color: iconColor }} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: iconColor }}>
              Freshly Roasted Beans
            </h3>
            <p className="text-gray-700">
              We meticulously source and expertly roast the finest coffee beans to ensure maximum flavor in every cup.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg">
            <LocalCafeIcon style={{ fontSize: 60, color: iconColor }} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: iconColor }}>
              Expert Baristas
            </h3>
            <p className="text-gray-700">
              Our skilled baristas are passionate about crafting the perfect coffee, just the way you like it.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg">
            <FavoriteIcon style={{ fontSize: 60, color: iconColor }} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: iconColor }}>
              Cozy Atmosphere
            </h3>
            <p className="text-gray-700">
              A welcoming and comfortable space designed for relaxation, work, and memorable coffee experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;