import Navbar from '../components/Navbar'
import Image1 from '../assets/ImageBackground.png'
import Image2 from '../assets/image2.png'
import Footer from '../components/Footer'
import CardList from '../components/cardList'
import Folder from '../components/Folder'
import GridSection from '../components/GreidSection'
import GridFeedback from '../components/GridFeedback'
import Subscribe from '../components/Subscribe'

import { Satellite } from 'lucide-react'

function AboutUs() {
    return (
        <div className="min-h-screen bg-white/90 w-full overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden p-4 md:p-8">
                <img
                    src={Image1}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 flex items-center h-full px-4 md:px-16">
                    <div className="max-w-4xl text-white">
                        <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 backdrop-blur-md rounded-full px-4 py-1.5 md:px-5 md:py-2">
                            <Satellite className="w-3 h-3 md:w-4 md:h-4 text-[#192048]/80" />
                            <span className="text-xs md:text-sm font-medium">
                                Excellence in Technology Education
                            </span>
                        </div>

                        {/* Responsive Text: Smaller on mobile, Large on Desktop */}
                        <p className="mt-6 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight text-white">
                            E-ROBOT
                        </p>

                        <p className="mt-4 text-sm md:text-2xl font-semibold uppercase text-white/90">
                            The universe of us is loving and curiosity
                        </p>

                        <p className="mt-6 text-sm md:text-lg leading-relaxed md:leading-8 text-white/80 max-w-2xl">
                            ការចូលរួមអភិវឌ្ឍន៍សង្គម គឺជាការរៀបចំអនាគតសម្រាប់មនុស្សជំនាន់ក្រោយ។
                            យើងជឿជាក់ថា ការអប់រំគឺជាគន្លងដ៏សំខាន់ក្នុងការបង្កើតសង្គមដែលមានការរីកចម្រើន។
                        </p>

                        <button className="mt-8 inline-flex items-center gap-3 bg-[#222b5d]/90 hover:bg-[#192048] text-white text-xs md:text-sm font-bold py-3 px-6 md:px-7 rounded-full transition-all duration-300 hover:translate-x-2">
                            View Goals
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="bg-[#f9f9f9] py-12 md:py-20 px-4 md:px-24">
                
                {/* WHAT WE ARE - Responsive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
                    <div className="mt-8 md:mt-24">
                        <p className="text-[#192048] text-2xl md:text-4xl font-black mb-6 md:mb-10 uppercase tracking-tight">
                            WHAT WE ARE KNOWS US
                        </p>
                        <p className="text-black text-base md:text-lg leading-relaxed max-w-md">
                            We do what student need to know, need to learn, need to hear. We are a team whose can change their life up to growth for their talents
                        </p>
                    </div>
                    <CardList />
                </div>

                {/* HOW YOU CAN KNOWS - Responsive Timeline */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        {/* The Vertical Line - Centered relative to the 10/12 width of the circles */}
                        <div className="absolute left-5 md:left-6 top-5 bottom-5 w-[3px] md:w-[4px] bg-[#192048]"></div>
                        
                        <div className="space-y-12 md:space-y-16">
                            {[
                                { title: "FOUNDATION BUILDING", desc: "Core technology principles and digital literacy" },
                                { title: "SKILL DEVELOPMENT", desc: "Hands-on programming and project-based learning" },
                                { title: "INNOVATION & ENTREPRENEURSHIP", desc: "Creative thinking and business acumen development" }
                            ].map((step, index) => (
                                <div key={index} className="relative flex items-start gap-6 md:gap-8 group">
                                    
                                    {/* Circle Container - Ensuring fixed width helps line alignment */}
                                    <div className="relative flex items-center justify-center shrink-0 w-10 h-10 md:w-12 md:h-12">
                                        <div className="w-full h-full bg-[#ff413c] rounded-full z-10 transition-transform group-hover:scale-110 shadow-lg"></div>
                                    </div>

                                    {/* Text Content - Adjusted margin to align with the top of the circle */}
                                    <div className="pt-1 md:pt-2">
                                        <h4 className="text-[#192048] font-black text-lg md:text-xl leading-tight">
                                            {step.title}
                                        </h4>
                                        <p className="text-gray-500 font-medium text-xs md:text-sm mt-1">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:pl-10 order-1 lg:order-2">
                        <p className="text-[#192048] text-2xl md:text-4xl font-black mb-6 uppercase tracking-tight">
                            HOW YOU CAN KNOWS ABOUT US
                        </p>
                        <p className="text-black text-base md:text-lg leading-relaxed mb-6">
                            The pioneer of a new educational path in technology and entrepreneurship that bridges 
                            students to their best potential of tomorrow.
                        </p>
                        <button className="text-[#192048] font-black flex items-center gap-2 hover:translate-x-2 transition-transform text-sm md:text-base">
                            detail more <span className="text-xl">→</span>
                        </button>
                    </div>
                </div>
                        
                {/* Why E-ROBOT Section */}
                <div className="mt-24">
                    <p className="text-center text-[#192048] text-2xl md:text-4xl font-bold mb-10 uppercase tracking-tight">
                        why E-ROBOT 
                    </p>
                    <GridSection />
                </div>

                {/* Folder Section - Height adjusted for mobile */}
                <div className="min-h-[50vh] md:min-h-screen w-full flex items-center justify-center bg-[#f9f9f9] py-10">
                    <div className="w-full max-w-sm md:max-w-none px-4">
                        <Folder imgSrc={Image2} title="Volunteer Memories" />
                    </div>
                </div>
                
                {/* Feedback Section */}
                <div className="text-center text-[#192048] text-2xl md:text-4xl font-bold mb-8 md:mb-12 uppercase tracking-tight mt-10">
                    WHAT OUR VOLUNTEER SAYS ABOUT US
                </div>
                <GridFeedback />

                {/* Subscribe Section */}
                <div className="mt-10">
                    <Subscribe />
                </div>
            </section>
        </div>
    )
}

export default AboutUs