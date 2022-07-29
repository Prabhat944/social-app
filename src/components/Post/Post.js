import styles from './Post.module.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post=()=>{
    return(
        <div className={styles.postcontainer}>
            <div className={styles.wrapper}>
                <div className={styles.posttop}>
                    <div className={styles.posttopleft}>
                        <img className={styles.postuserimage} src='/assets/person/3.JPEG' alt='PostUserImage'/>
                        <span className={styles.postusername}>Kapil Mishra</span>
                        <span className={styles.posttime}>5 min ago</span>
                    </div>
                    <div className={styles.posttopright}>
                        <MoreVertIcon className={styles.moreicon}/>
                    </div>
                </div>
                <div className={styles.postcenter}>
                    <span className={styles.posttext}>Hey! its my first post.</span>
                    <img className={styles.post} src='/assets/post/post1.JPEG' alt='post1'/>
                </div>
                <div className={styles.postbottom}>
                    <div className={styles.postbottomleft}>
                       <img className={styles.likebutton} src='/assets/like.png' alt='like' />
                       <img className={styles.heartbutton} src='/assets/heart.png' alt='heart'/>
                       <span className={styles.likecount}>32 people like it</span>
                    </div>
                    <div className={styles.postbottomright}></div>
                       <span className={styles.comment}>9 comments</span>
                    </div>
                </div>
        </div>
    )
};
export default Post;