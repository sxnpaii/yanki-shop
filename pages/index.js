import Head from 'next/head';
import HomePageStyles from '../styles/forPages/HomePage/Home.module.scss'
// components
import Header from '../components/Header';
// ?Header calls MenuBar component 
//// import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';
// sections
import Hero from '../sections/HomePage/Hero';
import Categories from '../sections/HomePage/Categories';
import PushNotifs from '../sections/HomePage/PushNotifs';

export default function Home() {


  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated with create next app by SXNPAII " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={HomePageStyles.App}
      >
        <header className={HomePageStyles.header}>
          <div className="container-fluid">
            <div className="row">
              <Header />
              {/* <MenuBar/> */}
            </div>
          </div>
        </header>
        <section className="Hero">
          <div className="container-fluid">
            <div className="row">
              <Hero />
            </div>
          </div>
        </section>
        <section className="Categories">
          <div className="container-fluid">
            <div className="row">
              <Categories />
            </div>
          </div>
        </section>
        <section className="PushNotifs">
          <div className="container-fluid">
            <div className="row">
              <PushNotifs />
            </div>
          </div>
        </section>
        <section className="Footer">
          <div className="container-fluid">
            <div className="row">
              <Footer />
            </div>
          </div>
        </section>

      </main>
    </div >
  )
}

