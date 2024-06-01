import React from "react";
import CategoryTable from "@/components/temlates/tables/categoryTable";

const CategoriesPage = (): React.JSX.Element => {
  return (
    <section className="section">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Categories Table</h5>
              <CategoryTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;
