import "../../css/FeatureSection.css";
import feature1 from "../../images/Logo (1).png";
import feature2 from "../../images/Logo (2).png";
import feature3 from "../../images/Logo (3).png";
import feature4 from "../../images/Logo (4).png";
import feature5 from "../../images/Logo (5).png";
import feature6 from "../../images/Logo (6).png";

function FeatureSection() {
  return (
    <>
      <div className="FeatureSection" >
        <div className="FeatureSection_FirstRow" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <div className="FeatureSection_FirstRow_sub">
            <h1 className="text-4xl font-bold"> Our Clients</h1>
            <p> We have been working with some Fortune 500+ clients</p>
          </div>
        </div>
        <div className="FeatureSection_secondRow" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <div>
            <img src={feature1} alt="feature1" className="feature1" />
          </div>
          <div>
            <img src={feature2} alt="feature2" className="feature2" />
          </div>
          <div>
            <img src={feature3} alt="feature3" className="feature3" />
          </div>
          <div>
            <img src={feature4} alt="feature4" className="feature4" />
          </div>
          <div>
            <img src={feature5} alt="feature5" className="feature5" />
          </div>
          <div>
            <img src={feature6} alt="feature6" className="feature6" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureSection;
