function Card(props) {
    const {cardTitle, cardImg, cardDesc, prize, cardCategory, rating, count} = props
 return (
    <>
      <div className="card">
        <div className="img-container"><img src={cardImg} alt="card image" width={400} height={400}/></div>
        <h3>{cardTitle}</h3>
        <h4>Price: ${prize}</h4>
        <h4>Rating: {rating}</h4>
        <p>Description: {cardDesc}</p>
        <button>Add to cart</button>
      </div>
    </>
 )
}

export default Card;