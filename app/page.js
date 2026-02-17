import Hero from "./(site)/component/home/Hero";
import NFT from "./(site)/component/home/NFT";
import Expertise from "./(site)/component/home/Expertise";
import Work from "./(site)/component/home/work";
import Offer from "./(site)/component/home/offer";

const Home = () => {
  return (
    <div className="w-full h-full relative text-white ">
      {/* update */}
      <Hero />
      <Work />
      <Offer />
      <Expertise />
      <NFT />
    </div>
  );
};

export default Home;
