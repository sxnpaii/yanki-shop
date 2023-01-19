import SortingBarStyles from "../../styles/forPages/CatalogsPage/sections/SortingBar.module.scss"
const SortingBar = () => {
  return (
    <section className={SortingBarStyles.innerSortingBar}>
      <ul>
        <li>Размер <i className="ri ri-arrow-down-s-line"></i></li>
        <li>Цвет <i className="ri ri-arrow-down-s-line"></i></li>
        <li>Цена <i className="ri ri-arrow-down-s-line"></i></li>
        <li>
          <select>
            <option disabled selected>Сортировать по</option>
            <option>по названию</option>
            <option> по id</option>
          </select>
        </li>
      </ul>
    </section>
  )
}

export default SortingBar;
