import './App.css'
import Card from './component/Card'

function App() {

  let myObj = {
    username : "Rohit",
    age : 36
  }

  return (
    <>
      <h1 className='bg-green-400 p-5 text-black rounded-xl'>Tailwind Test</h1>
      <Card username = "ChaiAurCode" btnText = "Click me"/>
      <Card btnText = "Visit me" />
    </>
  )
}

export default App
