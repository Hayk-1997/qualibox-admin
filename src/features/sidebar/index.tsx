import Navigation from './navigation';
const Sidebar = (): JSX.Element => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <p className="brand-link">
        <span className="brand-text font-weight-light">QualityBox Admin</span>
      </p>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info">
            <div className="d-block text-white">Alexander Pierce</div>
          </div>
        </div>
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
          <div className="sidebar-search-results">
            <div className="list-group"></div>
          </div>
        </div>
        <Navigation />
      </div>
    </aside>
  );
};
export default Sidebar;
