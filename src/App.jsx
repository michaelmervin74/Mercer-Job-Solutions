import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
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
  ExternalLink
} from 'lucide-react'
import JobBenchmarking from './components/JobBenchmarking'
import CompensationIntelligence from './components/CompensationIntelligence'
import SkillsGapAnalysis from './components/SkillsGapAnalysis'
import JobDescriptionGenerator from './components/JobDescriptionGenerator'
import WorkforcePlanning from './components/WorkforcePlanning'
import { ClientProvider, useClient } from './contexts/ClientContext'
import { UserProvider, useUser } from './contexts/UserContext'

const AppContent = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const { currentClient, clients, setSelectedClient } = useClient()
  const { currentUser, logout } = useUser()
  const userMenuRef = useRef(null)
  const notificationRef = useRef(null)

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false)
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'benchmarking', label: 'Job Benchmarking', icon: BarChart3 },
    { id: 'compensation', label: 'Compensation Intelligence', icon: DollarSign },
    { id: 'skills', label: 'Skills Gap Analysis', icon: Brain },
    { id: 'job-descriptions', label: 'Job Descriptions', icon: FileText },
    { id: 'workforce', label: 'Workforce Planning', icon: Users },
    { id: 'surveys', label: 'Surveys', icon: ClipboardList },
    { id: 'chatbot', label: 'AI Assistant', icon: MessageSquare }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'benchmarking':
        return <JobBenchmarking />
      case 'compensation':
        return <CompensationIntelligence />
      case 'skills':
        return <SkillsGapAnalysis />
      case 'job-descriptions':
        return <JobDescriptionGenerator />
      case 'workforce':
        return <WorkforcePlanning />
      case 'surveys':
        return <Surveys />
      case 'chatbot':
        return <Chatbot />
      default:
        return <Overview />
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: "'Source Sans Pro', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif" }}>
      {/* Header */}
      <header style={{ backgroundColor: '#2c5aa0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderBottom: '1px solid #1e40af' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div 
                onClick={() => setActiveTab('overview')}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                <img 
                  src="/mercer-logo-new.jpg" 
                  alt="Mercer Logo" 
                  style={{ 
                    height: '60px', 
                    width: 'auto',
                    objectFit: 'contain'
                  }}
                />
                <div>
                  <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', margin: 0 }}>Job Solutions</h1>
                  <p style={{ fontSize: '16px', color: '#e2e8f0', margin: 0 }}>HR Strategy Copilot</p>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Notifications */}
              <div ref={notificationRef} style={{ position: 'relative' }}>
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  style={{
                    position: 'relative',
                    padding: '0.5rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f1f5f9'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <Bell size={20} style={{ color: 'white' }} />
                  <div style={{
                    position: 'absolute',
                    top: '0.25rem',
                    right: '0.25rem',
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#ef4444',
                    borderRadius: '50%',
                    border: '2px solid white'
                  }}></div>
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '0.5rem',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e2e8f0',
                    minWidth: '320px',
                    maxHeight: '400px',
                    overflowY: 'auto',
                    zIndex: 1000
                  }}>
                    <div style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: 0 }}>
                        Notifications
                      </h3>
                    </div>
                    
                    <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                      <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #f1f5f9' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: '#4a90e2',
                            borderRadius: '50%',
                            marginTop: '0.5rem',
                            flexShrink: 0
                          }}></div>
                          <div style={{ flex: 1 }}>
                            <p style={{ fontSize: '14px', fontWeight: '500', color: '#1e293b', margin: '0 0 0.25rem 0' }}>
                              New compensation data available
                            </p>
                            <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>
                              Updated salary benchmarks for Technology roles
                            </p>
                            <p style={{ fontSize: '11px', color: '#9ca3af', margin: '0.25rem 0 0 0' }}>
                              2 minutes ago
                            </p>
                          </div>
                        </div>
                      </div>

                      <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #f1f5f9' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: '#10b981',
                            borderRadius: '50%',
                            marginTop: '0.5rem',
                            flexShrink: 0
                          }}></div>
                          <div style={{ flex: 1 }}>
                            <p style={{ fontSize: '14px', fontWeight: '500', color: '#1e293b', margin: '0 0 0.25rem 0' }}>
                              Survey response rate: 89%
                            </p>
                            <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>
                              Employee engagement survey closing soon
                            </p>
                            <p style={{ fontSize: '11px', color: '#9ca3af', margin: '0.25rem 0 0 0' }}>
                              1 hour ago
                            </p>
                          </div>
                        </div>
                      </div>

                      <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #f1f5f9' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: '#f59e0b',
                            borderRadius: '50%',
                            marginTop: '0.5rem',
                            flexShrink: 0
                          }}></div>
                          <div style={{ flex: 1 }}>
                            <p style={{ fontSize: '14px', fontWeight: '500', color: '#1e293b', margin: '0 0 0.25rem 0' }}>
                              Skills gap analysis complete
                            </p>
                            <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>
                              Review recommendations for Data Science team
                            </p>
                            <p style={{ fontSize: '11px', color: '#9ca3af', margin: '0.25rem 0 0 0' }}>
                              3 hours ago
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div style={{ padding: '0.75rem 1rem', borderTop: '1px solid #f1f5f9' }}>
                      <button style={{
                        width: '100%',
                        padding: '0.5rem',
                        backgroundColor: 'transparent',
                        color: '#4a90e2',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f1f5f9'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Client Selector */}
              <div style={{ position: 'relative' }}>
                <select
                  value={currentClient.id}
                  onChange={(e) => setSelectedClient(e.target.value)}
                  style={{
                    padding: '0.5rem 2rem 0.5rem 0.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'white',
                    cursor: 'pointer',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em'
                  }}
                >
                  {clients.map(client => (
                    <option key={client.id} value={client.id}>
                      {client.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* User Profile - Prominent Display */}
              <div 
                onClick={() => setShowUserMenu(!showUserMenu)}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  padding: '0.5rem 1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundImage: `url('https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  position: 'relative'
                }}>
                  {/* Fallback initials if image fails to load */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: '#2c5aa0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'white',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                    onError={(e) => e.target.style.opacity = 1}
                  >
                    {currentUser?.name?.split(' ').map(n => n[0]).join('') || 'SC'}
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: 'white', margin: 0 }}>
                      {currentUser?.name || 'Dr. Sarah Chen'}
                    </p>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#10b981',
                      borderRadius: '50%'
                    }}></div>
                  </div>
                  <p style={{ fontSize: '12px', color: '#e2e8f0', margin: 0 }}>
                    {currentUser?.title || 'Senior HR Strategy Consultant'}
                  </p>
                </div>
                <ChevronDown size={16} style={{ color: 'white' }} />
              </div>
              
              {/* User Profile Section */}
              <div ref={userMenuRef} style={{ position: 'relative' }}>

                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '0.5rem',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e2e8f0',
                    minWidth: '280px',
                    zIndex: 1000
                  }}>
                    {/* User Info Header */}
                    <div style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          backgroundImage: `url('https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          border: '3px solid #4a90e2',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '18px',
                          position: 'relative'
                        }}>
                          {/* Fallback initials if image fails to load */}
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            backgroundColor: '#4a90e2',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'white',
                            opacity: 0,
                            transition: 'opacity 0.3s ease'
                          }}
                            onError={(e) => e.target.style.opacity = 1}
                          >
                            {currentUser?.name?.split(' ').map(n => n[0]).join('') || 'SC'}
                          </div>
                        </div>
                        <div>
                          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: 0 }}>
                            {currentUser.name}
                          </h3>
                          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
                            {currentUser.title}
                          </p>
                        </div>
                      </div>
                      <div style={{ fontSize: '12px', color: '#6b7280' }}>
                        <p style={{ margin: '0.25rem 0' }}>📍 {currentUser.location}</p>
                        <p style={{ margin: '0.25rem 0' }}>🏢 {currentUser.department}</p>
                        <p style={{ margin: '0.25rem 0' }}>⏰ {currentUser.experience} experience</p>
                      </div>
                    </div>

                    {/* User Details */}
                    <div style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>
                        Specializations
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                        {currentUser.specializations.map((spec, index) => (
                          <span key={index} style={{
                            fontSize: '12px',
                            padding: '0.25rem 0.5rem',
                            backgroundColor: '#f1f5f9',
                            color: '#4a90e2',
                            borderRadius: '4px',
                            fontWeight: '500'
                          }}>
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Permissions */}
                    <div style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>
                        Access Level
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#10b981',
                          borderRadius: '50%'
                        }}></div>
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>
                          {currentUser.role} • Full Access
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div style={{ padding: '0.5rem' }}>
                      <button
                        onClick={() => {
                          setShowUserMenu(false)
                          // Handle profile edit
                        }}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          backgroundColor: 'transparent',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '14px',
                          color: '#374151',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'background-color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f1f5f9'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        👤 Edit Profile
                      </button>
                      <button
                        onClick={() => {
                          setShowUserMenu(false)
                          // Handle settings
                        }}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          backgroundColor: 'transparent',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '14px',
                          color: '#374151',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'background-color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f1f5f9'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        ⚙️ Settings
                      </button>
                      <button
                        onClick={() => {
                          logout()
                          setShowUserMenu(false)
                        }}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          backgroundColor: 'transparent',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '14px',
                          color: '#ef4444',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'background-color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#fef2f2'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        🚪 Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Client Info */}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{ backgroundColor: '#1e40af', borderBottom: '1px solid #1e3a8a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto' }}>
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 0.5rem',
                    borderBottom: activeTab === tab.id ? '2px solid #60a5fa' : '2px solid transparent',
                    color: activeTab === tab.id ? '#60a5fa' : '#e2e8f0',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                  onMouseLeave={(e) => e.target.style.color = activeTab === tab.id ? '#60a5fa' : '#e2e8f0'}
                >
                  <Icon size={18} />
                  <span style={{ fontWeight: '500' }}>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </main>
    </div>
  )
}

const Chatbot = () => {
  const { currentClient } = useClient()
  const { currentUser } = useUser()
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPrompt, setSelectedPrompt] = useState(null)
  const [conversationHistory, setConversationHistory] = useState([])
  const [showClearConfirm, setShowClearConfirm] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage = {
        id: Date.now(),
        text: `Hello ${currentUser.name}! I'm your AI HR Strategy Assistant powered by Mercer's global expertise. I can help you with:

