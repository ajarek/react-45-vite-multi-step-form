import { Routes, Route } from 'react-router-dom'
import Navigation from "./components/Navigation"
import Info from "./pages/Info"
import Plan from "./pages/Plan"
import AddOns from "./pages/AddOns"
import Summary from "./pages/Summary"

function App() {
 

  return (
    <div className="App">
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
     
    </div>
  )
}

export default App
