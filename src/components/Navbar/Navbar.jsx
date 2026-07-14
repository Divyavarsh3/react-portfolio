import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 50px",
        background: theme === "dark" ? "#1f2937" : "#2563eb",
        color: "#fff",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
      }}
    >
      {/* Logo */}

      <h2 style={{ margin: 0 }}>
        Divya Portfolio
      </h2>

      {/* Navigation */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px"
        }}
      >
        <Link to="/" style={{ color: "#fff" }}>
          Home
        </Link>

        <Link to="/about" style={{ color: "#fff" }}>
          About
        </Link>

        <Link to="/skills" style={{ color: "#fff" }}>
          Skills
        </Link>

        <Link to="/projects" style={{ color: "#fff" }}>
          Projects
        </Link>

        <Link to="/experience" style={{ color: "#fff" }}>
          Experience
        </Link>

        <Link to="/education" style={{ color: "#fff" }}>
          Education
        </Link>

        <Link to="/certifications" style={{ color: "#fff" }}>
          Certifications
        </Link>

        <Link to="/contact" style={{ color: "#fff" }}>
          Contact
        </Link>

        {/* Theme Button */}

        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 18px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            background: "#fff",
            color: "#2563eb"
          }}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;