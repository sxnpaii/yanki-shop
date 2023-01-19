import HeroStyles from '../../styles/forPages/HomePage/sections/Hero.module.scss'
import Link from 'next/link';

const Hero = () => {

    return (
        <section className={HeroStyles.innerHero} >
            <div className={HeroStyles.text} id="text">
                <h2 className={`display-6 ${HeroStyles.heading}`}>Новая коллекция</h2>
                <div className={HeroStyles.hrLine}></div>
                <Link href="/catalog">Смотреть Новинки <i className="ri ri-arrow-right-s-line"></i> </Link>
            </div>
        </section>
    )

}

export default Hero; 