import '../../css/CalenderSection.css'; 
import CalenderImage from '../../images/pana.png'
function CalenderSection() {
  return (
<>

<div className='CalenderSection' data-aos="fade-up">

<div className='CalenderSection_left'>
   <img src={CalenderImage} alt="CalenderImage"  className='CalenderImage'/>
</div>
<div className='CalenderSection_right'>
    <div className='CalenderSection_right_one'>
        <h1 className='text-3xl font-bold'> The unseen of spending three years at Pixelgrade</h1>
    </div>
    <div className='CalenderSection_right_two'>
     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
    </div>
    <div className='CalenderSection_right_three'>
      <button className='btn bg-green-600 text-white'> Learn More</button>
    </div>

</div>







</div>








</>
  )
}

export default CalenderSection