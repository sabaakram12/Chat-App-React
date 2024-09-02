import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect('mongodb://localhost/chat-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the message schema
const messageSchema = new mongoose.Schema({
  room: String,
  author: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

// Create the Message model
const Message = mongoose.model('Message', messageSchema);

export { Message };
