import { connect } from 'mongoose';

export class Database {
  public async initDB(): Promise<void> {
    try {
      await connect('mongodb://localhost/pagination');
      console.log('Connected to MongoDB database');
    } catch (error) {
      console.log(`Unable to connect to databasem, error:  ${error}`);
    }
  }
}
