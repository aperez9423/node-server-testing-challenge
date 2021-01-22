const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")

beforeEach( async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe("characters integration tests", () => {
    it("gets a list of characters", async () => {
        const res = await supertest(server).get("/characters")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.length).toBeGreaterThanOrEqual(3)
        expect(res.body[0].id).toBe(1)
        expect(res.body[0].character).toBe("Tohru Honda")
    })

    it("creates new character", async () => {
        const res = await supertest(server)
            .post("/characters")
            .send({ character: "Sakura Haruno", anime: "Naruto" })
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.character).toBe("Sakura Haruno")
        expect(res.body.anime).toBe("Naruto")
    })

    it("deletes a character", async () => {
        const res = await supertest(server)
            .delete("/characters/1")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
    })
})