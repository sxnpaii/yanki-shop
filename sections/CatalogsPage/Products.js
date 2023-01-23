import ProductCardStyles from "../../styles/forPages/CatalogsPage/sections/Products.module.scss";

import Image from "next/image";
import Link from "next/link";
const ProductsSect = ({ Products }) => {
    return (
        <section className="Products">
            <div className="container-fluid">
                <div className="row">
                    <div className={ProductCardStyles.ProductCard}>
                        {
                            Products && Products.map(({ id, title, price, image }) => (
                                <div key={id} className={ProductCardStyles.innerCard}>
                                    <div className={ProductCardStyles.img} >
                                        <Link href={`/catalog/${id}`} >
                                            
                                            <img src={image} alt="products" width={310} height={360} />
                                            {/* {console.log(typeof id)} */}
                                        </Link>
                                        <a href="" className={ProductCardStyles.heart}>
                                            <i className="ri ri-heart-line"></i>
                                        </a>
                                    </div>
                                    <div className={ProductCardStyles.infos}>
                                        <h6>{title} <span>new</span></h6>
                                        <b>{price} $</b>
                                        <div className={ProductCardStyles.sizes}>
                                            <span>3XL</span>
                                            <span>XXL</span>
                                            <span>XS</span>
                                            <span>M</span>
                                            <span>L</span>
                                        </div>
                                    </div>
                                </div>  
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsSect;
