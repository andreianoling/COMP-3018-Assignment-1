import request, { Response } from "supertest";
import app from "../src/app";

describe("GET /api/v1/routes", () => {
    it("should return server routes information", async () => {
        const response: Response = await request(app).get("/src/api/v1/routes"); // Endpoint path
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("OK"); // Check if status is OK
        expect(response.body).toHaveProperty("version"); // Check if version property exists
    });
});