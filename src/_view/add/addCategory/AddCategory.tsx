import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCategoryContext } from "../../../_common/context/CategoryContext";
import { ICategory } from "../../../_common/models/ICategory";

const AddCategory: React.FC = () => {
    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState('');
    const { addCategory, getNextIndex, selectedCategory } = useCategoryContext();

    const handleAddCategory = (e: React.FormEvent) => {
        e.preventDefault();

        if (categoryName.trim() === '') {
            return;
        }

        const newCategory: ICategory = {
            id: getNextIndex(),
            name: categoryName,
            expenses: [],
        };

        addCategory([...selectedCategory, newCategory]);
        navigate('/categoryDashboard');
    };

    return (
        <div>
            <h2>Kategorie hinzufügen</h2>
            <form onSubmit={handleAddCategory}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                </label>
                <button type="submit">+</button>
            </form>
        </div>
    );
};

export default AddCategory;
