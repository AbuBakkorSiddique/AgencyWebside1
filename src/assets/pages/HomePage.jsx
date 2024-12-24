import MasterLayout from "../components/masterLayoutComponents/MasterLayout";
import HomeHeroSection from "../components/childComponens/HomeHeroSection";
import FeatureSection from "../components/childComponens/FeatureSection";
import CommunitySection from "../components/childComponens/CommunitySection";
import UplockSection from "../components/childComponens/UplockSection";
import AchivementSection from "../components/childComponens/AchivementSection";
import CalenderSection from "../components/childComponens/CalenderSection";
import CustomersSection from "../components/childComponens/CustomersSection";
import LastDivSection from "../components/childComponens/LastDivSection";
import AOS from 'aos';
import { useEffect } from "react";


function HomePage() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);






  return (
<>

<>
<MasterLayout>
<div className="HomePage">
    <HomeHeroSection/>
    <FeatureSection/>
    <CommunitySection/>
    <UplockSection/>
    <AchivementSection/>
    <CalenderSection/>
    <CustomersSection/>
    <LastDivSection/>
    


    </div>
</MasterLayout>


</>


</>
  )
}

export default HomePage