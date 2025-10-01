import React, { createContext, useContext, useState } from 'react'

const ClientContext = createContext()

export const useClient = () => {
  const context = useContext(ClientContext)
  if (!context) {
    throw new Error('useClient must be used within a ClientProvider')
  }
  return context
}

export const ClientProvider = ({ children }) => {
  const [selectedClient, setSelectedClient] = useState('microsoft')

  const clients = [
    {
      id: 'microsoft',
      name: 'Microsoft Corporation',
      industry: 'Technology',
      employees: 221000,
      regions: ['North America', 'Europe', 'Asia Pacific'],
      logo: 'M',
      color: '#0078d4'
    },
    {
      id: 'jpmorgan',
      name: 'JPMorgan Chase & Co.',
      industry: 'Financial Services',
      employees: 293000,
      regions: ['North America', 'Europe', 'Asia Pacific'],
      logo: 'J',
      color: '#0066b2'
    },
    {
      id: 'pfizer',
      name: 'Pfizer Inc.',
      industry: 'Pharmaceuticals',
      employees: 83000,
      regions: ['North America', 'Europe', 'Asia Pacific'],
      logo: 'P',
      color: '#009639'
    },
    {
      id: 'walmart',
      name: 'Walmart Inc.',
      industry: 'Retail',
      employees: 2300000,
      regions: ['North America', 'Europe', 'Asia Pacific'],
      logo: 'W',
      color: '#004c91'
    },
    {
      id: 'samsung',
      name: 'Samsung Electronics',
      industry: 'Technology',
      employees: 267000,
      regions: ['Asia Pacific', 'North America', 'Europe'],
      logo: 'S',
      color: '#1428a0'
    },
    {
      id: 'unilever',
      name: 'Unilever PLC',
      industry: 'Consumer Goods',
      employees: 148000,
      regions: ['Europe', 'Asia Pacific', 'North America'],
      logo: 'U',
      color: '#00a0e3'
    }
  ]

  const getCurrentClient = () => {
    return clients.find(client => client.id === selectedClient) || clients[0]
  }

  const value = {
    selectedClient,
    setSelectedClient,
    clients,
    currentClient: getCurrentClient()
  }

  return (
    <ClientContext.Provider value={value}>
      {children}
    </ClientContext.Provider>
  )
}
