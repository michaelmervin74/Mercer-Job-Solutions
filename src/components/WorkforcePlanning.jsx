import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Calendar,
  MapPin,
  Building,
  Target,
  BarChart3,
  PieChart,
  Download,
  Filter,
  Eye,
  UserPlus,
  UserMinus
} from 'lucide-react'
import { useClient } from '../contexts/ClientContext'
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter
} from 'recharts'

const WorkforcePlanning = () => {
  const { currentClient } = useClient()
  const [selectedPeriod, setSelectedPeriod] = useState('12M')
  const [selectedRegion, setSelectedRegion] = useState('Global')
  const [selectedDepartment, setSelectedDepartment] = useState('')

  const periods = ['6M', '12M', '18M', '24M', '36M']
  const regions = ['Global', 'North America', 'Europe', 'Asia Pacific', 'EMEA', 'Latin America']
  const departments = ['Technology', 'Sales', 'Marketing', 'Operations', 'Finance', 'HR', 'All']

  // Sample workforce data
  const workforceTrends = [
    { month: 'Jan', current: 1250, projected: 1300, attrition: 45, hiring: 95 },
    { month: 'Feb', current: 1300, projected: 1350, attrition: 38, hiring: 88 },
    { month: 'Mar', current: 1350, projected: 1400, attrition: 42, hiring: 92 },
    { month: 'Apr', current: 1400, projected: 1450, attrition: 35, hiring: 85 },
    { month: 'May', current: 1450, projected: 1500, attrition: 48, hiring: 98 },
    { month: 'Jun', current: 1500, projected: 1550, attrition: 41, hiring: 91 },
    { month: 'Jul', current: 1550, projected: 1600, attrition: 39, hiring: 89 },
    { month: 'Aug', current: 1600, projected: 1650, attrition: 44, hiring: 94 },
    { month: 'Sep', current: 1650, projected: 1700, attrition: 37, hiring: 87 },
    { month: 'Oct', current: 1700, projected: 1750, attrition: 46, hiring: 96 },
    { month: 'Nov', current: 1750, projected: 1800, attrition: 43, hiring: 93 },
    { month: 'Dec', current: 1800, projected: 1850, attrition: 40, hiring: 90 }
  ]

  const attritionRisk = [
    { role: 'Software Engineer', risk: 85, impact: 'High', department: 'Technology' },
    { role: 'Sales Manager', risk: 72, impact: 'High', department: 'Sales' },
    { role: 'Data Scientist', risk: 68, impact: 'Medium', department: 'Technology' },
    { role: 'Marketing Manager', risk: 45, impact: 'Medium', department: 'Marketing' },
    { role: 'HR Business Partner', risk: 38, impact: 'Low', department: 'HR' },
    { role: 'Financial Analyst', risk: 42, impact: 'Low', department: 'Finance' }
  ]

  const talentAvailability = [
    { market: 'San Francisco', availability: 15, demand: 85, competition: 'Very High' },
    { market: 'New York', availability: 25, demand: 75, competition: 'High' },
    { market: 'London', availability: 35, demand: 65, competition: 'Medium' },
    { market: 'Singapore', availability: 45, demand: 55, competition: 'Medium' },
    { market: 'Berlin', availability: 55, demand: 45, competition: 'Low' },
    { market: 'Toronto', availability: 40, demand: 60, competition: 'Medium' }
  ]

  const workforceDistribution = [
    { name: 'Technology', value: 35, color: '#0066cc' },
    { name: 'Sales', value: 20, color: '#10b981' },
    { name: 'Operations', value: 15, color: '#f59e0b' },
    { name: 'Marketing', value: 12, color: '#8b5cf6' },
    { name: 'Finance', value: 10, color: '#ef4444' },
    { name: 'HR', value: 8, color: '#06b6d4' }
  ]

  const kpis = [
    {
      title: 'Total Workforce',
      value: '1,800',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Attrition Rate',
      value: '2.4%',
      change: '-0.3%',
      trend: 'down',
      icon: TrendingDown,
      color: 'text-green-600'
    },
    {
      title: 'Hiring Velocity',
      value: '91',
      change: '+8%',
      trend: 'up',
      icon: UserPlus,
      color: 'text-purple-600'
    },
    {
      title: 'High Risk Roles',
      value: '23%',
      change: '+5%',
      trend: 'up',
      icon: AlertTriangle,
      color: 'text-red-600'
    }
  ]

  const predictions = [
    {
      scenario: 'Optimistic',
      workforce: 2200,
      attrition: 1.8,
      hiring: 120,
      probability: 25
    },
    {
      scenario: 'Realistic',
      workforce: 1950,
      attrition: 2.4,
      hiring: 95,
      probability: 50
    },
    {
      scenario: 'Pessimistic',
      workforce: 1700,
      attrition: 3.2,
      hiring: 70,
      probability: 25
    }
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-mercer-gray-dark mb-2">Workforce Planning - {currentClient.name}</h1>
        <p className="text-mercer-gray">
          Predictive insights on attrition risk, market trends, and talent availability forecasts for {currentClient.industry} industry
        </p>
      </div>

      {/* Controls */}
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-mercer-gray-dark">Planning Parameters</h2>
          <div className="flex gap-4">
            <button className="btn btn-secondary">
              <Download size={18} />
              Export Report
            </button>
            <button className="btn btn-secondary">
              <Filter size={18} />
              Advanced Filters
            </button>
          </div>
        </div>
        
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-mercer-gray" />
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="select"
            >
              {periods.map(period => (
                <option key={period} value={period}>{period}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-mercer-gray" />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="select"
            >
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Building size={18} className="text-mercer-gray" />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="select"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-2 gap-6 mb-8">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-mercer-gray mb-1">{kpi.title}</p>
                  <p className="text-2xl font-bold text-mercer-gray-dark">{kpi.value}</p>
                  <div className={`flex items-center gap-1 text-sm ${kpi.color}`}>
                    {kpi.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {kpi.change}
                  </div>
                </div>
                <div className="w-12 h-12 bg-mercer-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Icon className="text-mercer-blue" size={24} />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Workforce Trends */}
      <div className="grid grid-2 gap-8 mb-8">
        {/* Workforce Growth */}
        <div className="card">
          <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Workforce Growth Projection</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={workforceTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [value, '']} />
              <Area type="monotone" dataKey="current" stackId="1" stroke="#0066cc" fill="#0066cc" fillOpacity={0.3} />
              <Area type="monotone" dataKey="projected" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-mercer-blue rounded"></div>
              <span className="text-sm text-mercer-gray">Current Workforce</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-mercer-success rounded"></div>
              <span className="text-sm text-mercer-gray">Projected Workforce</span>
            </div>
          </div>
        </div>

        {/* Attrition vs Hiring */}
        <div className="card">
          <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Attrition vs Hiring Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={workforceTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="attrition" fill="#ef4444" name="Attrition" />
              <Bar dataKey="hiring" fill="#10b981" name="Hiring" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Attrition Risk Analysis */}
      <div className="card mb-8">
        <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Attrition Risk Analysis</h3>
        <div className="space-y-4">
          {attritionRisk.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 border border-mercer-border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-mercer-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Users className="text-mercer-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-mercer-gray-dark">{role.role}</h4>
                  <p className="text-sm text-mercer-gray">{role.department}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-mercer-gray-dark">{role.risk}%</div>
                  <div className="text-xs text-mercer-gray">Risk Score</div>
                </div>
                <div className="w-24 bg-mercer-gray-light rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      role.risk > 70 ? 'bg-red-500' : 
                      role.risk > 50 ? 'bg-orange-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${role.risk}%` }}
                  ></div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  role.impact === 'High' ? 'bg-red-100 text-red-800' :
                  role.impact === 'Medium' ? 'bg-orange-100 text-orange-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {role.impact} Impact
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Talent Availability & Predictions */}
      <div className="grid grid-2 gap-8 mb-8">
        {/* Talent Availability */}
        <div className="card">
          <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Talent Availability by Market</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={talentAvailability}>
              <CartesianGrid />
              <XAxis dataKey="availability" name="Availability" />
              <YAxis dataKey="demand" name="Demand" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter dataKey="competition" fill="#0066cc" />
            </ScatterChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {talentAvailability.map((market, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="font-medium text-mercer-gray-dark">{market.market}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  market.competition === 'Very High' ? 'bg-red-100 text-red-800' :
                  market.competition === 'High' ? 'bg-orange-100 text-orange-800' :
                  market.competition === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {market.competition}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Workforce Distribution */}
        <div className="card">
          <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Workforce Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <RechartsPieChart>
              <Pie
                data={workforceDistribution}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                dataKey="value"
              >
                {workforceDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, '']} />
            </RechartsPieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {workforceDistribution.map((dept, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded" 
                    style={{ backgroundColor: dept.color }}
                  ></div>
                  <span className="text-sm text-mercer-gray-dark">{dept.name}</span>
                </div>
                <span className="text-sm font-medium text-mercer-gray-dark">{dept.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scenario Planning */}
      <div className="card">
        <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Scenario Planning</h3>
        <div className="grid grid-3 gap-6">
          {predictions.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 border-2 rounded-lg ${
                scenario.scenario === 'Optimistic' ? 'border-green-200 bg-green-50' :
                scenario.scenario === 'Realistic' ? 'border-blue-200 bg-blue-50' :
                'border-red-200 bg-red-50'
              }`}
            >
              <div className="text-center mb-4">
                <h4 className={`font-semibold ${
                  scenario.scenario === 'Optimistic' ? 'text-green-800' :
                  scenario.scenario === 'Realistic' ? 'text-blue-800' :
                  'text-red-800'
                }`}>
                  {scenario.scenario} Scenario
                </h4>
                <p className="text-sm text-mercer-gray">{scenario.probability}% Probability</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-mercer-gray">Workforce Size:</span>
                  <span className="font-medium">{scenario.workforce.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-mercer-gray">Attrition Rate:</span>
                  <span className="font-medium">{scenario.attrition}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-mercer-gray">Monthly Hiring:</span>
                  <span className="font-medium">{scenario.hiring}</span>
                </div>
              </div>
              
              <button className={`btn w-full mt-4 text-sm ${
                scenario.scenario === 'Optimistic' ? 'btn-secondary' :
                scenario.scenario === 'Realistic' ? 'btn-primary' :
                'btn-secondary'
              }`}>
                <Eye size={16} />
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkforcePlanning
