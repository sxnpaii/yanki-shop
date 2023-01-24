
import Link from "next/link";
import Head from "next/head";
// components
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";
// sections
import ProductDropdown from "../../sections/ProductPage/Dropdown"
import ProductAccordion from "../../sections/ProductPage/Accordion";
// styles
import ProdStyles from "../../styles/forPages/ProductPage/Product.module.scss";


// !data fetching
export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => data);
  return {
    props: {
      res: res
    }
  }
}


// ? UI
const Product = ({ res }) => {
  return (
    <main>
      <Head>
        <title>{res.title} || Yanki-Shop</title>
      </Head>
      <header className="Header">
        <div className="container-fluid">
          <div className="row">
            <Header />
          </div>
        </div>
      </header>
      <section className="Pagination">
        <div className="container">
          <div className="row">
            <Pagination>
              <i className="ri ri-arrow-right-s-line"></i>
              <Link href="/catalog">Каталог</Link>
              <i className="ri ri-arrow-right-s-line"></i>
              <Link href="/catalog/product">Продукт</Link>
            </Pagination>
          </div>
        </div>
      </section>
      <section className="Product">
        <div className="container">
          <div className="row">
            <section className={ProdStyles.singleProduct}>
              <section className={ProdStyles.ProductProps}>
                <img src={res.image} alt="Product image" className={ProdStyles.image} />
                {/* infos */}
                <div className={ProdStyles.text}>
                  <h5>{res.title}</h5>
                  <b>{res.price} $</b>
                  {/* buttons class */}
                  {/* dropdown  */}
                  <ProductDropdown />
                  {/* buttons */}
                  <div className={ProdStyles.buttons}>
                    <button className={ProdStyles.toCart}>В КОРЗИНУ</button>
                    <button className={ProdStyles.toFav}>
                      <i className="ri ri-heart-line"></i>
                      В ИЗБРАННОЕ
                    </button>
                  </div>
                  {/* accordion */}
                  <div className="description">
                    <h5>Подробности</h5>
                    <ProductAccordion res={res} />
                  </div>
                </div>

              </section>
            </section>
          </div>
        </div >
      </section >
      <footer className="Footer">
        <div className="container-fluid">
          <div className="row">
            <Footer />
          </div>
        </div>
      </footer>
    </main >
  )
}
export default Product;


