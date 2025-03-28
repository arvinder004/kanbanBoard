import React from 'react'
import "./Card.css"
import { MoreHorizontal } from 'react-feather'
import Chip from '../chip/Chip'

const Card = () => {
  return (
    <div className='card'>
        <div className="card_top">
            <div className="card_labels">
              <Chip text="Frontend" color="green" />
            </div>
            <MoreHorizontal/>
        </div>
    </div>
  )
}

export default Card