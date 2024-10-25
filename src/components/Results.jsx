import { calculateInvestmentResults } from '../util/investment.js';

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);

    console.log(resultsData);

    return (
        <table id="results">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Intrest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(yearData => {
                    return <tr key={yearData.yaer}>
                        <td></td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}