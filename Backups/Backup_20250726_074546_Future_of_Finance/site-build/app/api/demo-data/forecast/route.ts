import { generateForecastData } from '@/lib/demo-data';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Generate realistic demo data
        const forecastData = generateForecastData();

        // Simulate real-time updates with slight randomization
        const enhancedData = forecastData.map(item => ({
            ...item,
            actual: item.actual + (Math.random() - 0.5) * 1000000, // Add some variance
            forecast: item.forecast + (Math.random() - 0.5) * 500000,
            timestamp: new Date().toISOString(),
        }));

        return NextResponse.json({
            success: true,
            data: enhancedData,
            generated_at: new Date().toISOString(),
            message: 'Forecast data generated successfully'
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to generate forecast data',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { scenarios, timeRange } = body;

        // Generate custom forecast based on scenarios
        const customForecast = generateForecastData(scenarios, timeRange);

        return NextResponse.json({
            success: true,
            data: customForecast,
            scenarios_applied: scenarios,
            time_range: timeRange,
            generated_at: new Date().toISOString()
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to process custom forecast request',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
} 