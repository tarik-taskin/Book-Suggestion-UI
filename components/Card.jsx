import React from 'react'
import '../css/cardstyle.css'
import Font, {Text} from 'react-font'
function Card({book}) {
  const {src,ad,aciklama,yazar} = book
  return (
    <Font family='Roboto'>
    <div className="card">
        <div className="card-body">
            <img className='image' src={src}/>
        </div>
        <div className="card-footer">
          <h1>
            {ad}
          </h1>
          <h2>
            {yazar}
          </h2>
          <p>
            {aciklama}
          </p>
        </div>
    </div>
    </Font> 
  )
}

export default Card