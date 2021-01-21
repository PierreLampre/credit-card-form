import './App.css';
import CreditCardForm from "./components/CreditCardForm/CreditCardForm"
import CreditCardVisual from "./components/CreditCardVisual/CreditCardVisual"

function App() {
  return (
    <div className="App">
      <CreditCardVisual />
      <CreditCardForm />
    </div>
  );
}

export default App;
