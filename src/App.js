import "./App.css"
import NavigationBar from "./components/Navbar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import "./style/style.css"
import Superhero from "./components/Superhero"

function App() {
  return (
    <div>
      <div className="BG">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending pt-5">
        <Trending />
      </div>
      <div className="superhero pt-5">
        <Superhero />
      </div>
    </div>
  )
}

export default App
