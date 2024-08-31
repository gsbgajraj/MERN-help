
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const buildPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(buildPath));

app.get('*', (req, res) => { res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html')); });
