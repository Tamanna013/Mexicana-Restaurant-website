import { motion, useScroll, useTransform } from 'framer-motion';

const SecondBase = () => {
  const { scrollY } = useScroll();
  const yValue = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a1208] border-8 border-[#113212] rounded-lg">
      {/* Parallax Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/dining-scene.jpg')`,
          y: yValue,
        }}
      />

      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/cocktail.jpg')`,
          y: yValue,
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#FEEAA3] max-w-3xl leading-snug drop-shadow-md">
          We're talking nachos, tacos, quesadillas, burritos, jalapeños, tequila, mocktails, friendship.
        </h1>

        <button className="mt-6 bg-[#F15A29] text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-[#d94d21] transition">
          Reserveer je tafel
        </button>
      </div>
    </div>
  );
};

export default SecondBase;
