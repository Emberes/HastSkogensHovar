import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { isLoggedIn, isLoginConfigured, logIn } from "../lib/auth";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (isLoggedIn()) return <Navigate to="/admin" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const ok = await logIn(password);
    setBusy(false);
    if (ok) {
      navigate("/admin", { replace: true });
    } else {
      setError("Fel lösenord.");
      setPassword("");
    }
  };

  return (
    <section className="page page--admin">
      {/* Keep the page out of search engines. */}
      <meta name="robots" content="noindex, nofollow" />
      <h1>Logga in</h1>
      {!isLoginConfigured ? (
        <p className="admin-message admin-message--error">
          Inloggningen är inte konfigurerad än (VITE_ADMIN_PASSWORD_HASH saknas).
        </p>
      ) : (
        <form className="admin-card login-form" onSubmit={handleSubmit}>
          <label className="admin-field">
            <span>Lösenord</span>
            <input
              type="password"
              autoComplete="current-password"
              required
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {error && (
            <p className="admin-message admin-message--error" role="alert">
              {error}
            </p>
          )}
          <button type="submit" className="booking-button" disabled={busy}>
            {busy ? "Loggar in…" : "Logga in"}
          </button>
        </form>
      )}
    </section>
  );
};

export default LoginPage;
