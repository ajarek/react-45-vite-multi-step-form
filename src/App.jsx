import { Routes, Route } from 'react-router-dom'
import Navigation from "./components/Navigation"
import { useState, createContext } from 'react'
import Info from "./pages/Info"
import Plan from "./pages/Plan"
import AddOns from "./pages/AddOns"
import Summary from "./pages/Summary"

export const AppContext = createContext()

function App() {
  const [deadline, setDeadline] = useState(true)
  const [nameUser,setNameUser]=useState(null)
  
  return (
    <div className="App">
      <AppContext.Provider value={{deadline, setDeadline,nameUser,setNameUser}}>
     <Navigation/>
     <Routes>
        <Route
          path='/'
          element={<Info/>}
        />
        <Route
          path='/plan'
          element={<Plan/>}
        />
        <Route
          path='/addons'
          element={<AddOns/>}
        />
        <Route
          path='/summary'
          element={<Summary/>}
        />
        </Routes>
        </AppContext.Provider>
    </div>
  )
}

export default App
