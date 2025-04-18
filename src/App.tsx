import { useState } from 'react'
import './App.css'

function App() {
  const [currentMessage, setCurrentMessage] = useState<string>('')
  const messages = [
    // Kafka-inspired (but made sweeter)
    "In the chaos of existence, you are my constant butterfly 🦋",
    "Like a dream within a dream, my love for you is the only reality ✨",
    "Through every metamorphosis of life, my heart remains yours 🐛💖",
    "In this labyrinth of days, you are my golden thread 🧶💫",
    
    // Neruda-inspired
    "I love you without knowing how, or when, or from where 💫",
    "In one kiss, you'll know all I haven't said 💋",
    "Every day you play with the light of the universe ⭐",
    
    // e.e. cummings inspired
    "Yours is the light by which my soul's born 🌟",
    "You carry my heart with you (you carry it in your heart) 💝",
    "Nobody, not even the rain, has such small hands 🌧️",
    
    // Lord Byron inspired
    "You walk in beauty, like the night of cloudless climes ✨",
    "The light of my life, the beat of my heart 💓",
    
    // Modern cute twists
    "You're my favorite notification 📱💖",
    "You're the semicolon to my code 💻;",
    "Error 404: Words not found to express my love 🤍",
    "You make my heart smile bigger than any emoji 😊",
    "You're the star my telescope was always searching for 🔭",
    
    // Sweet existential ones
    "In infinite parallel universes, I choose you in every one 🌌",
    "Time is an illusion, but my love for you is constant ⌛",
    "Beyond space and time, my heart orbits yours 🪐",
    
    // Whimsical ones
    "Like a cat chasing a laser pointer, I'm forever pursuing your love 🐱",
    "You're the poetry in my prose, the verse in my universe 📚",
    "Like Kafka's insects, I'm transformed by your love (but cuter!) 🦋"
  ]

  const generateNewMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length)
    setCurrentMessage(messages[randomIndex])
  }

  return (
    <div className="love-notes-container">
      <h1>Love Notes For You 💝</h1>
      <div className="message-display">
        {currentMessage || "Click the button for a sweet message! 💕"}
      </div>
      <button onClick={generateNewMessage} className="generate-button">
        Generate Love Note 💌
      </button>
    </div>
  )
}

export default App 
