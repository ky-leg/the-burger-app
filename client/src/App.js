// import logo from './logo.svg';
import NavBar from './NavBar';
import Login from "./login/Login"
import RestaurantForm from "./features/restaurants/RestaurantForm"
import RestaurantList from './features/restaurants/RestaurantList'
import DishForm from "./features/dishes/DishForm"
import DishList from './features/dishes/DishList'
import RatingForm from './features/ratings/RatingForm';
import './App.css';
import { useState, useEffect  } from 'react';
import { Routes, Route, useRouteMatch, useParams, Navigate } from "react-router-dom"; 


function App() {
  const [user, setUser] = useState(null)
  const [restaurants, setRestaurants] = useState([]);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  useEffect(() => {
    fetch("/restaurants")
    .then((r) => r.json())
    .then(setRestaurants)
}, []);

useEffect(() => {
  fetch("/dishes")
  .then((r) => r.json())
  .then(setDishes)
}, []);


  if (!user) return <Login user={user} onLogin={setUser}/>

  return (
    <>
      <NavBar user={user} onLogin={setUser}/>
      <main>
        <Routes exact path="/">
          <Route>
            <Route path="/restaurants/new" 
              element={
              <RestaurantForm 
              setRestaurants={setRestaurants}/>}
            />
            <Route 
              path="/restaurants" 
              element={
              <RestaurantList 
              restaurants={restaurants} 
              setRestaurants={setRestaurants}/>}
            />
            <Route 
              path="/dishes/new" 
              element={
              <DishForm 
              restaurants={restaurants} 
              setDishes={setDishes}/>}
            />
            <Route 
              path="/dishes" 
              element={
              <DishList 
              dishes={dishes} 
              setDishes={setDishes}/>}/>
            <Route 
              path={`/restaurants/:id`}
              element={
              <DishList 
              restaurantId={`:id`}
              restaurants={restaurants}
              dishes={dishes} 
              setDishes={setDishes}/>}/>
            <Route 
              path="/ratings/new" 
              element={
              <RatingForm 
              restaurants={restaurants} 
              setRestaurants={setRestaurants}/>}
            />
          </Route>
        </Routes>
      </main>
    </>
    
  );
}

export default App;
