import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  MapPin, 
  Building, 
  TrendingUp, 
  Users, 
  DollarSign,
  BarChart3,
  Download,
  Filter,
  Target
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { useClient } from '../contexts/ClientContext'

const JobBenchmarking = () => {
  const { currentClient } = useClient()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('')

  const locations = [
    'Global', 'North America', 'Europe', 'Asia Pacific', 'Latin America', 
    'Singapore', 'United States', 'United Kingdom', 'Germany', 'Japan'
  ]

  const industries = [
    'Technology', 'Healthcare', 'Financial Services', 'Manufacturing', 
    'Retail', 'Energy', 'Consulting', 'Pharmaceuticals'
  ]

  const levels = [
    'Entry Level', 'Mid Level', 'Senior Level', 'Executive', 'C-Suite'
  ]

  // Sample benchmark data
  const benchmarkData = [
    { percentile: '25th', salary: 85000, count: 120 },
    { percentile: '50th', salary: 105000, count: 180 },
    { percentile: '75th', salary: 130000, count: 150 },
    { percentile: '90th', salary: 155000, count: 80 },
    { percentile: '95th', salary: 180000, count: 40 }
  ]

  const marketComparison = [
    { market: 'Singapore', salary: 105000, trend: '+8.2%' },
    { market: 'US West Coast', salary: 125000, trend: '+6.5%' },
    { market: 'UK London', salary: 95000, trend: '+7.1%' },
    { market: 'Germany', salary: 88000, trend: '+5.8%' },
    { market: 'Japan Tokyo', salary: 92000, trend: '+4.2%' }
  ]

  const roleDistribution = [
    { name: 'Senior', value: 35, color: '#0066cc' },
    { name: 'Mid-Level', value: 40, color: '#3388dd' },
    { name: 'Entry', value: 20, color: '#66aaff' },
    { name: 'Executive', value: 5, color: '#004499' }
  ]

  const handleSearch = () => {
    // Simulate API call
    console.log('Searching for:', { searchTerm, selectedLocation, selectedIndustry, selectedLevel })
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-mercer-gray-dark mb-2">Job Benchmarking - {currentClient.name}</h1>
        <p className="text-mercer-gray">
          Access global, regional, and industry-specific compensation data aligned with Mercer standards for {currentClient.industry} industry
        </p>
      </div>

      {/* Search Interface */}
      <div className="card mb-8">
        <h2 className="text-xl font-semibold text-mercer-gray-dark mb-6">Benchmark Search</h2>
        <div className="grid grid-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-mercer-gray-dark mb-2">
              Job Title or Role
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mercer-gray" size={18} />
              <input
                type="text"
                placeholder="e.g., Senior Cloud Architect, Data Scientist"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-10"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-mercer-gray-dark mb-2">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mercer-gray" size={18} />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="select pl-10"
              >
                <option value="">Select Location</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-mercer-gray-dark mb-2">
              Industry
            </label>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mercer-gray" size={18} />
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="select pl-10"
              >
                <option value="">Select Industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-mercer-gray-dark mb-2">
              Level
            </label>
            <div className="relative">
              <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mercer-gray" size={18} />
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="select pl-10"
              >
                <option value="">Select Level</option>
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button onClick={handleSearch} className="btn btn-primary">
            <Search size={18} />
            Benchmark Role
          </button>
          <button className="btn btn-secondary">
            <Filter size={18} />
            Advanced Filters
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="grid grid-2 gap-8">
        {/* Compensation Benchmark */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-mercer-gray-dark">Compensation Benchmark</h3>
            <button className="btn btn-secondary text-sm">
              <Download size={16} />
              Export
            </button>
          </div>
          
          <div className="mb-6">
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-mercer-blue mb-1">$105,000</div>
              <div className="text-sm text-mercer-gray">50th Percentile Base Salary</div>
            </div>
            
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={benchmarkData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="percentile" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Salary']} />
                <Bar dataKey="salary" fill="#0066cc" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-3">
            {benchmarkData.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-mercer-gray-light rounded-lg">
                <span className="font-medium">{item.percentile} Percentile</span>
                <span className="font-semibold text-mercer-blue">${item.salary.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Market Comparison */}
        <div className="card">
          <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Market Comparison</h3>
          
          <div className="space-y-4">
            {marketComparison.map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 border border-mercer-border rounded-lg hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="font-medium text-mercer-gray-dark">{market.market}</div>
                  <div className="text-sm text-mercer-gray">Base Salary</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-mercer-blue">${market.salary.toLocaleString()}</div>
                  <div className="text-sm text-mercer-success flex items-center gap-1">
                    <TrendingUp size={14} />
                    {market.trend}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Insights */}
      <div className="grid grid-3 gap-6 mt-8">
        <div className="card">
          <h3 className="text-lg font-semibold text-mercer-gray-dark mb-4">Role Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={roleDistribution}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                dataKey="value"
              >
                {roleDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-mercer-gray-dark mb-4">Key Insights</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-mercer-blue rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-mercer-gray-dark">Market Premium</p>
                <p className="text-xs text-mercer-gray">15% above market median</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-mercer-success rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-mercer-gray-dark">High Demand</p>
                <p className="text-xs text-mercer-gray">47% increase in job postings</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-mercer-warning rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-mercer-gray-dark">Skills Gap</p>
                <p className="text-xs text-mercer-gray">Cloud expertise in high demand</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-mercer-gray-dark mb-4">Recommendations</h3>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-medium text-blue-800">Competitive Positioning</p>
              <p className="text-xs text-blue-600">Target 75th percentile for retention</p>
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm font-medium text-green-800">Market Opportunity</p>
              <p className="text-xs text-green-600">Consider Singapore expansion</p>
            </div>
            <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-sm font-medium text-orange-800">Risk Mitigation</p>
              <p className="text-xs text-orange-600">Monitor competitor moves</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobBenchmarking
