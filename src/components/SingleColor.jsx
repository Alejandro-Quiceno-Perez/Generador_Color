import React from 'react'
import Clip from "/clipTransparent.png"

const SingleColor = ({ hexColor }) => {
       const [copy, setCopy] = React.useState(false);

       const handleCopy = (color) => () => {
              const colorNew = `#${color}`;
              navigator.clipboard.writeText(colorNew);
              setCopy(true);

              setTimeout(() => {
                     setCopy(false);
              }, 2000);
       }
       return (
              <div className='single-card' style={{ backgroundColor: `#${hexColor}` }}>
                     <div className="content">
                            <p>#{hexColor}</p>
                            <button onClick={handleCopy(hexColor)}>
                                   <img src={Clip} alt="Copy" />
                            </button>
                     </div>
                     {
                            copy ? <p className='copy-alert'>Color Copiado</p> : null
                     }
              </div>
       )
}

export default SingleColor