• **Strategic Planning**: Workforce planning, organizational design, and succession strategies
• **Compensation Analysis**: Market data, salary benchmarking, and total rewards optimization
• **Talent Management**: Skills gap analysis, training recommendations, and career frameworks
• **Data & Insights**: Real-time analytics from 156 countries and 25+ industries

I'm currently analyzing data for ${currentClient.name} in the ${currentClient.industry} sector. How can I assist you today?`,
        sender: 'bot',
        timestamp: new Date(),
        type: 'welcome'
      }
      setMessages([welcomeMessage])
    }
  }, [])

  const suggestedPrompts = [
    {
      id: 1,
      title: "Executive Compensation Strategy",
      prompt: `Analyze executive compensation trends for ${currentClient.industry} industry leaders. Provide a comprehensive report including base salary, bonus structures, equity packages, and long-term incentives aligned with market benchmarks.`,
      category: "Compensation",
      complexity: "Advanced"
    },
    {
      id: 2,
      title: "AI/ML Skills Gap Analysis",
      prompt: `Conduct a detailed skills gap analysis for AI and Machine Learning capabilities across our ${currentClient.employees.toLocaleString()}-person workforce. Include current state assessment, future needs projection, and training roadmap with ROI calculations.`,
      category: "Skills",
      complexity: "Advanced"
    },
    {
      id: 3,
      title: "Global Workforce Planning",
      prompt: `Develop a 3-year global workforce planning strategy for ${currentClient.name}, considering regional market conditions, talent availability, cost optimization, and expansion into emerging markets.`,
      category: "Planning",
      complexity: "Strategic"
    },
    {
      id: 4,
      title: "Diversity & Inclusion Metrics",
      prompt: "Analyze our current D&I metrics, benchmark against industry standards, and create a comprehensive action plan to improve representation across all organizational levels with measurable KPIs.",
      category: "D&I",
      complexity: "Strategic"
    },
    {
      id: 5,
      title: "Total Rewards Optimization",
      prompt: "Design an optimized total rewards package that balances competitive compensation, benefits, wellness programs, and work-life balance. Include cost analysis and employee value proposition.",
      category: "Rewards",
      complexity: "Advanced"
    },
    {
      id: 6,
      title: "Remote Work Policy",
      prompt: "Create a comprehensive remote work policy framework including compensation adjustments for different geographic locations, productivity metrics, and collaboration tools recommendations.",
      category: "Policy",
      complexity: "Intermediate"
    },
    {
      id: 7,
      title: "Succession Planning",
      prompt: "Develop a robust succession planning framework for critical leadership positions, including identification criteria, development programs, and timeline for implementation.",
      category: "Leadership",
      complexity: "Strategic"
    },
    {
      id: 8,
      title: "Market Intelligence Report",
      prompt: `Generate a comprehensive market intelligence report for the ${currentClient.industry} sector, including salary trends, talent availability, competitive analysis, and emerging role requirements.`,
      category: "Intelligence",
      complexity: "Advanced"
    }
  ]

  const handleSendMessage = async (message = inputMessage) => {
    if (!message.trim()) return

    const userMessage = { id: Date.now(), text: message, sender: 'user', timestamp: new Date() }
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    // Simulate AI response (in real implementation, this would call an AI API)
    setTimeout(() => {
      const aiResponse = generateAIResponse(message)
      const botMessage = { 
        id: Date.now() + 1, 
        text: aiResponse, 
        sender: 'bot', 
        timestamp: new Date() 
      }
      setMessages(prev => [...prev, botMessage])
      setIsLoading(false)
    }, 1500)
  }

  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Executive Compensation
    if (lowerMessage.includes('executive') || lowerMessage.includes('c-suite') || lowerMessage.includes('leadership compensation')) {
      return `**Executive Compensation Analysis for ${currentClient.industry} Sector**

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

Would you like me to generate specific recommendations for any executive role?`
    }
    
    // Skills Gap & Training
    else if (lowerMessage.includes('skill') || lowerMessage.includes('training') || lowerMessage.includes('ai') || lowerMessage.includes('ml')) {
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

Would you like detailed curriculum design or vendor analysis?`
    }
    
    // Workforce Planning
    else if (lowerMessage.includes('workforce') || lowerMessage.includes('planning') || lowerMessage.includes('headcount')) {
      return `**3-Year Global Workforce Planning Strategy**
**${currentClient.name} | ${currentClient.industry} Sector**

**Current Workforce Profile:**
• **Total Headcount**: ${currentClient.employees.toLocaleString()} employees
• **Geographic Distribution**: ${currentClient.regions.join(', ')}
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

Would you like detailed analysis for specific functions or regions?`
    }
    
    // Compensation Analysis
    else if (lowerMessage.includes('compensation') || lowerMessage.includes('salary') || lowerMessage.includes('pay')) {
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

Would you like specific recommendations for any role family?`
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
✓ Focus regions: ${currentClient.regions.join(', ')}
✓ Industry benchmarks: ${currentClient.industry}
✓ Real-time market data: Updated daily

**Popular Queries:**
1. "Analyze executive compensation for our industry"
2. "Create a 3-year workforce plan with cost projections"
3. "Assess AI/ML skills gaps and training recommendations"
4. "Design a retention program for high-risk employees"
5. "Compare our total rewards package to competitors"

How can I assist with your specific HR strategy needs? Please provide more details and I'll generate a comprehensive analysis with actionable recommendations.`
    }
  }

  const handlePromptSelect = (prompt) => {
    setSelectedPrompt(prompt)
    setInputMessage(prompt.prompt)
  }

  return (
    <div style={{ height: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>
              AI HR Strategy Assistant
            </h1>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.25rem 0.75rem',
              backgroundColor: '#10b981',
              color: 'white',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: 'white',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }}></div>
              LIVE
            </div>
          </div>
          <p style={{ color: '#6b7280', margin: 0 }}>
            Powered by Mercer's global expertise | Real-time insights from 156 countries & 15M+ data points
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '14px', color: '#6b7280' }}>
              <Building size={14} />
              <span>{currentClient.name}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '14px', color: '#6b7280' }}>
              <Target size={14} />
              <span>{currentClient.industry}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '14px', color: '#6b7280' }}>
              <Users size={14} />
              <span>{currentClient.employees.toLocaleString()} employees</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: 'white',
            color: '#6b7280',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f8fafc'
            e.target.style.borderColor = '#4a90e2'
            e.target.style.color = '#4a90e2'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white'
            e.target.style.borderColor = '#e2e8f0'
            e.target.style.color = '#6b7280'
          }}
          onClick={() => setShowClearConfirm(true)}
          >
            <RefreshCw size={16} />
            New Chat
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', flex: 1, minHeight: 0 }}>
        {/* Suggested Prompts Sidebar */}
        <div style={{ 
          width: '300px', 
          backgroundColor: 'white', 
          borderRadius: '12px', 
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
          padding: '1.5rem',
          overflowY: 'auto'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>
            Suggested Prompts
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {suggestedPrompts.map((prompt) => (
              <div
                key={prompt.id}
                onClick={() => handlePromptSelect(prompt)}
                style={{
                  padding: '1rem',
                  backgroundColor: selectedPrompt?.id === prompt.id ? '#f1f5f9' : '#f8fafc',
                  border: selectedPrompt?.id === prompt.id ? '1px solid #4a90e2' : '1px solid #e2e8f0',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (selectedPrompt?.id !== prompt.id) {
                    e.target.style.backgroundColor = '#f1f5f9'
                    e.target.style.borderColor = '#cbd5e1'
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedPrompt?.id !== prompt.id) {
                    e.target.style.backgroundColor = '#f8fafc'
                    e.target.style.borderColor = '#e2e8f0'
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#4a90e2',
                    backgroundColor: '#e0f2fe',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    display: 'inline-block'
                  }}>
                    {prompt.category}
                  </div>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: '600',
                    color: prompt.complexity === 'Strategic' ? '#7c3aed' : 
                           prompt.complexity === 'Advanced' ? '#f59e0b' : '#10b981',
                    backgroundColor: prompt.complexity === 'Strategic' ? '#f3e8ff' : 
                                     prompt.complexity === 'Advanced' ? '#fef3c7' : '#d1fae5',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    display: 'inline-block',
                    textTransform: 'uppercase'
                  }}>
                    {prompt.complexity}
                  </div>
                </div>
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>
                  {prompt.title}
                </h4>
                <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: '1.4' }}>
                  {prompt.prompt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Interface */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0'
        }}>
          {/* Messages Area */}
          <div style={{ 
            flex: 1, 
            padding: '1.5rem', 
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {messages.length === 0 ? (
              <div style={{ 
                textAlign: 'center', 
                color: '#6b7280',
                marginTop: '2rem'
              }}>
                <MessageSquare size={48} style={{ margin: '0 auto 1rem', color: '#cbd5e1' }} />
                <p style={{ fontSize: '16px', marginBottom: '0.5rem' }}>Welcome to your AI HR Assistant</p>
                <p style={{ fontSize: '14px' }}>Select a prompt from the sidebar or type your own question</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  style={{
                    display: 'flex',
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    marginBottom: '1rem'
                  }}
                >
                  <div style={{
                    maxWidth: '70%',
                    padding: '1rem 1.25rem',
                    borderRadius: message.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    backgroundColor: message.sender === 'user' ? '#4a90e2' : '#f1f5f9',
                    color: message.sender === 'user' ? 'white' : '#1e293b',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    whiteSpace: 'pre-wrap'
                  }}>
                    {message.text}
                  </div>
                </div>
              ))
            )}
            
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '18px 18px 18px 4px',
                  backgroundColor: '#f1f5f9',
                  color: '#6b7280',
                  fontSize: '14px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      backgroundColor: '#4a90e2',
                      borderRadius: '50%',
                      animation: 'pulse 1.5s infinite'
                    }}></div>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      backgroundColor: '#4a90e2',
                      borderRadius: '50%',
                      animation: 'pulse 1.5s infinite 0.2s'
                    }}></div>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      backgroundColor: '#4a90e2',
                      borderRadius: '50%',
                      animation: 'pulse 1.5s infinite 0.4s'
                    }}></div>
                    <span>AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={{ 
            padding: '1.5rem', 
            borderTop: '1px solid #e2e8f0',
            backgroundColor: '#f8fafc'
          }}>
            {/* Chat Actions */}
            {messages.length > 0 && (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                marginBottom: '1rem',
                padding: '0.75rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid #e2e8f0'
              }}>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.5rem 0.75rem',
                  backgroundColor: 'transparent',
                  color: '#6b7280',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f1f5f9'
                  e.target.style.borderColor = '#4a90e2'
                  e.target.style.color = '#4a90e2'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.borderColor = '#e2e8f0'
                  e.target.style.color = '#6b7280'
                }}
                >
                  <Download size={14} />
                  Export Chat
                </button>
                
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.5rem 0.75rem',
                  backgroundColor: 'transparent',
                  color: '#6b7280',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f1f5f9'
                  e.target.style.borderColor = '#4a90e2'
                  e.target.style.color = '#4a90e2'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.borderColor = '#e2e8f0'
                  e.target.style.color = '#6b7280'
                }}
                >
                  <Share2 size={14} />
                  Share
                </button>
                
                <div style={{ flex: 1 }}></div>
                
                <div style={{
                  fontSize: '12px',
                  color: '#9ca3af',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  <Shield size={12} />
                  <span>Enterprise-grade security</span>
                </div>
              </div>
            )}
            
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-end' }}>
              <div style={{ flex: 1 }}>
                <div style={{ position: 'relative' }}>
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                    placeholder="Ask me anything about HR strategy, compensation, workforce planning..."
                    style={{
                      width: '100%',
                      minHeight: '44px',
                      maxHeight: '120px',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      resize: 'none',
                      outline: 'none',
                      backgroundColor: 'white',
                      transition: 'all 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#4a90e2'
                      e.target.style.boxShadow = '0 0 0 3px rgba(74, 144, 226, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    left: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#9ca3af'
                  }}>
                    <MessageSquare size={16} />
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginTop: '0.5rem',
                  fontSize: '12px',
                  color: '#6b7280'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#10b981',
                      borderRadius: '50%'
                    }}></div>
                    <span>AI Assistant Online</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Globe size={12} />
                    <span>Global data access</span>
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim() || isLoading}
                  style={{
                    padding: '0.75rem',
                    backgroundColor: inputMessage.trim() && !isLoading ? '#4a90e2' : '#cbd5e1',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: inputMessage.trim() && !isLoading ? 'pointer' : 'not-allowed',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '48px',
                    height: '44px'
                  }}
                >
                  <Send size={20} />
                </button>
                
                <button
                  onClick={() => setInputMessage('')}
                  disabled={!inputMessage.trim()}
                  style={{
                    padding: '0.5rem',
                    backgroundColor: inputMessage.trim() ? '#f8fafc' : 'transparent',
                    color: inputMessage.trim() ? '#6b7280' : '#cbd5e1',
                    border: inputMessage.trim() ? '1px solid #e2e8f0' : '1px solid #cbd5e1',
                    borderRadius: '8px',
                    cursor: inputMessage.trim() ? 'pointer' : 'not-allowed',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '48px',
                    height: '32px'
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
  )
}

