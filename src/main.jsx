import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import CadastrarProduto from './routes/CadastrarProduto.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'

// criando elementos pai 

const router = createBrowserRouter([
  
  {
    //elemento pai 
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //elementos filho
    children:[
      {path:'/', element:<Home/>},
      {path:'/login', element:<Login/>},
      {path:'/produtos', element:<Produtos/>},
      {path:'/cadastrarprodutos', element:<CadastrarProduto/>},
      {path:'/sobre', element:<Sobre/>},

    ]
    }
    
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
