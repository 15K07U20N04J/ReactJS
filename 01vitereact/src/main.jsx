import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h2>Custom App</h2>
    </div>
  )
}

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MyApp />
    {/* <AnotherElement/> */}
    
  </React.StrictMode>
)

