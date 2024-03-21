import { Link } from "react-router-dom";
import './adminSidebar.css'
import homeIcon from '../../icons/home.png'
import studentIcon from '../../icons/students.png'
import subjectIcon from '../../icons/subject.png'
import userIcon from '../../icons/user.png'
import noticeIcon from '../../icons/notice.png'
import classesIcon from '../../icons/classes.png'
import teacherIcon from '../../icons/teacher.png'
import complainIcon from '../../icons/complains.png'
import logoutIcon from '../../icons/logout.png'

const Sidbar = ({ setSelectedLink }) => {
    const handleLinkClick = link => {
        setSelectedLink(link);
    };
    return (
        <div className="sidebarContainer">
            <ul>
                <li>
                    <img src={homeIcon} alt="" />
                    <Link to="" onClick={() => handleLinkClick('student-info')}> Home</Link>
                </li>
                <li>
                    <img src={classesIcon} alt="" />
                    <Link to="/admin/adminClasses" onClick={() => handleLinkClick('class-schedule')}> Classes</Link>
                </li>
                <li>
                    <img src={subjectIcon} alt="" />
                    <Link to="/admin/attendance" onClick={() => handleLinkClick('attendance')}> Subjects</Link>
                </li>
                <li>
                    <img src={teacherIcon} alt="" />
                    <Link to="/admin/admin-teacher" onClick={() => handleLinkClick('grades')}> Teachers</Link>
                </li>
                <li>
                    <img src={studentIcon} alt="" />
                    <Link to="/admin/admin-student" onClick={() => handleLinkClick('grades')}> Students</Link>
                </li>
                <li>
                    <img src={noticeIcon} alt="" />
                    <Link to="/admin/notices" onClick={() => handleLinkClick('teachers')}> Notices </Link>
                </li>
                <li>
                    <img src={complainIcon} alt="" />
                    <Link to="/admin/other-dash" onClick={() => handleLinkClick('teachers')}> Complains</Link>
                </li>
                <hr />
                <p className="userText">User</p>
                <li>
                    <img src={userIcon} alt="" />
                    <Link to="/teachers" onClick={() => handleLinkClick('teachers')}> Profile </Link>
                </li>
                <li>
                    <img src={logoutIcon} alt="" />
                    <Link to="/teachers" onClick={() => handleLinkClick('teachers')}>Logout</Link>
                </li>
            </ul>


        </div>
    );
}

export default Sidbar;