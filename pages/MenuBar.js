import MenuBarStyles from "../styles/forComponents/MenuBar.module.scss"
import Link from "next/link";
const MenuBar = () => {
    return (
        <section className={MenuBarStyles.MenuBar} >
            <div className={`display-6 ${MenuBarStyles.Brand}`}>
                <Link href="/">
                    YANKI
                </Link>
                <Link href="/">
                    <i className="ri ri-close-line"></i>
                </Link>
            </div>
            <div className={MenuBarStyles.flexed}>
                <div className={MenuBarStyles.input}>
                    <input type="search" />
                    <a href="">

                        <i className="ri ri-search-line"></i>
                    </a>
                </div>
                <div class={`dropdown ${MenuBarStyles.Drop}`}>
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        UZS
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">USD</a></li>
                        <li><a class="dropdown-item" href="#">EUR</a></li>
                    </ul>
                </div>
            </div>

            <ul className={MenuBarStyles.Navg}>
                <li>
                    <Link href="">
                        NEW
                    </Link>
                </li>
                <li>
                    <Link href="/catalog">
                        КАТАЛОГ
                    </Link>
                </li>
                <li>
                    <Link href="">
                        О НАС
                    </Link>
                </li>
                <li>
                    <Link href="">
                        УСЛОВИЯ ВОЗВРАТА
                    </Link>
                </li>
                <li>
                    <Link href="">
                        КОНТАКТЫ
                    </Link>
                </li>
            </ul>
            <div className={MenuBarStyles.info}>
                <div className={MenuBarStyles.icons}>
                    <a href="">
                        <i className="ri ri-instagram-line"></i>
                    </a>
                    <a href="">
                        <i className="ri ri-telegram-line"></i>
                    </a>
                </div>
                <p>+998 93 857 77 66</p>
                <p>axurshidbek2005@gmail.com</p>
            </div>
        </section>
    )
}

export default MenuBar;
