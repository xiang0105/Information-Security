import "./App.css"
import Home from "./Page/Home.tsx"
import About from "./Page/About.tsx"
import Navbar from "./Element/Navbar.tsx"
import Video from './Page/Video.tsx';
import Question from './Page/Question.tsx';
import Game from './Page/Game.tsx';
import Source from './Page/Source.tsx'; 

function App() {
  return (
    <>
      < Navbar />
      < Home />
      < About />
      < Video />
      < Question />
      < Game />
      < Source />
    </>
  )
}


export default App
