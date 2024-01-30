import logo from './logo.svg';
import './App.css';
import Card from './Components/Card'
function App() {
  let myObj = {
    name: "Omkar",
    role: "Software Developer"
  }
  return (
    <>
    <h1 className='bg-green-400 mx-3 mb-4'>Tailwind</h1>
    <Card channel="chaiAurCode" someObj={myObj}/>
    <Card/>
    </>
  );
}

export default App;
