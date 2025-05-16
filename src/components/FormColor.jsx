import React, { useState } from 'react'
import Values from 'values.js'

const FormColor = ({ setList }) => {

       const [color, setColor] = useState('');
       
       const [error, setError] = useState(false);

       const handleGenerator = (e) => {
              e.preventDefault();
              try {
                     let colors = new Values(color).all(10);
                     setList(colors);
                     setError(false);
                     setColor("");

              } catch (error) {
                     console.log(error)
                     setError(true);
              }
              console.log(color)
              
       }
       return (
              <div className='form-color'>
              <h1>Generador de Colores</h1>
                     <form onSubmit={handleGenerator}>
                            <input type="text" placeholder='Search...' onChange={e => setColor(e.target.value)} value={color} />
                            <input type="submit" value="Generar" />
                     </form>

                     { error ? <p className='error'>Color no encontrado</p> : null}
              </div>
       )
}

export default FormColor
