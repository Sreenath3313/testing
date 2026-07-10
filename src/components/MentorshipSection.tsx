import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, GraduationCap, Award, BrainCircuit } from 'lucide-react';

interface Mentor {
    name: string;
    role: string;
    specialization: string;
    focus: string;
    icon: React.ReactNode;
}

const mentors: Mentor[] = [
    {
        name: 'Dr. K. Subba Rao',
        role: 'Chief Mentor & HOD',
        specialization: 'Algorithms & Complexity Theory',
        focus: 'Oversees the overall department academic counseling, student grievance, and career planning.',
        icon: <GraduationCap className="w-6 h-6 text-primary" />
    },
    {
        name: 'Dr. T. Venkateswara Rao',
        role: 'Academic Advisor',
        specialization: 'Database Systems & Big Data',
        focus: 'Mentors students in curriculum selection, elective planning, and university exam preparations.',
        icon: <UserCheck className="w-6 h-6 text-primary" />
    },
    {
        name: 'Dr. G. Prasad',
        role: 'Research & Project Mentor',
        specialization: 'Software Engineering & DevOps',
        focus: 'Guides student research publications, patent filings, and postgraduate admission pathways.',
        icon: <BrainCircuit className="w-6 h-6 text-primary" />
    },
    {
        name: 'Dr. A. Padmavathi',
        role: 'Student Career Counsellor',
        specialization: 'Computer Networks & Security',
        focus: 'Provides personalized advice for mental well-being, placement training, and soft-skills development.',
        icon: <Award className="w-6 h-6 text-primary" />
    }
];

const MentorshipSection: React.FC = () => {
    return (
        <section id="mentorship" className="section-y-lg bg-white overflow-hidden">
            <div className="section-container">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="label-caps text-primary tracking-[0.25em] mb-4"
                    >
                        Student Support
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="heading-lg text-neutral-dark mb-6"
                    >
                        Mentorship System
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-neutral-600 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        Our structured mentorship system pairs student groups with senior professors to nurture technical capabilities and support personal development.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mentors.map((mentor, index) => (
                        <motion.div
                            key={mentor.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200/50 shadow-md flex flex-col justify-between h-[340px]"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    {mentor.icon}
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary block mb-1">
                                    {mentor.role}
                                </span>
                                <h3 className="font-serif text-lg font-bold text-neutral-dark mb-1">
                                    {mentor.name}
                                </h3>
                                <p className="text-xs text-neutral-500 font-medium mb-4">
                                    {mentor.specialization}
                                </p>
                            </div>
                            <p className="text-neutral-600 text-sm leading-relaxed border-t border-neutral-200/60 pt-4 text-justify">
                                {mentor.focus}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MentorshipSection;
