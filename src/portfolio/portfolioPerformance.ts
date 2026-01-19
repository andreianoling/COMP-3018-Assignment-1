export interface PortfolioPerformanceResult { // Define the structure of the performance result
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
    performanceRating: number;
}

export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioPerformanceResult { // Function to calculate portfolio performance with initialInvestment and currentValue as parameters
    
    const profitOrLoss = currentValue - initialInvestment; // Calculate profit or loss

    const percentageChange = (profitOrLoss / initialInvestment) * 100; // Calculate percentage change

    const performanceSummary = // Determine performance summary based on percentage change
        percentageChange >= 30 ? "Excellent performance! Your investments are doing great." :
        percentageChange >= 10 ? "Solid gain. Keep monitoring your investments." :
        percentageChange > 0 ? "Modest gain. Your portfolio is growing slowly." :
        percentageChange === 0 ? "No change. Your portfolio is holding steady." :
        percentageChange > -10 ? "Minor loss. Stay calm and review your options." :
        "Significant loss. Review your portfolio strategy.";

    const performanceRating =
        percentageChange >=30? 5:
        percentageChange >=10? 4:
        percentageChange > 0 ? 3:
        percentageChange > -10? 2:
        1;

    return { // Return the performance result object
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
        performanceRating,
    };
}

