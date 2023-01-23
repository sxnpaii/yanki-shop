
import Link from "next/link";
import Head from "next/head";
// components
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";
// sections
import ProductsSect from "../../sections/CatalogsPage/Products";
import ProdStyles from "../../styles/forPages/ProductPage/Product.module.scss";


// !data fetching
export const getStaticPaths = async () => {
  const fetchData = await fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((data) => data);
  const paths = fetchData.map((id) => (
    {
      params: {
        id: String(id)
      }
    }
  ))
  return {
    paths,
    fallback: "blocking",
  }
}
export const getStaticProps = async ({ params }) => {
  // const prodId = `${params.id}`;
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
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
                  {/* buttons */}
                  {/* dropdown  */}
                  <div className={`dropdown-center ${ProdStyles.dropdown}`}>
                    <button
                      className={` dropdown-toggle ${ProdStyles.btn}`}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Выберите размер
                    </button>
                    <ul className={`dropdown-menu ${ProdStyles.dropMenu}`}>
                      <li><a className="dropdown-item" href="#">3XL</a></li>
                      <li><a className="dropdown-item" href="#">XL</a></li>
                      <li><a className="dropdown-item" href="#">L</a></li>
                      <li><a className="dropdown-item" href="#">S</a></li>
                    </ul>
                  </div>
                  <div className={ProdStyles.buttons}>
                    <button className={ProdStyles.toCart}>В КОРЗИНУ</button>
                    <button className={ProdStyles.toFav}>
                      <i className="ri ri-heart-line"></i>
                      В ИЗБРАННОЕ
                    </button>
                  </div>
                  <div className="description">
                    <h5>Подробности</h5>
                    {/* accordion */}
                    <div
                      className={`accordion accordion-flush ${ProdStyles.accordion}`}
                      id="accordionFlushExample">
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="flush-headingOne">
                          <button
                            className={`accordion-button collapsed ${ProdStyles.accorBtn}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            Обмеры и описание
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample">
                          <div className={`accordion-body ${ProdStyles.accorBody}`}>
                            {res.description}

                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                          <button
                            className={`accordion-button collapsed ${ProdStyles.accorBtn}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            Состав и уход
                          </button>
                        </h2>
                        <div id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingTwo"
                          data-bs-parent="#accordionFlushExample">
                          <div className={`accordion-body ${ProdStyles.accorBody}`}>
                            {res.description}
                          </div>
                        </div>
                      </div>
                    </div>
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


