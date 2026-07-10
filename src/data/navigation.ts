export interface SubItem {
    label: string;
    href: string;
}

export interface NavLink {
    label: string;
    href: string;
    hasDropdown: boolean;
    subItems?: SubItem[];
}

export const navLinks: NavLink[] = [
    { label: 'Home', href: '/', hasDropdown: false },
    { 
        label: 'About Us', 
        href: '/#about', 
        hasDropdown: true,
        subItems: [
            { label: 'Overview', href: '/#about' },
            { label: 'Vision & Mission', href: '/#vision' },
            { label: 'Leadership', href: '/#leadership' }
        ]
    },
    { 
        label: 'Admissions', 
        href: '/#admissions', 
        hasDropdown: true,
        subItems: [
            { label: 'B.Tech Programs', href: '/#btech' },
            { label: 'M.Tech Programs', href: '/#mtech' },
            { label: 'Admission Process', href: '/#process' }
        ]
    },
    { 
        label: 'Academics', 
        href: '/departments', 
        hasDropdown: true,
        subItems: [
            { label: 'Departments', href: '/departments' },
            { label: 'Curriculum', href: '/#curriculum' },
            { label: 'Academic Calendar', href: '/#calendar' }
        ]
    },
    { 
        label: 'Campus Life', 
        href: '/#campus', 
        hasDropdown: true,
        subItems: [
            { label: 'Infrastructure', href: '/#campus' },
            { label: 'Hostel Facilities', href: '/#campus' },
            { label: 'Sports', href: '/#campus' }
        ]
    },
    { 
        label: 'Student Chapters', 
        href: '/#chapters', 
        hasDropdown: true,
        subItems: [
            { label: 'IEEE Student Branch', href: '/#chapters' },
            { label: 'CSI Chapter', href: '/#chapters' },
            { label: 'NDLI Club', href: '/ndli-club' },
            { label: 'Technical Clubs', href: '/#chapters' }
        ]
    },
    { 
        label: 'Examination', 
        href: '/#exams', 
        hasDropdown: true,
        subItems: [
            { label: 'Exam Cell', href: '/#exams' },
            { label: 'Results', href: '/#exams' },
            { label: 'Notifications', href: '/#exams' }
        ]
    },
    { 
        label: 'Placements', 
        href: '/#placements', 
        hasDropdown: true,
        subItems: [
            { label: 'Placement overview', href: '/#placements' },
            { label: 'Placement Records', href: '/#placements' },
            { label: 'Our Recruiters', href: '/#placements' }
        ]
    },
    { 
        label: 'Committees', 
        href: '/#committees', 
        hasDropdown: true,
        subItems: [
            { label: 'Anti-Ragging', href: '/#committees' },
            { label: 'Women Empowerment', href: '/#committees' },
            { label: 'Grievance Redressal', href: '/#committees' }
        ]
    },
    { 
        label: 'Community Services', 
        href: '/#community', 
        hasDropdown: true,
        subItems: [
            { label: 'NSS Unit', href: '/#community' },
            { label: 'Outreach Programs', href: '/#community' }
        ]
    },
];
