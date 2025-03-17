import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar, HeroSection, ArticleList, Footer} from './component/component.jsx'

function App() {

  const articles = [
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpI-aJAAH06t1AJiaYSFH5XrqS6NQEGrs-0A&s",
          category: "Cat",
          title: "[Title]",
          description: "[Short description]",
          author: "Thompson P.",
          date: "11 September 2024"
        },
        {
          image: "https://i.redd.it/the-spelling-bee-contestants-v0-z95j1j91qyed1.jpg?width=286&format=pjpg&auto=webp&s=580af708ef1a1c5528b81daf31b30a5cf4f90272",
          category: "Cat",
          title: "[Title]",
          description: "[Short description]",
          author: "Thompson P.",
          date: "11 September 2024"
        },
        {
          image: "https://preview.redd.it/the-spelling-bee-contestants-v0-77kkh291qyed1.jpg?width=276&format=pjpg&auto=webp&s=af1c58a693e615cd18aef97178bcbbf46c85cce0",
          category: "Cat",
          title: "[Title]",
          description: "[Short description]",
          author: "Thompson P.",
          date: "11 September 2024"
        },
        {
          image: "https://i.ytimg.com/vi/FKc3760Audc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIA3xupa0ZORWHnNBbSupvm44Fpw",
          category: "Cat",
          title: "[Title]",
          description: "[Short description]",
          author: "Thompson P.",
          date: "11 September 2024"
        },
      ];
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ArticleList articles={articles} />
      <Footer />
    </div>
  )
}

export default App
