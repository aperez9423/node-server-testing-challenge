const db = require("../data/config")

async function add(character) {
    const [id] = await db("characters").insert(character)
    return findById(id)
}

function find() {
    return db("characters").select("id", "character")
}

function findBy(filter) {
    return db("characters")
        .select("id", "character", "anime")
        .where(filter)
}

function findById(id) {
    return db("characters").where({ id }).first()
}

function remove(id) {
    return db("characters").where({ id }).del()
}

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove,
}