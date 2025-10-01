import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  BookOpen,
  Target,
  Zap,
  Download,
  Filter,
  Search,
  Building,
  MapPin
} from 'lucide-react'
import { useClient } from '../contexts/ClientContext'
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts'

const SkillsGapAnalysis = () => {
  const { currentClient } = useClient()
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('')
  const [selectedTimeframe, setSelectedTimeframe] = useState('12M')

  const departments = [
    'Technology', 'Sales', 'Marketing', 'Operations', 'Finance', 'HR', 'Legal', 'Product'
  ]

  const levels = [
    'Individual Contributor', 'Team Lead', 'Manager', 'Director', 'Executive'
  ]

  const timeframes = ['6M', '12M', '18M', '24M', '36M']

  // Sample skills gap data
  const currentSkills = [
    { skill: 'Cloud Computing', current: 65, required: 85, gap: 20 },
    { skill: 'Data Analytics', current: 70, required: 90, gap: 20 },
    { skill: 'AI/ML', current: 45, required: 80, gap: 35 },
    { skill: 'Cybersecurity', current: 60, required: 75, gap: 15 },
    { skill: 'Digital Marketing', current: 80, required: 85, gap: 5 },
    { skill: 'Project Management', current: 75, required: 80, gap: 5 },
    { skill: 'Leadership', current: 70, required: 85, gap: 15 },
    { skill: 'Communication', current: 85, required: 90, gap: 5 }
  ]

  const skillCategories = [
    { name: 'Technical', value: 45, color: '#0066cc' },
    { name: 'Leadership', value: 25, color: '#10b981' },
    { name: 'Analytical', value: 20, color: '#f59e0b' },
    { name: 'Communication', value: 10, color: '#8b5cf6' }
  ]

  const reskillingPaths = [
    {
      from: 'Traditional Marketing',
      to: 'Digital Marketing',
      duration: '6 months',
      difficulty: 'Medium',
      demand: 'High',
      salaryIncrease: '+15%'
    },
    {
      from: 'Data Entry',
      to: 'Data Analytics',
      duration: '9 months',
      difficulty: 'High',
      demand: 'Very High',
      salaryIncrease: '+35%'
    },
    {
      from: 'IT Support',
      to: 'Cloud Engineer',
      duration: '12 months',
      difficulty: 'High',
      demand: 'Very High',
      salaryIncrease: '+40%'
    },
    {
      from: 'Sales Rep',
      to: 'Sales Engineer',
      duration: '8 months',
      difficulty: 'Medium',
      demand: 'High',
      salaryIncrease: '+25%'
    }
  ]

  const emergingSkills = [
    { skill: 'Generative AI', growth: 180, demand: 'Very High', priority: 'Critical' },
    { skill: 'Quantum Computing', growth: 120, demand: 'High', priority: 'High' },
    { skill: 'Blockchain', growth: 95, demand: 'Medium', priority: 'Medium' },
    { skill: 'Edge Computing', growth: 110, demand: 'High', priority: 'High' },
    { skill: 'Robotic Process Automation', growth: 85, demand: 'Medium', priority: 'Medium' }
  ]

  const kpis = [
    {
      title: 'Critical Skills Gap',
      value: '23%',
      change: '+5%',
      trend: 'up',
      icon: AlertTriangle,
      color: 'text-red-600'
    },
    {
      title: 'Reskilling Success Rate',
      value: '78%',
      change: '+12%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Future Skills Readiness',
      value: '45%',
      change: '+8%',
      trend: 'up',
      icon: Brain,
      color: 'text-blue-600'
    },
    {
      title: 'Training Investment ROI',
      value: '3.2x',
      change: '+0.4x',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-mercer-gray-dark mb-2">Skills Gap Analysis - {currentClient.name}</h1>
        <p className="text-mercer-gray">
          Identify future workforce needs, skills gaps, and strategic reskilling opportunities for {currentClient.industry} industry
        </p>
      </div>

      {/* Controls */}
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-mercer-gray-dark">Analysis Parameters</h2>
          <div className="flex gap-4">
            <button className="btn btn-secondary">
              <Download size={18} />
              Export Analysis
            </button>
            <button className="btn btn-secondary">
              <Filter size={18} />
              Advanced Filters
            </button>
          </div>
        </div>
        
        <div className="grid grid-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-mercer-gray-dark mb-2">
              Department
            </label>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mercer-gray" size={18} />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="select pl-10"
              >
                <option value="">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-mercer-gray-dark mb-2">
              Level
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mercer-gray" size={18} />
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="select pl-10"
              >
                <option value="">All Levels</option>
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-mercer-gray-dark mb-2">
              Timeframe
            </label>
            <div className="relative">
              <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mercer-gray" size={18} />
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="select pl-10"
              >
                {timeframes.map(timeframe => (
                  <option key={timeframe} value={timeframe}>{timeframe}</option>
                ))}
              </select>
            </div>
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
                    <TrendingUp size={14} />
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

      {/* Skills Gap Analysis */}
      <div className="grid grid-2 gap-8 mb-8">
        {/* Current vs Required Skills */}
        <div className="card">
          <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Skills Gap Analysis</h3>
          <div className="space-y-4">
            {currentSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 border border-mercer-border rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-mercer-gray-dark">{skill.skill}</span>
                  <span className={`text-sm font-medium ${
                    skill.gap > 20 ? 'text-red-600' : 
                    skill.gap > 10 ? 'text-orange-600' : 'text-green-600'
                  }`}>
                    {skill.gap}% gap
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-mercer-gray">
                    <span>Current: {skill.current}%</span>
                    <span>Required: {skill.required}%</span>
                  </div>
                  <div className="w-full bg-mercer-gray-light rounded-full h-2">
                    <div 
                      className="bg-mercer-blue h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.current}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="card">
          <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Skills Categories</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={skillCategories}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                dataKey="value"
              >
                {skillCategories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, '']} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {skillCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded" 
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <span className="text-sm text-mercer-gray-dark">{category.name}</span>
                </div>
                <span className="text-sm font-medium text-mercer-gray-dark">{category.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reskilling Paths */}
      <div className="card mb-8">
        <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Recommended Reskilling Paths</h3>
        <div className="grid grid-2 gap-6">
          {reskillingPaths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-mercer-border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-mercer-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                    <BookOpen className="text-mercer-blue" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-mercer-gray-dark">{path.from}</h4>
                    <p className="text-sm text-mercer-gray">→ {path.to}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  path.demand === 'Very High' ? 'bg-red-100 text-red-800' :
                  path.demand === 'High' ? 'bg-orange-100 text-orange-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {path.demand} Demand
                </span>
              </div>
              
              <div className="grid grid-2 gap-4 text-sm">
                <div>
                  <span className="text-mercer-gray">Duration:</span>
                  <span className="font-medium text-mercer-gray-dark ml-2">{path.duration}</span>
                </div>
                <div>
                  <span className="text-mercer-gray">Difficulty:</span>
                  <span className="font-medium text-mercer-gray-dark ml-2">{path.difficulty}</span>
                </div>
                <div>
                  <span className="text-mercer-gray">Salary Increase:</span>
                  <span className="font-medium text-mercer-success ml-2">{path.salaryIncrease}</span>
                </div>
                <div>
                  <span className="text-mercer-gray">ROI:</span>
                  <span className="font-medium text-mercer-blue ml-2">3.2x</span>
                </div>
              </div>
              
              <button className="btn btn-primary w-full mt-4 text-sm">
                <Zap size={16} />
                Start Reskilling Path
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Emerging Skills */}
      <div className="card">
        <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Emerging Skills & Future Trends</h3>
        <div className="space-y-4">
          {emergingSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 border border-mercer-border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-mercer-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Brain className="text-mercer-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-mercer-gray-dark">{skill.skill}</h4>
                  <p className="text-sm text-mercer-gray">Growth: +{skill.growth}%</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm font-medium text-mercer-gray-dark">{skill.demand}</div>
                  <div className="text-xs text-mercer-gray">Market Demand</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  skill.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                  skill.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {skill.priority} Priority
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsGapAnalysis
