import '../style/App.scss'
import Cards from './Cards/Cards.jsx'


function App() {
  const obj = [
    {
      price: 300,
      speed: 10,
      color: 'skyblue'
    },
    {
      price: 450,
      speed: 50,
      color: 'green'
    },
    {
      price: 550,
      speed: 100,
      color: 'red'
    },
    {
      price: 1000,
      speed: 200,
      color: "black"
    }
  ]

  return (
    <>
      <div className="cards">
        <Cards {...obj[0]} />
        <Cards {...obj[1]} />
        <Cards {...obj[2]} />
        <Cards {...obj[3]} />
      </div>
    </>
  )
}

export default App
