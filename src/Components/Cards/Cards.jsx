import './Cards.scss'

function Cards({price, speed, color}){
  return (
    <>
      <div className={color}>
        <div className="header-card">
          <p>Безлимитный {price}</p>
        </div>
        <div className="main-card">
          <div className="main-card-text">
            <h4>руб</h4>
            <span>{price}</span>
            <p>/мес</p>
          </div>
        </div>
        <div className="footer-card">
            <p>до {speed} Мбит/сек</p>
        </div>
        <div className="footer-footer-card">
            <p>Объем включенного трафика не ограничен</p>
        </div>
      </div>
    </>
  )
}

export default Cards
