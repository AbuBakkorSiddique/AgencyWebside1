import '../../css/HomeHeroSection.css';
import HomeHeroSectionImage from '../../images/Illustration.png'

function HomeHeroSection() {
  return (
 <>
 
 <div className="HomeHeroSection bg-slate-100">
    <div className='HomeHeroSection_LeftSide '  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  >
        <div className='HomeHeroSection_LeftSide_one mb-5'>
           <h1 className='text-5xl font-bold'> Lessons and insights</h1>
           <h1 className='text-5xl text-green-500 font-bold'> from 8 years</h1>
        </div>
        <div className='HomeHeroSection_LeftSide_two mb-5'>
            <p> Where to grow your business as a photographer: site or social media?</p>
        </div>
        <div className='HomeHeroSection_LeftSide_three'>
           <button className='btn bg-green-600 text-white hover:bg-green-800'> Register Now</button> 
        </div>
        
    </div>
    <div className='HomeHeroSection_rightSide animate-upDownWithOrigin'>
       <img src={HomeHeroSectionImage} alt="HomeHeroSectionImage" className='HomeHeroSectionImage' />
    </div>

 </div>
 
 
 
 
 </>
  )
}

export default HomeHeroSection