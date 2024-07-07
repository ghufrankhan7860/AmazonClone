import React from 'react'
import CardBarTypeB from '../barsCardsTemplates/CardBarTypeB'

const HorizontalBarTypeB = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-3 px-3 mt-3">
                <CardBarTypeB />
                <CardBarTypeB />
                <CardBarTypeB />
            </div>
        </div>
    )
}

export default HorizontalBarTypeB