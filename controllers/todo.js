import TodoDB from "../models/todo.js";

const Todo = {
    async getAll(req, res) {
        const todos = await TodoDB.getAllTodos();
        await res.json({statusCode:"200", data: todos});
    },

    async make(req, res) {
        const values = {
            title: req.body.title || '',
            text: req.body.text || ''
        }

        const newTodo = await TodoDB.createTodo(values);
        await res.json({statusCode: "200", data: newTodo});
    },

    async get (req, res) {
        const id = req.params.id;
        const todo = await TodoDB.getTodo(id);
        await res.json({statusCode:"200", data:todo});
    },

    async remove (req, res) {
        const id = req.params.id;
        const removedTodo = await TodoDB.deleteTodo(id);
        await res.json({statusCode: "200", message: `Todo has been deleted ${removedTodo}`});
    },

    async edit (req, res) {
        const id = req.params.id;
        const values = {
            title: req.body.title || '',
            text: req.body.text || ''
        }

        const newTodo = await TodoDB.updateTodo(id, values);
        await res.json({statusCode: "200", data: newTodo});
    }
}

export default Todo;