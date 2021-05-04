import { create, Whatsapp } from 'venom-bot';
import { writeFile } from 'fs/promises';
import mime from "mime-types"

function main(whats: Whatsapp) {
    whats.onMessage(async (message) => {
        console.log(message.sender.name)
        if (message.sender.name === 'inha') {
        try {
            const buffer = await whats.decryptFile(message);
            const fileName = `teste.${mime.extension(message.mimetype)}`;
            await writeFile(fileName, buffer)
            await whats.sendImageAsSticker(message.from, fileName)

        } catch (error) {
            console.error(error)
        }
        }
    });
}

(async () => {
    let venom = await create("bot-sticker");
    main(venom);
})();

