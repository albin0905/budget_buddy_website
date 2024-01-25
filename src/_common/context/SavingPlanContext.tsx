import React from 'react';
import { IPlan } from '../models/IPlan';
import {createContext, useContext} from "react";

interface SavingPlanContextProps {
    plans: IPlan[],
    addPlan: (newPlan: IPlan) => void
}

export const SavingPlanContext = createContext<SavingPlanContextProps>({
    plans : [],
    addPlan: () => {}
})

export const usePlanContext = () => {
    const planContext = useContext(SavingPlanContext);
    if(!planContext){
        throw new Error("No Context")
    }
    return planContext;
}

export default SavingPlanContext;
