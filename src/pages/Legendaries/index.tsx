import React from 'react'
import style from './Legendaries.module.scss'

interface Props {

}

const Legendaries: React.FC = () : JSX.Element => {
  return (
    <div className = {style.root}>
      Legendaries
    </div>
  )
}

Legendaries.defaultProps = {
  
}

export default Legendaries
