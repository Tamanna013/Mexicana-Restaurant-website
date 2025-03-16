import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex h-screen w-full">
      {/* Image Section */}
      <div className="w-1/2 bg-[url('/path-to-your-image.jpg')] bg-cover bg-center"></div>

      {/* Content Section */}
      <div className="w-1/2 bg-[#0a1208] flex flex-col justify-center items-center text-white p-10">
        <h1 className="text-5xl font-bold mb-4">JOIN THE TACO CLUB</h1>
        <p className="text-lg text-gray-300 mb-6">
          Ontvang originele deals, beperkte aanbiedingen en ons laatste nieuws direct in je mailbox!
        </p>
        
        {/* Email Input */}
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Voer je e-mailadres in..."
          className="w-full p-3 rounded-md text-black mb-4"
        />
        
        {/* Checkbox */}
        <label className="flex items-center text-sm mb-4">
          <input 
            type="checkbox" 
            checked={checked} 
            onChange={() => setChecked(!checked)}
            className="mr-2"
          />
          Ik accepteer de privacy voorwaarden.
        </label>

        {/* Button with Animated SVG */}
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#FF5A5F] text-white py-3 px-6 rounded-full flex items-center gap-2 cursor-pointer"
        >
          Inschrijven
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </motion.svg>
        </motion.button>
      </div>
    </div>
  );
}
