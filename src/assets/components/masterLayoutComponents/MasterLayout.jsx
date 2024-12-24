import NavigaionBar from "./NavigaionBar";
import Fotter from "./Fotter";

function MasterLayout(props) {
  return (
<>

<div className="MasterLayout">
    <NavigaionBar/>
 {props.children}
    <Fotter/>

</div>



</>
  )
}

export default MasterLayout