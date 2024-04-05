import styles from "./Home.module.css"
import TextArea from "./components/TextArea"

function Home() {
    return (
        <div className={styles.home}>
            <TextArea/>
        </div>
    )
}

export default  Home;