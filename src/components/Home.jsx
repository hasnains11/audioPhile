import EarphonesYX1 from "./EarphonesYX1";
import HeroSection from "./HeroSection";
import LastSection from "./LastSection";
import ProductView from "./ProductView";
import SpeakerZX7 from "./SpeakerZX7";
import SpeakerZX9 from "./SpeakerZX9";

const Home = () => {
    return ( 
    <>
            <HeroSection></HeroSection>
            <ProductView></ProductView>
            <SpeakerZX9/>
            <SpeakerZX7/>
            <EarphonesYX1/>
            <LastSection/>
    </>
    )
}
 
export default Home;