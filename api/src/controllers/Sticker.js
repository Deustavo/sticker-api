import fs from "fs/promises";
import mime from "mime-types"
import { create, Whatsapp } from 'venom-bot';
import { writeFile } from 'fs/promises';


const StickerController = {
  async send(req, res) {
    let venom = await create("bot-sticker");
    const { image, phoneNumber } = req.body;
    try {
        const result = await venom.sendImageAsSticker(`55${phoneNumber}@c.us`, image)
        console.log(result)
        res.send(200).json({ok: true})
    } catch (error) {
      res.send(500).json({ok: false, message: "Internal server error"})
      console.error(error)
  }
}
};

export default StickerController;
