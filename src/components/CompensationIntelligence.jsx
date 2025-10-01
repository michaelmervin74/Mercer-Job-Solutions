import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  CheckCircle,
  BarChart3,
  PieChart,
  Download,
  Filter,
  Calendar,
  MapPin,
  Building
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
  Cell
} from 'recharts'

const CompensationIntelligence = () => {
  const { currentClient } = useClient()
  const [selectedPeriod, setSelectedPeriod] = useState('12M')
  const [selectedRegion, setSelectedRegion] = useState('Global')

  const periods = ['3M', '6M', '12M', '24M', '36M']
  const regions = ['Global', 'North America', 'Europe', 'Asia Pacific', 'EMEA']

  // Sample compensation trend data
  const compensationTrends = [
    { month: 'Jan', base: 98000, total: 115000, bonus: 17000 },
    { month: 'Feb', base: 99000, total: 116500, bonus: 17500 },
    { month: 'Mar', base: 101000, total: 118000, bonus: 17000 },
    { month: 'Apr', base: 102000, total: 119500, bonus: 17500 },
    { month: 'May', base: 103000, total: 121000, bonus: 18000 },
    { month: 'Jun', base: 104000, total: 122500, bonus: 18500 },
    { month: 'Jul', base: 105000, total: 124000, bonus: 19000 },
    { month: 'Aug', base: 106000, total: 125500, bonus: 19500 },
    { month: 'Sep', base: 107000, total: 127000, bonus: 20000 },
    { month: 'Oct', base: 108000, total: 128500, bonus: 20500 },
    { month: 'Nov', base: 109000, total: 130000, bonus: 21000 },
    { month: 'Dec', base: 110000, total: 131500, bonus: 21500 }
  ]

  const marketComparison = [
    { market: 'Technology', median: 125000, trend: '+12.5%', risk: 'Low' },
    { market: 'Healthcare', median: 95000, trend: '+8.2%', risk: 'Medium' },
    { market: 'Finance', median: 110000, trend: '+6.8%', risk: 'Low' },
    { market: 'Manufacturing', median: 85000, trend: '+4.1%', risk: 'High' },
    { market: 'Retail', median: 75000, trend: '+3.2%', risk: 'High' }
  ]

  const compensationComponents = [
    { name: 'Base Salary', value: 75, color: '#0066cc' },
    { name: 'Variable Pay', value: 15, color: '#10b981' },
    { name: 'Benefits', value: 8, color: '#f59e0b' },
    { name: 'Equity', value: 2, color: '#8b5cf6' }
  ]

  const riskFactors = [
    { factor: 'Market Volatility', score: 85, status: 'High Risk', color: 'text-red-600' },
    { factor: 'Talent Scarcity', score: 72, status: 'Medium Risk', color: 'text-orange-600' },
    { factor: 'Economic Conditions', score: 45, status: 'Low Risk', color: 'text-green-600' },
    { factor: 'Regulatory Changes', score: 38, status: 'Low Risk', color: 'text-green-600' }
  ]

  const kpis = [
    {
      title: 'Median Base Salary',
      value: '$105,000',
      change: '+8.2%',
      trend: 'up',
      icon: DollarSign
    },
    {
      title: 'Total Compensation',
      value: '$124,000',
      change: '+9.1%',
      trend: 'up',
      icon: TrendingUp
    },
    {
      title: 'Market Position',
      value: '75th Percentile',
      change: '+2 positions',
      trend: 'up',
      icon: BarChart3
    },
    {
      title: 'Retention Risk',
      value: '23%',
      change: '-5%',
      trend: 'down',
      icon: AlertTriangle
    }
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-mercer-gray-dark mb-2">Compensation Intelligence - {currentClient.name}</h1>
        <p className="text-mercer-gray">
          Real-time salary insights and market positioning analysis with predictive compensation trends for {currentClient.industry} industry
        </p>
      </div>

      {/* Controls */}
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-mercer-gray-dark">Market Analysis</h2>
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
                  <div className={`flex items-center gap-1 text-sm ${
                    kpi.trend === 'up' ? 'text-mercer-success' : 'text-mercer-error'
                  }`}>
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

      {/* Charts Section */}
      <div className="grid grid-2 gap-8 mb-8">
        {/* Compensation Trends */}
        <div className="card">
          <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Compensation Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={compensationTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
              <Area type="monotone" dataKey="total" stackId="1" stroke="#0066cc" fill="#0066cc" fillOpacity={0.3} />
              <Area type="monotone" dataKey="base" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-mercer-blue rounded"></div>
              <span className="text-sm text-mercer-gray">Total Compensation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-mercer-success rounded"></div>
              <span className="text-sm text-mercer-gray">Base Salary</span>
            </div>
          </div>
        </div>

        {/* Market Comparison */}
        <div className="card">
          <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Market Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={marketComparison}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="market" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Median Salary']} />
              <Bar dataKey="median" fill="#0066cc" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Compensation Components & Risk Analysis */}
      <div className="grid grid-2 gap-8 mb-8">
        {/* Compensation Components */}
        <div className="card">
          <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Compensation Mix</h3>
          <ResponsiveContainer width="100%" height={200}>
            <RechartsPieChart>
              <Pie
                data={compensationComponents}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                dataKey="value"
              >
                {compensationComponents.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, '']} />
            </RechartsPieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {compensationComponents.map((component, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded" 
                    style={{ backgroundColor: component.color }}
                  ></div>
                  <span className="text-sm text-mercer-gray-dark">{component.name}</span>
                </div>
                <span className="text-sm font-medium text-mercer-gray-dark">{component.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Analysis */}
        <div className="card">
          <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Risk Assessment</h3>
          <div className="space-y-4">
            {riskFactors.map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 border border-mercer-border rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-mercer-gray-dark">{risk.factor}</span>
                  <span className={`text-sm font-medium ${risk.color}`}>{risk.status}</span>
                </div>
                <div className="w-full bg-mercer-gray-light rounded-full h-2">
                  <div 
                    className="bg-mercer-blue h-2 rounded-full transition-all duration-300"
                    style={{ width: `${risk.score}%` }}
                  ></div>
                </div>
                <div className="text-right text-xs text-mercer-gray mt-1">{risk.score}%</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="card">
        <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Strategic Recommendations</h3>
        <div className="grid grid-3 gap-6">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="text-blue-600" size={20} />
              <h4 className="font-semibold text-blue-800">Competitive Positioning</h4>
            </div>
            <p className="text-sm text-blue-700">
              Maintain 75th percentile positioning to attract top talent while managing cost pressures.
            </p>
          </div>
          
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="text-green-600" size={20} />
              <h4 className="font-semibold text-green-800">Market Opportunity</h4>
            </div>
            <p className="text-sm text-green-700">
              Technology sector showing 12.5% growth - consider strategic investments in tech roles.
            </p>
          </div>
          
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="text-orange-600" size={20} />
              <h4 className="font-semibold text-orange-800">Risk Mitigation</h4>
            </div>
            <p className="text-sm text-orange-700">
              Monitor market volatility closely - consider variable pay adjustments for high-risk roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompensationIntelligence
