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
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { fetchRestaurants } from './features/restaurants/restaurantsSlice';
import { fetchDishes } from './features/dishes/dishesSlice'


function App() {
  const [user, setUser] = useState(null)

  //redux setup 
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDishes())
  }, [dispatch]);

  if (!user) return <Login user={user} onLogin={setUser}/>

  return (
    <>
      <NavBar user={user} onLogin={setUser}/>
      <main>
        <Routes exact path="/">
          <Route>
            <Route path="/restaurants/new" 
              element={<RestaurantForm/>}
            />
            <Route 
              path="/restaurants" 
              element={<RestaurantList/>}
            />
            <Route 
              path="/dishes/new" 
              element={<DishForm/>}
            />
            <Route 
              path="/dishes" 
              element={<DishList/>}/>
            <Route 
              path={`/restaurants/:id`}
              element={<DishList restaurantId={`:id`}/>}/>
            <Route 
              path="/ratings/new" 
              element={<RatingForm userId={user.id}/>}
            />
          </Route>
        </Routes>
      </main>
    </>
    
  );
}

export default App;
