import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
const saltRounds = 10;

const hashedPassword = bcrypt.hashSync(process.env.realPassword, saltRounds);
export default hashedPassword;
