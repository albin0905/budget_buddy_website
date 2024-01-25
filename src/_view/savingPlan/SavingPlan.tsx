import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlanContext } from '../../_common/context/SavingPlanContext';
import { IPlan } from '../../_common/models/IPlan';


const SavingPlan = () => {

    const {plans} = usePlanContext();
    const navigate = useNavigate();

    const handleAddPlan = () => {
        navigate('/saveplan/addSavingPlan');
    };

    const handlePlan = (plan: IPlan) => {

    };


    return (
        <div>
            <div>
                <h1>Sparplan</h1>
            </div>
            <div>
                {plans.map((plan) => (
                    <div key={plan.id} className="box" onClick={() => handlePlan(plan)}>
                        <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '10px' }}>{plan.name}</h2>
                    </div>
                ))}
            </div>
            <center>
                <button onClick={handleAddPlan} style={{cursor: 'pointer', fontSize: 'large'}}>+</button>
            </center>
        </div>
    );
};

export default SavingPlan;
