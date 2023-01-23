import Link from 'next/link';

import FooterStyles from '../styles/forComponents/FooterStyles.module.scss';

const Footer = () => {
    return (
        <section className={FooterStyles.innerFooter}>
            <div className={FooterStyles.columns}>
                <ul>
                    <h5>КОМПАНИЯ</h5>
                    <li><a href="">О нас</a></li>
                    <li><Link href="/contacts">Контакты</Link></li>
                </ul>
                <ul>
                    <h5>ПОЛЕЗНОЕ</h5>
                    <li><a href="">Оплата и доставка</a></li>
                    <li><a href="">Условия возврата</a></li>
                    <li><a href="">Бонусная система</a></li>
                </ul>
                <ul>
                    <h5>ПОКУПАТЕЛЮ</h5>
                    <li><a href="">Избранное</a></li>
                    <li><a href="">Публичная оферта</a></li>
                    <li><a href="">Политика конфиденциальности</a></li>
                </ul>
                <ul>
                    <h5>КОНТАКТЫ</h5>
                    <li>
                        <a href=""><i className="ri ri-instagram-line"></i></a>
                        <a href=""><i className="ri ri-telegram-line"></i></a>
                    </li>
                    <li><a href="">+38(073) 096 36 44</a></li>
                    <li><a href="">info@yanki.com</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;