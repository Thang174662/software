

import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  // if (req.method !== 'POST') {
  //   res.json( req.body)
  //   return res.status(405).json({ message: 'Method not allowed' });
  // }

  // try {
  //   // const timekeeping = JSON.parse(req.body)
  //   const { nameInput, idInput } = req.body
  //   const result = await prisma.timekeeping.create({
  //     data: {
  //       employeeId: idInput,
  //       employeeName: nameInput,
  //     },
  //   })
  //   res.json(result)
  // } catch (err) {
  //   res.status(400).json({ message: 'Something went wrong' });
  // }
  const { employeeId, employeeName } = req.body
  const result = await prisma.timekeeping.create({
    data: {
      employeeName: employeeName,
      employeeId: employeeId,
    },
  })
  res.json(result)
};
