import ProdStyles from "../../styles/forPages/ProductPage/Product.module.scss"
const Dropdown = () => {
    return (
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
    )
}

export default Dropdown
