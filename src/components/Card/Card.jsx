import "./Card.scss";

export default function Card({cover, title}) {
  return (
    <div className="card">
      <img className="card__image" src={cover} alt={title} />
      <h2 className="card__title">{title}</h2>
    </div>
  )
}