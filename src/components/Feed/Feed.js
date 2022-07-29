import Post from '../Post/Post';
import Share from '../Share/Share';
import styles from './Feed.module.css';
const Feed=(props)=>{
    return(
    <div className={`${styles.feedcontainer} ${props.feed}`}>
        <div className={styles.wrapper}>
            <Share />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>  
    </div>)
};

export default Feed;