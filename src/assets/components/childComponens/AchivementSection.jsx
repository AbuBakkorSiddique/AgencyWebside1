import '../../css/AchivementSection.css' ; 
import { CountUp } from 'use-count-up';
import AchivementImage1 from '../../images/Icon (4).png';
import AchivementImage2 from '../../images/Icon (5).png';
import AchivementImage3 from '../../images/Icon (6).png';
import AchivementImage4 from '../../images/Icon (7).png';

function AchivementSection() {
  return (
  <>
  <div className="AchivementSection bg-slate-100" data-aos="fade-up">

  <div className='AchivementSection_left'>
    <h1 className='text-3xl font-bold'> Helping a local </h1>
    <h1 className='text-3xl font-bold text-green-500'> business reinvent itself</h1>
    <p> We reached here with our hard work and dedication</p>
  </div>
  <div className='AchivementSection_right'>
    
     <div className='AchivementSection_right_subOne '>
        <div className='AchivementSection_right_subOne_left'>
          <div className='AchivementSection_right_subOne_left_Image'>
             <img src={AchivementImage1} alt="AchivementImage1" className='AchivementImage1' />
          </div>
          <div className='AchivementSection_right_subOne_left_Content'>
            <div className='AchivementSection_right_subOne_left_Content_Counter'>
                 <h1><CountUp  isCounting start={0} end={502538} duration={3.2} /> </h1>
            </div>
            <div className='AchivementSection_right_subOne_left_Content_Title'>
                   <h1 className='font-bold'> Members</h1>
            </div>
          </div>

        </div>
        <div className='AchivementSection_right_subOne_right'>
        <div className='AchivementSection_right_subOne_left_Image'>
             <img src={AchivementImage2} alt="AchivementImage2" className='AchivementImage2' />
          </div>
          <div className='AchivementSection_right_subOne_left_Content'>
            <div className='AchivementSection_right_subOne_left_Content_Counter'>
                 <h1><CountUp  isCounting start={0} end={46328} duration={3.2} /> </h1>
            </div>
            <div className='AchivementSection_right_subOne_left_Content_Title'>
                   <h1 className='font-bold'> Clubs</h1>
            </div>
          </div>
        </div>

     </div>
     <div className='AchivementSection_right_subTwo'>
        <div className='AchivementSection_right_subTwo_left'>
        <div className='AchivementSection_right_subOne_left_Image'>
             <img src={AchivementImage3} alt="AchivementImage3" className='AchivementImage3' />
          </div>
          <div className='AchivementSection_right_subOne_left_Content'>
            <div className='AchivementSection_right_subOne_left_Content_Counter'>
                 <h1><CountUp  isCounting start={0} end={828868} duration={3.2} /> </h1>
            </div>
            <div className='AchivementSection_right_subOne_left_Content_Title'>
                   <h1 className='font-bold'> Event Bookings</h1>
            </div>
          </div>
        </div>
        <div className='AchivementSection_right_subTwo_right'>
        <div className='AchivementSection_right_subOne_left_Image'>
             <img src={AchivementImage4} alt="AchivementImage4" className='AchivementImage4' />
          </div>
          <div className='AchivementSection_right_subOne_left_Content'>
            <div className='AchivementSection_right_subOne_left_Content_Counter'>
                 <h1><CountUp  isCounting start={0} end={1926436} duration={3.2} /> </h1>
            </div>
            <div className='AchivementSection_right_subOne_left_Content_Title'>
                   <h1 className='font-bold'> Payments</h1>
            </div>
          </div>
        </div>

     </div>


  </div>



  </div>
  
  
  
  
  </>
  )
}

export default AchivementSection