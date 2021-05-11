import fs from "fs/promises";

const StickerController = {
  send(req, res) {
    const { image, phoneNumber } = req.body;
    //usar fs com promises pra receber a imagem e transformar em buffer
    console.log(image);
    console.log(phoneNumber);

    //recebo uma imagem e um numero
    //chamo o send sticker do venom com o numero a enviar e a imagem
  },
};

export default StickerController;
