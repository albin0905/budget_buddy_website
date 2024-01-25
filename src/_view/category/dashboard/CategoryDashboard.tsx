import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './CategoryDashboard.css';
import { Link } from 'react-router-dom';
import Graph from './Graph';
import { useNavigate } from 'react-router-dom';
import { useCategoryContext } from "../../../_common/context/CategoryContext";
import {ICategory} from "../../../_common/models/ICategory";

const CategoryDashboard: React.FC = () => {
    const { selectedCategory, getNextIndex, addCategory } = useCategoryContext();
    const navigate = useNavigate();
    const [selectedCategoryState, setSelectedCategoryState] = useState<ICategory | null>(null);

    const navigateToCategoryDetail = (categoryId: number) => {
        navigate(`/categoryDashboard/categoryDetail/${categoryId}`);
    };

    const handleAddClick = () => {
        const newIndex = getNextIndex();
        navigate('/categoryDashboard/addCategoryExpense_Layout/addCategory');
    };

    const handleCategoryClick = (category: ICategory) => {
        setSelectedCategoryState(category);
        navigate(`/categoryDashboard/selectCategory`, { state: { selectedCategory: category } });
    };

    return (
        <div>
            <center>
                <h1>Dashboard</h1>
            </center>
            {selectedCategory.map((category) => (
                <div key={category.id} className="box" onClick={() => handleCategoryClick(category)}>
                    <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '10px' }}>{category.name}</h2>
                    <Graph data={category.expenses} />
                </div>
            ))}
            <center>
                <button onClick={handleAddClick} style={{cursor: 'pointer', fontSize: 'large'}}>+</button>
            </center>

            {selectedCategoryState && (
                <Link to="/categoryDashboard/selectCategory" state={{selectedCategory: selectedCategoryState }}></Link>
            )}
        </div>
    );
};

export default CategoryDashboard;
