import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Download, 
  Copy, 
  Edit, 
  Save, 
  Plus, 
  Trash2,
  Search,
  Building,
  MapPin,
  DollarSign,
  Users,
  Target,
  CheckCircle,
  AlertTriangle,
  Star,
  Briefcase
} from 'lucide-react'
import { useClient } from '../contexts/ClientContext'

const JobDescriptionGenerator = () => {
  const { currentClient } = useClient()
  const [jobTitle, setJobTitle] = useState('')
  const [department, setDepartment] = useState('')
  const [location, setLocation] = useState('')
  const [level, setLevel] = useState('')
  const [industry, setIndustry] = useState('')
  const [generatedJD, setGeneratedJD] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [savedJDs, setSavedJDs] = useState([])

  const departments = [
    'Technology', 'Sales', 'Marketing', 'Operations', 'Finance', 'HR', 'Legal', 'Product', 'Engineering'
  ]

  const locations = [
    'Remote', 'New York', 'San Francisco', 'London', 'Singapore', 'Tokyo', 'Berlin', 'Toronto', 'Sydney'
  ]

  const levels = [
    'Entry Level', 'Mid Level', 'Senior Level', 'Lead', 'Manager', 'Director', 'VP', 'C-Level'
  ]

  const industries = [
    'Technology', 'Healthcare', 'Financial Services', 'Manufacturing', 'Retail', 'Energy', 'Consulting'
  ]

  const sampleJDs = [
    {
      id: 1,
      title: 'Senior Cloud Architect',
      department: 'Technology',
      location: 'Singapore',
      level: 'Senior Level',
      status: 'Published',
      createdAt: '2024-01-15',
      applications: 45
    },
    {
      id: 2,
      title: 'Head of AI Strategy',
      department: 'Product',
      location: 'Remote',
      level: 'Director',
      status: 'Draft',
      createdAt: '2024-01-14',
      applications: 0
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Technology',
      location: 'New York',
      level: 'Mid Level',
      status: 'Published',
      createdAt: '2024-01-12',
      applications: 78
    }
  ]

  const generateJobDescription = async () => {
    setIsGenerating(true)
    
    // Simulate API call
    setTimeout(() => {
      const sampleJD = `
# ${jobTitle || 'Senior Cloud Architect'}

## Company Overview
We are a leading technology company at the forefront of digital transformation, committed to delivering innovative solutions that drive business success.

## Position Summary
We are seeking a highly skilled ${jobTitle || 'Senior Cloud Architect'} to join our ${department || 'Technology'} team. This role will be responsible for designing, implementing, and maintaining cloud infrastructure solutions that support our business objectives.

## Key Responsibilities
- Design and implement scalable cloud architecture solutions
- Collaborate with cross-functional teams to deliver high-quality solutions
- Ensure security and compliance standards are met
- Optimize cloud costs and performance
- Mentor junior team members and share best practices
- Stay current with emerging cloud technologies and trends

## Required Qualifications
- Bachelor's degree in Computer Science or related field
- 5+ years of experience in cloud architecture
- Strong knowledge of AWS, Azure, or Google Cloud Platform
- Experience with containerization technologies (Docker, Kubernetes)
- Excellent communication and leadership skills
- Relevant certifications preferred

## Preferred Qualifications
- Master's degree in Computer Science or related field
- Experience with DevOps practices and CI/CD pipelines
- Knowledge of infrastructure as code (Terraform, CloudFormation)
- Previous experience in ${industry || 'technology'} industry

## Compensation & Benefits
- Competitive salary based on market benchmarks
- Comprehensive health and wellness benefits
- Flexible work arrangements
- Professional development opportunities
- Equity participation program

## Location
${location || 'Remote'} - ${level || 'Senior Level'} position

## Application Process
Please submit your resume and cover letter through our application portal. We are an equal opportunity employer committed to diversity and inclusion.
      `
      setGeneratedJD(sampleJD)
      setIsGenerating(false)
    }, 2000)
  }

  const saveJobDescription = () => {
    const newJD = {
      id: Date.now(),
      title: jobTitle,
      department,
      location,
      level,
      status: 'Draft',
      createdAt: new Date().toISOString().split('T')[0],
      applications: 0
    }
    setSavedJDs([...savedJDs, newJD])
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedJD)
  }

  const downloadJD = () => {
    const element = document.createElement('a')
    const file = new Blob([generatedJD], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `${jobTitle || 'job-description'}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-mercer-gray-dark mb-2">Job Description Generator - {currentClient.name}</h1>
        <p className="text-mercer-gray">
          Create market-aligned, structured job descriptions ready for immediate use for {currentClient.industry} industry
        </p>
      </div>

      <div className="grid grid-2 gap-8">
        {/* Generator Form */}
        <div className="card">
          <h2 className="text-xl font-semibold text-mercer-gray-dark mb-6">Create New Job Description</h2>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-mercer-gray-dark mb-2">
                Job Title *
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mercer-gray" size={18} />
                <input
                  type="text"
                  placeholder="e.g., Senior Cloud Architect, Data Scientist"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="input pl-10"
                />
              </div>
            </div>

            <div className="grid grid-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-mercer-gray-dark mb-2">
                  Department
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mercer-gray" size={18} />
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="select pl-10"
                  >
                    <option value="">Select Department</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-mercer-gray-dark mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mercer-gray" size={18} />
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="select pl-10"
                  >
                    <option value="">Select Location</option>
                    {locations.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-mercer-gray-dark mb-2">
                  Level
                </label>
                <div className="relative">
                  <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mercer-gray" size={18} />
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="select pl-10"
                  >
                    <option value="">Select Level</option>
                    {levels.map(lvl => (
                      <option key={lvl} value={lvl}>{lvl}</option>
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
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="select pl-10"
                  >
                    <option value="">Select Industry</option>
                    {industries.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={generateJobDescription}
              disabled={isGenerating}
              className="btn btn-primary flex-1"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Generating...
                </>
              ) : (
                <>
                  <FileText size={18} />
                  Generate Job Description
                </>
              )}
            </button>
          </div>
        </div>

        {/* Saved Job Descriptions */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-mercer-gray-dark">Saved Job Descriptions</h2>
            <button className="btn btn-secondary text-sm">
              <Plus size={16} />
              New Template
            </button>
          </div>

          <div className="space-y-4">
            {sampleJDs.map((jd) => (
              <motion.div
                key={jd.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 border border-mercer-border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-mercer-gray-dark">{jd.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    jd.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {jd.status}
                  </span>
                </div>
                <div className="text-sm text-mercer-gray mb-3">
                  {jd.department} • {jd.location} • {jd.level}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-mercer-gray">
                    <span>{jd.applications} applications</span>
                    <span>Created {jd.createdAt}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-mercer-gray-light rounded">
                      <Edit size={14} />
                    </button>
                    <button className="p-1 hover:bg-mercer-gray-light rounded">
                      <Copy size={14} />
                    </button>
                    <button className="p-1 hover:bg-mercer-gray-light rounded text-red-600">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Generated Job Description */}
      {generatedJD && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mt-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-mercer-gray-dark">Generated Job Description</h2>
            <div className="flex gap-2">
              <button onClick={copyToClipboard} className="btn btn-secondary text-sm">
                <Copy size={16} />
                Copy
              </button>
              <button onClick={downloadJD} className="btn btn-secondary text-sm">
                <Download size={16} />
                Download
              </button>
              <button onClick={saveJobDescription} className="btn btn-primary text-sm">
                <Save size={16} />
                Save
              </button>
            </div>
          </div>

          <div className="bg-mercer-gray-light p-6 rounded-lg">
            <pre className="whitespace-pre-wrap text-sm text-mercer-gray-dark font-mono leading-relaxed">
              {generatedJD}
            </pre>
          </div>
        </motion.div>
      )}

      {/* Best Practices */}
      <div className="card mt-8">
        <h3 className="text-lg font-semibold text-mercer-gray-dark mb-6">Job Description Best Practices</h3>
        <div className="grid grid-3 gap-6">
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="text-green-600" size={20} />
              <h4 className="font-semibold text-green-800">Market Alignment</h4>
            </div>
            <p className="text-sm text-green-700">
              Our JDs are benchmarked against market data to ensure competitive positioning and accurate requirements.
            </p>
          </div>
          
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Star className="text-blue-600" size={20} />
              <h4 className="font-semibold text-blue-800">Inclusive Language</h4>
            </div>
            <p className="text-sm text-blue-700">
              All descriptions use inclusive language and focus on skills and qualifications rather than demographics.
            </p>
          </div>
          
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="text-orange-600" size={20} />
              <h4 className="font-semibold text-orange-800">Compliance Ready</h4>
            </div>
            <p className="text-sm text-orange-700">
              Descriptions are structured to meet legal requirements and best practices for fair hiring.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDescriptionGenerator
