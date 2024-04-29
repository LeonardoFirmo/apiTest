import express from 'express'
import connectDatabase from './database/db.js';
import dotenv from 'dotenv';
// import routes from "./routes.js";
import routes from './routes.js'


// Config Base
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);


// Connecção
connectDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log("servidor iniciado na porta " + PORT);
        })
    }).catch((err) => {
        console.log('Erro: ' + err);
    })















// app.get("/users/:userId", async (req, res) => {
//     try {
//         const userId = req.params.userId;
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ error: 'Usuário não encontrado' });
//         }
//         return res.json(user);

//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'Erro ao buscar usuários' });
//     }

// });

