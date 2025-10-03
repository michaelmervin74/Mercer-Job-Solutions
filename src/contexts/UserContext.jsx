import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// Define available personas
const personas = {
  sarah: {
    id: "mercer_consultant_001",
    name: "Sarah Chen",
    role: "CHRO Advisor",
    title: "Senior HR Strategy Consultant",
    email: "sarah.chen@mercer.com",
    avatar: "SC",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    department: "Human Capital",
    location: "Singapore",
    experience: "12 years",
    specializations: [
      "Compensation Strategy",
      "Workforce Planning",
      "Talent Analytics",
    ],
    lastLogin: "2024-01-15T08:30:00Z",
    permissions: [
      "view_all_clients",
      "edit_benchmarks",
      "create_surveys",
      "export_reports",
    ],
    clientAccess: [
      "microsoft",
      "jpmorgan",
      "pfizer",
      "walmart",
      "samsung",
      "unilever",
    ],
  },
  james: {
    id: "mercer_analyst_002",
    name: "James Patel",
    role: "Senior Compensation Analyst",
    title: "Senior Compensation Analyst",
    email: "james.patel@mercer.com",
    avatar: "JP",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    department: "Total Rewards Advisory",
    location: "Chicago, IL",
    experience: "5-8 years",
    specializations: [
      "Pay Architecture & Salary Structures",
      "Annual Comp Planning & Budgeting",
      "Sales Comp Design",
      "M&A Due Diligence",
    ],
    lastLogin: "2024-01-15T09:15:00Z",
    permissions: [
      "view_all_clients",
      "edit_benchmarks",
      "create_surveys",
      "export_reports",
      "model_scenarios",
      "age_compensation_data",
    ],
    clientAccess: [
      "microsoft",
      "jpmorgan",
      "pfizer",
      "walmart",
      "samsung",
      "unilever",
    ],
  },
};

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(personas.sarah);
  const [activePersona, setActivePersona] = useState("sarah");

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = (credentials) => {
    // Simulate login process
    setIsLoggedIn(true);
    return Promise.resolve(currentUser);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const updateProfile = (updates) => {
    setCurrentUser((prev) => ({ ...prev, ...updates }));
  };

  const switchPersona = (personaKey) => {
    if (personas[personaKey]) {
      setCurrentUser(personas[personaKey]);
      setActivePersona(personaKey);
    }
  };

  const getAvailablePersonas = () => {
    return Object.keys(personas).map(key => ({
      key,
      name: personas[key].name,
      role: personas[key].role,
      avatar: personas[key].avatar,
      profileImage: personas[key].profileImage,
    }));
  };

  const hasPermission = (permission) => {
    return currentUser?.permissions?.includes(permission) || false;
  };

  const hasClientAccess = (clientId) => {
    return currentUser?.clientAccess?.includes(clientId) || false;
  };

  const value = {
    currentUser,
    activePersona,
    isLoggedIn,
    login,
    logout,
    updateProfile,
    switchPersona,
    getAvailablePersonas,
    hasPermission,
    hasClientAccess,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
