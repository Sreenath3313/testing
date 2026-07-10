import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, GraduationCap, Sparkles, BookOpen } from 'lucide-react';

const AdmissionsPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after a short delay (removed session storage for easy viewing)
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-neutral-900/60 backdrop-blur-md"
                        onClick={closePopup}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-[900px] bg-white rounded-3xl md:rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] flex flex-col md:flex-row min-h-[450px] md:min-h-[550px]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-5 right-5 z-50 p-2.5 bg-white/50 md:bg-neutral-100 hover:bg-white md:hover:bg-neutral-200 backdrop-blur-md rounded-full text-neutral-600 hover:text-neutral-900 transition-all shadow-sm"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Left Side - Graphic / Branding */}
                        <div className="relative w-full md:w-1/2 bg-gradient-to-br from-primary to-[#ff6a00] p-8 md:p-12 flex flex-col justify-end overflow-hidden text-white min-h-[250px] md:min-h-full">
                            {/* Decorative background circles */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                            
                            <div className="relative z-10 w-full">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/30">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    2026-27 Intake
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black leading-[1.1] text-white drop-shadow-sm">
                                    Your Future<br />Starts Here.
                                </h2>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="relative w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                            <h3 className="text-[28px] font-black text-neutral-900 mb-3 leading-tight">
                                Admissions Are<br />Now Open
                            </h3>
                            <p className="text-neutral-500 mb-10 leading-relaxed font-medium">
                                Join the legacy of excellence at Srinivasa Ramanujan Institute of Technology. Applications are open for all programs.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-6 hover:bg-orange-50 hover:border-orange-200 transition-all cursor-pointer group">
                                    <GraduationCap className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300 origin-bottom-left" />
                                    <h4 className="font-bold text-neutral-900 text-lg">B.Tech</h4>
                                    <p className="text-xs text-neutral-500 mt-1 font-medium">4-Year Programs</p>
                                </div>
                                <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-6 hover:bg-orange-50 hover:border-orange-200 transition-all cursor-pointer group">
                                    <BookOpen className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300 origin-bottom-left" />
                                    <h4 className="font-bold text-neutral-900 text-lg">M.Tech</h4>
                                    <p className="text-xs text-neutral-500 mt-1 font-medium">2-Year Programs</p>
                                </div>
                            </div>

                            <button className="w-full bg-neutral-900 hover:bg-primary text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl shadow-neutral-900/10 hover:shadow-primary/30 flex items-center justify-center gap-2 group mt-auto">
                                Start Your Application
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AdmissionsPopup;
