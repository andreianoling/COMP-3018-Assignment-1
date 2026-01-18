import request, { Response } from "supertest"; // Import necessary modules
import app from "../src/app"; // Import the Express application

describe("GET /api/portfolio/performance", () => {
    it("should return portfolio performance data for valid inputs with percentage gain over 60%", async () => { 
        const response: Response = await request(app) // Make a GET request to the endpoint
            .get("/api/portfolio/performance") // Endpoint path
            .query({ initialInvestment: 10000, currentValue: 16000 }); // Query parameters
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("initialInvestment", 10000);
        expect(response.body).toHaveProperty("currentValue", 16000);
        expect(response.body).toHaveProperty("profitOrLoss", 6000);
        expect(response.body).toHaveProperty("percentageChange", 60);
        expect(response.body).toHaveProperty("performanceSummary", "Excellent performance! Your investments are doing great.");
    });

    it("should return 400 error for missing parameters", async () => {
        const response: Response = await request(app)
            .get("/api/portfolio/performance")
            .query({ initialInvestment: 10000 });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("error", "Missing or invalid parameters: initialInvestment and currentValue");
    });
    
    it("should return portfolio performance data for valid inputs with percentage loss greater than -10%", async () => {
        const response: Response = await request(app)
            .get("/api/portfolio/performance")
            .query({ initialInvestment: 10000, currentValue: 8000 });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("initialInvestment", 10000);
        expect(response.body).toHaveProperty("currentValue", 8000);
        expect(response.body).toHaveProperty("profitOrLoss", -2000);
        expect(response.body).toHaveProperty("percentageChange", -20);
        expect(response.body).toHaveProperty("performanceSummary", "Significant loss. Review your portfolio strategy.");
    });
});