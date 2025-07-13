import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { connection, db } from './connection';

async function main() {
  try {
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await connection.end();
  }
}

main();