import React, { useState } from "react";

const Produto = ({ data }) => {

  const [count, setCount] = useState(0)
  

  React.useEffect(() => {
      if (count !== 0) {
        window.localStorage.setItem('product-' + data.nome, JSON.stringify({
          "quantity": count
        }))
      }
  
    }, [count])
  

  const handleClickPlus = () => {
    setCount(count + 1)
  }

  const handleClickMinus = () => {
    if (count <= 0) {
      return null
    }
    setCount(count - 1)
  }

  return (

    <div className="ProductContainer animateProduct">
      <div className="DFlexTitle">
        <h1>{data.nome}</h1>
        <div className="LabelWithPrice">
          <p className="LabelText">A partir de</p>
          <p className="PriceText">
            R$ {data.preco}
          </p>
        </div>

      </div>
      <div className="DFlexShop">

        <div className="maxWidth40">
          <button className="AddOrMinus Add" onClick={handleClickPlus}>+</button>
          <button className="AddOrMinus Minus" onClick={handleClickMinus}>-</button>
          <span className="PriceSum">R$ {count * data.preco}</span>
        </div>

        <div>
          <button className="ButtonShopGrenn">Comprar</button>
        </div>
      
      </div>

      <img src={data.fotos[0].src} alt={data.fotos[0].titulo}></img>

    </div>
  )

}

export default Produto;