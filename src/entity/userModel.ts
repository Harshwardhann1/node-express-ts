import pool from '../config/database'

export interface User {
    fname: string;
    lname: string;
    email: string;
    contact: number;
}

export class UserModel {
    static async create(user: User): Promise<User> {
        const {fname, lname, email, contact} = user;
        const result = await pool.query(`INSERT INTO user(fname, lname, email, contact) VALUES ($1, $2, $3, $4) RETURNING *`,   [fname, lname, email, contact]);
        return result.rows[0];
    }

    static async findAll(): Promise<User[]> {
        const result = await pool.query('SELECT * FROM user');
        return result.rows;
    }

    static async findByName(fname: String) : Promise<User> {
        const result = await pool.query('SELECT * FROM user WHERE fname = $1', [fname]);
        return result.rows[0];
    }

    static async delete(fname: String): Promise<void> {
        await pool.query('DELETE FROM user WHERE fname = $1', [fname])
    }
}