import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Users,
  FileText,
  Brain,
  Target,
  ChevronRight,
  Search,
  MapPin,
  Building,
  DollarSign,
  Calendar,
  ClipboardList,
  ChevronDown,
  User,
  BookOpen,
  Award,
  Lightbulb,
  MessageSquare,
  Send,
  Plus,
  Bell,
  Download,
  Share2,
  Filter,
  RefreshCw,
  Eye,
  Star,
  Zap,
  Shield,
  Globe,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  PieChart,
  BarChart,
  LineChart,
  TrendingDown,
  CheckCircle,
  AlertCircle,
  Clock,
  ArrowRight,
  Settings,
  MoreHorizontal,
  ExternalLink,
  Cpu,
  Database,
  Network,
  Layers,
  GitBranch,
  Sparkles,
  Bot,
  CircuitBoard,
  Hexagon,
  Atom,
  Binary,
  Code,
  Terminal,
  Workflow,
} from "lucide-react";
import JobBenchmarking from "./components/JobBenchmarking";
import CompensationIntelligence from "./components/CompensationIntelligence";
import SkillsGapAnalysis from "./components/SkillsGapAnalysis";
import JobDescriptionGenerator from "./components/JobDescriptionGenerator";
import WorkforcePlanning from "./components/WorkforcePlanning";
import { ClientProvider, useClient } from "./contexts/ClientContext";
import { UserProvider, useUser } from "./contexts/UserContext";

