import styles from './RightBar.module.css';
const RightBar=(props)=>{
    return(
    <div className={`${styles.rightcontainer} ${props.rightbar}`}>
        <div className={styles.wrapper}>
            <div className={styles.birthdaycontainer}>
                <img className={styles.giftimg} src='/assets/gift.png' alt='giftImg'/>
                <span className={styles.birthdaytext}>
                    <b>Raushni Suman</b> and <b>2 other</b> have birthday today.
                </span>
            </div>
            <img className={styles.adimg} src='/assets/cover/cover8.JPEG' alt='adImage'/>
            <h4 className={styles.rightbartitle}>Online Friends</h4>
            <ul className={styles.friendlist}>
                <li className={styles.online}>
                    <div className={styles.onlinecontainer}>
                    <img className={styles.profileimage} src='/assets/person/3.JPEG' alt='Friendimg'/>
                    <span className={styles.friendonline}></span>
                    </div>
                    <span className={styles.friendName}>Kapil Sharma</span>
                </li>
                <li className={styles.online}>
                    <div className={styles.onlinecontainer}>
                    <img className={styles.profileimage} src='/assets/person/3.JPEG' alt='Friendimg'/>
                    <span className={styles.friendonline}></span>
                    </div>
                    <span className={styles.friendName}>Kapil Sharma</span>
                </li>
                <li className={styles.online}>
                    <div className={styles.onlinecontainer}>
                    <img className={styles.profileimage} src='/assets/person/3.JPEG' alt='Friendimg'/>
                    <span className={styles.friendonline}></span>
                    </div>
                    <span className={styles.friendName}>Kapil Sharma</span>
                </li>
                <li className={styles.online}>
                    <div className={styles.onlinecontainer}>
                    <img className={styles.profileimage} src='/assets/person/3.JPEG' alt='Friendimg'/>
                    <span className={styles.friendonline}></span>
                    </div>
                    <span className={styles.friendName}>Kapil Sharma</span>
                </li>
                <li className={styles.online}>
                    <div className={styles.onlinecontainer}>
                    <img className={styles.profileimage} src='/assets/person/3.JPEG' alt='Friendimg'/>
                    <span className={styles.friendonline}></span>
                    </div>
                    <span className={styles.friendName}>Kapil Sharma</span>
                </li>
            </ul>
        </div>
    </div>)
};
export default RightBar;