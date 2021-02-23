const app = require("./app");
const nock = require("nock");
const request = require("supertest");

test("get a Joke from Api", async () => {
  const mockResponse = {
    type: "success",
    value: {
      id: 375,
      joke:
        "He who lives by the sword, dies by the sword. He who lives by Chuck Norris, dies by the roundhouse kick.",
      categories: [],
    },
  };

  nock("http://api.icndb.com").get("/jokes/random").reply(200, mockResponse);

  const res = await request(app).get("/");
  expect(res.status).toBe(200);
  expect(res.body).toEqual(mockResponse);
});
