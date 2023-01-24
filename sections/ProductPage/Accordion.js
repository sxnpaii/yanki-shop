// styles
import ProdStyles from "../../styles/forPages/ProductPage/Product.module.scss";

const Accordion = ({ res }) => {
    return (
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
    )
}

export default Accordion
