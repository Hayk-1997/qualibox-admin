import React from 'react';

interface IPageContentHeader {
  pageContentHeader: string
}

const PageContentHeader: React.FC<IPageContentHeader> = ({ pageContentHeader }): JSX.Element => {
  return (
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>{pageContentHeader}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">DataTables</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContentHeader;
