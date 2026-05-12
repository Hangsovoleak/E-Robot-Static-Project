import React from 'react';

const GridFeedback = () => {
  const feedbacks = [
    {
      name: "RORN HANGSOVOLEAK",
      university: "Royal University of Phnom Penh",
      image: "https://i.pinimg.com/736x/54/f8/e5/54f8e5d2ffd42936c79315012a560e03.jpg",
      text: "I am a volunteer as Teacher teaching Scratch and Arduino to students can hear, can learned about technologies. I am very appropriated to myself that I can join this opportunity."
    },
    {
      name: "HENG LYHORNG",
      university: "Royal University of Phnom Penh",
      image: "https://i.pinimg.com/736x/fd/a8/26/fda8264e314ed532889eb26fa5eb40e4.jpg",
      text: "I am a volunteer as Teacher teaching Scratch and Arduino to students can hear, can learned about technologies. I am very appropriated to myself that I can join this opportunity."
    },
    {
      name: "LONG PORTY",
      university: "Royal University of Phnom Penh",
      image: "https://i.pinimg.com/736x/ca/3a/ee/ca3aee1248c25c652e338cbba6e372ad.jpg",
      text: "I am a volunteer as Teacher teaching Scratch and Arduino to students can hear, can learned about technologies. I am very appropriated to myself that I can join this opportunity."
    }
  ];

  return (
    /* Adjusted padding and gap for mobile responsiveness */
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 w-full max-w-7xl mx-auto px-6 md:p-8">
      {feedbacks.map((item, index) => (
        <div 
          key={index} 
          /* added active:scale-95 for better mobile tap feedback */
          className="bg-[#1e2342] p-6 md:p-8 rounded-[2rem] shadow-xl flex flex-col gap-6 md:gap-8 
                     transition-all duration-300 ease-in-out
                     hover:scale-[1.03] md:hover:scale-105 
                     active:scale-95 cursor-pointer
                     border-2 border-transparent hover:border-blue-400/30"
        >

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-blue-400/30 shrink-0">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-base md:text-lg leading-tight uppercase">
                {item.name}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">
                {item.university}
              </p>
            </div>
          </div>

          {/* Feedback Text */}
          <p className="text-white text-sm md:text-base leading-relaxed font-medium">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GridFeedback;