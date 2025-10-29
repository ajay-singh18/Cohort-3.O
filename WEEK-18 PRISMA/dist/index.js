import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
import express from "express";
const app = express();
app.get("/users", async (req, res) => {
    const user = await client.user.findMany();
    res.json({
        user
    });
});
app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const user = await client.user.findMany({
        where: {
            id: Number(id)
        },
        select: {
            todos: true,
            username: true,
            password: true
        }
    });
    res.json({
        user
    });
});
// async function getUser() {
//    const user =  await client.user.findFirst({
//         where:{
//             id:2
//         },
//         include:{
//             todos:true
//         }
//     })
//     console.log(user);
// }
// getUser()
app.listen(3000);
//# sourceMappingURL=index.js.map