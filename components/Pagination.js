import Link from "next/link"
import CatalogsPageStyles from "../styles/forPages/CatalogsPage/Catalogs.module.scss";
import PaginationStyles from "../styles/forComponents/Pagination.module.scss"
const Pagination = (pages) => {
    return (
        <section className={PaginationStyles.Pagination}>
            <div className={PaginationStyles.pgnt}>
                <Link href="/">Главная</Link>
                {/* others */}
                {pages.children}
            </div>
        </section>
    )
}

export default Pagination ;
