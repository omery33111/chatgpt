import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authenticationRoutes from './routers/authenticationRoutes';
import axios from 'axios';
import { WebSocketServer } from 'ws';

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.use(cors({
  origin: [`http://localhost:${port}`, `http://127.0.0.1:${port}`]
}));

app.use('/authentication', authenticationRoutes);

// Health check route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is healthy' });
});

// Run Server
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Create WebSocket server
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', async (message) => {
    console.log('Received:', message);

    try {
      const response = await axios.post(
        `https://api.openai.com/v1/chat/completions`,
        {
          model: "gpt-4",
          messages: [
            {
              role: "user",
              content: message.toString(),
            },
          ],
          stream: true,
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          responseType: 'stream',
        }
      );

      response.data.on('data', (chunk: Buffer) => {
        const data = chunk.toString().split('\n').filter(line => line.trim() !== '');
        for (const line of data) {
          const message = line.replace(/^data: /, '');
          try {
            const parsed = JSON.parse(message);
            if (parsed.choices && parsed.choices[0].delta) {
              const content = parsed.choices[0].delta.content;
              if (content) {
                ws.send(content);
              }
            }
          } catch (e) {
            console.error('Error parsing or sending message:', e);
          }
        }
      });

    } catch (error) {
      console.error('Error calling the API:', error);
      ws.send('Error calling the API');
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

// Function to close the server
function closeServer() {
  server.close(() => {
    console.log(`Server on port ${port} is now closed.`);
    process.exit(0); // Ensure the process exits to free the port
  });
}

// Automatically close the server on exit signals
['SIGTERM', 'SIGINT', 'SIGUSR2'].forEach(signal => {
  process.on(signal, () => {
    console.log(`Received ${signal}, closing server...`);
    closeServer();
  });
});