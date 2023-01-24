// styles
import ContactsStyles from "../../styles/forPages/ContactsPage/Contacts.module.scss";

const Contacts = () => {
    return (
        <section className={ContactsStyles.Contacts}>
            <h5 className="h4">Связаться с нами</h5>
            <div className={ContactsStyles.contacts}>
                <ul>
                    <h6>В социальных сетях</h6>
                    <li>
                        <a href="">
                            <i className="ri ri-instagram-line"></i>
                        </a>
                        <a href="">
                            <i className="ri ri-telegram-line"></i>
                        </a>
                    </li>
                </ul>
                <ul>
                    <h6>По телефону</h6>
                    <li>+38(067) 158 82 66</li>
                    <li>+38(073) 226 39 81</li>
                </ul>
                <ul>
                    <h6>По почте</h6>
                    <li>example@gmail.com</li>
                    <li>axurshidbek2005@gmail.com</li>
                </ul>
                <ul>
                    <h6>Наш офис</h6>
                    <li>г. Киев, улица Батумская, 18</li>
                </ul>
            </div>

        </section>
    )
}

export default Contacts
