import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatItem {
    numericEnd: number;   // raw number to count up to
    suffix: string;       // e.g. '+', 'k+'
    label: string;
    display: (n: number) => string; // format the counter value for display
}

const stats: StatItem[] = [
    {
        numericEnd: 15,
        suffix: '+',
        label: 'Years of Excellence',
        display: (n) => `${n}+`,
    },
    {
        numericEnd: 10,
        suffix: 'k+',
        label: 'Global Alumni',
        display: (n) => `${n}k+`,
    },
    {
        numericEnd: 150,
        suffix: '+',
        label: 'Expert Faculty',
        display: (n) => `${n}+`,
    },
    {
        numericEnd: 50,
        suffix: '+',
        label: 'Advanced Labs',
        display: (n) => `${n}+`,
    },
    {
        numericEnd: 100,
        suffix: '+',
        label: 'Top Recruiters',
        display: (n) => `${n}+`,
    },
];

function useCounter(end: number, duration: number, start: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;
        setCount(0);
        const startTime = performance.now();

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(end);
        };

        const raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [start, end, duration]);

    return count;
}

interface CounterCardProps {
    stat: StatItem;
    index: number;
    isInView: boolean;
}

function CounterCard({ stat, index, isInView }: CounterCardProps) {
    const count = useCounter(stat.numericEnd, 1800, isInView);

    return (
        <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`group flex flex-col items-center justify-center text-center relative py-2 ${index > 0 ? 'lg:border-l lg:border-neutral-200' : ''
                } ${index === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
        >
            {/* Index label */}
            <div className="text-[10px] font-bold text-neutral-300 tracking-[0.3em] font-sans mb-4 transition-colors duration-500 group-hover:text-primary/50">
                0{index + 1}
            </div>

            {/* Animated number */}
            <div
                className="font-serif font-black leading-none tracking-tighter transition-transform duration-500 ease-out group-hover:scale-105 cursor-default"
                style={{
                    fontSize: 'clamp(36px, 4vw, 64px)',
                    fontVariantNumeric: 'tabular-nums',
                }}
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-[#ff9e66]">
                    {stat.display(count)}
                </span>
            </div>

            {/* Label */}
            <div className="text-neutral-600 text-[10px] lg:text-[11px] font-extrabold uppercase tracking-[0.25em] mt-4 px-3 transition-colors duration-500 group-hover:text-primary leading-relaxed">
                {stat.label}
            </div>

            {/* Hover underline */}
            <div className="w-0 h-[2px] bg-primary mt-4 transition-all duration-500 ease-out group-hover:w-10 rounded-full" />
        </motion.div>
    );
}

const Stats: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className="bg-white relative border-b border-neutral-100 overflow-hidden">
            {/* Subtle dot-grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

            <div className="relative py-10 lg:py-20">
                <div className="section-container">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4 lg:gap-y-0 lg:gap-x-8">
                        {stats.map((stat, i) => (
                            <CounterCard
                                key={stat.label}
                                stat={stat}
                                index={i}
                                isInView={isInView}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;