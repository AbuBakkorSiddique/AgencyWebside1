
import MasterLayout from "../components/masterLayoutComponents/MasterLayout";
import PageNOtFoundImage from '../images/PageNotFoun.png';
import '../css/NotFoundPage.css'
function NotFoundPage() {
  return (
<>

<MasterLayout>
<div className="NotFoundPage bg-slate-100">
<img src={PageNOtFoundImage} alt="PageNOtFoundImage" className="PageNOtFoundImage" />
</div>
</MasterLayout>

</>
  )
}

export default NotFoundPage