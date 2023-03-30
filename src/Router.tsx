import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { EmployeePage } from "./pages/Employee";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CustomerPage } from "./pages/Customer";
import { ProductPage } from "./pages/Product";
import { SalePage } from "./pages/Sale";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/funcionario" element={<EmployeePage />} />
        <Route path="/produto" element={<ProductPage />} />
        <Route path="/cliente" element={<CustomerPage />} />
        <Route path="/venda" element={<SalePage />} />
      </Route>
    </Routes>
  );
}
