import Link from "next/link";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";
// styles
import ErrorPageStyles from "../styles/forPages/404Page/404Page.module.scss";

export default function Error() {
    return (
        <main className={ErrorPageStyles.main}>
            {/* <header>
                <div className="container-fluid">
                    <div className="row">
                        <Header />
                    </div>
                </div>
            </header> */}
            <section className={ErrorPageStyles.ErrorSection}>
                <div className="container">
                    <div className="row">
                        <div className={ErrorPageStyles.text}>
                            <h2 className={`h1 ${ErrorPageStyles.mainText}`}>
                                Oops something went wrong :(
                            </h2>
                            <p>404: Not Found</p>
                            <Link href="/" className={ErrorPageStyles.btn}>
                                to home


                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* <footer>
                <div className="container">
                    <div className="row">
                        <Footer />
                    </div>
                </div>
            </footer> */}
        </main>
    )
}
