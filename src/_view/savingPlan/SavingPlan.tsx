import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCategoryContext } from '../../_common/context/CategoryContext';
import { IPlan } from '../../_common/models/IPlan';
import 'bootstrap/dist/css/bootstrap.min.css';

const SavingPlan = () => {
    const { plans } = useCategoryContext();
    const navigate = useNavigate();

    const handleAddPlan = () => {
        navigate('/saveplan/addSavingPlan');
    };

    const handleShowPlans = () => {
        navigate('/saveplan/showSavingPlans');
    };

    const handlePlan = () => {
        navigate('/saveplan/addPlanEntry');
    };

    return (
        <div className="container">
            <div className="text-center my-4">
                <h1>Sparplan</h1>
            </div>
            <div className="text-center my-4">
                <button className="btn btn-primary mx-2" onClick={handleShowPlans}>Alle Sparpläne anzeigen</button>
                <button className="btn btn-primary mx-2" onClick={handleAddPlan}>Neuen Sparplan hinzufügen</button>
                <button className="btn btn-primary mx-2" onClick={handlePlan}>Betrag hinzufügen</button>

            </div>
        </div>
    );
};

export default SavingPlan;
