import { connect } from 'mongoose';

export const initDB = async (): Promise<void> => {
  try {
    await connect('mongodb://localhost/pagination');
    console.log('Connected to MongoDB database');
  } catch (error) {
    console.log(`Unable to connect to databasem, error:  ${error}`);
  }
};
