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
                <button type="button" className="btn btn-block btn-primary">
                  Create
                </button>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContentHeader;
