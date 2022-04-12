import Clients from "../components/HomePage/Clients";
import HeroCards from "../components/HomePage/HeroCards";
import HeroSection from "../components/HomePage/HeroSection";
import NewsLetter from "../components/HomePage/NewsLetter";
import OfficeContacts from "../components/HomePage/OfficeContacts";
import ProductCategory from "../components/HomePage/ProductCategory";
import Standards from "../components/HomePage/Standards";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HeroCards />
      <ProductCategory />
      <Standards />
      <Clients />
      <OfficeContacts />
      <NewsLetter />
    </div>
  );
}
