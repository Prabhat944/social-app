import styles from './Feed.module.css';
const Feed=(props)=>{
    return(<div className={`${styles.feedcontainer} ${props.feed}`}>feed</div>)
};

export default Feed;