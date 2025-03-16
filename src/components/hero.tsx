import { useState } from "react";
import "../App.css";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#0a1208] min-h-screen text-white font-sans relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-[20%] left-[10%] w-40 h-40 bg-[#ff6347] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] left-[5%] w-60 h-60 bg-[#ff6347] rounded-full blur-3xl"></div>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center p-6">
          {/* Left side - Menu and Reserveer nu */}
          <div className="flex items-center gap-4">
            <button className="flex items-center text-[#e2d9a2] text-xl font-bold">
              <span className="mr-4">
                <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0" width="36" height="4" rx="2" fill="#e2d9a2"/>
                  <rect y="10" width="36" height="4" rx="2" fill="#e2d9a2"/>
                  <rect y="20" width="36" height="4" rx="2" fill="#e2d9a2"/>
                </svg>
              </span>
              Menu
            </button>
            <button className="bg-[#e2d9a2] text-[#0a1208] px-6 py-3 rounded-full font-bold flex items-center">
              Reserveer nu
              <span className="ml-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L5.06 11.06L9.13 7H0V5.67H9.13L5.06 1.61L6 0.67L12 6.67L6 12Z" fill="#0a1208"/>
                </svg>
              </span>
            </button>
          </div>
          
          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-6">
            <h1 className="text-5xl font-bold text-[#ff6347] transform rotate-6">Los TONTOS</h1>
          </div>
          
          {/* Right side - Phone and social */}
          <div className="flex items-center gap-6">
            <span className="text-[#e2d9a2] font-bold flex items-center">
              <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 11.7c0 0.2-0.1 0.4-0.2 0.6 -0.1 0.2-0.3 0.4-0.5 0.5 -0.4 0.3-0.8 0.5-1.3 0.6 -0.5 0.1-0.9 0.2-1.4 0.2 -0.7 0-1.4-0.1-2.1-0.4 -0.7-0.3-1.4-0.6-2.1-1.1 -0.7-0.5-1.3-1-1.9-1.6 -0.6-0.6-1.1-1.2-1.6-1.9 -0.5-0.7-0.8-1.4-1.1-2.1 -0.3-0.7-0.4-1.4-0.4-2.1 0-0.5 0.1-0.9 0.2-1.4C3.2 2.5 3.4 2 3.7 1.7c0.4-0.4 0.8-0.6 1.2-0.6 0.2 0 0.3 0 0.5 0.1 0.1 0.1 0.3 0.2 0.4 0.4l2 3.7c0.1 0.2 0.2 0.4 0.2 0.5 0.1 0.2 0.1 0.3 0.1 0.5 0 0.2-0.1 0.4-0.2 0.6 -0.1 0.2-0.3 0.4-0.5 0.5l-0.7 0.7c0 0.1-0.1 0.1-0.1 0.2 0 0.1 0 0.1 0 0.2 0.1 0.3 0.3 0.6 0.5 0.9 0.2 0.4 0.5 0.7 0.8 1.1 0.4 0.4 0.7 0.7 1.1 1 0.4 0.3 0.7 0.5 1 0.6 0.1 0 0.1 0.1 0.2 0.1 0.1 0 0.2 0 0.2-0.1l0.7-0.7c0.2-0.2 0.4-0.3 0.6-0.5 0.2-0.1 0.4-0.2 0.6-0.2 0.2 0 0.3 0 0.5 0.1 0.2 0.1 0.4 0.1 0.5 0.2l3.7 2.2c0.2 0.1 0.3 0.2 0.4 0.4 0.1 0.1 0.1 0.3 0.1 0.5Z" fill="#e2d9a2"/>
              </svg>
              +32 468 45 01 95
            </span>
            <div className="flex gap-3">
              <a href="#" className="bg-[#ff6347] rounded-full w-12 h-12 flex items-center justify-center">
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.06 24V12.73H0V8.71H3.06V5.41C3.06 2.38 4.91 0 8.29 0 9.94 0 11.31 0.12 11.31 0.12V3.03H9.24C7.5 3.03 7.19 3.98 7.19 5.3V8.71H11.16L10.63 12.73H7.19V24" fill="#0a1208"/>
                </svg>
              </a>
              <a href="#" className="bg-[#ff6347] rounded-full w-12 h-12 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.16C15.2 2.16 15.58 2.17 16.82 2.23C18.02 2.28 18.71 2.47 19.17 2.63C19.78 2.84 20.22 3.1 20.68 3.56C21.13 4.01 21.4 4.45 21.61 5.06C21.77 5.52 21.96 6.21 22.01 7.41C22.07 8.65 22.08 9.03 22.08 12.23C22.08 15.43 22.07 15.81 22.01 17.05C21.96 18.25 21.77 18.94 21.61 19.4C21.4 20.01 21.14 20.45 20.68 20.91C20.23 21.36 19.79 21.63 19.18 21.84C18.72 22 18.03 22.19 16.83 22.24C15.59 22.3 15.21 22.31 12.01 22.31C8.81 22.31 8.43 22.3 7.19 22.24C5.99 22.19 5.3 22 4.84 21.84C4.23 21.63 3.79 21.37 3.33 20.91C2.88 20.46 2.61 20.02 2.4 19.41C2.24 18.95 2.05 18.26 2 17.06C1.94 15.82 1.93 15.44 1.93 12.24C1.93 9.04 1.94 8.66 2 7.42C2.05 6.22 2.24 5.53 2.4 5.07C2.61 4.46 2.87 4.02 3.33 3.56C3.78 3.11 4.22 2.84 4.83 2.63C5.29 2.47 5.98 2.28 7.18 2.23C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33 0.01 7.07 0.07C5.82 0.13 4.94 0.33 4.17 0.63C3.36 0.94 2.68 1.36 2 2.04C1.32 2.72 0.9 3.4 0.59 4.21C0.29 4.98 0.09 5.86 0.03 7.11C-0.03 8.37 -0.04 8.78 -0.04 12.04C-0.04 15.3 -0.03 15.71 0.03 16.97C0.09 18.22 0.29 19.1 0.59 19.87C0.9 20.68 1.32 21.36 2 22.04C2.68 22.72 3.36 23.14 4.17 23.45C4.94 23.75 5.82 23.95 7.07 24.01C8.33 24.07 8.74 24.08 12 24.08C15.26 24.08 15.67 24.07 16.93 24.01C18.18 23.95 19.06 23.75 19.83 23.45C20.64 23.14 21.32 22.72 22 22.04C22.68 21.36 23.1 20.68 23.41 19.87C23.71 19.1 23.91 18.22 23.97 16.97C24.03 15.71 24.04 15.3 24.04 12.04C24.04 8.78 24.03 8.37 23.97 7.11C23.91 5.86 23.71 4.98 23.41 4.21C23.1 3.4 22.68 2.72 22 2.04C21.32 1.36 20.64 0.94 19.83 0.63C19.06 0.33 18.18 0.13 16.93 0.07C15.67 0.01 15.26 0 12 0Z" fill="#0a1208"/>
                  <path d="M12 5.84C8.6 5.84 5.84 8.6 5.84 12C5.84 15.4 8.6 18.16 12 18.16C15.4 18.16 18.16 15.4 18.16 12C18.16 8.6 15.4 5.84 12 5.84ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="#0a1208"/>
                  <path d="M19.85 5.6C19.85 6.39 19.2 7.04 18.41 7.04C17.62 7.04 16.97 6.39 16.97 5.6C16.97 4.81 17.62 4.16 18.41 4.16C19.2 4.16 19.85 4.81 19.85 5.6Z" fill="#0a1208"/>
                </svg>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-2">
          {/* Left Side */}
          <div className="p-12 pt-16 relative">
            {/* Open today notification */}
            <div className="flex items-center mb-8 text-[#e2d9a2]">
              <svg className="mr-3" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0L20.12 13.88L34 18L20.12 22.12L18 36L15.88 22.12L2 18L15.88 13.88L18 0Z" fill="#e2d9a2"/>
              </svg>
              <span className="uppercase text-lg tracking-wider font-bold">Vandaag open vanaf 15:00</span>
            </div>
            
            {/* Main heading */}
            <h2 className="text-[5rem] leading-[0.9] font-bold text-[#ff6347]">
              Mexican<br />
              Cantina in<br />
              Elewijt
            </h2>
            
            {/* Description */}
            <p className="mt-8 text-[#e2d9a2] text-lg leading-relaxed">
              Los Tontos is een gezellig Mexicaans restaurant aan de
              Tervuursesteenweg in Elewijt. Tussen margarita, Jarritos en
              plezierige ambiance doen we je proeven van verrukkelijke tacos, quesadillas,
              enchiladas y más. Verwacht een fiesta van levendige smaken, kleuren en
              texturen, zowel op je bord als in het interieur. <span className="italic">¡qué chido!</span>
            </p>

            {/* Action buttons */}
            <div className="mt-10 flex gap-6">
              <button className="bg-[#e2d9a2] px-8 py-4 rounded-full text-[#0a1208] font-bold flex items-center">
                Reserveren
                <span className="ml-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L5.06 11.06L9.13 7H0V5.67H9.13L5.06 1.61L6 0.67L12 6.67L6 12Z" fill="#0a1208"/>
                  </svg>
                </span>
              </button>
              <button className="text-[#ff6347] text-lg font-bold">Bekijk menu</button>
            </div>
          </div>

          {/* Right Side (Image with Hover Effect) */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://placehold.co/800x800/e2d9a2/0a1208?text=Delicious+Tacos"
              alt="Plate of delicious tacos with green salsa, diced tomatoes, and lime on a blue plate"
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src="https://placehold.co/800x800/ff6347/0a1208?text=Restaurant+Interior"
              alt="Interior of Los Tontos Mexican restaurant showing colorful decor and dining area"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
            
            {/* Reservation button overlay */}
            <div className="absolute bottom-6 right-6 z-10">
              <button className="bg-[#0a1208] border border-[#0a1208] text-white px-6 py-4 rounded-md flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.7 3.3c-0.4-0.4-0.9-0.7-1.5-0.9 -0.6-0.2-1.2-0.3-1.8-0.3 -0.6 0-1.2 0.1-1.8 0.3 -0.6 0.2-1.1 0.5-1.5 0.9L4.3 14.1c-0.1 0.1-0.2 0.3-0.3 0.4 -0.1 0.1-0.1 0.3-0.1 0.5l-0.8 6.1c0 0.2 0 0.4 0.1 0.6 0.1 0.2 0.2 0.3 0.3 0.5 0.1 0.1 0.3 0.2 0.5 0.3 0.2 0.1 0.4 0.1 0.6 0.1h0.2l6.1-0.8c0.2 0 0.3-0.1 0.5-0.1 0.1-0.1 0.3-0.2 0.4-0.3l10.8-10.8c0.4-0.4 0.7-0.9 0.9-1.5 0.2-0.6 0.3-1.2 0.3-1.8 0-0.6-0.1-1.2-0.3-1.8 -0.2-0.6-0.5-1.1-0.9-1.5ZM9.1 17.4l-3.8-3.8L15 3.9l3.8 3.8L9.1 17.4Z" fill="white"/>
                </svg>
                <span className="text-lg font-bold">Reserveer een tafel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;