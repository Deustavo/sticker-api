const AdvertismentController = {
  async find(req, res) {
    const { id } = req.params;
    //aqui eu vou buscar no bando baseado no meu id
    res.send({
      anuncio: id,
    });
  },
};

export default AdvertismentController;
