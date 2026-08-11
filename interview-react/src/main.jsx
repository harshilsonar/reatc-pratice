import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './context/CartContext.jsx'
import WishlistProvider from './context/WishlistContext.jsx'
import SearchProvider from './context/SearchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishlistProvider>
      <CartProvider>
        <SearchProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </SearchProvider>
      </CartProvider>
    </WishlistProvider>
  </StrictMode>,
)
