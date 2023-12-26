{/* <div className='hostform__setmargin'>
6. Agrega las imagenes que coniseres representativas de tu espacio
</div>
<label htmlFor='file' className='hostform__label'>
+ Agregar imagenes
<input
  type='file'
  name='file'
  id='file'
  accept='image/*'
  multiple
  onChange={handleChange}
  className='hostform__inputtext'
/>
</label>
<div className='hostform__imgprev'>
{fileDataURL &&
  fileDataURL.map((image, index) => {
    return (
      <div key={image} className='hostform__imgprev__card'>
        <img src={image} alt='previe' height='200'></img>
        <button onClick={() => handleClick(image)}>
          Delete image
        </button>
      </div>
    );
  })}
</div> */}