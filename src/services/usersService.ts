import { User, BaseUser } from '../models/User';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
const API_KEY = process.env.REACT_APP_API_KEY || 'default';

export const fetchUsers = async (): Promise<BaseUser[]> => {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/users`, {
            method: 'GET',
            headers: {
                'API-KEY': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error('Error getting the users');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting the users', error);
        throw error;
    }
};

export const createUser = async (user: User): Promise<BaseUser> => {
    try {
        const response = await fetch(`${BASE_URL}/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API-KEY': API_KEY
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud de useros');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al crear el usero:', error);
        throw error;
    }
};

export const updateUser = async (user: BaseUser): Promise<BaseUser> => {
    try {
        const response = await fetch(`${BASE_URL}/api/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'API-KEY': API_KEY
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud de useros');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al actualizar el usero:', error);
        throw error;
    }
}

export const deleteUser = async (id: number): Promise<void> => {
    try {
        const response = await fetch(`${BASE_URL}/api/users?id=${id}`, {
            method: 'DELETE',
            headers: {
                'API-KEY': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud de useros');
        }
    } catch (error) {
        console.error('Error al eliminar el usero:', error);
        throw error;
    }
}
