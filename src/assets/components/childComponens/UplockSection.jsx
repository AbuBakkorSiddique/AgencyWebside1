
import '../../css/UplockSection.css'

import UnloacSEctionImage from '../../images/Frame 35 (1).png' ; 
function UplockSection() {
  return (
<>
<div className="UplockSection" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">

<div className='UplockSection_left'>
   <img src={UnloacSEctionImage} alt="UnloacSEctionImage"  className='UnloacSEctionImage'/>
</div>
<div className='UplockSection_right'>
    <div className='UplockSection_right_one'>
        <h1 className='text-3xl font-bold'> The unseen of spending three years at Pixelgrade</h1>
    </div>
    <div className='UplockSection_right_two'>
     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
    </div>
    <div className='UplockSection_right_three'>
      <button className='btn bg-green-600 text-white'> Learn More</button>
    </div>

</div>
</div>



</>
  )
}

export default UplockSection