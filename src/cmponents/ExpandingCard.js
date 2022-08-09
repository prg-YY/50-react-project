import { useState } from "react"
import Card from "./Card"

import "./ExpandingCard.css"

const ExpandingCard = (props) => {
  const [data, setData] = useState(props.data)

  if (!data || data.length <= 0) {
    return "There is No Any Data!!"
  }

  const onCardClick = (id) => {
    const newState = [...data]

    newState.map((item) =>
      item.id === id ? (item.active = true) : (item.active = false)
    )
    setData(newState)
  }
  return (
    <section className="cards">
      {data.map((card) => (
        <Card key={card.id} data={card} onCardClick={onCardClick} />
      ))}
    </section>
  )
}

export default ExpandingCard
