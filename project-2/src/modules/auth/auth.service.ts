import bcrypt from "bcryptjs";
import config, { prisma } from "../../config";
import { IUser } from "./interface";

const register = async (payload: IUser) => {
  const result = await prisma.user.create({
    data: {
      ...payload,
      password: bcrypt.hashSync(payload.password, Number(config.round)),
    }
  });
  return result;
};

export const AuthService = {
  register,
};
