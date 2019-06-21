module.exports = {
  getAllBots: async (req, res) => {
    const db = req.app.get("db");

    let bots = await db.bots.get_all_bots();

    res.status(200).send(bots);
  },
  getBot: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    let bot = await db.bots.get_bot(id);
    bot = bot[0];

    res.status(200).send(bot);
  },
  createBot: async (req, res) => {
    const db = req.app.get("db");
    const { name, attack, health } = req.body;
    const { user_id } = req.session.user;
    console.log(user_id);

    let bots = await db.bots.create_bot({
      user_id,
      bot_name: name,
      attack,
      health
    });

    res.status(200).send(bots);
  },

  deleteBot: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    console.log(id);

    let bots = await db.bots.delete_bot(id);

    res.status(200).send(bots);
  },

  updateBot: async (req, res) => {
    const db = req.app.get("db");
    const { name, attack, health } = req.body;
    const { id } = req.params;

    let bots = await db.bots.update_bot({
      id,
      bot_name: name,
      attack,
      health
    });

    res.status(200).send(bots);
  }
};
