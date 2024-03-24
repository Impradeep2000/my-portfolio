import React from 'react'
import "./styles.css"

function SkillsCard({img}) {
  return (
    <div className='skill-card'>
        <img src={img} alt='img' />
    </div>
  )
}

export default SkillsCard