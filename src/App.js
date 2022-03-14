import Header from "./components/Header";
import PaymentType from "./components/PaymentType";
import Footer from "./components/Footer";
import './index.css'
import {BrowserRouter as Route , Routes,Link } from 'react-router-dom'

function App() {
  return (
    <div>
    <Route>
      <Header />
      <PaymentType />
      <Footer />
      </Route>
    </div>
  );
}

export default App;
