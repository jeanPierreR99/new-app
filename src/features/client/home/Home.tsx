import CarouselHome from './components/CarouSelHome';
import SectionAnnouncementsAndEvents from './components/SectionAnnouncementsAndEvents';
import SectionMessage from './components/SectionMessage';
import SectionNotice from './components/SectionNotice';
import SectionStatistcs from './components/SectionStatistics';

const Home = () => {
    return (
        <div className=''>
            <CarouselHome></CarouselHome>
            <div className="max-w-[1225px] mx-auto pb-20 bg-white">
                <SectionMessage></SectionMessage>
                <SectionNotice></SectionNotice>
                <SectionStatistcs></SectionStatistcs>
                <SectionAnnouncementsAndEvents></SectionAnnouncementsAndEvents>
            </div>
        </div>
    );
};

export default Home;