import '../../css/LastDivSection.css';

import lastImage1 from '../../images/image 20 (1).png';
import lastImage2 from '../../images/image 19 (1).png';
import lastImage3 from '../../images/image 18 (1).png';


function LastDivSection() {
  return (
<>

<div className='LastDivSection'>

<div className='LastDivSection_firstDiv'>
<h1 className='text-4xl font-bold'> Caring is the new marketing</h1>
<p> The Nextcent blog is the best place to read about the latest membership insights,</p>
<p> trends and more. See who's joining the community, read about how our community</p>
<p> are increasing their membership income and lot's more.​</p>
</div>
<div className='LastDivSection_secondDiv'>


    <div className='LastDivSection_secondDiv_Divone'>
     <div>
        <img src={lastImage1} alt="lastImage1"  className='lastImage1'/>
     </div>
     <div className='LastDivSection_secondDiv_contentOne bg-slate-100 shadow-md'>
         <div>
            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
         </div>
         <div>
            <a className='text-green-500'> Readmore</a>
         </div>
     </div>

    </div>
    <div className='LastDivSection_secondDiv_DivTwo '>
  <div>
        <img src={lastImage2} alt="lastImage2" className='lastImage2' />
     </div>
     <div className='LastDivSection_secondDiv_contentTwo bg-slate-100 shadow-md'>
     <div>
            <p> What are your safeguarding responsibilities and how can you manage them?</p>
         </div>
         <div>
            <a className='text-green-500'> Readmore</a>
         </div>
     </div>
    </div>
    <div className='LastDivSection_secondDiv_DivThree '>
    <div>
        <img src={lastImage3} alt="lastImage3"  className='lastImage3'/>
     </div>
     <div className='LastDivSection_secondDiv_contentThree bg-slate-100 shadow-md'>
     <div>
            <p>Revamping the Membership Model with Triathlon Australia</p>
         </div>
         <div>
            <a className='text-green-500'> Readmore</a>
         </div>
     </div>
    </div>

</div>



</div>

</>
  )
}

export default LastDivSection