const Surveys = () => {
  const { currentClient } = useClient()
  
  return (
    <div>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.5rem' }}>
            Employee Surveys & Feedback
          </h1>
          <p style={{ color: '#6b7280' }}>
            Comprehensive survey management and analytics for {currentClient.name}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'white',
            color: '#6b7280',
            border: '1px solid #e2e8f0',
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f8fafc'
            e.target.style.borderColor = '#4a90e2'
            e.target.style.color = '#4a90e2'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white'
            e.target.style.borderColor = '#e2e8f0'
            e.target.style.color = '#6b7280'
          }}
          >
            <Download size={16} />
            Export Data
          </button>
          
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'white',
            color: '#6b7280',
            border: '1px solid #e2e8f0',
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f8fafc'
            e.target.style.borderColor = '#4a90e2'
            e.target.style.color = '#4a90e2'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white'
            e.target.style.borderColor = '#e2e8f0'
            e.target.style.color = '#6b7280'
          }}
          >
            <Filter size={16} />
            Filter
          </button>
          
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#4a90e2',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2c5aa0'
              e.target.style.transform = 'translateY(-1px)'
              e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#4a90e2'
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <Plus size={18} />
            Create Survey
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
          padding: '1.5rem'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>
            Employee Engagement Survey
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '14px' }}>
            Annual engagement survey with 89% participation rate
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
            <div>
              <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>4.2/5</span>
              <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '0.25rem' }}>
                89% response rate • 2,847 responses
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{
                backgroundColor: 'transparent',
                color: '#6b7280',
                border: '1px solid #e2e8f0',
                padding: '0.5rem',
                borderRadius: '6px',
                fontSize: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f8fafc'
                e.target.style.borderColor = '#4a90e2'
                e.target.style.color = '#4a90e2'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent'
                e.target.style.borderColor = '#e2e8f0'
                e.target.style.color = '#6b7280'
              }}
              >
                <Download size={14} />
              </button>
              <button style={{
                backgroundColor: '#4a90e2',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#2c5aa0'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#4a90e2'
              }}
              >
                <Eye size={14} style={{ marginRight: '0.25rem' }} />
                View Results
              </button>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
          padding: '1.5rem'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>
            Compensation Satisfaction
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '14px' }}>
            Quarterly compensation feedback survey
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
            <div>
              <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b' }}>3.8/5</span>
              <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '0.25rem' }}>
                67% response rate • 1,923 responses
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{
                backgroundColor: 'transparent',
                color: '#6b7280',
                border: '1px solid #e2e8f0',
                padding: '0.5rem',
                borderRadius: '6px',
                fontSize: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f8fafc'
                e.target.style.borderColor = '#4a90e2'
                e.target.style.color = '#4a90e2'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent'
                e.target.style.borderColor = '#e2e8f0'
                e.target.style.color = '#6b7280'
              }}
              >
                <Download size={14} />
              </button>
              <button style={{
                backgroundColor: '#4a90e2',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#2c5aa0'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#4a90e2'
              }}
              >
                <Eye size={14} style={{ marginRight: '0.25rem' }} />
                View Results
              </button>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
          padding: '1.5rem'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>
            Exit Interview Analysis
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '14px' }}>
            Monthly exit interview insights and trends
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#ef4444' }}>2.9/5</span>
            <button style={{
              backgroundColor: '#4a90e2',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer'
            }}>
              View Results
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Overview = () => {
  const { currentClient } = useClient()
  const { currentUser } = useUser()
  const features = [
    {
      icon: BarChart3,
      title: 'Job Benchmarking',
      description: 'Global, regional, and industry-specific compensation data with Mercer standards',
      action: 'Benchmark Now',
      color: '#4a90e2'
    },
    {
      icon: DollarSign,
      title: 'Compensation Intelligence',
      description: 'Real-time salary insights and market positioning analysis',
      action: 'Analyze Compensation',
      color: '#50c878'
    },
    {
      icon: Brain,
      title: 'Skills Gap Analysis',
      description: 'Identify future workforce needs and reskilling opportunities',
      action: 'Analyze Skills',
      color: '#9370db'
    },
    {
      icon: FileText,
      title: 'Job Descriptions',
      description: 'Market-aligned, structured job descriptions ready for use',
      action: 'Generate JD',
      color: '#ff8c00'
    },
    {
      icon: Users,
      title: 'Workforce Planning',
      description: 'Predictive insights on attrition risk and talent availability',
      action: 'Plan Workforce',
      color: '#ffd700'
    },
    {
      icon: TrendingUp,
      title: 'Market Trends',
      description: 'Industry insights and emerging role recommendations',
      action: 'View Trends',
      color: '#708090'
    }
  ]

  const playbookResources = [
    {
      icon: BookOpen,
      title: 'Mercer Playbook',
      description: 'Strategic HR frameworks and best practices for modern organizations',
      action: 'Open Playbook',
      color: '#4a90e2',
      badge: 'NEW',
      category: 'Strategy'
    },
    {
      icon: Award,
      title: 'Industry Insights',
      description: 'Latest research and trends across industries and regions',
      action: 'Explore Insights',
      color: '#50c878',
      category: 'Research'
    },
    {
      icon: Target,
      title: 'Action Templates',
      description: 'Ready-to-use templates for common HR initiatives',
      action: 'Browse Templates',
      color: '#9370db',
      category: 'Templates'
    },
    {
      icon: Lightbulb,
      title: 'Quick Wins',
      description: 'Immediate actions to improve your HR strategy',
      action: 'Get Started',
      color: '#ff8c00',
      category: 'Actions'
    }
  ]

  const insights = [
    {
      title: 'Compensation Competitiveness',
      value: '92%',
      subtitle: 'Above Market Median',
      change: '+3.2% vs last quarter',
      trend: 'up',
      color: '#4a90e2',
      icon: TrendingUp
    },
    {
      title: 'Employee Retention Rate',
      value: '94.2%',
      subtitle: 'Industry Leading',
      change: '+1.8% vs last year',
      trend: 'up',
      color: '#10b981',
      icon: Users
    },
    {
      title: 'Skills Gap Index',
      value: '7.2/10',
      subtitle: 'Low Risk',
      change: 'Improved from 6.1',
      trend: 'up',
      color: '#50c878',
      icon: Target
    },
    {
      title: 'Market Position',
      value: 'Top 15%',
      subtitle: 'Premium Employer',
      change: 'Moved up 2 positions',
      trend: 'up',
      color: '#f59e0b',
      icon: Award
    }
  ]

  const quickActions = [
    {
      icon: BarChart3,
      title: 'Salary Benchmarking',
      description: 'Compare compensation against market data',
      action: 'Run Analysis',
      color: '#4a90e2',
      urgent: false
    },
    {
      icon: Brain,
      title: 'Skills Assessment',
      description: 'Identify critical workforce gaps',
      action: 'Start Assessment',
      color: '#9370db',
      urgent: true
    },
    {
      icon: FileText,
      title: 'Job Description Review',
      description: 'Optimize role requirements',
      action: 'Review Now',
      color: '#ff8c00',
      urgent: false
    },
    {
      icon: Users,
      title: 'Workforce Planning',
      description: 'Plan for future growth',
      action: 'Plan Workforce',
      color: '#ffd700',
      urgent: false
    }
  ]

  const recentActivity = [
    {
      id: 1,
      type: 'analysis',
      title: 'Compensation analysis completed',
      description: 'Technology roles benchmarked against market data',
      time: '2 hours ago',
      status: 'completed',
      icon: CheckCircle
    },
    {
      id: 2,
      type: 'survey',
      title: 'Employee engagement survey launched',
      description: 'Response rate currently at 67%',
      time: '1 day ago',
      status: 'active',
      icon: Activity
    },
    {
      id: 3,
      type: 'report',
      title: 'Q4 workforce report generated',
      description: 'Ready for executive review',
      time: '2 days ago',
      status: 'completed',
      icon: FileText
    },
    {
      id: 4,
      type: 'alert',
      title: 'Skills gap identified',
      description: 'Data Science roles need attention',
      time: '3 days ago',
      status: 'pending',
      icon: AlertCircle
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>
          HR Strategy Dashboard
        </h1>
        <p style={{ fontSize: '20px', color: '#6b7280', maxWidth: '768px', margin: '0 auto' }}>
          Comprehensive workforce insights and strategic recommendations powered by Mercer's global expertise.
        </p>
      </div>

      {/* Enhanced Key Insights */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {insights.map((insight, index) => {
          const Icon = insight.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid #e2e8f0',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)'
                e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              {/* Background Pattern */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                backgroundColor: insight.color,
                borderRadius: '50%',
                opacity: 0.1
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: insight.color,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon style={{ color: 'white' }} size={24} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    {insight.trend === 'up' ? (
                      <ArrowUpRight size={16} style={{ color: '#10b981' }} />
                    ) : insight.trend === 'down' ? (
                      <ArrowDownRight size={16} style={{ color: '#ef4444' }} />
                    ) : (
                      <div style={{ width: '8px', height: '8px', backgroundColor: '#6b7280', borderRadius: '50%' }}></div>
                    )}
                  </div>
                </div>
                
                <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.5rem' }}>
                  {insight.value}
                </h3>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>
                  {insight.title}
                </h4>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '0.5rem' }}>
                  {insight.subtitle}
                </p>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: insight.trend === 'up' ? '#f0fdf4' : insight.trend === 'down' ? '#fef2f2' : '#f8fafc',
                  color: insight.trend === 'up' ? '#166534' : insight.trend === 'down' ? '#dc2626' : '#6b7280',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  {insight.trend === 'up' ? <TrendingUp size={12} /> : insight.trend === 'down' ? <TrendingDown size={12} /> : null}
                  {insight.change}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>
            Quick Actions
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '14px', color: '#6b7280' }}>
            <Zap size={16} />
            <span>Popular workflows</span>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: action.urgent ? '2px solid #ef4444' : '1px solid #e2e8f0',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f8fafc'
                  e.target.style.borderColor = action.color
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white'
                  e.target.style.borderColor = action.urgent ? '#ef4444' : '#e2e8f0'
                }}
              >
                {action.urgent && (
                  <div style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '1rem',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px'
                  }}>
                    URGENT
                  </div>
                )}
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: action.color,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon style={{ color: 'white' }} size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '0 0 0.25rem 0' }}>
                      {action.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                      {action.description}
                    </p>
                  </div>
                </div>
                
                <button style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: action.color,
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = action.color === '#4a90e2' ? '#2c5aa0' : 
                                                  action.color === '#9370db' ? '#7c3aed' :
                                                  action.color === '#ff8c00' ? '#ea580c' :
                                                  action.color === '#ffd700' ? '#eab308' : action.color
                  e.target.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = action.color
                  e.target.style.transform = 'translateY(0)'
                }}
                >
                  {action.action}
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Features Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}
              onMouseLeave={(e) => e.target.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'}
            >
              <div style={{ width: '48px', height: '48px', backgroundColor: feature.color, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Icon style={{ color: 'white' }} size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '14px' }}>
                {feature.description}
              </p>
              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'white',
                color: '#4a90e2',
                border: '1px solid #4a90e2',
                borderRadius: '8px',
                fontWeight: '500',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}>
                {feature.action}
                <ChevronRight size={16} />
              </button>
            </motion.div>
          )
        })}
      </div>

      {/* User Activity & Recent Insights */}
      <div style={{ marginTop: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {/* User Activity */}
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>Your Activity</h2>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0',
              padding: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#4a90e2',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '16px'
                }}>
                  {currentUser.avatar}
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: 0 }}>
                    {currentUser.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
                    {currentUser.role} • {currentUser.department}
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {currentUser.specializations.map((spec, index) => (
                  <span key={index} style={{
                    fontSize: '12px',
                    padding: '0.25rem 0.5rem',
                    backgroundColor: '#f1f5f9',
                    color: '#4a90e2',
                    borderRadius: '4px',
                    fontWeight: '500'
                  }}>
                    {spec}
                  </span>
                ))}
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>
                <p style={{ margin: '0.25rem 0' }}>📍 Based in {currentUser.location}</p>
                <p style={{ margin: '0.25rem 0' }}>⏰ {currentUser.experience} of experience</p>
                <p style={{ margin: '0.25rem 0' }}>🔐 Full access to all client data</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>Quick Actions</h2>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0',
              padding: '1.5rem'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                  <BarChart3 size={20} style={{ color: '#4a90e2' }} />
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>Run New Benchmark</span>
                </button>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                  <ClipboardList size={20} style={{ color: '#4a90e2' }} />
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>Create Survey</span>
                </button>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                  <FileText size={20} style={{ color: '#4a90e2' }} />
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>Generate Report</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', marginBottom: '1.5rem' }}>Recent Insights</h2>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
          padding: '1.5rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: '#f1f5f9', borderRadius: '8px' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#4a90e2', borderRadius: '50%' }}></div>
              <div>
                <p style={{ fontWeight: '500', margin: 0 }}>Senior Cloud Architect compensation increased 12% in Singapore</p>
                <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Updated 2 hours ago</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: '#f1f5f9', borderRadius: '8px' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#50c878', borderRadius: '50%' }}></div>
              <div>
                <p style={{ fontWeight: '500', margin: 0 }}>AI Strategy roles showing 45% growth in healthcare sector</p>
                <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Updated 4 hours ago</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: '#f1f5f9', borderRadius: '8px' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#ff8c00', borderRadius: '50%' }}></div>
              <div>
                <p style={{ fontWeight: '500', margin: 0 }}>High attrition risk detected in EMEA tech roles</p>
                <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Updated 6 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <UserProvider>
      <ClientProvider>
        <AppContent />
      </ClientProvider>
    </UserProvider>
  )
}

export default App