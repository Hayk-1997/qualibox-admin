import React from "react";
import SalesOrderWidget from "@/components/molecules/Widgets/SalesOrderWidget";
import CustomersWidget from "@/components/molecules/Widgets/CustomersWidget";
import SoldProductsChart from "@/components/templates/Order/SoldProductsChart";

const DashboardTemplate = (): React.JSX.Element => {
  return (
    <>
      <div className="pagetitle">
        <h1>Dashboard</h1>
      </div>

      <section className="section dashboard">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-xs-6 col-md-3">
                <SalesOrderWidget />
              </div>
              <div className="col-xs-6 col-md-3">
                <CustomersWidget />
              </div>
              <div className="col-xs-12">
                <SoldProductsChart />
              </div>

              <div className="col-12">
                <div className="card top-selling overflow-auto">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardTemplate;
