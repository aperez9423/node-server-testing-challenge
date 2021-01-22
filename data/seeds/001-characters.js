exports.seed = async function(knex) {
  await knex("characters").truncate()
  await knex("characters").insert([
    { character: "Tohru Honda", anime: "Fruits Basket"},
    { character: "Yuki Sohma", anime: "Fruits Basket"},
    { character: "Ryo Sohma", anime: "Fruits Basket"},
  ])
};
