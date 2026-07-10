import Navbar from '../components/layout/Navbar';
import Hero from '../features/home/Hero';
import Stats from '../features/home/Stats';
import About from '../features/home/About';
import CampusLife from '../features/campus/CampusLife';
import AlumniSuccess from '../features/placements/AlumniSuccess';
import Placements from '../features/placements/Placements';
import UpcomingEvents from '../features/home/UpcomingEvents';
import Admissions from '../features/admissions/Admissions';
import Footer from '../components/layout/Footer';
import Accreditations from '../features/home/Accreditations';
import GlobalTieUps from '../features/institution/GlobalTieUps';
import LeadershipVision from '../features/institution/LeadershipVision';
import SocialMediaFeeds from '../features/home/SocialMediaFeeds';
import CSRActivities from '../features/institution/CSRActivities';
import StudentAchievements from '../features/campus/StudentAchievements';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <Accreditations />
                <Stats />
                <About />
                <GlobalTieUps />
                <LeadershipVision />
                <CampusLife />
                <Placements />
                <AlumniSuccess />
                <StudentAchievements />
                <UpcomingEvents />
                <CSRActivities />
                <SocialMediaFeeds />
                <Admissions />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
