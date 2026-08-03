import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const FilesToDb = async (data) => {
    try {
        const records = await Promise.all(
            data.map(file =>
                prisma.userFile.create({
                    data: {
                        description: file.description,
                        userId: 1,
                        files: file.file,
                    },
                })
            )
        );
        return records
    } catch (err) {
        console.log(err)
    }
}