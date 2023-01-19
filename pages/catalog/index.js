import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// components
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";
// sections
import Sidebar from "../../sections/CatalogsPage/Sidebar";
import ProductsSect from "../../sections/CatalogsPage/Products";
import SortingBar from "../../sections/CatalogsPage/SortingBar";
// styles
import CatalogsPageStyles from "../../styles/forPages/CatalogsPage/Catalogs.module.scss";

// using API
export const getStaticProps = async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
    const data = await response.json();
    return {
        props: {
            Products: data
        }
    }
}

export default function Catalog({ Products }) {

    return (

        <main className={CatalogsPageStyles.Catalog}>
            <Head>
                <title>Catalog</title>
            </Head>
            <header className="Header">
                <div className="container-fluid">
                    <div className="row">
                        <Header />
                    </div>
                </div>
            </header>

            <section className="PaginationBar">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Pagination>
                                <i className="ri ri-arrow-right-s-line"></i>
                                <Link href="">Каталог</Link>
                            </Pagination>

                        </div>
                    </div>
                </div>
            </section>


            <main className={`container ${CatalogsPageStyles.primaryContent}`}>
                <section className="Sidebar">
                    <Sidebar />
                </section>

                {/* products and sorting bar */}
                <section className={CatalogsPageStyles.mainSection}>

                    <SortingBar />
                    <ProductsSect Products={Products} />
                </section>
            </main>
            <footer className={CatalogsPageStyles.Footer}>
                <div className="container-fluid">
                    <div className="row">
                        <Footer />
                    </div>
                </div>
            </footer>
        </main>
    )
}
