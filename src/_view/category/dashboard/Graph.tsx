import React from 'react';
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from 'recharts';

interface GraphProps {
    data: { id: number; price: number; name: string; description: string }[];
}

const Graph: React.FC<GraphProps> = ({ data }) => {
    const totalExpense = data.reduce((total, expense) => total + expense.price, 0);
    const dynamicWidth = Math.max(200, data.length * 30);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <ResponsiveContainer width="100%" height="80%">
                <BarChart
                    width={dynamicWidth}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 5,
                        left: 5,
                        bottom: 5,
                    }}
                    barSize={10}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="price" fill="#228B22" />
                </BarChart>
            </ResponsiveContainer>
            <div style={{ marginTop: '10px', fontSize: '14px', color: '#888' }}>
                Summe:  {totalExpense} €
            </div>
        </div>
    );
};

export default Graph;
