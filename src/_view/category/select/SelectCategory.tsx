import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from 'recharts';
import {ICategory} from "../../../_common/models/ICategory";


const SelectCategory = () => {
    const location = useLocation();
    const selectedCategory: ICategory | null = location.state?.selectedCategory || null;
    const navigate = useNavigate();

    if (!selectedCategory) {
        return <div>No category selected</div>;
    }

    const handleAddClick = () => {
        navigate('/categoryDashboard/addCategoryExpense_Layout/addExpense');
    };

    const expenses = selectedCategory.expenses;

    const data = expenses.map((expense, index) => ({
        id: index + 1,
        name: expense.name,
        price: expense.price,
        description: expense.description
    }));

    const totalExpense = expenses.reduce((total, expense) => total + expense.price, 0);

    return (
        <div>
            <center><h2>{selectedCategory.name} Values</h2></center><br/>
            <div style={{ display: 'flex', height: '100vh' }}>
                <div style={{ flex: 1, padding: '20px' }}>
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {expenses.map((expense, index) => (
                            <tr key={index}>
                                <td>{expense.name}</td>
                                <td>{expense.price} €</td>
                                <td>{expense.description}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div style={{ marginTop: '10px', fontSize: '14px', color: '#888' }}>
                        Summe:  {totalExpense} €
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart
                            width={100}
                            height={100}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            barSize={20}
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
                    <button onClick={handleAddClick} style={{cursor: 'pointer', fontSize: 'large'}}>+</button>
                </div>
            </div>
        </div>
    );
};

export default SelectCategory;