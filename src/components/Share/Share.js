import styles from './Share.module.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddReactionIcon from '@mui/icons-material/AddReaction';

const Share=()=>{
    return(
        <div className={styles.sharecontainer}>
            <div className={styles.wrapper}>
                <img className={styles.profilepicture} src='/assets/person/1.JPEG' alt='ProfilePicture' />
                <input placeholder="What's in your mind Prabhat?" className={styles.userinput}/>
            </div>
            <hr className={styles.separateHr}/>
            <div className={styles.sharedfile}>
                <div className={styles.shareoptions}>
                    <div className={styles.shareoption}>
                        <PermMediaIcon htmlColor='blue' className={styles.foldericon} />
                        <span className={styles.optiontext}>Photo or Video</span>
                    </div>
                    <div className={styles.shareoption}>
                        <LocalOfferIcon htmlColor='tomato' className={styles.foldericon} />
                        <span className={styles.optiontext}>Tag</span>
                    </div>
                    <div className={styles.shareoption}>
                        <LocationOnIcon htmlColor='green' className={styles.foldericon} />
                        <span className={styles.optiontext}>Location</span>
                    </div>
                    <div className={styles.shareoption}>
                        <AddReactionIcon htmlColor='yellow' className={styles.foldericon} />
                        <span className={styles.optiontext}>Feelings</span>
                    </div>
                </div>
                <button className={styles.sharebutton}>Share</button>
            </div>
        </div>
    )
};
export default Share;