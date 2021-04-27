import AdvertismentModel from "../models/Advertisment";

const AdvertismentController = {
  async find(req, res) {
    const { id } = req.params;

    try {
      const response = await AdvertismentModel.findById(id);
      res.send(response);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  async create(req, res) {
    const { name, description, ad_creator, image } = req.body;
    try {
      const anuncio = new AdvertismentModel({
        name,
        description,
        ad_creator,
        image,
      });

      const response = await anuncio.save();

      res.send(response);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

export default AdvertismentController;
