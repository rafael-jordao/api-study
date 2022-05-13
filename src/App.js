import React, { useState } from "react";
import Produto from "./Produto";
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [products, setProducts] = useState([]);

  const url = 'https://ranekapi.origamid.dev/json/api/produto/'

  const getApi = async () => {
    const response = await fetch(url)
    const json = await response.json()
    setData(json)
    console.log(json)
  }

  React.useEffect(() => {
    getApi()
  }, [])

  React.useEffect(() => {
    if (products !== 0) {
      window.localStorage.setItem('product-', JSON.stringify({
        "product": products
      }))
    }

  }, [products])


  function getProductsData(itemData) {

    let product = [{
      nome: itemData.nome,
      preco: itemData.preco,
      fotos: itemData.fotos
    }]

    setProducts([...products, product])
    if(product !== null) {
        setProducts(product)
    }
    console.log(product)

  }

  return (
    <div className="animate">

      <ul className="NavDflex">
        {data.map((item, id) => {
          return (
            <li className="NavList" key={id}><button onClick={async () => getProductsData(item)} className="NavButton">{item.nome}</button></li>
          )
        })}
      </ul>

      <ul className="DflexMain">
        {products.map((item, id) => {
          return (
            <div key={id} className="ProductContainer animateProduct">

              {loading && <p className="animate">Carregando...</p>}

              {products && <Produto data={item} />}

            </div>
          )
        })}
      </ul>





    </div>
  )

};


export default App; 
