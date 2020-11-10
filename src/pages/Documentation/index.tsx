import React from 'react'
import style from './Documentation.module.scss';

interface Props {

}

const DocumentationPage: React.FC<Props> = () : JSX.Element => {
  return (
    <div className = {style.root}>
      DocumentationPage
    </div>
  )
}

DocumentationPage.defaultProps = {
  
}

export default DocumentationPage
