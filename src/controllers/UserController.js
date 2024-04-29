import User from '../models/User.js';

async function getUsers(req, res) {
    try {
        const users = await User.find();
        return res.json(users);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
}

async function createUser(req, res) {
    try {
        const { name, age } = await req.body;

        // Forma 1 de criar usuario no banco
        // const newUser = new User({ name, age });
        // newUser.save().then(() => console.log('Salvo com sucesso'));

        // Forma 2 de criar usuario no banco
        await User.create({ name: name, age: age })
            .then(newUser => {
                console.log('Novo usuário criado:', newUser)
                return res.status(301).json({ name: name, age: age })
            })
            .catch(error => console.error('Erro ao criar usuário:', error));



    } catch (error) {
        console.log(error);
    }
}



async function deleteUser(req, res) {
    const { id } = req.params

    try {
        await User.findByIdAndDelete({ _id: id });
        return res.status(200).json({ message: "usuário removido com sucesso!" })

    } catch (error) {

        return res.status(500).json({ error: 'Erro ao deletar usuário' });
    }

}


export {
    getUsers,
    createUser,
    deleteUser
};