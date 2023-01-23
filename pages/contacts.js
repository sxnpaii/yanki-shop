import Link from "next/link"
// components
import Header from "../components/Header"
import Footer from "../components/Footer"
import Pagination from "../components/Pagination"
// sections
import PushNotifs from "../sections/HomePage/PushNotifs"
import ContactsStyles from "../styles/forPages/ContactsPage/Contacts.module.scss"

export default function contacts() {
    return (
        <main className={ContactsStyles.ContactsPage}>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <Header />
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <Pagination>
                            <i className="ri ri-arrow-right-s-line"></i>
                            <Link href="/contacts">
                                Контакты
                            </Link>
                        </Pagination>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">

                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <PushNotifs />
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <Footer />
                    </div>
                </div>
            </section>
        </main>
    )
}
