import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IExpense } from '../../../_common/models/IExpense';
import { useCategoryContext } from '../../../_common/context/CategoryContext';

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

        // Add the new expense to the selected category
        const updatedCategories = selectedCategory.map((category) => {
            if (category.id === selectedCategoryId) {
                return {
                    ...category,
                    expenses: [...category.expenses, newExpense],
                };
            }
            return category;
        });

        // Update the category state
        addCategory(updatedCategories);
        // Update the expenses state
        addExpense(selectedCategoryId, newExpense);
        navigate('/categoryDashboard');
    };

    return (
        <div>
            <h2>Ausgabe hinzufügen</h2>
            <form onSubmit={handleAddExpense}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={expenseName}
                        onChange={(e) => setExpenseName(e.target.value)}
                    />
                </label>
                <label>
                    Preis:
                    <input
                        type="number"
                        value={expensePrice}
                        onChange={(e) => setExpensePrice(parseFloat(e.target.value))}
                    />
                </label>
                <label>
                    Beschreibung:
                    <input
                        type="text"
                        value={expenseDescription}
                        onChange={(e) => setExpenseDescription(e.target.value)}
                    />
                </label>
                <label>
                    Kategorie:
                    <select
                        value={selectedCategoryId}
                        onChange={(e) => setSelectedCategoryId(parseInt(e.target.value, 10))}
                    >
                        {selectedCategory.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </label>
                <button type="submit">+</button>
            </form>
        </div>
    );
};

export default AddExpense;
