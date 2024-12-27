import HeroSection from "./HeroSection";
import ShopCategory from "./ShopCategory";
import NewArrivals from "./NewArrivals";
import CenterSection from "./CenterSection";
import Accessories from "./Accessories";
import SaleSection from "./SaleSection";
import Testimonials from "./Testimonials";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <ShopCategory />
      <NewArrivals />
      <CenterSection />
      <Accessories />
      <SaleSection />
      <Testimonials />
    </div>
  );
};

export default Homepage;
