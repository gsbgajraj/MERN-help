import path from 'path';


import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const buildPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(buildPath));

// paste this in the last of the serever.js file do not include in the above, nothing will work, you already faced the error

app.get('*', (req, res) => { res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html')); });
