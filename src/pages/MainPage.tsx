import styles from "./MainPage.module.scss"
import movies from '../assets/MOCK_DATA.json'
import MoviesTable from "../components/MoviesTable/MoviesTable"

const MainPage = () => {
    const getMovies = () => movies
    return (
        <main className={styles.mainPage}>
            <MoviesTable getMovies={getMovies} />
        </main>
    )
}

export default MainPage