import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay for demonstration purposes
    // throw new Error('Database connection failed'); // Simulate an error for demonstration purposes
    return db.prepare('SeLECT * FROM meals').all();
}