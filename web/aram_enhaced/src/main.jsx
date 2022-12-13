import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from './styles/GlobalStyles';
import Home from './pages/Home'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Home />
  </React.StrictMode>
)
