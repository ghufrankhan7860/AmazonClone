import React from 'react'
import Card4in1 from '../cards/Card4in1'

const HorizontalBarTypeA = () => {

  const cardHeadings: { cardHeading: string }[] = [
    { cardHeading: "Up to 60% | Styles for men" },
    { cardHeading: "Revamp your home in style" },
    { cardHeading: "Up to 75% off | Headphones" },
    { cardHeading: "Get the perfect screen size" },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-4 backdrop-blur">
        {
          cardHeadings.map((card, index) => {
            return <Card4in1 key={index} cardHeading={card.cardHeading} />
          })
        }
      </div>
    </>
  )
}

export default HorizontalBarTypeA