import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Components/Menu'
import { createGlobalStyle } from 'styled-components'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Rotas/Home'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/comofazer' element={<Home/>} />
        <Route path='/ofertas' element={<Home/>} />
        <Route path='/depoimentos' element={<Home/>} />
        <Route path='/vídeos' element={<Home/>} />
        <Route path='/meucarrinho' element={<Home/>} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
