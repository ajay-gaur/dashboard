import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">BOGT</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
            <Link to="/crawler" style={{ textDecoration: "none" }}>
              <li>
                <span>Crawler</span>
              </li>
            </Link>
            <Link to="/seo-report" style={{ textDecoration: "none" }}>
              <li>
                <span>SEO Report</span>
              </li>
            </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;