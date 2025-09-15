import express from 'express';
import connec from './db.js';
import updatenoteRoutes from './routes/updatenote.route.js';
import createnoteRoutes from './routes/createnote.route.js';
import deletenoteRoutes from './routes/deletenote.route.js';
import noteRoutes from './routes/getnotes.route.js';
const app = express();
connec();
app.use(express.json());
const port = 3000;

app.use('/api', noteRoutes);


app.use('/api', createnoteRoutes);

app.use('/api', deletenoteRoutes);

app.use('/api', updatenoteRoutes);
app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
})