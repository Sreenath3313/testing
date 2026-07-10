import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { departments } from '../data/departments';
import { Users, Microscope, GraduationCap, Briefcase } from 'lucide-react';

const deptImages: Record<string, string> = {
    CSE: '/CSEDept.jpg',
    CSM: '/CSMDept.JPG',
    ECE: '/ECE Dept.JPG',
    EEE: '/EEE Dept.JPG',
    MEC: '/MechDept.JPG',
    CAD: '/CSDDept.JPG',
    CIV: '/CIVILDept.JPG',
};

const Departments: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    // Separate Featured Dept (CSM) from the rest (CSE and others)
    const featuredDept = departments[1];
    const standardDepts = [departments[0], ...departments.slice(2)];

    return (
        <section id="departments" ref={ref} className="section-y-lg bg-warm-50 relative overflow-hidden" style={{ zoom: 0.9 } as React.CSSProperties}>


            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="label-caps text-primary tracking-[0.25em] mb-5">
                        Academics & Research
                    </p>
                    <h2 className="heading-lg text-neutral-dark">
                        Engineering Departments
                    </h2>
                </motion.div>

                {/* --- FEATURED DEPARTMENT --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transition-all duration-500 flex flex-col lg:flex-row border border-neutral-100 relative">
                        {/* Absolute Top Accent */}
                        <div className="absolute top-0 left-0 w-full h-[4px] bg-primary" />

                        {/* Left: Image */}
                        <div className="lg:w-5/12 relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                            <img
                                src={deptImages[featuredDept.code]}
                                alt={featuredDept.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                            <span className="absolute top-6 left-6 px-4 py-1.5 bg-white/95 backdrop-blur-md text-primary text-[11px] font-bold tracking-[0.2em] uppercase rounded shadow-sm z-10">
                                Featured Program
                            </span>
                            <span className="absolute bottom-6 left-6 lg:bottom-auto lg:top-6 lg:right-6 lg:left-auto text-white lg:text-white/80 font-serif text-3xl font-bold opacity-90">
                                {featuredDept.code}
                            </span>
                        </div>

                        {/* Right: Content */}
                        <div className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
                            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-neutral-dark mb-4">
                                {featuredDept.name}
                            </h3>
                            <p className="text-neutral-600 text-[15px] leading-[1.8] mb-8 lg:max-w-2xl text-justify">
                                {featuredDept.description[0]}
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 pb-8 border-b border-neutral-100">
                                <div>
                                    <div className="flex items-center gap-2 text-primary mb-2">
                                        <Users className="w-4 h-4" />
                                        <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-neutral-500">Faculty</span>
                                    </div>
                                    <div className="text-xl font-bold text-neutral-dark">{featuredDept.stats.faculty}</div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-primary mb-2">
                                        <Microscope className="w-4 h-4" />
                                        <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-neutral-500">Labs</span>
                                    </div>
                                    <div className="text-xl font-bold text-neutral-dark">{featuredDept.stats.labs}</div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-primary mb-2">
                                        <GraduationCap className="w-4 h-4" />
                                        <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-neutral-500">Students</span>
                                    </div>
                                    <div className="text-xl font-bold text-neutral-dark">{featuredDept.stats.students}</div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-primary mb-2">
                                        <Briefcase className="w-4 h-4" />
                                        <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-neutral-500">Placed</span>
                                    </div>
                                    <div className="text-xl font-bold text-neutral-dark">{featuredDept.stats.placement}</div>
                                </div>
                            </div>

                            {/* Research Areas */}
                            <div className="mb-10 lg:mb-0">
                                <span className="block text-[11px] font-bold tracking-[0.1em] uppercase text-neutral-400 mb-4">
                                    Research Focus Areas
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {featuredDept.researchAreas.map(area => (
                                        <span key={area} className="px-3 py-1.5 bg-primary/5 border border-primary/20 text-neutral-700 hover:border-primary/50 transition-colors text-[12px] font-medium rounded-full">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-auto pt-6 lg:pt-8 flex items-center justify-between">
                                <Link
                                    to={`/department/${featuredDept.slug}`}
                                    className="inline-flex items-center gap-3 px-8 py-3.5 bg-primary text-white text-[13px] font-semibold tracking-[0.08em] uppercase hover:bg-primary-dark transition-colors duration-300 rounded shadow-md shadow-primary/20"
                                >
                                    Explore Department <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* --- STANDARD DEPARTMENTS GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {standardDepts.map((dept, i) => (
                        <motion.div
                            key={dept.slug}
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                        >
                            <Link
                                to={`/department/${dept.slug}`}
                                className="group block bg-white h-full rounded-lg shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-500 border border-neutral-100 relative"
                            >
                                {/* Bottom Hover Accent Line */}
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                                {/* Image Header */}
                                <div className="relative h-44 sm:h-48 overflow-hidden">
                                    <img
                                        src={deptImages[dept.code]}
                                        alt={dept.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                                    <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                                        <span className="text-white font-serif text-2xl font-bold tracking-wide">
                                            {dept.code}
                                        </span>
                                        <div className="flex gap-4">
                                            <div className="text-center">
                                                <div className="text-white/70 text-[10px] uppercase tracking-wider font-bold mb-0.5">Faculty</div>
                                                <div className="text-white font-semibold text-sm">{dept.stats.faculty}</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-white/70 text-[10px] uppercase tracking-wider font-bold mb-0.5">Labs</div>
                                                <div className="text-white font-semibold text-sm">{dept.stats.labs}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Content Area with hidden hover wrapper */}
                                <div className="relative overflow-hidden bg-white md:h-56">

                                    {/* Default State (Visible initially, slides up on hover) */}
                                    <div className="p-5 sm:p-7 md:absolute md:inset-0 md:transition-transform md:duration-500 md:ease-[0.22,1,0.36,1] md:group-hover:-translate-y-full">
                                        <h3 className="font-serif text-[19px] font-bold text-neutral-dark mb-3 leading-snug">
                                            {dept.name}
                                        </h3>
                                        <p className="text-neutral-500 text-[13.5px] leading-relaxed line-clamp-3">
                                            {dept.tagline}
                                        </p>
                                        <div className="mt-5 md:hidden">
                                            <span className="text-primary text-[10px] font-bold tracking-[0.15em] uppercase block mb-2.5">
                                                Research Focus
                                            </span>
                                            <ul className="space-y-1.5">
                                                {dept.researchAreas.slice(0, 2).map(area => (
                                                    <li key={area} className="flex items-start gap-2 text-[13px] text-neutral-700 font-medium">
                                                        <span className="text-primary mt-1 text-[10px]">■</span>
                                                        <span className="leading-tight">{area}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-4 flex items-center gap-2 text-primary font-bold text-[13px] uppercase tracking-wide">
                                                Explore full details
                                                <span>→</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover State (Hidden initially below, slides up on hover) */}
                                    <div className="hidden md:flex p-7 absolute inset-0 bg-warm-50 translate-y-full transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-y-0 flex-col justify-between">
                                        <div>
                                            <span className="text-primary text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
                                                Research Focus
                                            </span>
                                            <ul className="space-y-2">
                                                {dept.researchAreas.slice(0, 3).map(area => (
                                                    <li key={area} className="flex items-start gap-2 text-[13px] text-neutral-700 font-medium">
                                                        <span className="text-primary mt-1 text-[10px]">■</span>
                                                        <span className="leading-tight">{area}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex items-center gap-2 text-primary font-bold text-[13px] uppercase tracking-wide">
                                            Explore full details
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Departments;
