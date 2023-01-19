import Link from "next/link";
import { useState } from "react";
import SidebarStyles from "../../styles/forPages/CatalogsPage/sections/Sidebar.module.scss";
const Sidebar = () => {
    return (
        <section className={SidebarStyles.innerSidebar}>
            <div className={`dropdown-center ${SidebarStyles.visibleOnlyMobile}`}>
                <button
                    className={`btn dropdown-toggle ${SidebarStyles.btn}` }
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Каталог
                </button>
                <ul className={`dropdown-menu ${SidebarStyles.dropdownMenu}`}>
                    <li>
                        <Link className="dropdown-item" href="">New</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="">Bestsellers</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="">Верхняя одежда</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="">Шубы</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="">Тренчи</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="">Пальто</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="">Пуховики и жилеты</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="">Костюмы</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="">Жакеты</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="">Платья</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="">Рубашки и блузы</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="">Юбки</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="">Футболки и топы</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="">Аксессуары</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="">Sale</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="">Summer</Link>
                    </li>
                </ul>
            </div>

            <details open className={SidebarStyles.visibleOnlyDesktop}>
                <summary>
                    <h4>Каталог</h4>
                </summary>
                <ul>
                    <li>
                        <Link href="">New</Link>
                    </li>
                    <li>
                        <Link href="">Bestsellers</Link>
                    </li>
                    <li>
                        <Link href="">Верхняя одежда</Link>
                    </li>
                    <li>
                        <Link href="">Шубы</Link>
                    </li>
                    <li>
                        <Link href="">Тренчи</Link>
                    </li>
                    <li>
                        <Link href="">Пальто</Link>
                    </li>
                    <li>
                        <Link href="">Пуховики и жилеты</Link>
                    </li>
                    <li>
                        <Link href="">Костюмы</Link>
                    </li>
                    <li>
                        <Link href="">Жакеты</Link>
                    </li>
                    <li>
                        <Link href="">Платья</Link>
                    </li>
                    <li>
                        <Link href="">Рубашки и блузы</Link>
                    </li>
                    <li>
                        <Link href="">Юбки</Link>
                    </li>
                    <li>
                        <Link href="">Футболки и топы</Link>
                    </li>
                    <li>
                        <Link href="">Аксессуары</Link>
                    </li>
                    <li>
                        <Link href="">Sale</Link>
                    </li>
                    <li>
                        <Link href="">Summer</Link>
                    </li>
                </ul>
            </details>
        </section>
    )
}

export default Sidebar
