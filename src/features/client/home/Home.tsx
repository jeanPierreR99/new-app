import CarouselHome from './components/CarouSelHome';
import SectionNotice from './components/SectionNotice';

const Home = () => {
    return (
        <div className=''>
            <CarouselHome></CarouselHome>
            <div className="max-w-[1225px] mx-auto py-20 bg-white">
                <SectionNotice></SectionNotice>
            </div>
        </div>
    );
};

export default Home;