import '../../css/CustomersSection.css'
import Items1 from '../../images/Logo (1).png';
import Items2 from '../../images/Logo (2).png';
import Items3 from '../../images/Logo (3).png';
import Items4 from '../../images/Logo (4).png';
import Items5 from '../../images/Logo (5).png';
import Items6 from '../../images/Logo (6).png'
import Items7 from '../../images/Right.png';
import FirstRowImage from '../../images/image 9 (1).png';


function CustomersSection() {
  return (
  <>
  
  <div className="CustomersSection" data-aos="fade-up">

<div className='CustomersSection_firstRow'>
 <img src={FirstRowImage} alt="FirstRowImage"  className='FirstRowImage'/>
</div>
<div className='CustomersSection_secondRow'>

  <div className='CustomersSection_secondRow_one'>
  <p> Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna. </p>
  </div>
  <div className='CustomersSection_secondRow_two'>
 <h1 className='text-3xl font-bold text-green-500'> Tim Smith</h1>
  </div>
  <div className='CustomersSection_secondRow_three'>
 <h1 className='text-2xl'> British Dragon Boat Racing Association</h1>
  </div>
  <div className='CustomersSection_secondRow_four'>

    <div>
      <img src={Items1} alt="Items1" className='Items1' />
    </div>
    <div>
      <img src={Items2} alt="Items2"  className='Items2'/>
    </div>
    <div>
      <img src={Items3} alt="Items3"  className='Items3'/>
    </div>
    <div>
      <img src={Items4} alt="Items4" className='Items4'/>
    </div>
    <div>
      <img src={Items5} alt="Items5" className='Items5' />
    </div>
    <div>
      <img src={Items6} alt="Items6" className='Items6' />
    </div>
    <div className='InsideDiv-BrandItems '>

    <a className='flex text-green-400' > Meet all customers <img src={Items7} alt="Items7" className='Items7' /></a>


    </div>

  </div>

</div>






  </div>
  
  
  
  
  
  </>
  )
}

export default CustomersSection