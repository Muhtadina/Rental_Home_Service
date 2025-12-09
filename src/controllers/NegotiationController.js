import NegotiationService from "../services/NegotiationService.js";

export const createNegotiation = async (req, res) => {
  try {
    const negotiation = await NegotiationService.create(req.body);
    res.status(201).json(negotiation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getNegotiationsForFlat = async (req, res) => {
  try {
    const negotiations = await NegotiationService.getByFlat(req.params.flatId);
    res.json(negotiations);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
