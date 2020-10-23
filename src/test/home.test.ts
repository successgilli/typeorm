import server from "@server"
import supertest from "supertest"

const request = supertest(server)

describe("home test: ", () => {
  it('should return welcome message', async (done) => {
    const response = await request.get("/api/v1")

    expect(response).toHaveProperty("status")
    expect(response.body).toHaveProperty("data")
    expect(response.body.status).toBe(200)
    done()
  })

  it('should return "not found" for unavailable route', async (done) => {
    const response = await request.get("/")

    expect(response.body).not.toHaveProperty("data")
    expect(response.body).toHaveProperty("message")
    expect(response.body.status).toBe(404)
    done()
  })
});
