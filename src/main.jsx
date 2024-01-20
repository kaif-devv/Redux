import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Error from './components/Error.jsx'
import AddProduct from './components/AddProduct.jsx'
import './index.css'
import { store } from './redux-store/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx';
// import PrivateRoutes from './appwrite/privateRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/Redux/signup" exact element={<Signup />} />
          <Route path="/Redux/login" exact element={<Login />} />
          {/* <Route path="/Redux" element={<PrivateRoutes />} > */}
            <Route path="/Redux/" exact element={<App />} />
            <Route path="/Redux/Error" element={<Error />} />
            <Route path="/Redux/AddProduct" element={<AddProduct />} />
          {/* </Route> */}
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
