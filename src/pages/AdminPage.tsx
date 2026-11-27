import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { isLoggedIn, logOut } from "../lib/auth";
import { ROUTES } from "../routes";

export const AdminPage: React.FC = () => {
  const navigate = useNavigate();

  if (!isLoggedIn()) return <Navigate to="/login" replace />;

  const handleLogOut = () => {
    logOut();
    navigate("/login", { replace: true });
  };

  return (
    <section className="page page--admin">
      <meta name="robots" content="noindex, nofollow" />
      <div className="admin-header">
        <h1>Admin</h1>
        <button type="button" className="booking-popup__close" onClick={handleLogOut}>
          Logga ut
        </button>
      </div>

      <h2>Sidor på webbplatsen</h2>
      <ul className="admin-card admin-routes">
        {ROUTES.map((r) => (
          <li key={r.path} className="admin-routes__item">
            <Link to={r.path} className="admin-routes__link">
              {r.label}
            </Link>
            <code className="admin-routes__path">{r.path}</code>
            <span className="admin-routes__tag">
              {r.inMenu ? "I menyn" : "Dold"}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AdminPage;
