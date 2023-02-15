import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addUser(req, res) {
  const { email, name } = req.body;
  try {
    const user = await prisma.usuarios.create({
      data: {
        email,
        name,
      },
    });

    return res.json({ status: 1, user });
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .json({ status: 0, message: "deu merda mermao", err });
  }
}

export async function listUsers(req, res) {
  const users = await prisma.usuarios.findMany().catch(({ message }) => {
    return res
      .send(500)
      .json({ status: 0, message: "deu merda mermao", message });
  });

  res.json({ status: 1, users });
}
