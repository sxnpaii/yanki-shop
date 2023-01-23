import HeaderStyles from "../styles/forComponents/Header.module.scss";
import Link from "next/link";

const Header = () => {

    return (
        <section className={HeaderStyles.innerHeader} >

            <Link href="/MenuBar" className={HeaderStyles.menu}
            >
                <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="34" height="4" fill="white" />
                    <rect y="10" width="26" height="4" fill="white" />
                    <rect y="20" width="18" height="4" fill="white" />
                </svg>
            </Link>
            <ul className={HeaderStyles.navg}>
                <li>
                    <Link href="/catalog">
                        NEW
                    </Link>
                </li>
                <li>
                    <Link href="/catalog">
                        КАТАЛОГ
                    </Link>
                </li>
                <li>
                    <a href="">
                        О НАС
                    </a>
                </li>
            </ul>
            <div class={`dropdown ${HeaderStyles.dropHidden}`}>
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    RUS
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">UZB</a></li>
                    <li><a class="dropdown-item" href="#">ENG</a></li>
                </ul>
            </div>
            <Link href="/" className={`display-6 ${HeaderStyles.brand}`}>YANKI</Link>

            <div className={HeaderStyles.dropdowns}>
                <div class={`dropdown ${HeaderStyles.drop}`}>
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        RUS
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">UZB</a></li>
                        <li><a class="dropdown-item" href="#">ENG</a></li>
                    </ul>
                </div>
                <div class={`dropdown ${HeaderStyles.drop}`}>
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        UZS
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">USD</a></li>
                        <li><a class="dropdown-item" href="#">EUR</a></li>
                    </ul>
                </div>
            </div>
            <div className={HeaderStyles.icons}>
                <Link href="">
                    <i className="ri-search-line"></i>
                </Link>
                <Link href="">
                    <i className="ri-user-line"></i>
                </Link>
                <Link href="/favorites">
                    <i className="ri-heart-line"></i>
                </Link>
                <Link href="Cart">
                    <i class="ri-shopping-cart-2-line"></i>
                </Link>
            </div>
        </section>
    )
}

export default Header;
