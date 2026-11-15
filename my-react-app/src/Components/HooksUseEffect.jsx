import { useState, useEffect } from "react"

function HooksUseEffect() {

  // 1. TIMER CODE 
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 2. API CODE 
  const [foods, setFoods] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Tomatoes')
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.meals)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h2>Loading food...</h2>
  }

  // 3. Combined 1 and 2 together
  return (
    <div>
        <hr />
      <p>Timer: {seconds} seconds</p>
      

      {foods.map((food) => (
        <div key={food.idMeal}>
          <img src={food.strMealThumb} height="180" width="200" />
          <h3>{food.strMeal}</h3>
        </div>
      ))}
      
      <hr />
    </div>
  )
}

export default HooksUseEffect