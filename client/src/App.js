import React,{useEffect,createContext,useReducer,useContext} from 'react'
import {BrowserRouter,Route,Switch,useHistory} from'react-router-dom'
import NavBar from './component/Navbar'
import "./App.css"
import Home from './component/screen/Home'
import Signin from './component/screen/Login'
import Signup from './component/screen/Signup'
import Profile from './component/screen/Profile'
import CreatePost from './component/screen/CreatePost'
import UserProfile from './component/screen/UserProfile'
import {reducer,initialState} from './reducers/userReducer'
import SubscribesUserPost from './component/screen/SubscribesUserPosts'
export const userContext=createContext()

const Routing=()=>{
  const history=useHistory()
  const {state,dispatch}=useContext(userContext)
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
      if(user){
         dispatch({type:"USER",payload:user})
       // history.push('/')
      }
      else{
        history.push('/signin')
      }
  },[])
  return(
    <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/signin">
           <Signin />
         </Route>
         <Route path='/signup'>
           <Signup />
         </Route>
         <Route exact path='/profile'> 
          <Profile />
         </Route>
         <Route  path='/create'> 
          <CreatePost />
         </Route>
         <Route path='/profile/:userid'>
          <UserProfile />
        </Route>
        <Route path="/myfollowingpost">
          <SubscribesUserPost />
        </Route>
    </Switch>
  )
}
function App() {
  const [state,dispatch] =useReducer(reducer,initialState)
  return (
      <userContext.Provider value={{state,dispatch}}> 
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
      </userContext.Provider>
  );
}


export default App;
