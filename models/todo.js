import database from '../config/database.js';
import { v4 as uuid } from 'uuid';

const TodoDB = {
    async getAllTodos() {
        const res = await database.executeWithoutValue('SELECT * FROM todo');
        return res.rows;
    },

    async getTodo(id) {
        const value = [id];
        const text = "SELECT * FROM todo WHERE id= $1";

        const res = await database.executeWithValue(text, value);
        return res.rows;
    },

    async createTodo(values) {
        values = [uuid(), values.title, values.text];
        const text = "INSERT INTO todo(id, title, text, create_date, update_date) VALUES($1, $2, $3, NOW(), NOW()) RETURNING *";

        const res = await database.executeWithValue(text, values);
        return res.rows;
    },

    async updateTodo(id, values) {
        values = [values.title, values.text, id];
        const text = "UPDATE todo SET title = $1, text = $2, update_date=NOW() WHERE id = $3 RETURNING *";

        const res = await database.executeWithValue(text, values);
        return res.rows;
    },

    async deleteTodo(id) {
        const value = [id];
        const text = "DELETE FROM todo WHERE id=$1";

        const res = await database.executeWithValue(text, value);
        return res.rowCount;
    }
}

export default TodoDB;