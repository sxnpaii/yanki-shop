import PushNotifStyles from '../../styles/forPages/HomePage/sections/PushNotifStyles.module.scss';
const PushNotifs = () => {
  return (
    <section className={PushNotifStyles.innerPushNotifs}>
      <div className={`container ${PushNotifStyles.text}`}>

        <h2 className={PushNotifStyles.heading}>Узнайте  первым о новинках</h2>

        <input type="text" placeholder='Ваш e-mail*' />
        <a href="">
          <button>ПОДПИСАТЬСЯ</button>
        </a>
        <p>Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с <a href="">условиями конфиденциальности.</a>
        </p>
      </div>
    </section >
  )
}

export default PushNotifs;
