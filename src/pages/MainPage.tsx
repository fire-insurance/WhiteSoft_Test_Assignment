import styles from "./MainPage.module.scss"
import MoviesTable from "../components/MoviesTable/MoviesTable"

const MainPage = () => {
    return (
        <main className={styles.mainPage}>
            <MoviesTable />
        </main>
    )
}

export default MainPage