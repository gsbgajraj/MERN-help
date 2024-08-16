import express from 'express'; import path from 'path';

const app = express();

// Serve static files from the React app const __dirname = path.resolve(); // This resolves the directory name correctly app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// Handle any requests that don't match the API routes app.get('*', (req, res) => { res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html')); });

const PORT = process.env.PORT || 5000; app.listen(PORT, () => { console.log(Server is running on port ${PORT}); });
