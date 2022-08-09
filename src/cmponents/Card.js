import "./Card.css"

const Card = (props) => {
  const { id, title, url, active } = props.data
  return (
    <div
      className={`card ${active && "active"}`}
      style={{ backgroundImage: `url(${url})` }}
      onClick={() => props.onCardClick(id)}
    >
      <h2>{title}</h2>
    </div>
  )
}

export default Card
