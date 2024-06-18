import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './_view/layout/NavbarWebsite';
import {CategoryProvider} from "./_common/context/CategoryContext";
import Layout from "./_view/layout/Layout";
import AddCategory from "./_view/add/addCategory/AddCategory";
import AddExpense from "./_view/add/addExpense/AddExpense";
import AddCategoryExpense_Layout from "./_view/add/AddCategoryExpense_Layout";
import CategoryDashboard from "./_view/category/dashboard/CategoryDashboard";
import SelectCategory from "./_view/category/select/SelectCategory";
import SavingPlan from "./_view/savingPlan/SavingPlan";
import ViewAllPlans from "./_view/savingPlan/ViewAllPlans";
import AddSavingPlan from "./_view/savingPlan/addSavingPlan/AddSavingPlan";
import AddSavingPlanEntry from "./_view/savingPlan/addSavingPlanEntry/AddSavingPlanEntry";

function App() {

  return (
      <div>
        <Router>
          <Navbar/>
          <CategoryProvider>
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/categoryDashboard" element={<CategoryDashboard />} />
              <Route path="/categoryDashboard/selectCategory" element={<SelectCategory />} />
              <Route path="/saveplan/showSavingPlans" element={<ViewAllPlans/>}/>
              <Route path="/saveplan/addSavingPlan" element={<AddSavingPlan/>}/>
              <Route path="/saveplan/addPlanEntry" element={<AddSavingPlanEntry/>}/>
              <Route path="/categoryDashboard/addCategoryExpense_Layout" element={<AddCategoryExpense_Layout />}>
                <Route path="addCategory" element={<AddCategory/>}/>
                <Route path="addExpense" element={<AddExpense />}/>
              </Route>
              <Route path="/saveplan/savingPlan" element={<SavingPlan/>} />
            </Routes>
          </CategoryProvider>
        </Router>
      </div>
  );
}

export default App;
