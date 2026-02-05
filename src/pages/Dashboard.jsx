import { Link } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";

export default function Dashboard() {
  const { learned, countries, practiceDone, loading } = useProgress();

  if (loading) return <div className="page">Loading Geo-Learn...</div>;

  return (
    <div className="page">
      {/* HEADER */}
      <div className="dashboard-header">
        <div className="dashboard-emoji">🌍</div>

        <div className="dashboard-text">
          <h1 className="dashboard-title">GeoLearn</h1>
          <p className="dashboard-subtitle">
            A Place to Learn about the World
          </p>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="progress-box">
        <h3>⭐ My Progress</h3>

        <p>
          Countries Learned: <b>{learned.length}</b> / {countries.length}
        </p>
        <p>
          Tests Completed: <b>{practiceDone}</b>
        </p>

        {learned.length >= 5 && <p className="badge">🏅 Beginner Explorer</p>}
        {learned.length >= 15 && <p className="badge">🌍 Geo Explorer</p>}
      </div>

      {/* NAV CARDS */}
      <div className="grid">
        <Link to="/training" className="card">📘 Training</Link>
        <Link to="/test" className="card">✏️ Test</Link>
      </div>
    </div>
  );
}
