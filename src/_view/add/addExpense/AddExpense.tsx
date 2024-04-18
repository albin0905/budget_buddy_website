import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IExpense } from '../../../_common/models/IExpense';
import { useCategoryContext } from '../../../_common/context/CategoryContext';
import 'bootstrap/dist/css/bootstrap.css';

const AddExpense: React.FC = () => {
    const { selectedCategory, addCategory, addExpense, getNextIndex } = useCategoryContext();
    const [expenseName, setExpenseName] = useState('');
    const [expensePrice, setExpensePrice] = useState(0);
    const [expenseDescription, setExpenseDescription] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState(selectedCategory.length > 0 ? selectedCategory[0].id : 0);
    const navigate = useNavigate();

    const handleAddExpense = (e: React.FormEvent) => {
        e.preventDefault();

        if (expenseName.trim() === '' || expensePrice <= 0) {
            return;
        }

        const newExpense: IExpense = {
            id: getNextIndex(),
            name: expenseName,
            price: expensePrice,
            description: expenseDescription,
        };

        const updatedCategories = selectedCategory.map((category) => {
            if (category.id === selectedCategoryId) {
                return {
                    ...category,
                    expenses: [...category.expenses, newExpense],
                };
            }
            return category;
        });

        addCategory(updatedCategories);
        //aktualisiert
        addExpense(selectedCategoryId, newExpense);
        navigate('/categoryDashboard');
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <h2>Ausgabe hinzufügen</h2>
                    <form onSubmit={handleAddExpense}>
                        <div className="form-group">
                            <label htmlFor="expenseName">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="expenseName"
                                value={expenseName}
                                onChange={(e) => setExpenseName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expensePrice">Preis:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="expensePrice"
                                value={expensePrice}
                                onChange={(e) => setExpensePrice(parseFloat(e.target.value))}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expenseDescription">Beschreibung:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="expenseDescription"
                                value={expenseDescription}
                                onChange={(e) => setExpenseDescription(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="selectedCategory">Kategorie:</label>
                            <select
                                className="form-control"
                                id="selectedCategory"
                                value={selectedCategoryId}
                                onChange={(e) => setSelectedCategoryId(parseInt(e.target.value, 10))}
                            >
                                {selectedCategory.map(category => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">+</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddExpense;
