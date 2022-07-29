import styles from './SideBar.module.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PeopleIcon from '@mui/icons-material/People';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';

const SideBar=(props)=>{
    return(
    <div className={`${styles.sidecontainer} ${props.sidebar}`}>
       <div className={styles.wrapper}>
           <ul className={styles.sidebarlist}>
            <li className={styles.listitem}>
                <RssFeedIcon className={styles.icon}/>
                <span className={styles.itemtext}>Feed</span>
            </li>
            <li className={styles.listitem}>
                <ChatIcon className={styles.icon}/>
                <span className={styles.itemtext}>Chat</span>
            </li>
            <li className={styles.listitem}>
                <PlayCircleIcon className={styles.icon}/>
                <span className={styles.itemtext}>Videos</span>
            </li>
            <li className={styles.listitem}>
                <PeopleIcon className={styles.icon}/>
                <span className={styles.itemtext}>People</span>
            </li>
            <li className={styles.listitem}>
                <BookmarksIcon className={styles.icon}/>
                <span className={styles.itemtext}>Bookmark</span>
            </li>
            <li className={styles.listitem}>
                <LiveHelpIcon className={styles.icon}/>
                <span className={styles.itemtext}>Questions</span>
            </li>
            <li className={styles.listitem}>
                <WorkOutlineIcon className={styles.icon}/>
                <span className={styles.itemtext}>jobs</span>
            </li>
            <li className={styles.listitem}>
                <CalendarMonthIcon className={styles.icon}/>
                <span className={styles.itemtext}>Events</span>
            </li>
            <li className={styles.listitem}>
                <SchoolIcon className={styles.icon}/>
                <span className={styles.itemtext}>Courses</span>
            </li>
           </ul>
           <button className={styles.showmore}>show more</button>
           <hr className={styles.sidebarhr}/>
           <ul className={styles.friendlist}>
              <li className={styles.friend}>
                <img className={styles.friendimg} src='/assets/person/2.JPEG' alt='friend1' />
                <span className={styles.friendname}>Anjali singh</span>
              </li>
              <li className={styles.friend}>
                <img className={styles.friendimg} src='/assets/person/3.JPEG' alt='friend2' />
                <span className={styles.friendname}>Kapil Mishra</span>
              </li>
              <li className={styles.friend}>
                <img className={styles.friendimg} src='/assets/person/4.JPEG' alt='friend1' />
                <span className={styles.friendname}>Sapna Bhandhari</span>
              </li>
              <li className={styles.friend}>
                <img className={styles.friendimg} src='/assets/person/5.JPEG' alt='friend2' />
                <span className={styles.friendname}>Pushkar raj</span>
              </li>
              <li className={styles.friend}>
                <img className={styles.friendimg} src='/assets/person/6.JPEG' alt='friend1' />
                <span className={styles.friendname}>Raushani suman</span>
              </li>
              <li className={styles.friend}>
                <img className={styles.friendimg} src='/assets/person/7.JPEG' alt='friend2' />
                <span className={styles.friendname}>Megha</span>
              </li>
              <li className={styles.friend}>
                <img className={styles.friendimg} src='/assets/person/8.JPEG' alt='friend1' />
                <span className={styles.friendname}>Yogesh mathur</span>
              </li>
              <li className={styles.friend}>
                <img className={styles.friendimg} src='/assets/person/2.JPEG' alt='friend2' />
                <span className={styles.friendname}>Kashish jain</span>
              </li>
           </ul>
       </div>
    </div>)
};
export default SideBar;