import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const AddCategoryExpenseHeader = () => {
    const navigate = useNavigate();

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <h1>Hinzufügen</h1>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    <button className="btn btn-primary mr-2" onClick={() => navigate("addExpense")}>Ausgabe hinzufügen</button>
                    <button className="btn btn-primary mr-2" onClick={() => navigate("addCategory")}>Kategorie hinzufügen</button>
                </div>
            </div>
        </div>
    );
};

export default AddCategoryExpenseHeader;
