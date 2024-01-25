import React from 'react';
import { Outlet } from 'react-router-dom';
import AddCategoryExpenseHeader from './AddCategoryExpenseHeader';

const AddCategoryExpenseLayout = () => {
    return (
        <div>
            <div>
                <AddCategoryExpenseHeader/>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AddCategoryExpenseLayout;