import { Sequelize } from "sequelize-typescript";
import { User } from "../models/User";

export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  dialect: "postgres",
  models: [User],
});

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");

    await sequelize.sync();
    console.log("Database synchronized");
  } catch (error) {
    console.error("Unable to connect to database:", error);
    process.exit(1);
  }
};
