import React from 'react';

import Produto from './Components/Produtos'

function App() {
    const [produto, setProduto] = React.useState(null);

    React.useEffect(() => {
        const produtoLocal = localStorage.getItem('produto');
        if (produtoLocal !== null) setProduto(produtoLocal)
    }, [])

    React.useEffect(() => {
        if (produto !== null) localStorage.setItem('produto', produto)
    }, [produto])

    function handleClick({ target }) {
        setProduto(target.innerText)
    }
    return (
        <div>
            <h1>Preferencia: {produto}</h1>
            <button onClick={handleClick}>notebook</button>
            <button onClick={handleClick}>smartphone</button>
            <Produto produto={produto} />
        </div>
    );
}

export default App;
