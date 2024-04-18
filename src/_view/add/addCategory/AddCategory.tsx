import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCategoryContext } from "../../../_common/context/CategoryContext";
import { ICategory } from "../../../_common/models/ICategory";
import 'bootstrap/dist/css/bootstrap.css';

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
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <h2>Kategorie hinzufügen</h2>
                    <form onSubmit={handleAddCategory}>
                        <div className="form-group">
                            <label htmlFor="categoryName">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="categoryName"
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">+</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCategory;