const AppContent = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { currentClient, clients, setSelectedClient } = useClient();
  const { currentUser, logout, switchPersona, getAvailablePersonas } = useUser();
  const userMenuRef = useRef(null);
  const notificationRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const tabs = [
    { id: "overview", label: "Overview", icon: Target },
    { id: "benchmarking", label: "Job Benchmarking", icon: BarChart3 },
    {
      id: "compensation",
      label: "Compensation Intelligence",
      icon: DollarSign,
    },
    { id: "skills", label: "Skills Gap Analysis", icon: Brain },
    { id: "job-descriptions", label: "Job Descriptions", icon: FileText },
    { id: "workforce", label: "Workforce Planning", icon: Users },
    { id: "surveys", label: "Surveys", icon: ClipboardList },
    { id: "chatbot", label: "AI Assistant", icon: MessageSquare },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "benchmarking":
        return <JobBenchmarking />;
      case "compensation":
        return <CompensationIntelligence />;
      case "skills":
        return <SkillsGapAnalysis />;
      case "job-descriptions":
        return <JobDescriptionGenerator />;
      case "workforce":
        return <WorkforcePlanning />;
      case "surveys":
        return <Surveys />;
      case "chatbot":
        return <Chatbot />;
      default:
        return <Overview />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        fontFamily:
          "'Source Sans Pro', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      }}
    >
      {/* AI-Enhanced Header */}
      <header
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          position: "relative",
          overflow: "hidden",
          zIndex: 100,
        }}
      >
        {/* AI Background Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
            `,
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 0",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <div
                onClick={() => setActiveTab("overview")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                  cursor: "pointer",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                {/* <img
                  src="/white-mercer_h_rgb_c 1.svg"
                  alt="Mercer Logo"
                  style={{
                    height: "24px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                /> */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/job-solutions.svg"
                    alt="Mercer Logo"
                    style={{
                      height: "32px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                  <div
                    style={{
                      marginLeft: "12px",
                      color: "white",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      Job Solutions
                    </h1>
                    <p
                      style={{
                        fontSize: "12px",
                        margin: 0,
                        opacity: 0.8,
                        lineHeight: 1.2,
                      }}
                    >
                      AI-Powered HR Intelligence
                    </p>
                  </div>
                  {/* <h1
                    style={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      color: "white",
                      margin: 0,
                    }}
                  >
                    Job Solutions
                  </h1>
                  <p style={{ fontSize: "16px", color: "#e2e8f0", margin: 0 }}>
                    HR Strategy Copilot
                  </p> */}
                </div>
              </div>
            </div>
            <div
              style={{ display: "flex", alignItems: "stretch", gap: "1rem" }}
            >
              {/* Notifications */}
              <div ref={notificationRef} style={{ position: "relative" }}>
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  style={{
                    position: "relative",
                    padding: "0.5rem",
                    backgroundColor: "transparent",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#f1f5f9")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  <Bell size={20} style={{ color: "white" }} />
                  <div
                    style={{
                      position: "absolute",
                      top: "0.25rem",
                      right: "0.25rem",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#ef4444",
                      borderRadius: "50%",
                      border: "2px solid white",
                    }}
                  ></div>
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      right: 0,
                      marginTop: "0.5rem",
                      backgroundColor: "white",
                      borderRadius: "12px",
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      border: "1px solid #e2e8f0",
                      minWidth: "320px",
                      maxHeight: "400px",
                      overflowY: "auto",
                      zIndex: 1000,
                    }}
                  >
                    <div
                      style={{
                        padding: "1rem",
                        borderBottom: "1px solid #e2e8f0",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#1e293b",
                          margin: 0,
                        }}
                      >
                        Notifications
                      </h3>
                    </div>

                    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                      <div
                        style={{
                          padding: "0.75rem 1rem",
                          borderBottom: "1px solid #f1f5f9",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.75rem",
                          }}
                        >
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              backgroundColor: "#4a90e2",
                              borderRadius: "50%",
                              marginTop: "0.5rem",
                              flexShrink: 0,
                            }}
                          ></div>
                          <div style={{ flex: 1 }}>
                            <p
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#1e293b",
                                margin: "0 0 0.25rem 0",
                              }}
                            >
                              New compensation data available
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                color: "#6b7280",
                                margin: 0,
                              }}
                            >
                              Updated salary benchmarks for Technology roles
                            </p>
                            <p
                              style={{
                                fontSize: "11px",
                                color: "#9ca3af",
                                margin: "0.25rem 0 0 0",
                              }}
                            >
                              2 minutes ago
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          padding: "0.75rem 1rem",
                          borderBottom: "1px solid #f1f5f9",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.75rem",
                          }}
                        >
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              backgroundColor: "#10b981",
                              borderRadius: "50%",
                              marginTop: "0.5rem",
                              flexShrink: 0,
                            }}
                          ></div>
                          <div style={{ flex: 1 }}>
                            <p
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#1e293b",
                                margin: "0 0 0.25rem 0",
                              }}
                            >
                              Survey response rate: 89%
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                color: "#6b7280",
                                margin: 0,
                              }}
                            >
                              Employee engagement survey closing soon
                            </p>
                            <p
                              style={{
                                fontSize: "11px",
                                color: "#9ca3af",
                                margin: "0.25rem 0 0 0",
                              }}
                            >
                              1 hour ago
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          padding: "0.75rem 1rem",
                          borderBottom: "1px solid #f1f5f9",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.75rem",
                          }}
                        >
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              backgroundColor: "#f59e0b",
                              borderRadius: "50%",
                              marginTop: "0.5rem",
                              flexShrink: 0,
                            }}
                          ></div>
                          <div style={{ flex: 1 }}>
                            <p
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#1e293b",
                                margin: "0 0 0.25rem 0",
                              }}
                            >
                              Skills gap analysis complete
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                color: "#6b7280",
                                margin: 0,
                              }}
                            >
                              Review recommendations for Data Science team
                            </p>
                            <p
                              style={{
                                fontSize: "11px",
                                color: "#9ca3af",
                                margin: "0.25rem 0 0 0",
                              }}
                            >
                              3 hours ago
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "0.75rem 1rem",
                        borderTop: "1px solid #f1f5f9",
                      }}
                    >
                      <button
                        style={{
                          width: "100%",
                          padding: "0.5rem",
                          backgroundColor: "transparent",
                          color: "#4a90e2",
                          border: "none",
                          borderRadius: "6px",
                          fontSize: "14px",
                          fontWeight: "500",
                          cursor: "pointer",
                          transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#f1f5f9")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                      >
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Client Selector */}
              <div
                style={{
                  position: "relative",
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <select
                  value={currentClient.id}
                  onChange={(e) => setSelectedClient(e.target.value)}
                  style={{
                    padding: "0.5rem 2rem 0.5rem 0.75rem",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                    cursor: "pointer",
                    appearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                    height: "100%",
                  }}
                >
                  {clients.map((client) => (
                    <option key={client.id} value={client.id}>
                      {client.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* User Profile Section */}
              <div ref={userMenuRef} style={{ position: "relative", display: "inline-block" }}>
                {/* User Profile - Prominent Display */}
                <div
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.25rem 1rem",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundImage: `url('${currentUser.profileImage}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "14px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Fallback initials if image fails to load */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        backgroundColor: "#4a90e2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "white",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                      onError={(e) => (e.target.style.opacity = 1)}
                    >
                      {currentUser?.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("") || "SC"}
                    </div>
                    {/* Image with error handling */}
                    <img
                      src={currentUser.profileImage}
                      alt={currentUser.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.previousSibling.style.opacity = 1;
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "white",
                          margin: 0,
                        }}
                      >
                        {currentUser?.name || "Sarah Chen"}
                      </p>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "#10b981",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                    {/* <p style={{ fontSize: "12px", color: "#e2e8f0", margin: 0 }}>
                      {currentUser?.title || "Senior HR Strategy Consultant"}
                    </p> */}
                  </div>
                  <ChevronDown 
                    size={16} 
                    style={{ 
                      color: "white",
                      transform: showUserMenu ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }} 
                  />
                </div>
                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <>
                    {/* Backdrop Overlay */}
                    <div
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        zIndex: 999998,
                      }}
                      onClick={() => setShowUserMenu(false)}
                    />
                    {/* Dropdown Menu */}
                    <div
                      style={{
                        position: "fixed",
                        top: "80px",
                        right: "20px",
                        backgroundColor: "white",
                        borderRadius: "12px",
                        boxShadow:
                          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        border: "2px solid #4a90e2",
                        width: "280px",
                        zIndex: 999999,
                        backdropFilter: "blur(10px)",
                      }}
                    >
                    {/* User Info Header */}
                    <div
                      style={{
                        padding: "1rem",
                        borderBottom: "1px solid #e2e8f0",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            border: "3px solid #4a90e2",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "18px",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          {/* Image with error handling */}
                          <img
                            src={currentUser.profileImage}
                            alt={currentUser.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                              objectFit: "cover",
                              position: "absolute",
                              top: 0,
                              left: 0,
                            }}
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.opacity = 1;
                            }}
                          />
                          {/* Fallback initials if image fails to load */}
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                              backgroundColor: "#4a90e2",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "18px",
                              fontWeight: "bold",
                              color: "white",
                              opacity: 0,
                              transition: "opacity 0.3s ease",
                            }}
                          >
                            {currentUser?.name
                              ?.split(" ")
                              .map((n) => n[0])
                              .join("") || "SC"}
                          </div>
                        </div>
                        <div>
                          <h3
                            style={{
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "#1e293b",
                              margin: 0,
                            }}
                          >
                            {currentUser.name}
                          </h3>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#6b7280",
                              margin: 0,
                            }}
                          >
                            {currentUser.title}
                          </p>
                        </div>
                      </div>
                      <div style={{ fontSize: "12px", color: "#6b7280" }}>
                        <p style={{ margin: "0.25rem 0" }}>
                          📍 {currentUser.location}
                        </p>
                        <p style={{ margin: "0.25rem 0" }}>
                          🏢 {currentUser.department}
                        </p>
                        <p style={{ margin: "0.25rem 0" }}>
                          ⏰ {currentUser.experience} experience
                        </p>
                      </div>
                    </div>

                    {/* User Details */}
                    <div
                      style={{
                        padding: "1rem",
                        borderBottom: "1px solid #e2e8f0",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#1e293b",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Specializations
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.25rem",
                        }}
                      >
                        {currentUser.specializations.map((spec, index) => (
                          <span
                            key={index}
                            style={{
                              fontSize: "12px",
                              padding: "0.25rem 0.5rem",
                              backgroundColor: "#f1f5f9",
                              color: "#4a90e2",
                              borderRadius: "4px",
                              fontWeight: "500",
                            }}
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Permissions */}
                    <div
                      style={{
                        padding: "1rem",
                        borderBottom: "1px solid #e2e8f0",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#1e293b",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Access Level
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#10b981",
                            borderRadius: "50%",
                          }}
                        ></div>
                        <span style={{ fontSize: "12px", color: "#6b7280" }}>
                          {currentUser.role} • Full Access
                        </span>
                      </div>
                    </div>

                    {/* Persona Switcher */}
                    <div
                      style={{
                        padding: "1rem",
                        borderBottom: "1px solid #e2e8f0",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#1e293b",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Switch Persona
                      </h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {getAvailablePersonas().map((persona) => (
                          <button
                            key={persona.key}
                            onClick={() => {
                              switchPersona(persona.key);
                              setShowUserMenu(false);
                            }}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              padding: "0.5rem",
                              backgroundColor: currentUser.name === persona.name ? "#e0f2fe" : "transparent",
                              border: currentUser.name === persona.name ? "1px solid #4a90e2" : "1px solid #e2e8f0",
                              borderRadius: "6px",
                              fontSize: "12px",
                              color: "#374151",
                              cursor: "pointer",
                              transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                              if (currentUser.name !== persona.name) {
                                e.target.style.backgroundColor = "#f8fafc";
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (currentUser.name !== persona.name) {
                                e.target.style.backgroundColor = "transparent";
                              }
                            }}
                          >
                            <div
                              style={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                backgroundImage: `url('${persona.profileImage}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                border: "1px solid #4a90e2",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                              }}
                            >
                              {/* Fallback initials if image fails to load */}
                              <div
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "50%",
                                  backgroundColor: "#4a90e2",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: "10px",
                                  fontWeight: "bold",
                                  color: "white",
                                  opacity: 0,
                                  transition: "opacity 0.3s ease",
                                }}
                                onError={(e) => (e.target.style.opacity = 1)}
                              >
                                {persona.avatar}
                              </div>
                            </div>
                            <div style={{ textAlign: "left" }}>
                              <div style={{ fontWeight: "500" }}>{persona.name}</div>
                              <div style={{ fontSize: "10px", color: "#6b7280" }}>{persona.role}</div>
                            </div>
                            {currentUser.name === persona.name && (
                              <div style={{ marginLeft: "auto", color: "#4a90e2" }}>✓</div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div style={{ padding: "0.5rem" }}>
                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          // Handle profile edit
                        }}
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          backgroundColor: "transparent",
                          border: "none",
                          borderRadius: "6px",
                          fontSize: "14px",
                          color: "#374151",
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#f1f5f9")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                      >
                        👤 Edit Profile
                      </button>
                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          // Handle settings
                        }}
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          backgroundColor: "transparent",
                          border: "none",
                          borderRadius: "6px",
                          fontSize: "14px",
                          color: "#374151",
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#f1f5f9")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                      >
                        ⚙️ Settings
                      </button>
                      <button
                        onClick={() => {
                          logout();
                          setShowUserMenu(false);
                        }}
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          backgroundColor: "transparent",
                          border: "none",
                          borderRadius: "6px",
                          fontSize: "14px",
                          color: "#ef4444",
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#fef2f2")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                      >
                        🚪 Sign Out
                      </button>
                    </div>
                  </div>
                  </>
                )}
              </div>

              {/* Client Info */}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav
        style={{
          backgroundColor: "#1e40af",
          borderBottom: "1px solid #1e3a8a",
          position: "relative",
          zIndex: 50,
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div style={{ display: "flex", gap: "2rem" }}>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "1rem 0.5rem",
                    borderBottom:
                      activeTab === tab.id
                        ? "2px solid #60a5fa"
                        : "2px solid transparent",
                    color: activeTab === tab.id ? "#60a5fa" : "#e2e8f0",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                  onMouseLeave={(e) =>
                    (e.target.style.color =
                      activeTab === tab.id ? "#60a5fa" : "#e2e8f0")
                  }
                >
                  <Icon size={18} />
                  <span style={{ fontWeight: "500" }}>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* AI-Enhanced Main Content */}
      <main
        style={{ 
          maxWidth: activeTab === "chatbot" ? "100%" : "1200px", 
          margin: "0 auto", 
          padding: activeTab === "chatbot" ? "0" : "2rem 1rem",
          height: activeTab === "chatbot" ? "calc(100vh - 80px)" : "auto",
          background: activeTab === "chatbot" ? "transparent" : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
          position: "relative",
        }}
      >
        {/* AI Background Pattern for non-chatbot pages */}
        {activeTab !== "chatbot" && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 10% 20%, rgba(96, 165, 250, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 50%)
              `,
              pointerEvents: "none",
            }}
          />
        )}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ 
            height: activeTab === "chatbot" ? "100%" : "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {renderContent()}
        </motion.div>
      </main>
    </div>
  );
};

const Chatbot = () => {
  const { currentClient } = useClient();
  const { currentUser } = useUser();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [conversationMode, setConversationMode] = useState("assistant"); // assistant, analysis, creative
  const [followUpQuestions, setFollowUpQuestions] = useState([]);
  const [userPreferences, setUserPreferences] = useState({
    detailLevel: "comprehensive",
    responseStyle: "professional",
    includeCharts: true,
    includeActionItems: true
  });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      let welcomeText = `Hello ${currentUser.name}! I'm your AI HR Strategy Assistant powered by Mercer's global expertise.`;
      
      if (currentUser.name === "James Patel") {
        welcomeText += ` As a Senior Compensation Analyst, I'm here to help you with:

• **Compensation Benchmarking**: Market data analysis, salary surveys, and role comparisons
• **Pay Architecture**: Grade structures, salary bands, and geographic differentials
• **Annual Planning**: Merit budgets, bonus pools, and equity allocation strategies
• **Specialized Projects**: Sales comp design, M&A due diligence, and scenario modeling

I can access real-time data from Mercer's proprietary database across 156 countries and 25+ industries.`;
      } else {
        welcomeText += ` I can help you with:

• **Strategic Planning**: Workforce planning, organizational design, and succession strategies
• **Compensation Analysis**: Market data, salary benchmarking, and total rewards optimization
• **Talent Management**: Skills gap analysis, training recommendations, and career frameworks
• **Data & Insights**: Real-time analytics from 156 countries and 25+ industries`;
      }
      
      welcomeText += `

I'm currently analyzing data for ${currentClient.name} in the ${currentClient.industry} sector. How can I assist you today?`;

      const welcomeMessage = {
        id: Date.now(),
        text: welcomeText,
        sender: "bot",
        timestamp: new Date(),
        type: "welcome",
      };
      setMessages([welcomeMessage]);
    }
  }, [currentUser.name, currentClient.name, currentClient.industry]);

  const suggestedPrompts = [
    {
      id: 1,
      title: "🎯 VP Commercial Compensation Benchmark (Demo Script)",
      prompt: "Find the current compensation range for a Vice President of Commercial roles in the Consumer Packaged Goods industry.",
      category: "Demo Script",
      complexity: "Interactive Demo",
      persona: "james",
      personalization: "Complete interactive demo workflow",
      estimatedTime: "2-3 minutes",
      confidence: "High",
      isDemo: true,
    },
    {
      id: 2,
      title: "Pay Architecture & Salary Structures",
      prompt: "Help me design a comprehensive pay architecture with 8-10 grades, including minimums, midpoints, and maximums for our engineering organization. Include geographic differentials for distributed teams.",
      category: "Compensation",
      complexity: "Advanced",
      persona: "james",
      personalization: "Tailored to your engineering focus areas",
      estimatedTime: "5-7 minutes",
      confidence: "High",
    },
    {
      id: 3,
      title: "Annual Comp Planning & Budgeting",
      prompt: "Model different merit budget scenarios (2.5%, 3.0%, 3.5%) and their impact on our $45M compensation budget. Include bonus pool recommendations and equity allocation strategies.",
      category: "Compensation",
      complexity: "Advanced",
      persona: "james",
      personalization: "Using your preferred modeling approach",
      estimatedTime: "4-6 minutes",
      confidence: "High",
    },
    {
      id: 4,
      title: "Sales Compensation Design",
      prompt: "Design a sales compensation plan for our commercial team with base salary, commission structure, and accelerators. Include quota setting methodology and territory optimization.",
      category: "Compensation",
      complexity: "Advanced",
      persona: "james",
      personalization: "Based on your sales comp expertise",
      estimatedTime: "6-8 minutes",
      confidence: "High",
    },
    {
      id: 5,
      title: "M&A Due Diligence Analysis",
      prompt: "Analyze compensation programs for our target acquisition, identifying risks, gaps, and harmonization challenges. Provide integration timeline and cost projections.",
      category: "Compensation",
      complexity: "Strategic",
      persona: "james",
      personalization: "Leveraging your M&A experience",
      estimatedTime: "8-10 minutes",
      confidence: "Medium",
    },
    {
      id: 6,
      title: "Executive Compensation Strategy",
      prompt: `Analyze executive compensation trends for ${currentClient.industry} industry leaders. Provide a comprehensive report including base salary, bonus structures, equity packages, and long-term incentives aligned with market benchmarks.`,
      category: "Compensation",
      complexity: "Advanced",
      personalization: `Customized for ${currentClient.name}'s industry position`,
      estimatedTime: "5-7 minutes",
      confidence: "High",
    },
    {
      id: 7,
      title: "AI/ML Skills Gap Analysis",
      prompt: `Conduct a detailed skills gap analysis for AI and Machine Learning capabilities across our ${currentClient.employees.toLocaleString()}-person workforce. Include current state assessment, future needs projection, and training roadmap with ROI calculations.`,
      category: "Skills",
      complexity: "Advanced",
      personalization: `Scaled for ${currentClient.name}'s workforce size`,
      estimatedTime: "7-10 minutes",
      confidence: "High",
    },
    {
      id: 8,
      title: "Global Workforce Planning",
      prompt: `Develop a 3-year global workforce planning strategy for ${currentClient.name}, considering regional market conditions, talent availability, cost optimization, and expansion into emerging markets.`,
      category: "Planning",
      complexity: "Strategic",
      personalization: `Aligned with ${currentClient.name}'s growth trajectory`,
      estimatedTime: "10-15 minutes",
      confidence: "Medium",
    },
    {
      id: 9,
      title: "Real-time Market Pulse Check",
      prompt: "Give me a real-time pulse check on compensation trends in our key markets. Include recent survey updates, market movements, and competitive intelligence.",
      category: "Intelligence",
      complexity: "Advanced",
      personalization: "Based on your active client portfolio",
      estimatedTime: "3-4 minutes",
      confidence: "High",
    },
    {
      id: 10,
      title: "Scenario Modeling Workshop",
      prompt: "Walk me through different compensation scenarios for our upcoming board presentation. Include sensitivity analysis and risk assessments.",
      category: "Strategy",
      complexity: "Strategic",
      personalization: "Tailored to your presentation style",
      estimatedTime: "8-12 minutes",
      confidence: "High",
    },
  ];

  const handleSendMessage = async (message = inputMessage) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: message,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI response (in real implementation, this would call an AI API)
    setTimeout(() => {
      const aiResponse = generateAIResponse(message);
      const botMessage = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  // Helper function to generate source citations and download options
  const generateSourceCitations = (sources) => {
    return `
**📚 Sources & References:**
${sources.map((source, index) => `
${index + 1}. **${source.title}**
   • **Source**: ${source.source}
   • **Page**: ${source.page}
   • **Date**: ${source.date}
   • **🔗 View Document**: [${source.link}](${source.link})
   • **📥 Downloads**: [PDF Report](${source.download}) | [Excel Data](${source.excel || source.download}) | [Word Summary](${source.download.replace('.pdf', '.docx')})
`).join('')}

**🔍 Data Verification:**
• **Confidence Level**: ${sources[0]?.confidence || 'High'}
• **Last Updated**: ${sources[0]?.lastUpdated || new Date().toISOString().split('T')[0]}
• **Compliance**: SOC 2 Type II Certified | GDPR Compliant
• **Audit Trail**: [View Full Audit Log](https://mercer.com/audit-logs) | [Export Compliance Report](https://mercer.com/compliance-reports)

**📥 Quick Download Options:**
• [📊 Full Analysis Report (PDF)](https://mercer.com/downloads/full-analysis-report.pdf)
• [📈 Data Tables (Excel)](https://mercer.com/downloads/data-tables.xlsx)
• [📋 Executive Summary (Word)](https://mercer.com/downloads/executive-summary.docx)
• [🔗 Source Documents Bundle (ZIP)](https://mercer.com/downloads/source-bundle.zip)

**💡 Pro Tip**: Click any link above to access the source documents directly. All links open in new tabs for your convenience.
`;
  };

  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // James Patel Demo Script - VP Commercial Compensation
    if (
      lowerMessage.includes("vice president") && 
      (lowerMessage.includes("commercial") || lowerMessage.includes("cpg") || lowerMessage.includes("consumer packaged goods"))
    ) {
      return `**🎯 VP Commercial Compensation Benchmark - CPG Industry**

**James Uses AI to Benchmark a VP Role**

Got it. To return the most relevant results, I need a bit more detail.
• What geography or market are you targeting?
• Do you have a company revenue range in mind?

**Suggested Filters:**
• **Geography**: US National, Regional, or specific states?
• **Company Size**: Revenue bands (e.g., $1B-$5B, $5B-$10B, $10B+)
• **Industry Sub-segment**: Food & Beverage, Personal Care, Household Products?

*💡  Tip**: Try responding with "United States. Target company size is mid to large—$1B to $5B in revenue." to see the full interactive flow.*`;
    }

    // James Patel Demo Script - Follow-up with filters
    if (
      lowerMessage.includes("united states") && 
      (lowerMessage.includes("1b") || lowerMessage.includes("5b") || lowerMessage.includes("revenue"))
    ) {
      const sources = [
        {
          title: "Mercer Global Compensation Survey - CPG Industry",
          source: "Mercer Total Rewards Database",
          page: "Section 4.2, Pages 127-134",
          date: "Q1 2025",
          link: "https://mercer.com/surveys/global-compensation-cpg-2025",
          download: "https://mercer.com/downloads/cpg-comp-survey-2025.pdf",
          excel: "https://mercer.com/downloads/cpg-comp-survey-2025.xlsx",
          confidence: "High",
          lastUpdated: "2025-01-15"
        },
        {
          title: "VP Commercial Roles Benchmarking Report",
          source: "Mercer Executive Compensation Database",
          page: "Appendix B, Pages 245-251",
          date: "Q1 2025",
          link: "https://mercer.com/reports/vp-commercial-benchmark-2025",
          download: "https://mercer.com/downloads/vp-commercial-benchmark-2025.pdf",
          confidence: "High",
          lastUpdated: "2025-01-10"
        }
      ];

      return `**📊 VP Commercial Compensation Results - CPG Industry**

Thanks. Based on those filters, I found 7 strong matches from the most recent Mercer survey.

**Match Details:**
• **Titles**: VP, Commercial / Sales Strategy / Business Development
• **Industry**: CPG
• **Geography**: U.S. National
• **Revenue Band**: $1B–$5B
• **Data Source**: Q1 Survey, 2025
• **Sample Size**: 7 organizations
• **Confidence Level**: High (95% confidence interval)

**Next Step**: Would you like to see Base Salary, Total Direct Compensation, or both?

*💡  Tip**: Try responding with "Total compensation, please." to continue the interactive flow.*

${generateSourceCitations(sources)}`;
    }

    // James Patel Demo Script - Total Compensation Results
    if (
      lowerMessage.includes("total compensation") || 
      lowerMessage.includes("total comp")
    ) {
      const sources = [
        {
          title: "VP Commercial Total Direct Compensation Analysis",
          source: "Mercer Global Compensation Survey - CPG Industry",
          page: "Table 4.2.3, Page 131",
          date: "Q1 2025",
          link: "https://mercer.com/surveys/global-compensation-cpg-2025",
          download: "https://mercer.com/downloads/vp-commercial-tdc-analysis-2025.pdf",
          excel: "https://mercer.com/downloads/vp-commercial-tdc-data-2025.xlsx",
          confidence: "High",
          lastUpdated: "2025-01-15"
        },
        {
          title: "Market Movement Factors - Q1 to Q4 2025",
          source: "Mercer Market Intelligence Report",
          page: "Section 2.1, Pages 45-52",
          date: "Q1 2025",
          link: "https://mercer.com/reports/market-movement-factors-2025",
          download: "https://mercer.com/downloads/market-movement-factors-2025.pdf",
          confidence: "High",
          lastUpdated: "2025-01-20"
        }
      ];

      return `**💰 VP Commercial - Total Direct Compensation Results**

Here are the results across the 7 matched records:

**Compensation Ranges:**
• **25th percentile**: $289,000
• **Median**: $327,000
• **75th percentile**: $373,000
• **Average**: $335,000
• **# of matched orgs**: 7
• **Standard Deviation**: $42,000
• **Confidence Interval**: ±$18,000 (95% confidence)

**Statistical Notes:**
• **Data Quality**: High (all 7 organizations provided complete TDC data)
• **Outlier Analysis**: No significant outliers detected
• **Market Positioning**: Median represents 50th percentile market position

**Next Step**: This data is based on Q1 reporting. Do you want to age this data forward to Q4 using a 6% market movement factor?

*💡  Tip**: Try responding with "Yes, age the data." to see the market adjustment process.*

${generateSourceCitations(sources)}`;
    }

    // James Patel Demo Script - Data Aging
    if (
      lowerMessage.includes("age the data") || 
      lowerMessage.includes("yes, age") ||
      lowerMessage.includes("6%")
    ) {
      const sources = [
        {
          title: "Aged VP Commercial Compensation Data - Q4 2025",
          source: "Mercer Global Compensation Survey - CPG Industry (Aged)",
          page: "Table 4.2.3 (Aged), Page 131",
          date: "Q4 2025 (Projected)",
          link: "https://mercer.com/surveys/global-compensation-cpg-2025-aged",
          download: "https://mercer.com/downloads/vp-commercial-aged-data-2025.pdf",
          excel: "https://mercer.com/downloads/vp-commercial-aged-data-2025.xlsx",
          confidence: "High",
          lastUpdated: "2025-01-20"
        },
        {
          title: "Market Movement Factor Application",
          source: "Mercer Market Intelligence Report - Aging Methodology",
          page: "Section 2.1.3, Pages 48-50",
          date: "Q1 2025",
          link: "https://mercer.com/reports/aging-methodology-2025",
          download: "https://mercer.com/downloads/aging-methodology-2025.pdf",
          confidence: "High",
          lastUpdated: "2025-01-20"
        }
      ];

      return `**📈 VP Commercial - Aged Compensation Data**

Adjusted for 6% market movement:

**Updated Compensation Ranges:**
• **25th percentile**: $306,340 (aged from $289,000)
• **Median**: $347,620 (aged from $327,000)
• **75th percentile**: $395,380 (aged from $373,000)
• **Average**: $355,100 (aged from $335,000)
• **Standard Deviation**: $44,520 (aged from $42,000)

**Aging Methodology:**
• **Base Period**: Q1 2025
• **Target Period**: Q4 2025
• **Movement Factor**: 6.0% (CPG industry average)
• **Confidence Level**: High (based on 12-month trend analysis)
• **Validation**: Cross-referenced with 3 independent market sources

**Next Step**: Would you like this exported to Excel, summarized for Sarah, or saved to the current client workspace?

*💡  Tip**: Try responding with "Summarize this for Sarah and attach the aged comp data in Excel." to complete the workflow.*

**Quality Assurance:**
• **Data Integrity**: Verified against original survey responses
• **Outlier Check**: No anomalies detected in aged calculations
• **Peer Review**: Methodology validated by senior compensation analysts

${generateSourceCitations(sources)}`;
    }

    // James Patel Demo Script - Final Summary
    if (
      lowerMessage.includes("summarize") && 
      (lowerMessage.includes("sarah") || lowerMessage.includes("excel"))
    ) {
      const sources = [
        {
          title: "VP Commercial CPG Compensation Analysis - Executive Summary",
          source: "Mercer Job Solutions AI Assistant",
          page: "Complete Analysis Report",
          date: new Date().toISOString().split('T')[0],
          link: "https://mercer.com/reports/vp-commercial-cpg-summary-2025",
          download: "https://mercer.com/downloads/vp-commercial-cpg-summary-2025.pdf",
          excel: "https://mercer.com/downloads/vp-commercial-cpg-data-2025.xlsx",
          confidence: "High",
          lastUpdated: new Date().toISOString().split('T')[0]
        },
        {
          title: "Client Workspace: Microsoft APAC - Role Analysis",
          source: "Mercer Client Portal",
          page: "VP Commercial – CPG Analysis Folder",
          date: new Date().toISOString().split('T')[0],
          link: "https://mercer.com/client-workspace/microsoft-apac/role-analysis",
          download: "https://mercer.com/downloads/microsoft-apac-vp-commercial-analysis.pdf",
          confidence: "High",
          lastUpdated: new Date().toISOString().split('T')[0]
        }
      ];

      return `**🎉 Demo Complete - Summary Created & File Exported**

✅ **Summary created for Sarah Chen**
✅ **File exported to Excel with aged compensation data**
✅ **Saved to client workspace with full audit trail**

**File Location**: Microsoft – APAC > Role Analysis > VP Commercial – CPG

**Key Findings:**
• VP Commercial roles in CPG (US, $1B-$5B revenue) show median TDC of $347,620
• Data aged forward 6% from Q1 2025 baseline
• 7 strong market matches with high confidence level
• Ready for client presentation and decision-making

   

**Deliverables Created:**
• **Executive Summary**: 2-page overview for Sarah Chen
• **Detailed Analysis**: Complete compensation breakdown with methodology
• **Excel Workbook**: Raw data with formulas and calculations
• **Source Documentation**: All references and citations included
• **Audit Trail**: Complete record of data sources and transformations

**Compliance & Quality Assurance:**
• **Data Governance**: All sources verified and documented
• **Methodology**: Transparent aging calculations with validation
• **Confidence Levels**: Statistical significance clearly indicated
• **Audit Ready**: Full traceability for regulatory compliance

*In less than two minutes, you were able to retrieve, filter, adjust, and deliver benchmark compensation data—all with complete source traceability. No spreadsheet hunting. No second-guessing data age or relevance.*

${generateSourceCitations(sources)}`;
    }

    // James Patel - Pay Architecture & Salary Structures
    if (
      lowerMessage.includes("pay architecture") || 
      lowerMessage.includes("salary structures") ||
      lowerMessage.includes("grades") ||
      lowerMessage.includes("minimums") ||
      lowerMessage.includes("midpoints")
    ) {
      const sources = [
        {
          title: "Engineering Pay Architecture Design Guide",
          source: "Mercer Global Engineering Compensation Survey 2025",
          page: "Chapter 3, Pages 89-127",
          date: "Q1 2025",
          link: "https://mercer.com/surveys/engineering-compensation-2025",
          download: "https://mercer.com/downloads/engineering-pay-architecture-2025.pdf",
          excel: "https://mercer.com/downloads/engineering-grade-structures-2025.xlsx",
          confidence: "High",
          lastUpdated: "2025-01-15"
        },
        {
          title: "Geographic Differential Analysis - Technology Sector",
          source: "Mercer Geographic Pay Differentials Report",
          page: "Section 4.2, Pages 156-178",
          date: "Q1 2025",
          link: "https://mercer.com/reports/geo-differentials-tech-2025",
          download: "https://mercer.com/downloads/geo-differentials-tech-2025.pdf",
          confidence: "High",
          lastUpdated: "2025-01-10"
        },
        {
          title: "Pay Grade Design Best Practices",
          source: "Mercer Compensation Design Methodology",
          page: "Appendix A, Pages 234-251",
          date: "Q1 2025",
          link: "https://mercer.com/methodology/pay-grade-design",
          download: "https://mercer.com/downloads/pay-grade-design-methodology.pdf",
          confidence: "High",
          lastUpdated: "2025-01-05"
        }
      ];

      return `**Pay Architecture & Salary Structures Design**

I'll help you design a comprehensive pay architecture for your engineering organization.

**Recommended Grade Structure (8-10 grades):**

**Grade 1-2: Individual Contributors (Entry-Mid)**
• **Grade 1**: $65K - $85K - $105K (Min-Mid-Max)
• **Grade 2**: $80K - $105K - $130K

**Grade 3-4: Senior Individual Contributors**
• **Grade 3**: $100K - $130K - $160K
• **Grade 4**: $125K - $160K - $195K

**Grade 5-6: Staff/Principal Engineers**
• **Grade 5**: $150K - $195K - $240K
• **Grade 6**: $180K - $235K - $290K

**Grade 7-8: Senior Staff/Architects**
• **Grade 7**: $220K - $285K - $350K
• **Grade 8**: $260K - $340K - $420K

**Geographic Differentials:**
• **San Francisco Bay Area**: +15%
• **New York/Seattle**: +10%
• **Austin/Denver**: +5%
• **Remote (US)**: Base rate
• **International**: -10% to +5% (varies by market)

**Key Design Principles:**
✓ **Overlap**: 15-20% between adjacent grades
✓ **Progression**: 20-25% midpoint increases
✓ **Market Positioning**: 50th-75th percentile
✓ **Internal Equity**: Consistent progression curves

**Methodology Notes:**
• **Market Data**: Based on 2,847 engineering roles across 156 organizations
• **Grade Count**: Optimized for 8-10 grades to balance granularity and simplicity
• **Progression Logic**: Mathematical progression ensuring internal equity
• **Geographic Factors**: Updated quarterly based on cost-of-living indices

Would you like me to model the financial impact of this structure or adjust any specific parameters?

${generateSourceCitations(sources)}`;
    }

    // James Patel - Annual Comp Planning & Budgeting
    if (
      lowerMessage.includes("merit budget") || 
      lowerMessage.includes("annual comp planning") ||
      lowerMessage.includes("budget scenarios")
    ) {
      return `**Annual Compensation Planning & Budgeting Analysis**

**Merit Budget Scenarios for $45M Compensation Budget:**

**Scenario 1: Conservative (2.5% Merit)**
• **Merit Pool**: $1.125M
• **Bonus Pool**: $4.5M (10% of base)
• **Equity Allocation**: $2.25M (5% of base)
• **Total Investment**: $7.875M
• **Budget Impact**: 17.5% increase

**Scenario 2: Market Competitive (3.0% Merit)**
• **Merit Pool**: $1.35M
• **Bonus Pool**: $5.4M (12% of base)
• **Equity Allocation**: $2.7M (6% of base)
• **Total Investment**: $9.45M
• **Budget Impact**: 21% increase

**Scenario 3: Aggressive (3.5% Merit)**
• **Merit Pool**: $1.575M
• **Bonus Pool**: $6.3M (14% of base)
• **Equity Allocation**: $3.15M (7% of base)
• **Total Investment**: $11.025M
• **Budget Impact**: 24.5% increase

**Recommended Allocation Strategy:**
• **Top Performers**: 4.5-5.0% increases
• **Meets Expectations**: 2.5-3.0% increases
• **Below Expectations**: 0-1.5% increases
• **Promotions**: Additional 8-12% on top of merit

**Equity Pool Distribution:**
• **Senior Leadership**: 40% of equity pool
• **Key Individual Contributors**: 35%
• **High Potentials**: 25%

**Risk Mitigation:**
✓ **Performance Calibration**: Ensure merit aligns with performance
✓ **Market Adjustments**: Address critical role compression
✓ **Retention Bonuses**: Targeted retention for key talent
✓ **Phased Implementation**: Q1 merit, Q2-Q4 equity grants

Which scenario aligns best with your strategic priorities and budget constraints?`;
    }

    // Executive Compensation
    if (
      lowerMessage.includes("executive") ||
      lowerMessage.includes("c-suite") ||
      lowerMessage.includes("leadership compensation")
    ) {
      return `**Executive Compensation Analysis for ${
        currentClient.industry
      } Sector**

Based on Mercer's proprietary database of ${currentClient.employees.toLocaleString()}+ executives across 156 countries:

**Market Data Summary:**
• **CEO Total Direct Compensation**: $2.5M - $8.5M (median: $4.2M)
• **CFO/COO Range**: $1.2M - $4.5M (median: $2.1M)
• **SVP/EVP Range**: $850K - $2.8M (median: $1.4M)
• **Equity Mix**: 45-60% of total package for senior roles

**Key Trends (2024):**
✓ 8.2% median increase in base salaries
✓ Performance-based bonuses: 150-200% of base
✓ Long-term incentives increasingly tied to ESG metrics
✓ Clawback provisions now standard (92% adoption)

**Strategic Recommendations:**
1. **Market Positioning**: Target 60th-75th percentile for critical roles
2. **Pay Mix Optimization**: 40% base / 30% annual bonus / 30% LTI
3. **Performance Metrics**: Blend financial (70%) + strategic (30%) goals
4. **Retention Mechanisms**: Multi-year vesting with accelerated cliff provisions

**Competitive Intelligence:**
• Your peer companies: 73% above market median
• Retention risk for top 5 executives: Medium-High
• Recommended adjustment: +12-15% for key positions

**Next Steps:**
→ Detailed peer group analysis
→ Custom compensation modeling
→ Board presentation materials

Would you like me to generate specific recommendations for any executive role?`;
    }

    // Skills Gap & Training
    else if (
      lowerMessage.includes("skill") ||
      lowerMessage.includes("training") ||
      lowerMessage.includes("ai") ||
      lowerMessage.includes("ml")
    ) {
      return `**AI/ML Skills Gap Analysis - ${currentClient.name}**

Comprehensive assessment across your ${currentClient.employees.toLocaleString()}-person workforce:

**Current State Assessment:**
📊 **Technical Proficiency Gaps:**
• **AI/ML Engineering**: 68% gap (Critical)
• **Data Science & Analytics**: 52% gap (High)
• **Cloud/DevOps**: 45% gap (Medium)
• **Cybersecurity**: 41% gap (Medium)
• **Product Management**: 33% gap (Low)

**Impact Analysis:**
• **Lost Productivity**: ~$12.5M annually
• **External Hiring Premium**: 35% above internal development
• **Time-to-Competency**: 18-24 months current vs 9-12 optimal
• **Innovation Delay**: 6-8 month project delays

**Strategic Training Roadmap:**

**Phase 1 (0-3 months): Foundation**
- AI/ML Fundamentals certification (Coursera/edX)
- Python & R programming bootcamps
- Investment: $850K | Expected reach: 200 employees

**Phase 2 (3-9 months): Intermediate**
- Advanced ML algorithms & model deployment
- Cloud architecture (AWS/Azure/GCP)
- Investment: $1.2M | Expected reach: 150 employees

**Phase 3 (9-18 months): Advanced**
- Deep learning & neural networks
- Production ML systems & MLOps
- Investment: $1.5M | Expected reach: 75 employees

**ROI Projections:**
✓ **6 months**: 25% productivity increase = $3.1M value
✓ **12 months**: 40% reduction in external hiring = $4.8M savings
✓ **18 months**: Full capability maturity = $15M+ annual value
✓ **Total ROI**: 312% over 18 months

**Recommended Partners:**
→ Technical: Coursera, Pluralsight, Udacity
→ Leadership: DDI, Center for Creative Leadership
→ Internal: Establish Center of Excellence

**Quick Wins (Immediate):**
1. Identify high-potential internal candidates
2. Launch pilot program with 20 participants
3. Partner with 2-3 universities for pipeline

Would you like detailed curriculum design or vendor analysis?`;
    }

    // Workforce Planning
    else if (
      lowerMessage.includes("workforce") ||
      lowerMessage.includes("planning") ||
      lowerMessage.includes("headcount")
    ) {
      return `**3-Year Global Workforce Planning Strategy**
**${currentClient.name} | ${currentClient.industry} Sector**

**Current Workforce Profile:**
• **Total Headcount**: ${currentClient.employees.toLocaleString()} employees
• **Geographic Distribution**: ${currentClient.regions.join(", ")}
• **Critical Roles**: 2,340 positions (12% of total)
• **Attrition Rate**: 11.2% (below industry avg of 14.8%)

**Market Intelligence:**
📈 **Talent Availability Index by Region:**
• **North America**: High demand, tight supply (Index: 72/100)
• **Europe**: Moderate demand, good supply (Index: 61/100)
• **Asia Pacific**: Growing demand, abundant supply (Index: 45/100)

**3-Year Projection Model:**

**Year 1 (2024):**
• **Net Growth**: +1,850 positions (8.4% increase)
• **Focus Areas**: Engineering (45%), Sales (25%), Operations (20%)
• **Investment**: $247M (fully loaded cost)
• **Key Hires**: 200 senior-level positions

**Year 2 (2025):**
• **Net Growth**: +2,450 positions (10.2% increase)
• **Focus Areas**: Product (40%), Technology (35%), Customer Success (15%)
• **Investment**: $342M
• **Geographic Expansion**: 3 new markets

**Year 3 (2026):**
• **Net Growth**: +2,100 positions (7.8% increase)
• **Focus Areas**: AI/Innovation (50%), Global expansion (30%)
• **Investment**: $318M
• **Strategic Acquisitions**: Talent integration planning

**Cost Optimization Strategies:**
✓ **Nearshore/Offshore Mix**: 30% reduction in labor costs
✓ **Contingent Workforce**: 15-20% flexibility buffer
✓ **Automation Impact**: -340 positions, +$45M savings
✓ **Productivity Gains**: 12% improvement = 290 FTE equivalent

**Risk Mitigation:**
🛡️ **Critical Role Succession**: 2x coverage for top 100 roles
🛡️ **Talent Pipeline**: University partnerships in 12 countries
🛡️ **Retention Programs**: Golden handcuffs for critical talent
🛡️ **Knowledge Management**: Documentation & cross-training

**Implementation Roadmap:**
→ **Q1**: Finalize requirements & budget approval
→ **Q2**: Launch recruitment campaigns
→ **Q3**: Onboarding & integration
→ **Q4**: Performance assessment & adjustment

**Success Metrics:**
• Time-to-fill: <45 days for critical roles
• Quality of hire: >4.2/5.0 rating
• Retention: >92% after 12 months
• Cost per hire: <$8,500 average

Would you like detailed analysis for specific functions or regions?`;
    }

    // Compensation Analysis
    else if (
      lowerMessage.includes("compensation") ||
      lowerMessage.includes("salary") ||
      lowerMessage.includes("pay")
    ) {
      return `**Comprehensive Compensation Intelligence Report**
**${currentClient.industry} Sector | Global Market Analysis**

**Market Overview (Q4 2024):**
Based on Mercer's database of 15M+ data points across 156 countries:

**Salary Trends:**
📈 **Year-over-Year Growth:**
• **Technology Roles**: +11.2% (highest growth)
• **Engineering**: +9.8%
• **Sales & Marketing**: +8.4%
• **Operations**: +7.2%
• **Finance**: +6.8%
• **HR**: +6.2%

**Total Compensation Benchmarks:**
💰 **Software Engineer (Senior)**
• Base Salary: $145K - $185K (median: $162K)
• Total Comp: $195K - $275K
• 75th Percentile: $242K

💰 **Product Manager (Senior)**
• Base Salary: $155K - $195K (median: $172K)
• Total Comp: $210K - $320K
• 75th Percentile: $268K

💰 **Data Scientist (Principal)**
• Base Salary: $165K - $215K (median: $186K)
• Total Comp: $225K - $380K
• 75th Percentile: $295K

**Your Competitive Position:**
🎯 **Current Standing vs Market:**
• **Base Salary**: 62nd percentile (Below target of 70th)
• **Total Compensation**: 58th percentile
• **Benefits Value**: 68th percentile (Strong)
• **Equity Competitiveness**: 45th percentile (Weak)

**Risk Assessment:**
⚠️ **High Flight Risk Roles** (below 50th percentile):
• Senior Software Engineers: 47th percentile
• ML Engineers: 42nd percentile
• Senior Product Managers: 51st percentile

**Strategic Recommendations:**

**Immediate Actions (0-30 days):**
1. **Emergency Adjustments**: +15-20% for critical retention risks
   - Investment: $2.4M
   - Affected: 85 employees
   
2. **Market Realignment**: Target 70th percentile for critical roles
   - Investment: $8.7M
   - Affected: 340 employees

**Short-term (30-90 days):**
3. **Equity Refresh Program**: RSU grants for top performers
   - Investment: $15M over 4 years
   - Retention impact: +23% improvement

4. **Variable Pay Enhancement**: Performance bonus structure
   - Target: 15-25% of base
   - Investment: $12M annually

**Long-term (90+ days):**
5. **Total Rewards Redesign**: Holistic package optimization
6. **Career Framework**: Clear leveling & progression paths
7. **Geographic Differentials**: Location-based pay strategies

**Cost-Benefit Analysis:**
• **Total Investment**: $38.1M (one-time + annual)
• **Retention Savings**: $52M (turnover cost reduction)
• **Productivity Gains**: $18M (reduced vacancy impact)
• **Net Value**: +$31.9M over 24 months

**Market Intelligence:**
→ Remote work premium: +8-12% for 100% remote
→ Emerging markets talent: 40-60% cost savings
→ Contractor rates: +35% premium vs FTE
→ Signing bonuses: Now standard for senior hires

**Next Steps:**
1. Detailed role-by-role analysis
2. Custom peer group selection
3. Board-ready presentation deck
4. Implementation playbook

Would you like specific recommendations for any role family?`;
    }

    // Default comprehensive response
    else {
      return `**AI-Powered HR Strategy Analysis**
*Personalized for ${currentClient.name} | ${currentClient.industry} Sector*

Thank you for your query: "${userMessage}"

I'm analyzing this across Mercer's comprehensive database:
• **156 countries** with real-time market data
• **25+ industries** with sector-specific insights
• **15M+ compensation** data points
• **2,500+ organizations** in peer analysis

**I can provide detailed analysis on:**

**🎯 Strategic Planning**
• Workforce planning & organizational design
• M&A talent integration strategies
• Digital transformation roadmaps
• Future of work scenarios

**💰 Compensation & Rewards**
• Executive compensation benchmarking
• Total rewards optimization
• Equity & LTI program design
• Global mobility & expatriate pay

**👥 Talent Management**
• Skills gap analysis & training ROI
• Succession planning frameworks
• Performance management systems
• Diversity & inclusion strategies

**📊 Data & Analytics**
• Predictive attrition modeling
• Workforce cost optimization
• Competitive intelligence reports
• HR metrics & dashboards

**🌍 Global Operations**
• Multi-country expansion planning
• Local market compensation insights
• Compliance & regulatory guidance
• Cultural adaptation strategies

**Current Context:**
✓ Analyzing ${currentClient.employees.toLocaleString()} employees
✓ Focus regions: ${currentClient.regions.join(", ")}
✓ Industry benchmarks: ${currentClient.industry}
✓ Real-time market data: Updated daily

**Popular Queries:**
1. "Analyze executive compensation for our industry"
2. "Create a 3-year workforce plan with cost projections"
3. "Assess AI/ML skills gaps and training recommendations"
4. "Design a retention program for high-risk employees"
5. "Compare our total rewards package to competitors"

How can I assist with your specific HR strategy needs? Please provide more details and I'll generate a comprehensive analysis with actionable recommendations.`;
    }
  };

  const handlePromptSelect = (prompt) => {
    setSelectedPrompt(prompt);
    setInputMessage(prompt.prompt);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Enhanced Header */}
      <div
        style={{
          padding: "1.5rem 2rem",
          backgroundColor: "white",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundImage: `url('${currentUser.profileImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "3px solid #4a90e2",
              }}
            />
            <div>
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#1e293b",
                  margin: 0,
                }}
              >
                AI HR Strategy Assistant
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: 0,
                }}
              >
                Personalized for {currentUser.name} • {currentClient.name} • {currentClient.industry}
              </p>
            </div>
          </div>
          
          {/* Advanced Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {/* Conversation Mode Selector */}
            <select
              value={conversationMode}
              onChange={(e) => setConversationMode(e.target.value)}
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                backgroundColor: "white",
                fontSize: "14px",
                color: "#374151",
              }}
            >
              <option value="assistant">🤖 Assistant Mode</option>
              <option value="analysis">📊 Analysis Mode</option>
              <option value="creative">💡 Creative Mode</option>
            </select>

            {/* Advanced Options Toggle */}
            <button
              onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: showAdvancedOptions ? "#4a90e2" : "white",
                color: showAdvancedOptions ? "white" : "#4a90e2",
                border: "1px solid #4a90e2",
                borderRadius: "8px",
                fontSize: "14px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              ⚙️ Advanced
            </button>

            {/* New Chat Button */}
            <button
              onClick={() => setShowClearConfirm(true)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                backgroundColor: "white",
                color: "#6b7280",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <RefreshCw size={16} />
              New Chat
            </button>

            {/* Status Indicator */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#10b981",
                color: "white",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                }}
              ></div>
              <span>AI Assistant Online</span>
            </div>
          </div>
        </div>

        {/* Advanced Options Panel */}
        {showAdvancedOptions && (
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#f8fafc",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              marginTop: "1rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              <div>
                <label style={{ fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "0.25rem", display: "block" }}>
                  Detail Level
                </label>
                <select
                  value={userPreferences.detailLevel}
                  onChange={(e) => setUserPreferences(prev => ({ ...prev, detailLevel: e.target.value }))}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "14px",
                  }}
                >
                  <option value="brief">Brief</option>
                  <option value="standard">Standard</option>
                  <option value="comprehensive">Comprehensive</option>
                </select>
              </div>
              
              <div>
                <label style={{ fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "0.25rem", display: "block" }}>
                  Response Style
                </label>
                <select
                  value={userPreferences.responseStyle}
                  onChange={(e) => setUserPreferences(prev => ({ ...prev, responseStyle: e.target.value }))}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "14px",
                  }}
                >
                  <option value="professional">Professional</option>
                  <option value="conversational">Conversational</option>
                  <option value="technical">Technical</option>
                </select>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <input
                  type="checkbox"
                  checked={userPreferences.includeCharts}
                  onChange={(e) => setUserPreferences(prev => ({ ...prev, includeCharts: e.target.checked }))}
                  style={{ margin: 0 }}
                />
                <label style={{ fontSize: "12px", color: "#374151" }}>Include Charts</label>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <input
                  type="checkbox"
                  checked={userPreferences.includeActionItems}
                  onChange={(e) => setUserPreferences(prev => ({ ...prev, includeActionItems: e.target.checked }))}
                  style={{ margin: 0 }}
                />
                <label style={{ fontSize: "12px", color: "#374151" }}>Include Action Items</label>
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: "1.5rem", flex: 1, minHeight: 0 }}>
        {/* Suggested Prompts Sidebar */}
        <div
          style={{
            width: "300px",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            border: "1px solid #e2e8f0",
            padding: "1.5rem",
            overflowY: "auto",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#1e293b",
              marginBottom: "1rem",
            }}
          >
            Suggested Prompts
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {suggestedPrompts
              .filter((prompt) => {
                // Show all prompts for Sarah Chen, or James-specific prompts for James Patel
                if (currentUser.name === "James Patel") {
                  return prompt.persona === "james" || !prompt.persona;
                } else {
                  return !prompt.persona || prompt.persona === "sarah";
                }
              })
              .map((prompt) => (
              <div
                key={prompt.id}
                onClick={() => handlePromptSelect(prompt)}
                style={{
                  padding: "1rem",
                  backgroundColor: prompt.isDemo 
                    ? (selectedPrompt?.id === prompt.id ? "#fef3c7" : "#fef7cd")
                    : (selectedPrompt?.id === prompt.id ? "#f1f5f9" : "#f8fafc"),
                  border: prompt.isDemo
                    ? (selectedPrompt?.id === prompt.id ? "2px solid #f59e0b" : "2px solid #fbbf24")
                    : (selectedPrompt?.id === prompt.id ? "1px solid #4a90e2" : "1px solid #e2e8f0"),
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  position: "relative",
                  boxShadow: prompt.isDemo ? "0 2px 8px rgba(251, 191, 36, 0.2)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (selectedPrompt?.id !== prompt.id) {
                    e.target.style.backgroundColor = "#f1f5f9";
                    e.target.style.borderColor = "#cbd5e1";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedPrompt?.id !== prompt.id) {
                    e.target.style.backgroundColor = "#f8fafc";
                    e.target.style.borderColor = "#e2e8f0";
                  }
                }}
              >
                {prompt.isDemo && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      backgroundColor: "#f59e0b",
                      color: "white",
                      fontSize: "10px",
                      fontWeight: "700",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    🎯 Demo
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: prompt.isDemo ? "#f59e0b" : "#4a90e2",
                      backgroundColor: prompt.isDemo ? "#fef3c7" : "#e0f2fe",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "4px",
                      display: "inline-block",
                    }}
                  >
                    {prompt.category}
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: "600",
                      color:
                        prompt.complexity === "Strategic"
                          ? "#7c3aed"
                          : prompt.complexity === "Advanced"
                          ? "#f59e0b"
                          : "#10b981",
                      backgroundColor:
                        prompt.complexity === "Strategic"
                          ? "#f3e8ff"
                          : prompt.complexity === "Advanced"
                          ? "#fef3c7"
                          : "#d1fae5",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "4px",
                      display: "inline-block",
                      textTransform: "uppercase",
                    }}
                  >
                    {prompt.complexity}
                  </div>
                </div>
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1e293b",
                    marginBottom: "0.5rem",
                  }}
                >
                  {prompt.title}
                </h4>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                    lineHeight: "1.4",
                  }}
                >
                  {prompt.prompt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Interface */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            border: "1px solid #e2e8f0",
          }}
        >
          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              padding: "1.5rem",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {messages.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  color: "#6b7280",
                  marginTop: "2rem",
                }}
              >
                <MessageSquare
                  size={48}
                  style={{ margin: "0 auto 1rem", color: "#cbd5e1" }}
                />
                <p style={{ fontSize: "16px", marginBottom: "0.5rem" }}>
                  Welcome to your AI HR Assistant
                </p>
                <p style={{ fontSize: "14px" }}>
                  Select a prompt from the sidebar or type your own question
                </p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  style={{
                    display: "flex",
                    justifyContent:
                      message.sender === "user" ? "flex-end" : "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "70%",
                      padding: "1rem 1.25rem",
                      borderRadius:
                        message.sender === "user"
                          ? "18px 18px 4px 18px"
                          : "18px 18px 18px 4px",
                      backgroundColor:
                        message.sender === "user" ? "#4a90e2" : "#f1f5f9",
                      color: message.sender === "user" ? "white" : "#1e293b",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {message.text}
                  </div>
                </div>
              ))
            )}

            {isLoading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    borderRadius: "18px 18px 18px 4px",
                    backgroundColor: "#f1f5f9",
                    color: "#6b7280",
                    fontSize: "14px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#4a90e2",
                        borderRadius: "50%",
                        animation: "pulse 1.5s infinite",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#4a90e2",
                        borderRadius: "50%",
                        animation: "pulse 1.5s infinite 0.2s",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#4a90e2",
                        borderRadius: "50%",
                        animation: "pulse 1.5s infinite 0.4s",
                      }}
                    ></div>
                    <span>AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div
            style={{
              padding: "1.5rem",
              borderTop: "1px solid #e2e8f0",
              backgroundColor: "#f8fafc",
            }}
          >
            {/* Chat Actions */}
            {messages.length > 0 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                  padding: "0.75rem",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    padding: "0.5rem 0.75rem",
                    backgroundColor: "transparent",
                    color: "#6b7280",
                    border: "1px solid #e2e8f0",
                    borderRadius: "6px",
                    fontSize: "12px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f1f5f9";
                    e.target.style.borderColor = "#4a90e2";
                    e.target.style.color = "#4a90e2";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.borderColor = "#e2e8f0";
                    e.target.style.color = "#6b7280";
                  }}
                >
                  <Download size={14} />
                  Export Chat
                </button>

                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    padding: "0.5rem 0.75rem",
                    backgroundColor: "transparent",
                    color: "#6b7280",
                    border: "1px solid #e2e8f0",
                    borderRadius: "6px",
                    fontSize: "12px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f1f5f9";
                    e.target.style.borderColor = "#4a90e2";
                    e.target.style.color = "#4a90e2";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.borderColor = "#e2e8f0";
                    e.target.style.color = "#6b7280";
                  }}
                >
                  <Share2 size={14} />
                  Share
                </button>

                <div style={{ flex: 1 }}></div>

                <div
                  style={{
                    fontSize: "12px",
                    color: "#9ca3af",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <Shield size={12} />
                  <span>Enterprise-grade security</span>
                </div>
              </div>
            )}

            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-end",
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ position: "relative" }}>
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Ask me anything about HR strategy, compensation, workforce planning..."
                    style={{
                      width: "100%",
                      minHeight: "44px",
                      maxHeight: "120px",
                      padding: "0.75rem 1rem 0.75rem 2.5rem",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      fontSize: "14px",
                      fontFamily: "inherit",
                      resize: "none",
                      outline: "none",
                      backgroundColor: "white",
                      transition: "all 0.2s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#4a90e2";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(74, 144, 226, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: "0.75rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#9ca3af",
                    }}
                  >
                    <MessageSquare size={16} />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginTop: "0.5rem",
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#10b981",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <span>AI Assistant Online</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <Globe size={12} />
                    <span>Global data access</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim() || isLoading}
                  style={{
                    padding: "0.75rem",
                    backgroundColor:
                      inputMessage.trim() && !isLoading ? "#4a90e2" : "#cbd5e1",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    cursor:
                      inputMessage.trim() && !isLoading
                        ? "pointer"
                        : "not-allowed",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "48px",
                    height: "44px",
                  }}
                >
                  <Send size={20} />
                </button>

                <button
                  onClick={() => setInputMessage("")}
                  disabled={!inputMessage.trim()}
                  style={{
                    padding: "0.5rem",
                    backgroundColor: inputMessage.trim()
                      ? "#f8fafc"
                      : "transparent",
                    color: inputMessage.trim() ? "#6b7280" : "#cbd5e1",
                    border: inputMessage.trim()
                      ? "1px solid #e2e8f0"
                      : "1px solid #cbd5e1",
                    borderRadius: "8px",
                    cursor: inputMessage.trim() ? "pointer" : "not-allowed",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "48px",
                    height: "32px",
                  }}
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Surveys = () => {
  const { currentClient } = useClient();

  return (
    <div>
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#1e293b",
              marginBottom: "0.5rem",
            }}
          >
            Employee Surveys & Feedback
          </h1>
          <p style={{ color: "#6b7280" }}>
            Comprehensive survey management and analytics for{" "}
            {currentClient.name}
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "white",
              color: "#6b7280",
              border: "1px solid #e2e8f0",
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#f8fafc";
              e.target.style.borderColor = "#4a90e2";
              e.target.style.color = "#4a90e2";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.borderColor = "#e2e8f0";
              e.target.style.color = "#6b7280";
            }}
          >
            <Download size={16} />
            Export Data
          </button>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "white",
              color: "#6b7280",
              border: "1px solid #e2e8f0",
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#f8fafc";
              e.target.style.borderColor = "#4a90e2";
              e.target.style.color = "#4a90e2";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.borderColor = "#e2e8f0";
              e.target.style.color = "#6b7280";
            }}
          >
            <Filter size={16} />
            Filter
          </button>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#4a90e2",
              color: "white",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#2c5aa0";
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#4a90e2";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1)";
            }}
          >
            <Plus size={18} />
            Create Survey
          </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            border: "1px solid #e2e8f0",
            padding: "1.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#1e293b",
              marginBottom: "1rem",
            }}
          >
            Employee Engagement Survey
          </h3>
          <p
            style={{ color: "#6b7280", marginBottom: "1rem", fontSize: "14px" }}
          >
            Annual engagement survey with 89% participation rate
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#10b981",
                }}
              >
                4.2/5
              </span>
              <div
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  marginTop: "0.25rem",
                }}
              >
                89% response rate • 2,847 responses
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#6b7280",
                  border: "1px solid #e2e8f0",
                  padding: "0.5rem",
                  borderRadius: "6px",
                  fontSize: "12px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#f8fafc";
                  e.target.style.borderColor = "#4a90e2";
                  e.target.style.color = "#4a90e2";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.borderColor = "#e2e8f0";
                  e.target.style.color = "#6b7280";
                }}
              >
                <Download size={14} />
              </button>
              <button
                style={{
                  backgroundColor: "#4a90e2",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#2c5aa0";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#4a90e2";
                }}
              >
                <Eye size={14} style={{ marginRight: "0.25rem" }} />
                View Results
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            border: "1px solid #e2e8f0",
            padding: "1.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#1e293b",
              marginBottom: "1rem",
            }}
          >
            Compensation Satisfaction
          </h3>
          <p
            style={{ color: "#6b7280", marginBottom: "1rem", fontSize: "14px" }}
          >
            Quarterly compensation feedback survey
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#f59e0b",
                }}
              >
                3.8/5
              </span>
              <div
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  marginTop: "0.25rem",
                }}
              >
                67% response rate • 1,923 responses
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#6b7280",
                  border: "1px solid #e2e8f0",
                  padding: "0.5rem",
                  borderRadius: "6px",
                  fontSize: "12px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#f8fafc";
                  e.target.style.borderColor = "#4a90e2";
                  e.target.style.color = "#4a90e2";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.borderColor = "#e2e8f0";
                  e.target.style.color = "#6b7280";
                }}
              >
                <Download size={14} />
              </button>
              <button
                style={{
                  backgroundColor: "#4a90e2",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#2c5aa0";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#4a90e2";
                }}
              >
                <Eye size={14} style={{ marginRight: "0.25rem" }} />
                View Results
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            border: "1px solid #e2e8f0",
            padding: "1.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#1e293b",
              marginBottom: "1rem",
            }}
          >
            Exit Interview Analysis
          </h3>
          <p
            style={{ color: "#6b7280", marginBottom: "1rem", fontSize: "14px" }}
          >
            Monthly exit interview insights and trends
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "24px", fontWeight: "bold", color: "#ef4444" }}
            >
              2.9/5
            </span>
            <button
              style={{
                backgroundColor: "#4a90e2",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              View Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Overview = () => {
  const { currentClient } = useClient();
  const { currentUser } = useUser();
  const [showCustomizeWidgets, setShowCustomizeWidgets] = useState(false);
  const [selectedWidgets, setSelectedWidgets] = useState({
    insights: true,
    features: true,
    playbook: true,
    quickActions: true,
    userProfile: true,
    compensationSatisfaction: true,
    marketIntelligence: true,
    recentActivity: true,
    collaborativeDashboard: true,
  });
  const [widgetLayout, setWidgetLayout] = useState("grid"); // grid, list, compact
  const [showCollaborativeDashboard, setShowCollaborativeDashboard] = useState(false);
  const [activeTeamFilter, setActiveTeamFilter] = useState("all"); // all, hr, finance, operations
  const [showSyncScheduler, setShowSyncScheduler] = useState(false);
  const [showModularModels, setShowModularModels] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);
  const [modelBuilderMode, setModelBuilderMode] = useState(false);

  // Available widgets for customization
  const availableWidgets = [
    {
      id: "insights",
      title: "Key Insights",
      description: "Compensation competitiveness, retention rates, and market position",
      icon: TrendingUp,
      category: "Analytics",
      size: "large",
    },
    {
      id: "features",
      title: "Core Features",
      description: "Job benchmarking, compensation intelligence, and skills analysis",
      icon: BarChart3,
      category: "Tools",
      size: "large",
    },
    {
      id: "playbook",
      title: "Mercer Playbook",
      description: "Strategic frameworks and best practices",
      icon: BookOpen,
      category: "Resources",
      size: "medium",
    },
    {
      id: "quickActions",
      title: "Quick Actions",
      description: "Frequently used tools and shortcuts",
      icon: Zap,
      category: "Actions",
      size: "medium",
    },
    {
      id: "userProfile",
      title: "User Profile",
      description: "Personal information and specializations",
      icon: User,
      category: "Profile",
      size: "small",
    },
    {
      id: "compensationSatisfaction",
      title: "Compensation Satisfaction",
      description: "Employee feedback and satisfaction metrics",
      icon: Star,
      category: "Feedback",
      size: "medium",
    },
    {
      id: "marketIntelligence",
      title: "Market Intelligence",
      description: "Real-time market trends and competitive analysis",
      icon: Globe,
      category: "Intelligence",
      size: "large",
    },
    {
      id: "recentActivity",
      title: "Recent Activity",
      description: "Latest reports, analyses, and updates",
      icon: Activity,
      category: "Activity",
      size: "medium",
    },
    {
      id: "collaborativeDashboard",
      title: "Collaborative Dashboard",
      description: "Cross-team communication and project alignment tools",
      icon: Users,
      category: "Collaboration",
      size: "large",
    },
    {
      id: "modularModels",
      title: "Modular Analysis Models",
      description: "Customizable analysis templates for different scenarios",
      icon: Settings,
      category: "Analytics",
      size: "large",
    },
  ];

  const toggleWidget = (widgetId) => {
    setSelectedWidgets(prev => ({
      ...prev,
      [widgetId]: !prev[widgetId]
    }));
  };

  const resetToDefault = () => {
    setSelectedWidgets({
      insights: true,
      features: true,
      playbook: true,
      quickActions: true,
      userProfile: true,
      compensationSatisfaction: true,
      marketIntelligence: true,
      recentActivity: true,
      collaborativeDashboard: true,
    });
    setWidgetLayout("grid");
  };

  // Collaborative Dashboard Data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior HR Strategy Consultant",
      department: "Human Capital",
      avatar: "SC",
      status: "online",
      lastActive: "2 minutes ago",
      currentTask: "Compensation analysis for Q4 planning",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Finance Director",
      department: "Finance",
      avatar: "MR",
      status: "online",
      lastActive: "5 minutes ago",
      currentTask: "Budget allocation for merit increases",
    },
    {
      id: 3,
      name: "Jennifer Kim",
      role: "Operations Manager",
      department: "Operations",
      avatar: "JK",
      status: "away",
      lastActive: "15 minutes ago",
      currentTask: "Workforce planning for new markets",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "HR Business Partner",
      department: "Human Capital",
      avatar: "DT",
      status: "online",
      lastActive: "1 minute ago",
      currentTask: "Skills gap analysis for engineering team",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Financial Analyst",
      department: "Finance",
      avatar: "LW",
      status: "offline",
      lastActive: "2 hours ago",
      currentTask: "ROI analysis for training programs",
    },
  ];

  const collaborativeProjects = [
    {
      id: 1,
      title: "Q4 Compensation Planning",
      status: "in-progress",
      priority: "high",
      teams: ["HR", "Finance"],
      progress: 75,
      dueDate: "2025-02-15",
      lastUpdate: "2 hours ago",
      blockers: ["Waiting for budget approval from Finance"],
      nextMilestone: "Finalize merit budget allocation",
    },
    {
      id: 2,
      title: "Workforce Expansion Strategy",
      status: "planning",
      priority: "medium",
      teams: ["HR", "Operations"],
      progress: 45,
      dueDate: "2025-03-01",
      lastUpdate: "1 day ago",
      blockers: ["Need headcount projections from Operations"],
      nextMilestone: "Complete market analysis",
    },
    {
      id: 3,
      title: "Skills Development Program",
      status: "in-progress",
      priority: "high",
      teams: ["HR", "Finance", "Operations"],
      progress: 60,
      dueDate: "2025-02-28",
      lastUpdate: "4 hours ago",
      blockers: ["Budget constraints need Finance review"],
      nextMilestone: "Approve training vendor contracts",
    },
  ];

  const teamUpdates = [
    {
      id: 1,
      team: "HR",
      update: "Completed compensation benchmarking for 15 key roles",
      timestamp: "2 hours ago",
      author: "Sarah Chen",
      type: "progress",
    },
    {
      id: 2,
      team: "Finance",
      update: "Budget allocation approved for Q4 merit increases",
      timestamp: "4 hours ago",
      author: "Michael Rodriguez",
      type: "decision",
    },
    {
      id: 3,
      team: "Operations",
      update: "Headcount projections updated for new market expansion",
      timestamp: "6 hours ago",
      author: "Jennifer Kim",
      type: "data",
    },
    {
      id: 4,
      team: "HR",
      update: "Skills gap analysis reveals 23% gap in AI/ML capabilities",
      timestamp: "1 day ago",
      author: "David Thompson",
      type: "insight",
    },
  ];

  const scheduledSyncs = [
    {
      id: 1,
      title: "Weekly HR-Finance Sync",
      frequency: "Weekly",
      nextMeeting: "2025-01-22T10:00:00Z",
      participants: ["Sarah Chen", "Michael Rodriguez", "David Thompson"],
      agenda: ["Budget updates", "Compensation planning", "ROI analysis"],
    },
    {
      id: 2,
      title: "Monthly Cross-Team Review",
      frequency: "Monthly",
      nextMeeting: "2025-01-25T14:00:00Z",
      participants: ["All team leads"],
      agenda: ["Project status", "Resource allocation", "Strategic alignment"],
    },
    {
      id: 3,
      title: "Quarterly Planning Session",
      frequency: "Quarterly",
      nextMeeting: "2025-02-01T09:00:00Z",
      participants: ["All stakeholders"],
      agenda: ["Q2 planning", "Budget review", "Strategic initiatives"],
    },
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Job Benchmarking",
      description:
        "Global, regional, and industry-specific compensation data with Mercer standards",
      action: "Benchmark Now",
      color: "#4a90e2",
    },
    {
      icon: DollarSign,
      title: "Compensation Intelligence",
      description: "Real-time salary insights and market positioning analysis",
      action: "Analyze Compensation",
      color: "#50c878",
    },
    {
      icon: Brain,
      title: "Skills Gap Analysis",
      description:
        "Identify future workforce needs and reskilling opportunities",
      action: "Analyze Skills",
      color: "#9370db",
    },
    {
      icon: FileText,
      title: "Job Descriptions",
      description: "Market-aligned, structured job descriptions ready for use",
      action: "Generate JD",
      color: "#ff8c00",
    },
    {
      icon: Users,
      title: "Workforce Planning",
      description:
        "Predictive insights on attrition risk and talent availability",
      action: "Plan Workforce",
      color: "#ffd700",
    },
    {
      icon: TrendingUp,
      title: "Market Trends",
      description: "Industry insights and emerging role recommendations",
      action: "View Trends",
      color: "#708090",
    },
  ];

  const playbookResources = [
    {
      icon: BookOpen,
      title: "Mercer Playbook",
      description:
        "Strategic HR frameworks and best practices for modern organizations",
      action: "Open Playbook",
      color: "#4a90e2",
      badge: "NEW",
      category: "Strategy",
    },
    {
      icon: Award,
      title: "Industry Insights",
      description: "Latest research and trends across industries and regions",
      action: "Explore Insights",
      color: "#50c878",
      category: "Research",
    },
    {
      icon: Target,
      title: "Action Templates",
      description: "Ready-to-use templates for common HR initiatives",
      action: "Browse Templates",
      color: "#9370db",
      category: "Templates",
    },
    {
      icon: Lightbulb,
      title: "Quick Wins",
      description: "Immediate actions to improve your HR strategy",
      action: "Get Started",
      color: "#ff8c00",
      category: "Actions",
    },
  ];

  const insights = [
    {
      title: "Compensation Competitiveness",
      value: "92%",
      subtitle: "Above Market Median",
      change: "+3.2% vs last quarter",
      trend: "up",
      color: "#4a90e2",
      icon: TrendingUp,
    },
    {
      title: "Employee Retention Rate",
      value: "94.2%",
      subtitle: "Industry Leading",
      change: "+1.8% vs last year",
      trend: "up",
      color: "#10b981",
      icon: Users,
    },
    {
      title: "Skills Gap Index",
      value: "7.2/10",
      subtitle: "Low Risk",
      change: "Improved from 6.1",
      trend: "up",
      color: "#50c878",
      icon: Target,
    },
    {
      title: "Market Position",
      value: "Top 15%",
      subtitle: "Premium Employer",
      change: "Moved up 2 positions",
      trend: "up",
      color: "#f59e0b",
      icon: Award,
    },
  ];

  const quickActions = [
    {
      icon: BarChart3,
      title: "Salary Benchmarking",
      description: "Compare compensation against market data",
      action: "Run Analysis",
      color: "#4a90e2",
      urgent: false,
    },
    {
      icon: Brain,
      title: "Skills Assessment",
      description: "Identify critical workforce gaps",
      action: "Start Assessment",
      color: "#9370db",
      urgent: true,
    },
    {
      icon: FileText,
      title: "Job Description Review",
      description: "Optimize role requirements",
      action: "Review Now",
      color: "#ff8c00",
      urgent: false,
    },
    {
      icon: Users,
      title: "Workforce Planning",
      description: "Plan for future growth",
      action: "Plan Workforce",
      color: "#ffd700",
      urgent: false,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "analysis",
      title: "Compensation analysis completed",
      description: "Technology roles benchmarked against market data",
      time: "2 hours ago",
      status: "completed",
      icon: CheckCircle,
    },
    {
      id: 2,
      type: "survey",
      title: "Employee engagement survey launched",
      description: "Response rate currently at 67%",
      time: "1 day ago",
      status: "active",
      icon: Activity,
    },
    {
      id: 3,
      type: "report",
      title: "Q4 workforce report generated",
      description: "Ready for executive review",
      time: "2 days ago",
      status: "completed",
      icon: FileText,
    },
    {
      id: 4,
      type: "alert",
      title: "Skills gap identified",
      description: "Data Science roles need attention",
      time: "3 days ago",
      status: "pending",
      icon: AlertCircle,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#1e293b",
            marginBottom: "1rem",
          }}
        >
          HR Strategy Dashboard
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "#6b7280",
            maxWidth: "768px",
            margin: "0 auto",
          }}
        >
          Comprehensive workforce insights and strategic recommendations powered
          by Mercer's global expertise.
        </p>
      </div>

      {/* Customize Widgets Panel */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
          padding: "1rem 0",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#1e293b",
              margin: 0,
            }}
          >
            Dashboard Overview
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              margin: "0.25rem 0 0 0",
            }}
          >
            Customize your dashboard by selecting which widgets to display
          </p>
        </div>
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {/* Layout Selector */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <label style={{ fontSize: "14px", color: "#374151", fontWeight: "500" }}>
              Layout:
            </label>
            <select
              value={widgetLayout}
              onChange={(e) => setWidgetLayout(e.target.value)}
              style={{
                padding: "0.5rem",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "14px",
                backgroundColor: "white",
              }}
            >
              <option value="grid">Grid View</option>
              <option value="list">List View</option>
              <option value="compact">Compact View</option>
            </select>
          </div>

          {/* Customize Button */}
          <button
            onClick={() => setShowCustomizeWidgets(!showCustomizeWidgets)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: showCustomizeWidgets ? "#4a90e2" : "white",
              color: showCustomizeWidgets ? "white" : "#4a90e2",
              border: "1px solid #4a90e2",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <Settings size={16} />
            {showCustomizeWidgets ? "Hide Customization" : "Customize Dashboard"}
          </button>
        </div>
      </div>

      {/* Widget Customization Panel */}
      {showCustomizeWidgets && (
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            border: "1px solid #e2e8f0",
            padding: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1e293b",
                margin: 0,
              }}
            >
              Customize Dashboard Widgets
            </h3>
            <button
              onClick={resetToDefault}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "transparent",
                color: "#6b7280",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "12px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Reset to Default
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
            }}
          >
            {availableWidgets.map((widget) => {
              const Icon = widget.icon;
              return (
                <div
                  key={widget.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    backgroundColor: selectedWidgets[widget.id] ? "#f0f9ff" : "#f8fafc",
                    border: selectedWidgets[widget.id] ? "2px solid #4a90e2" : "1px solid #e2e8f0",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => toggleWidget(widget.id)}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: selectedWidgets[widget.id] ? "#4a90e2" : "#6b7280",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#1e293b",
                          margin: 0,
                        }}
                      >
                        {widget.title}
                      </h4>
                      <span
                        style={{
                          fontSize: "10px",
                          padding: "0.125rem 0.5rem",
                          backgroundColor: "#e2e8f0",
                          color: "#6b7280",
                          borderRadius: "12px",
                          textTransform: "uppercase",
                          fontWeight: "500",
                        }}
                      >
                        {widget.size}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#6b7280",
                        margin: 0,
                      }}
                    >
                      {widget.description}
                    </p>
                    <span
                      style={{
                        fontSize: "10px",
                        color: "#4a90e2",
                        fontWeight: "500",
                      }}
                    >
                      {widget.category}
                    </span>
                  </div>

                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "4px",
                      border: "2px solid #d1d5db",
                      backgroundColor: selectedWidgets[widget.id] ? "#4a90e2" : "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {selectedWidgets[widget.id] && (
                      <CheckCircle size={12} color="white" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              backgroundColor: "#f8fafc",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <Lightbulb size={16} color="#f59e0b" />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#1e293b",
                }}
              >
                Pro Tip
              </span>
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "#6b7280",
                margin: 0,
              }}
            >
              You can drag and drop widgets to reorder them, or change the layout to better suit your workflow. 
              Your preferences will be saved automatically.
            </p>
          </div>
        </div>
      )}

      {/* Enhanced Key Insights */}
      {selectedWidgets.insights && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: widgetLayout === "compact" 
              ? "repeat(auto-fit, minmax(200px, 1fr))" 
              : widgetLayout === "list"
              ? "1fr"
              : "repeat(auto-fit, minmax(280px, 1fr))",
            gap: widgetLayout === "compact" ? "1rem" : "1.5rem",
            marginBottom: "3rem",
          }}
        >
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(96, 165, 250, 0.1)",
                border: "1px solid rgba(96, 165, 250, 0.1)",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-6px)";
                e.target.style.boxShadow = "0 16px 48px rgba(96, 165, 250, 0.2)";
                e.target.style.borderColor = "rgba(96, 165, 250, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 32px rgba(96, 165, 250, 0.1)";
                e.target.style.borderColor = "rgba(96, 165, 250, 0.1)";
              }}
            >
              {/* AI Glow Effect */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: `linear-gradient(90deg, ${insight.color} 0%, ${insight.color}80 100%)`,
                  borderRadius: "20px 20px 0 0",
                }}
              />
              {/* AI Pattern Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "80px",
                  height: "80px",
                  background: `radial-gradient(circle, ${insight.color}15 0%, transparent 70%)`,
                  borderRadius: "0 20px 0 100%",
                }}
              />
              {/* Background Pattern */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "80px",
                  height: "80px",
                  backgroundColor: insight.color,
                  borderRadius: "50%",
                  opacity: 0.1,
                }}
              ></div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      background: `linear-gradient(135deg, ${insight.color} 0%, ${insight.color}CC 100%)`,
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 4px 12px ${insight.color}40`,
                      position: "relative",
                    }}
                  >
                    <Icon style={{ color: "white" }} size={28} />
                    <div
                      style={{
                        position: "absolute",
                        top: "-4px",
                        right: "-4px",
                        width: "16px",
                        height: "16px",
                        backgroundColor: "#10b981",
                        borderRadius: "50%",
                        border: "2px solid white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          backgroundColor: "white",
                          borderRadius: "50%",
                          animation: "pulse 2s infinite",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    {insight.trend === "up" ? (
                      <ArrowUpRight size={16} style={{ color: "#10b981" }} />
                    ) : insight.trend === "down" ? (
                      <ArrowDownRight size={16} style={{ color: "#ef4444" }} />
                    ) : (
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "#6b7280",
                          borderRadius: "50%",
                        }}
                      ></div>
                    )}
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#1e293b",
                    marginBottom: "0.5rem",
                  }}
                >
                  {insight.value}
                </h3>
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "0.25rem",
                  }}
                >
                  {insight.title}
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    marginBottom: "0.5rem",
                  }}
                >
                  {insight.subtitle}
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    padding: "0.25rem 0.75rem",
                    backgroundColor:
                      insight.trend === "up"
                        ? "#f0fdf4"
                        : insight.trend === "down"
                        ? "#fef2f2"
                        : "#f8fafc",
                    color:
                      insight.trend === "up"
                        ? "#166534"
                        : insight.trend === "down"
                        ? "#dc2626"
                        : "#6b7280",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  {insight.trend === "up" ? (
                    <TrendingUp size={12} />
                  ) : insight.trend === "down" ? (
                    <TrendingDown size={12} />
                  ) : null}
                  {insight.change}
                </div>
              </div>
            </motion.div>
          );
        })}
        </div>
      )}

      {/* Quick Actions */}
      {selectedWidgets.quickActions && (
      <div style={{ marginBottom: "3rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#1e293b",
              margin: 0,
            }}
          >
            Quick Actions
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            <Zap size={16} />
            <span>Popular workflows</span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
          }}
        >
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  border: action.urgent
                    ? "2px solid #ef4444"
                    : "1px solid #e2e8f0",
                  padding: "1.5rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#f8fafc";
                  e.target.style.borderColor = action.color;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "white";
                  e.target.style.borderColor = action.urgent
                    ? "#ef4444"
                    : "#e2e8f0";
                }}
              >
                {action.urgent && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-6px",
                      right: "1rem",
                      backgroundColor: "#ef4444",
                      color: "white",
                      fontSize: "10px",
                      fontWeight: "bold",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "4px",
                    }}
                  >
                    URGENT
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: action.color,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon style={{ color: "white" }} size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#1e293b",
                        margin: "0 0 0.25rem 0",
                      }}
                    >
                      {action.title}
                    </h3>
                    <p
                      style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}
                    >
                      {action.description}
                    </p>
                  </div>
                </div>

                <button
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    backgroundColor: action.color,
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor =
                      action.color === "#4a90e2"
                        ? "#2c5aa0"
                        : action.color === "#9370db"
                        ? "#7c3aed"
                        : action.color === "#ff8c00"
                        ? "#ea580c"
                        : action.color === "#ffd700"
                        ? "#eab308"
                        : action.color;
                    e.target.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = action.color;
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  {action.action}
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
      )}

      {/* Features Grid */}
      {selectedWidgets.features && (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                border: "1px solid #e2e8f0",
                padding: "1.5rem",
                cursor: "pointer",
                transition: "box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.boxShadow =
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)")
              }
              onMouseLeave={(e) =>
                (e.target.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1)")
              }
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: feature.color,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <Icon style={{ color: "white" }} size={24} />
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#1e293b",
                  marginBottom: "0.5rem",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  color: "#6b7280",
                  marginBottom: "1rem",
                  fontSize: "14px",
                }}
              >
                {feature.description}
              </p>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "white",
                  color: "#4a90e2",
                  border: "1px solid #4a90e2",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {feature.action}
                <ChevronRight size={16} />
              </button>
            </motion.div>
          );
        })}
      </div>
      )}

      {/* User Activity & Recent Insights */}
      {selectedWidgets.userProfile && (
      <div style={{ marginTop: "3rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* User Activity */}
          <div>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1e293b",
                marginBottom: "1rem",
              }}
            >
              Your Activity
            </h2>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                border: "1px solid #e2e8f0",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundImage: `url('${currentUser.profileImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: "2px solid #4a90e2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* Fallback initials if image fails to load */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      backgroundColor: "#4a90e2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "white",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    onError={(e) => (e.target.style.opacity = 1)}
                  >
                    {currentUser.avatar}
                  </div>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#1e293b",
                      margin: 0,
                    }}
                  >
                    {currentUser.name}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
                    {currentUser.role} • {currentUser.department}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                {currentUser.specializations.map((spec, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: "12px",
                      padding: "0.25rem 0.5rem",
                      backgroundColor: "#f1f5f9",
                      color: "#4a90e2",
                      borderRadius: "4px",
                      fontWeight: "500",
                    }}
                  >
                    {spec}
                  </span>
                ))}
              </div>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                <p style={{ margin: "0.25rem 0" }}>
                  📍 Based in {currentUser.location}
                </p>
                <p style={{ margin: "0.25rem 0" }}>
                  ⏰ {currentUser.experience} of experience
                </p>
                <p style={{ margin: "0.25rem 0" }}>
                  🔐 Full access to all client data
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1e293b",
                marginBottom: "1rem",
              }}
            >
              Quick Actions
            </h2>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                border: "1px solid #e2e8f0",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <BarChart3 size={20} style={{ color: "#4a90e2" }} />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#374151",
                    }}
                  >
                    Run New Benchmark
                  </span>
                </button>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <ClipboardList size={20} style={{ color: "#4a90e2" }} />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#374151",
                    }}
                  >
                    Create Survey
                  </span>
                </button>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <FileText size={20} style={{ color: "#4a90e2" }} />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#374151",
                    }}
                  >
                    Generate Report
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#1e293b",
            marginBottom: "1.5rem",
          }}
        >
          Recent Insights
        </h2>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            border: "1px solid #e2e8f0",
            padding: "1.5rem",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
                backgroundColor: "#f1f5f9",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#4a90e2",
                  borderRadius: "50%",
                }}
              ></div>
              <div>
                <p style={{ fontWeight: "500", margin: 0 }}>
                  Senior Cloud Architect compensation increased 12% in Singapore
                </p>
                <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
                  Updated 2 hours ago
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
                backgroundColor: "#f1f5f9",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#50c878",
                  borderRadius: "50%",
                }}
              ></div>
              <div>
                <p style={{ fontWeight: "500", margin: 0 }}>
                  AI Strategy roles showing 45% growth in healthcare sector
                </p>
                <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
                  Updated 4 hours ago
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
                backgroundColor: "#f1f5f9",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#ff8c00",
                  borderRadius: "50%",
                }}
              ></div>
              <div>
                <p style={{ fontWeight: "500", margin: 0 }}>
                  High attrition risk detected in EMEA tech roles
                </p>
                <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
                  Updated 6 hours ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Playbook Resources */}
      {selectedWidgets.playbook && (
        <div style={{ marginTop: "3rem" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#1e293b",
              marginBottom: "1.5rem",
            }}
          >
            Mercer Playbook & Resources
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {playbookResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                    border: "1px solid #e2e8f0",
                    padding: "1.5rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {resource.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        backgroundColor: "#f59e0b",
                        color: "white",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "12px",
                        fontSize: "10px",
                        fontWeight: "600",
                        textTransform: "uppercase",
                      }}
                    >
                      {resource.badge}
                    </div>
                  )}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: resource.color,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <Icon style={{ color: "white" }} size={24} />
                  </div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#1e293b",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {resource.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#6b7280",
                      marginBottom: "1rem",
                      lineHeight: "1.5",
                    }}
                  >
                    {resource.description}
                  </p>
                  <button
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem 1.5rem",
                      backgroundColor: "white",
                      color: resource.color,
                      border: `1px solid ${resource.color}`,
                      borderRadius: "8px",
                      fontWeight: "500",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {resource.action}
                    <ChevronRight size={16} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Recent Activity */}
      {selectedWidgets.recentActivity && (
        <div style={{ marginTop: "3rem" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#1e293b",
              marginBottom: "1.5rem",
            }}
          >
            Recent Activity
          </h2>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              border: "1px solid #e2e8f0",
              padding: "1.5rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {recentActivity.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={activity.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem",
                      backgroundColor: "#f8fafc",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: 
                          activity.status === "completed" ? "#10b981" :
                          activity.status === "active" ? "#4a90e2" : "#f59e0b",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#1e293b",
                          margin: "0 0 0.25rem 0",
                        }}
                      >
                        {activity.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#6b7280",
                          margin: "0 0 0.25rem 0",
                        }}
                      >
                        {activity.description}
                      </p>
                      <span
                        style={{
                          fontSize: "10px",
                          color: "#6b7280",
                          textTransform: "uppercase",
                          fontWeight: "500",
                        }}
                      >
                        {activity.time}
                      </span>
                    </div>
                    <div
                      style={{
                        padding: "0.25rem 0.75rem",
                        backgroundColor: 
                          activity.status === "completed" ? "#f0fdf4" :
                          activity.status === "active" ? "#eff6ff" : "#fffbeb",
                        color: 
                          activity.status === "completed" ? "#166534" :
                          activity.status === "active" ? "#1e40af" : "#92400e",
                        borderRadius: "12px",
                        fontSize: "10px",
                        fontWeight: "600",
                        textTransform: "uppercase",
                      }}
                    >
                      {activity.status}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <UserProvider>
      <ClientProvider>
        <AppContent />
      </ClientProvider>
    </UserProvider>
  );
};

export default App;
