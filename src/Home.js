import "./Home.css";
import HeroSection from "./HeroSection";
import TrendingCollection from "./TrendingCollection";
import TopRatedArtists from "./TopRatedArtists";
import DiscoverMoreNFTs from "./DiscoverMoreNFTs";
import SubscribeWidget from "./SubscribeWidget";



function Home() {
  return (
    <div>
      <HeroSection />
      <TrendingCollection />
      <TopRatedArtists />
      <DiscoverMoreNFTs />
      <SubscribeWidget />
    </div>
  );
}

export default Home;
