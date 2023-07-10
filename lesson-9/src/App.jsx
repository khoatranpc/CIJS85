import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import TableCustomer from './components/TableCustomer';
import BusinessStatistic from './components/BusinessStatistic';
import DetailCustomer from './components/DetailCustomer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='over-view' element={<TableCustomer />} />
          <Route path='customer/detail/:customerId' element={<DetailCustomer />} />
          <Route path='business-statistic' element={<BusinessStatistic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
