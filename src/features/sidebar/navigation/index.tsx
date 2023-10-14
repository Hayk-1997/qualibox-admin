import Link from 'next/link';
import { mainNavigations } from '../../../navigation/mainNavigation';

const Navigation = (): JSX.Element => {
  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        {mainNavigations.map((navigator, index) => (
          <li key={index} className="nav-item menu-open">
            <Link href={navigator.url} className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                {navigator.name}
                {navigator.hasChildren && (
                  <i className="right fas fa-angle-left" />
                )}
              </p>
            </Link>
            <ul className="nav nav-treeview">
              {navigator.children?.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link href={item.url} className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>{item.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
