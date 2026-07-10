import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, ArrowRight } from 'lucide-react';

const PrincipalMessagePreview: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="section-y bg-white relative overflow-hidden text-center md:text-left">
            <div className="section-container">
                <div className="grid lg:grid-cols-[1fr,2fr] gap-10 lg:gap-16 items-center">

                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.7 }}
                        className="relative mx-auto lg:mx-0 w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
                    >
                        <div className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white bg-neutral-50 relative">
                            <img
                                src="principal.jpg"
                                alt="Principal Portrait"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -inset-4 bg-primary/10 rounded-full -z-10 rotate-3"></div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col justify-center items-center md:items-start"
                    >
                        <Quote className="w-12 h-12 text-primary/20 mb-6 rotate-180" />
                        <h2 className="font-serif text-2xl lg:text-3xl font-bold text-neutral-900 leading-snug mb-6 text-center md:text-left">
                            "Education is not just about acquiring knowledge, but about developing the mindset to apply that knowledge for the betterment of society."
                        </h2>
                        <p className="text-neutral-600 leading-relaxed mb-6 max-w-2xl text-[15px] lg:text-[16px] text-justify">
                            Welcome to SRIT, where excellence is a habit and innovation is an everyday pursuit. Our commitment to a transformative educational experience extends beyond the classroom, preparing students to lead with purpose in a rapidly evolving technological landscape.
                        </p>
                        
                        {/* Principal Profile Name/Title */}
                        <div className="mb-8 text-center md:text-left">
                            <h4 className="font-serif text-lg font-bold text-neutral-900">Dr. G. Balakrishna</h4>
                            <p className="text-primary font-semibold text-xs uppercase tracking-wider mt-0.5">Principal, SRIT</p>
                        </div>

                        <a
                            href="/message-from-head"
                            className="inline-flex items-center gap-2 group text-primary font-semibold hover:text-orange-600 transition-colors"
                        >
                            Read Full Message
                            <span className="group-hover:translate-x-1 transition-transform">
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PrincipalMessagePreview;
