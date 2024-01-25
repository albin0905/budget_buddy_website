import React, { createContext, useContext, useState, useEffect } from 'react';
import { ICategory } from '../models/ICategory';
import { IExpense } from '../models/IExpense';
import data from '../data/data.json';

interface CategoryContextProps {
    selectedCategory: ICategory[];
    addCategory: (updatedCategories: ICategory[]) => void;
    addExpense: (categoryId: number, newExpense: IExpense) => void;
    getNextIndex: () => number;
}

interface CategoryProviderProps {
    children: React.ReactNode;
}

const CategoryContext = createContext<CategoryContextProps | undefined>(undefined);

export const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState<ICategory[]>([]);

    useEffect(() => {
        // Hier wird data.json geladen, wenn selectedCategory leer ist
        if (selectedCategory.length === 0) {
            setSelectedCategory(data || []);
        }
    }, [selectedCategory]);

    const addCategory = (updatedCategories: ICategory[]) => {
        setSelectedCategory(updatedCategories);
    };

    const addExpense = (categoryId: number, newExpense: IExpense) => {
        const updatedCategories = selectedCategory.map((category) => {
            if (category.id === categoryId) {
                return {
                    ...category,
                    expenses: [...category.expenses, newExpense],
                };
            }
            return category;
        });

        setSelectedCategory(updatedCategories);
    };

    const getNextIndex = () => {
        return selectedCategory.length > 0
            ? Math.max(...selectedCategory.map((category) => category.id)) + 1
            : 1;
    };

    return (
        <CategoryContext.Provider value={{ selectedCategory, addCategory, addExpense, getNextIndex }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategoryContext = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('useCategoryContext must be used within a CategoryProvider');
    }
    return context;
};
