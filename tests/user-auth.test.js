const { spec, request } = require("pactum");
const baseURL = "https://practice.expandtesting.com/notes/api/users";
const { faker } = require("@faker-js/faker");

describe("Registration test suite", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });

  // Register new user
  it("Register user test", async () => {
    const requestBody = {
      name: "Sebasa",
      email: faker.internet.email(),
      password: "SebastaielenaA123456",
    };
    const loginResponce = await spec()
      .post(`${baseURL}/register`)
      .withBody(requestBody)
      .inspect()
      .expectStatus(201);
    const tokenID = loginResponce.body.access;
    console.log(tokenID);
  });

  // Login user
  it("Login user test", async () => {
    const requestBody = {
      name: "Sebastian",
      email: "sebastian123@gmail.com",
      password: "SebastianelenaA12345",
    };

    await spec()
      .post(`${baseURL}/login`)
      .withBody(requestBody)
      .expectStatus(200);
  });

  // Get notes
  it("Login user test", async () => {
    const requestBody = {
      name: "Sebastian",
      email: "sebastian123@gmail.com",
      password: "SebastianelenaA12345",
    };

    await spec()
      .post(`${baseURL}/login`)
      .withBody(requestBody)
      .expectStatus(200);
  });
});
