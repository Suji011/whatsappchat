# WhatsApp Chat Simulator

A React-based chat simulator that mimics WhatsApp's core functionality, built as part of the Trainee Developer Assessment.

## Features

- 💬 Real-time chat interface
- 🤖 Auto-reply bot with contextual responses
- ✏️ Message editing capabilities
- 🗑️ Message deletion
- 👍 Message reactions with emoji
- ⚡ Message status indicators (sending, sent, delivered)
- ⌨️ Typing indicators
- 🔄 Auto-scrolling to latest messages

## Live Demo
https://peppy-pithivier-dc5a7d.netlify.app/

## Tech Stack

- React.js (with Hooks)
- Tailwind CSS for styling
- JavaScript ES6+

## Setup Instructions

1. Clone the repository
```bash
git clone [your-repository-url]
cd whatsapp-simulator
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
src/
├── App.jsx                # Main application component
├── components/
│   └── ChatSimulator.jsx  # Chat simulator component
├── index.js              # Entry point
└── index.css             # Global styles and Tailwind imports
```

## Implementation Approach

1. **Component Architecture**
   - Single responsibility principle: Each component handles specific functionality
   - Stateful parent component manages data flow
   - Reusable UI components for messages and inputs

2. **State Management**
   - Used React's useState for managing messages, editing state, and UI controls
   - Implemented useEffect for handling side effects like auto-scrolling
   - Maintained message history with unique IDs and timestamps

3. **User Experience**
   - Intuitive interface similar to WhatsApp
   - Smooth animations and transitions
   - Responsive design for all screen sizes
   - Clear visual feedback for user actions

4. **Features Implementation**
   - Message Management:
     - Add, edit, and delete messages
     - Status indicators for message delivery
     - Timestamp and edited status
   - Interactive Elements:
     - Emoji reactions
     - Typing indicators
     - Message status updates
   - Auto-reply Bot:
     - Keyword-based responses
     - Simulated typing delay
     - Contextual message handling

5. **Code Quality**
   - Clear component structure
   - Consistent naming conventions
   - Proper error handling
   - Performance optimizations

## Future Improvements

- Add message search functionality
- Implement message threading
- Add file attachment support
- Include voice messages
- Add user authentication
- Implement real-time database integration

## Contact Information

Sujithra J
- Email: sujithrajayakanth@gmail.com
- LinkedIn: www.linkedin.com/in/sujithra-j-655911251
- GitHub: https://github.com/Suji011

## License

MIT License - feel free to use this project for your own learning and development.