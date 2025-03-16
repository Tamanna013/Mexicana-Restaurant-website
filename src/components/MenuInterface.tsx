import { useState } from "react";

interface MenuItem {
  id: string;
  name: string;
  imageUrl: string;
  imageAlt: string;
}

export default function MenuInterface() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      id: "cocktails",
      name: "COCKTAILS",
      imageUrl: "https://placehold.co/600x400/ff6347/0a1208?text=Cocktails",
      imageAlt: "Colorful Mexican cocktails including margaritas with salt rim and lime garnish"
    },
    {
      id: "signatures",
      name: "SIGNATURES",
      imageUrl: "https://placehold.co/600x400/ff6347/0a1208?text=Signatures",
      imageAlt: "Signature Mexican dishes arranged on a decorative plate with garnishes"
    },
    {
      id: "tacos",
      name: "TACOS",
      imageUrl: "https://placehold.co/600x400/ff6347/0a1208?text=Tacos",
      imageAlt: "Authentic Mexican tacos with various fillings, cilantro, and lime wedges"
    },
    {
      id: "quesadillas",
      name: "QUESADILLAS",
      imageUrl: "https://placehold.co/600x400/ff6347/0a1208?text=Quesadillas",
      imageAlt: "Cheese quesadillas with melted cheese oozing from the sides and toppings"
    },
    {
      id: "enchiladas",
      name: "ENCHILADA'S",
      imageUrl: "https://placehold.co/600x400/ff6347/0a1208?text=Enchiladas",
      imageAlt: "Enchiladas covered in red sauce with cheese, served with rice and beans"
    },
    {
      id: "huarache",
      name: "HUARACHE",
      imageUrl: "https://placehold.co/600x400/ff6347/0a1208?text=Huarache",
      imageAlt: "Traditional Mexican huarache with toppings and sauce"
    }
  ];

  return (
    <div className="bg-[#0a1208] min-h-screen text-white font-sans relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-[20%] left-[10%] w-40 h-40 bg-[#ff6347] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] left-[5%] w-60 h-60 bg-[#ff6347] rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Menu */}
          <div>
            <h1 className="text-[#ff6347] text-6xl font-bold mb-12">Het Menu</h1>
            
            <div className="space-y-6">
              {menuItems.map((item) => (
                <div 
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center justify-between border-b border-[#e2d9a2]/20 pb-4">
                    <h2 className="text-[#e2d9a2] text-4xl font-bold tracking-wider">{item.name}</h2>
                    
                    {/* Arrow icon that appears on hover */}
                    <span className={`text-[#e2d9a2] transition-opacity duration-300 ${hoveredItem === item.id ? 'opacity-100' : 'opacity-0'}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="#e2d9a2"/>
                      </svg>
                    </span>
                  </div>
                  
                  {/* Image that appears on hover */}
                  <div 
                    className={`absolute left-full ml-8 top-0 w-80 h-60 transition-all duration-300 transform ${
                      hoveredItem === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ pointerEvents: 'none' }}
                  >
                    <img 
                      src={item.imageUrl} 
                      alt={item.imageAlt}
                      className="w-full h-full object-cover rounded-md shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Events */}
          <div>
            <h1 className="text-[#ff6347] text-6xl font-bold mb-12">Events</h1>
            
            <div className="bg-[#0a1208]/60 rounded-lg p-6 border border-[#0a1208]/80">
              <img 
                src="https://placehold.co/800x500/e2d9a2/0a1208?text=Mexican+Food+Preparation" 
                alt="Chef preparing authentic Mexican food on a grill"
                className="w-full h-60 object-cover rounded-md mb-6"
              />
              
              <h2 className="text-[#e2d9a2] text-4xl font-bold text-right mb-2">
                Eens écht<br />
                Mexicaans eten?
              </h2>
              
              <p className="text-right text-[#e2d9a2] mb-8">
                Niet de alledaagse Tex-Mex die je overal<br />
                vindt, maar de échte Mexicaanse keuken,<br />
                zoals die in Mexico wordt bereid. Wij<br />
                willen onze bezoekers echt laten<br />
                ontdekken.
              </p>
              
              <div className="flex justify-end">
                <button className="bg-[#e2d9a2] text-[#0a1208] px-6 py-3 rounded-full font-bold flex items-center">
                  Menu
                  <span className="ml-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12L5.06 11.06L9.13 7H0V5.67H9.13L5.06 1.61L6 0.67L12 6.67L6 12Z" fill="#0a1208"/>
                    </svg>
                  </span>
                </button>
                
                <button className="bg-[#0a1208] border border-[#e2d9a2] text-[#e2d9a2] px-6 py-3 rounded-full font-bold flex items-center ml-4">
                  Reserveer een tafel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
