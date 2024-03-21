import { Link } from "react-router-dom";
import '../pages/Adminpage/adminSidebar.js'
import homeIcon from '../icons/home.png'

const Sidbar = () => {
    return ( 
        <div className="sidebarContainer">
            <ul>
                <li>
                    <img src={homeIcon} alt=""/>
                    <Link to=''>Home</Link>
                </li>
                <li>
                <img src={homeIcon} alt=""/>

                    <Link to=''>Classes</Link>
                </li>
                <li>
                <img src={homeIcon} alt=""/>

                    <Link to=''>Subjects</Link>
                </li>
                <li>
                <img src={homeIcon} alt=""/>

                    <Link to=''>Students</Link>
                </li>
                <li>
                <img src={homeIcon} alt=""/>

                    <Link to=''>Notices</Link>
                </li>
                <li>
                <img src={homeIcon} alt=""/>

                    <Link to=''>Complains</Link>
                </li>
                <hr />
                <li>
                <img src={homeIcon} alt=""/>

                    <Link to=''>Profile</Link>
                </li>
                <li>
                <img src={homeIcon} alt=""/>

                    <Link to=''>Logout</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Sidbar;