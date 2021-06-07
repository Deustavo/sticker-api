import fs from "fs/promises";
import mime from "mime-types"
import { create, Whatsapp } from 'venom-bot';
import { writeFile } from 'fs/promises';


const StickerController = {
  async send(req, res) {
    let venom = await create("bot-sticker");
    const { image, phoneNumber } = req.body;
    try {
        await venom.sendImageAsSticker(`55${phoneNumber}@c.us`, image)
    } catch (error) {
        console.error(error)
  }
}
};

export default StickerController;
