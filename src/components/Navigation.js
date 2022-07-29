import styles from './Navigation.module.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Navigation=()=>{

    return(
        <div className={styles.navigation}>
            <div className={styles.navleft}>
                <span className={styles.logo}>MyCircle</span>
            </div>
            <div className={styles.navcenter}>
                <div className={styles.searchbar}>
                    <SearchIcon className={styles.searchicon}/>
                    <input placeholder='Search for friend, post or video' className={styles.searchinput} />
                </div>
            </div>
            <div className={styles.navright}>
                <div className={styles.toplink}>
                    <div className={styles.homepage}>HomePage</div>
                    <div className={styles.timeline}>TimeLine</div>
                </div>
                <div className={styles.topicons}>
                <div className={styles.icons}>
                    <PersonIcon />
                    <span className={styles.iconitem}>1</span>
                </div>
                <div className={styles.icons}>
                    <ChatIcon />
                    <span className={styles.iconitem}>2</span>
                </div>
                <div className={styles.icons}>
                    <NotificationsNoneIcon />
                    <span className={styles.iconitem}>4</span>
                </div>
                </div>
                <img src='/assets/person/1.JPEG' alt='ProfileImage' className={styles.profileimg} />
            </div>
        </div>
    )
};

export default Navigation;