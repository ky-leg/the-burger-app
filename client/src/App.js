// import logo from './logo.svg';
import NavBar from './NavBar';
import Login from "./login/Login"
import RestaurantForm from "./features/restaurants/RestaurantForm"
import RestaurantList from './features/restaurants/RestaurantList'
import DishList from './features/dishes/DishList'
import RatingForm from './features/ratings/RatingForm';
import './App.css';
import { useState, useEffect  } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { fetchRestaurants } from './features/restaurants/restaurantsSlice';
import { fetchDishes } from './features/dishes/dishesSlice'
import { fetchRatings } from './features/ratings/ratingsSlice';
import RatingList from './features/ratings/RatingList';
import { fetchUsers } from './features/users/usersSlice';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import DishListAll from './features/dishes/DishListAll';


function App() {
  const [user, setUser] = useState(null)
 
  //redux setup 
  const dispatch = useDispatch();

  //FETCHING
  //me
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  //rest
  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch]);

  //dish
  useEffect(() => {
    dispatch(fetchDishes())
  }, [dispatch]);
  
  //rating
  useEffect(() => {
    dispatch(fetchRatings())
  }, [dispatch]);

  //user
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);
  
  const ratings = useSelector(state => state.ratings.entities)
  console.log(ratings)

  if (!user) return <Login user={user} onLogin={setUser}/>

  return (
    <>
      <NavBar user={user} onLogin={setUser}/>
      <main>
        <Routes exact path="/">
            <Route path="/" 
              element={<RatingList/>}
            />
            <Route path="/user/:id" 
              element={<RatingList user={user}/>}
            />
            <Route path="/restaurants/new" 
              element={<RestaurantForm/>}
            />
            <Route 
              path="/restaurants" 
              element={<RestaurantList/>}
            />
            <Route 
              path="/dishes" 
              element={<DishList />}/>
            <Route 
              path={`/restaurants/:id`}
              element={<DishList />}/>
            <Route 
              path="/ratings/new" 
              element={<RatingForm userId={user.id}/>}
            />
            <Route 
              path="/ratings/new/:restaurant_id/:dish_id/" 
              element={<RatingForm userId={user.id} />}
            />
        </Routes>
      </main>
    </>
    
  );
}

export default App;
