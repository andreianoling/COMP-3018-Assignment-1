import express, { Express } from "express";
import { calculatePortfolioPerformance, PortfolioPerformanceResult } from "./portfolio/portfolioPerformance";

// Initialize Express application
const app: Express = express();

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

export default app;

interface HealthCheckResponse { // Define the structure of health check response
    status: string;
    version: string;
}

app.get("/src/api/v1/routes", (req, res) => {
    const healthData: HealthCheckResponse = { // Create health check response object
        status: "OK",
        version: "1.0.0"
    };
    res.json(healthData);
});

app.get("/api/portfolio/performance", (req, res) => {
    const initialInvestment = parseFloat(req.query.initialInvestment as string);
    const currentValue = parseFloat(req.query.currentValue as string);

    if (isNaN(initialInvestment) || isNaN(currentValue)) { // Validation check
        return res.status(400).json({ error: "Missing or invalid parameters: initialInvestment and currentValue" });
    }

    const result: PortfolioPerformanceResult = calculatePortfolioPerformance(initialInvestment, currentValue); // Call the function to get performance data
    res.json(result);
});