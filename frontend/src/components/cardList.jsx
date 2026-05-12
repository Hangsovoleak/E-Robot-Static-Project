import {Terminal, Lightbulb, Rocket} from 'lucide-react';


const cardData = [
  {
    id: 1,
    title: "TECHNOLOGY MASTERY",
    description: "Building foundational skills for the digital age.",
    sticker: <Terminal className="h-6 w-6 text-white" />
  },
  {
    id: 2,
    title: "ENTREPRENEURIAL MINDSET",
    description: "Fostering innovation and creative problem-solving.",
    sticker: <Lightbulb color="#ffffff" />
  },
  {
    id: 3,
    title: "FUTURE-READY SKILLS",
    description: "Preparing students for tomorrow's challenges",
    sticker: <Rocket color="#ffffff" />
  }
];

export default function CardList() {
  return (
    <div className="space-y-6">
      {cardData.map((item) => (
        <div key={item.id} className="flex items-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300">
          
          {/* Blue Box with Sticker */}
          <div className="relative flex items-center justify-center w-12 h-12 bg-[#192048] rounded-lg shrink-0">
            <span className="text-xl">{item.sticker}</span>
          </div>

          {/* Unique Text Content */}
          <div className="ml-6 flex-1">
            <h4 className="text-sm font-bold text-gray-900 leading-tight">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              {item.description}
            </p>
          </div>
          
        </div>
      ))}
    </div>
  );
}