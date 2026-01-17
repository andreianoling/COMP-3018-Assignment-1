import express, { Express } from "express";

// Initialize Express application
const app: Express = express();

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

export default app;

interface HealthCheckResponse {
    status: string;
    version: string;
}

app.get("/src/api/v1/routes", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        version: "1.0.0"
    };
    res.json(healthData);
});