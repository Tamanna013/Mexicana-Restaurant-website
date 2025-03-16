const ReservationCard = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://example.com/your-background-image.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-between px-8 py-12 z-10">
        {/* Left Section (Text and Button) */}
        <div className="text-white space-y-6 w-1/2">
          <h2 className="text-4xl font-bold leading-tight">
            Reserveer nu voor een smaakvolle Mexicaanse ervaring.
          </h2>
          <button className="px-8 py-3 bg-orange-600 text-white rounded-md text-xl font-semibold hover:bg-orange-500 transition">
            Reserve
          </button>
        </div>
        
        {/* Right Section (Images) */}
        <div className="relative w-1/2">
          <img 
            src="https://example.com/your-image-1.jpg" 
            alt="Mexican dish" 
            className="absolute top-10 left-10 w-32 h-32 object-cover rounded-lg shadow-lg" 
          />
          <img 
            src="https://example.com/your-image-2.jpg" 
            alt="Mexican decor" 
            className="absolute bottom-10 right-10 w-32 h-32 object-cover rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
