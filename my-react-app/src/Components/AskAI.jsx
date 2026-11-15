// import { useState } from 'react'
// import './AskAI.css'

// function AskAI() {
//   const [message, setMessage] = useState('')
//   const [chat, setChat] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [showChat, setShowChat] = useState(false) // Button click to open

//   const sendMessage = async () => {
//     if (!message.trim()) return
//     const userMsg = message
//     setChat(prev => [...prev, { from: 'you', text: userMsg }])
//     setMessage('')
//     setLoading(true)

//     try {
//       await new Promise(resolve => setTimeout(resolve, 1000))
//       let aiReply = 'You said: ' + userMsg
//       if (userMsg.toLowerCase().includes('biryani')) aiReply = 'Biryani is ₹199! Chicken or Veg?'
//       else if (userMsg.toLowerCase().includes('pizza')) aiReply = 'Pizza is ₹299! Cheese Burst is best seller.'
//       else if (userMsg.toLowerCase().includes('hi') || userMsg.toLowerCase().includes('hello')) aiReply = 'Hello! Welcome to FoodHub. What do you want to eat?'
//       setChat(prev => [...prev, { from: 'ai', text: aiReply }])
//     } catch (err) {
//       setChat(prev => [...prev, { from: 'ai', text: 'Oops, something went wrong.' }])
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div>
//       {/* TOP HEADER LIKE PRACTO PHOTO */}
//       <div className="foodhub-header">
//         <div className="location">📍 Muscat ⌄</div>
//         <div className="search-bar">🔍 Search for S...</div>
        
//         {/* THE ASK AI BUTTON - TOP RIGHT */}
//         <button className="ask-ai-btn" onClick={() => setShowChat(!showChat)}>
//           <span>✨</span>
//           <div>Ask<br/>Food AI</div>
//         </button>
//       </div>

//       {/* CHAT OPENS ONLY WHEN YOU CLICK BUTTON */}
//       {showChat && (
//         <div className="askai-box">
//           <h3>Ask Food AI</h3>
//           <div className="askai-chat">
//             {chat.map((c, i) => (
//               <div key={i} className={c.from === 'you' ? 'chat-you' : 'chat-ai'}>{c.text}</div>
//             ))}
//             {loading && <p>AI is thinking...</p>}
//           </div>
//           <input className="askai-input" value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }} placeholder="Ask for biryani, pizza..." />
//           <button className="askai-btn-send" onClick={sendMessage}>Send</button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default AskAI

import { useState } from 'react'
import './AskAI.css'

function AskAI() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])
const sendMessage = async () => {
  if (!message.trim()) return
  const userMsg = message
  setChat(prev => [...prev, { from: 'you', text: userMsg }])
  setMessage('')

  // TEMPORARY reply until n8n is connected
  setTimeout(() => {
    setChat(prev => [...prev, { from: 'ai', text: 'Nice! I got your message: ' + userMsg + '. n8n will answer soon!' }])
  }, 500)
}

  return (
    <>
      <button className="ask-ai-btn" onClick={() => setOpen(true)}>
        ✨ Ask Food AI
      </button>

      {open && (
        <div className="chat-box">
          <div className="chat-header">
            FoodHub AI <button onClick={() => setOpen(false)}>X</button>
          </div>
          <div className="chat-body">
            {chat.map((c, i) => (
              <p key={i} className={c.from}>{c.text}</p>
            ))}
          </div>
          <input 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about menu, offers..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </>
  )
}

export default AskAI