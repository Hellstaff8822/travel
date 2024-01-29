
export const FujiPage = () => {
  return (
    <div className="fuji-buttom">
      <div className="fuji-buttom__info">
        <h6 className="fuji-buttom__title">
        Mount Fuji, <span> Tokyo </span>
        </h6>
        <p className="fuji-buttom__text">Price</p>
      </div>

      <div className="fuji-buttom__desc">
        <p className="fuji-buttom__city">
          <img src="/fi-rr-marker.svg" alt="marker" />
          Tokyo, Japan
        </p>
        <p className="fuji-buttom__price">
          <span>$</span>250
        </p>
      </div>
    </div>
  )
}
