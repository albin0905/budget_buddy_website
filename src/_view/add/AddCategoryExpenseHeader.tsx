import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddCategoryExpenseHeader = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div>
                <h1>Hinzufügen</h1>
            </div>

            <div>
                <button onClick={() => navigate("addExpense")}>Ausgabe hinzufügen</button>
                <button onClick={() => navigate("addCategory")}>Kategorie hinzufügen</button>
            </div>
        </div>
    );
};

export default AddCategoryExpenseHeader;