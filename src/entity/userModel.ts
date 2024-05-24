import client from '../config/database';
// import Client from '../config/database'

export interface User {
    fname: string;
    lname: string;
    email: string;
    contact: number;
}

export class UserModel {
   static async create(user: User): Promise<User> {
        const {fname, lname, email, contact} = user;
        const result = await client.query(`INSERT INTO user(fname, lname, email, contact) VALUES ('Harsh', 'Wardhan', 'abc', '123456') RETURNING *`);
        return result.rows[0];
    }

    static async findAll(): Promise<User[]> {
        const result = await client.query('SELECT * FROM user');
        return result.rows;
    }

    static async findByName(fname: String) : Promise<User> {
        const result = await client.query('SELECT * FROM user WHERE fname = $1', [fname]);
        return result.rows[0];
    }

    static async delete(fname: String): Promise<void> {
        await client.query('DELETE FROM user WHERE fname = $1', [fname])
    }
}