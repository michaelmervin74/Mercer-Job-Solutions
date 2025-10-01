import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    id: "mercer_consultant_001",
    name: "Sarah Chen",
    // title: 'Senior HR Strategy Consultant',
    role: "CHRO Advisor",
    email: "sarah.chen@mercer.com",
    avatar: "SC",
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
  });

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

  const hasPermission = (permission) => {
    return currentUser?.permissions?.includes(permission) || false;
  };

  const hasClientAccess = (clientId) => {
    return currentUser?.clientAccess?.includes(clientId) || false;
  };

  const value = {
    currentUser,
    isLoggedIn,
    login,
    logout,
    updateProfile,
    hasPermission,
    hasClientAccess,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
