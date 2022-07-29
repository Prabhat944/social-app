import Navigation from '../components/Navigation';
import SideBar from '../components/SideBar/SideBar';
import Feed from '../components/Feed/Feed';
import RightBar from '../components/RightBar/RightBar';
import styles from './Home.module.css';
const Home=()=>{

    return (<div>
        <Navigation />
        <div className={styles.container}>
            <SideBar sidebar={styles.sidebar}/>
            <Feed feed={styles.feed}/>
            <RightBar rightbar={styles.rightbar}/>
        </div>
        
    </div>)
};

export default Home;