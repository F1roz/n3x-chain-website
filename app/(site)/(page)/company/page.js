import HeroCompany from "@/app/(site)/component/company/hero";
import DevelopmentProcess from "@/app/(site)/component/company/developmentProcess";
import Mission from "@/app/(site)/component/company/mission";
import Featurte from "../../component/company/featurte";
import OurValue from "../../component/company/ourValue";
import MeetTeam from "../../component/company/meetTem";
import Community from "../../component/company/community";


const Home = () => {
    return (
        <div className="w-full h-full relative text-white ">
            <HeroCompany />
            <DevelopmentProcess/>
            <Mission/>
            <Featurte />
            <OurValue />
            <MeetTeam />
            <Community />
        </div>
    );
};

export default Home;