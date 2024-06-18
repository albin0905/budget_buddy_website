import React, { useState } from 'react';
import { useCategoryContext } from '../../_common/context/CategoryContext';
import './SavingPlan.css'; // Assuming your CSS file is named SavingPlan.css
import ProgressBar from 'react-bootstrap/ProgressBar';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const ViewAllPlans = () => {
    const { plans } = useCategoryContext();
    const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);
    const [priceRange, setPriceRange] = useState(0); // State für den Preisbereich
    const [savingAmounts, setSavingAmounts] = useState<{ [key: number]: number }>({});
    const navigate = useNavigate();

    const handlePlanClick = (planId: number) => {
        setSelectedPlanId(planId === selectedPlanId ? null : planId);
        if (planId !== selectedPlanId) {
            const selectedPlan = plans.find(plan => plan.id === planId);
            if (selectedPlan) {
                setPriceRange(selectedPlan.price);
            }
        }
    };
    const handleOnClick =()=>{
        navigate('/saveplan/addPlanEntry')
    }

    return (
        <div>
            <center><h1>All Plans</h1></center>
            <div className="plan-list">
                {plans.map((plan) => (
                    <div key={plan.id} className={`plan-item ${selectedPlanId === plan.id ? 'active' : ''}`}>
                        <div className="card" onClick={() => handlePlanClick(plan.id)}>
                            <div className="card-body">
                                <h2 className="card-title">{plan.name}</h2>
                                {selectedPlanId === plan.id && (
                                    <div className="plan-details">
                                        <p>Price: ${plan.price}</p>
                                        <img src={plan.image} alt={plan.name} />

                                        <ProgressBar now={60} label={`${60}%`} />
                                        <Button onClick={handleOnClick}>+</Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                </div>
    );
};

export default ViewAllPlans;
