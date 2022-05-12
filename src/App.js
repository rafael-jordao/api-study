import React, { useState } from "react";
import Produto from "./Produto";
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook

const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  async function handleClick(e) {
    setLoading(true)

    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`)
    const json = await response.json()
    setData(json)

    setLoading(false)
  }

  return (
    <div className="animate">
      
      <ul className="NavDflex">
        <li className=""><a href="#"
          onClick={handleClick}>notebook</a></li>
        <li className="NavList"><a href="#"
          onClick={handleClick}>smartphone</a></li>

        <li className="NavList"><a href="#"
          onClick={handleClick}>tablet</a></li>
      </ul>

      {loading && <p className="animate">Carregando...</p>}

      {!loading && data && <Produto

        data={data} />}

    </div>
  )

};


export default App; 
