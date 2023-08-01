import { Request, Response } from "express";
import { prisma } from "../prisma/prismaClient";
import { compare, hash } from "bcrypt";
import * as jwt from "jsonwebtoken";

export class Auth {
  async login(req: Request, res: Response) {
    const { cpf, password } = req.body;
    const findUser = await prisma.usuario.findFirst({
      where: {
        login: cpf,
      },
      include: {
        perfil: true,
      },
    });
    if (!findUser) {
      res.status(404).json({ message: "usuário ou senha incorreto" });
    }

    const matchPassword = await compare(password, findUser!.senha);

    if (!matchPassword) {
      return res.status(404).json({ message: "usuário ou senha incorreto" });
    }

    const { senha, ...rest } = findUser!;

    const token = jwt.sign(
      {
        id: findUser?.login,
        perfil_id: findUser?.perfil_id,
      },
      process.env.SECRET_KEY!
    );

    res.status(200).json({ user: rest, token: token });
  }
}
