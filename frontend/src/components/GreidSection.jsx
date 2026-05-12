import { NotebookTabs, Cpu, Route } from 'lucide-react';

const GridSection = () => {
  const cardData = [
    { icon: <NotebookTabs className="w-8 h-8" />, title: "CURRICULUM", desc: "Our curriculum is designed to equip students with the skills and knowledge they need to succeed in the modern world." },
    { icon: <Cpu className="w-8 h-8" />, title: "ECOSYSTEM", desc: "A thriving community of learners and educators." },
    { icon: <Route className="w-8 h-8" />, title: "CLEAR LEARNING PATHWAY", desc: "A clear and structured approach to learning that guides students from beginner to expert." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {cardData.map((item, index) => (
        <div 
          key={index} 
          className="text-center items-center bg-[#ff413c] p-4 rounded-xl shadow-lg border-2 border-transparent hover:border-red-600 transition-all duration-300 flex flex-col justify-center min-h-[200px] hover:scale-105"
        >  
          <div className="mb-4 text-white bg-white/10 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>
          <h3 className="text-white text-2xl font-black mb-2 uppercase tracking-tighter">
            {item.title}
          </h3>
          
          <p className="text-white/80 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GridSection;