import { Request, Response } from "express";
import { prisma } from "../prisma/prismaClient";
import { IBeneficiary } from "../@types/beneficiary";

export class Beneficiary {
  async search(req: Request, res: Response) {
    const { cpf } = req.body;

    const query = `SELECT * FROM  vw_beneficiarios WHERE cpf = $1 LIMIT 1;`;
    const queryFamiliar = `SELECT * FROM  vw_pessoas_familiares WHERE pessoa_cpf = $1`;
    const queryExtractUse = `SELECT * FROM  vw_benef_visaosocial WHERE cpf = $1`;

    const data: any[] = await prisma.$queryRawUnsafe(query, cpf);
    const dataFamiliar: any[] = await prisma.$queryRawUnsafe(
      queryFamiliar,
      cpf
    );
    const dataExtractUse: any[] = await prisma.$queryRawUnsafe(
      queryExtractUse,
      cpf
    );

    if (data.length === 0) {
      return res.status(404).json({ message: "cpf não cadastrado" });
    }

    const beneficiary = data["0"];
    beneficiary.id_row = beneficiary.id_row.toString();

    console.log(dataFamiliar);
    if (dataFamiliar.length > 0) {
      beneficiary.familiar = dataFamiliar.map((e) => {
        e.id_pessoa = e.id_pessoa.toString();
        if (e.familiar_id) {
          e.familiar_id = e.familiar_id.toString();
        }
        const familiar = e;
        return familiar;
      });
    }

    if (dataExtractUse.length > 0) {
      beneficiary.extractUse = dataExtractUse.map((e) => {
        e.id_row = e.id_row.toString();

        const extract = e;
        return extract;
      });
    }

    res.json(beneficiary);
  }
}
