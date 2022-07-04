import styles from "./MainPage.module.scss"
import data from '../assets/MOCK_DATA.json'
import MoviesTable from "../components/MoviesTable/MoviesTable"

const MainPage = () => {

    return (
        <main className={styles.mainPage}>
            <MoviesTable data={data}/>
        </main>
    )
}

export default MainPage