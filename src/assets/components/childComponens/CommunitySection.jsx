import "../../css/CommunitySection.css";
import CommunicationImage1 from '../../images/Icon (1).png';
import CommunicationImage2 from '../../images/Icon (2).png';
import CommunicationImage3 from  '../../images/Icon (3).png' ; 

function CommunitySection() {
  return (
    <>
      <div className="CommunitySection">
        <div className="CommunitySection_firstRow" data-aos="zoom-in">
          <h1 className="text-3xl md:text-4xl font-bold">
            {" "}
            Manage your entire community
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold">
            {" "}
            in a single system
          </h1>
          <p> Who is Nextcent suitable for? </p>
        </div>
        <div className="CommunitySection_secondRow" data-aos="zoom-in">


          <div className="CommunitySection_secondRow_DivOne shadow-md transition transform hover:scale-105 duration-300">
            <div className="Communication_Cart_Image ">
                <img src={CommunicationImage1} alt="CommunicationImage1"  className="CommunicationImage1 "/>
            </div>
            <div className="Communication_Cart_Title ">
                <h1 className="text-2xl md:text-4xl font-bold"> Membership Organisations</h1>
            </div>
            <div className="Communication_Cart_Text">
                <p> Our membership management software provides full automation of membership renewals and payments</p>
            </div>
          </div>
          <div className="CommunitySection_secondRow_Divtwo shadow-md transition transform hover:scale-105 duration-300">
            <div className="Communication_Cart_Image">
                <img src={CommunicationImage2} alt="CommunicationImage2"  className="CommunicationImage2"/>
            </div>
            <div className="Communication_Cart_Title">
                <h1 className="text-2xl md:text-4xl font-bold"> National Associations</h1>
            </div>
            <div className="Communication_Cart_Text">
                <p> Our membership management software provides full automation of membership renewals and payments</p>
            </div>
          </div>
          <div className="CommunitySection_secondRow_DivThree shadow-md transition transform hover:scale-105 duration-300">
            <div className="Communication_Cart_Image">
                <img src={CommunicationImage3} alt="CommunicationImage3" className="CommunicationImage3" />
            </div>
            <div className="Communication_Cart_Title  Communication_Cart_Title_MobileVIew">
                <h1 className="text-2xl md:text-4xl font-bold"> Clubs And </h1>
                <h1 className="text-2xl md:text-4xl font-bold">Groups</h1>
            </div>
            <div className="Communication_Cart_Text">
                <p> Our membership management software provides full automation of membership renewals and payments</p>
            </div>
          </div>



        </div>
      </div>
    </>
  );
}

export default CommunitySection;
