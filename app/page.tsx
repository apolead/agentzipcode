'use client'

import { useState, useEffect } from 'react'
import { Search, CheckCircle, XCircle, AlertCircle, BookOpen, Phone, MessageSquare } from 'lucide-react'
import ZipCodeLookup from '@/components/ZipCodeLookup'
import ScriptDisplay from '@/components/ScriptDisplay'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('zipcode')

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-apo-text-dark mb-4">
          Agent Call <span className="text-apo-light-purple">Dashboard</span>
        </h1>
        <p className="text-lg text-apo-text-medium max-w-2xl mx-auto leading-relaxed">
          Professional tools for ApoLead agents featuring zip code lookup and comprehensive call scripts for exceptional customer service.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-apo-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex border-b border-gray-100">
          <button
            onClick={() => setActiveTab('zipcode')}
            className={`flex items-center px-8 py-6 font-semibold text-lg transition-all ${
              activeTab === 'zipcode'
                ? 'border-b-3 border-apo-purple text-apo-purple bg-purple-50'
                : 'text-apo-text-light hover:text-apo-purple hover:bg-gray-50'
            }`}
          >
            <Search className="w-6 h-6 mr-3" />
            Zip Code Lookup
          </button>
          <button
            onClick={() => setActiveTab('scripts')}
            className={`flex items-center px-8 py-6 font-semibold text-lg transition-all ${
              activeTab === 'scripts'
                ? 'border-b-3 border-apo-purple text-apo-purple bg-purple-50'
                : 'text-apo-text-light hover:text-apo-purple hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-6 h-6 mr-3" />
            Agent Scripts
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-0">
          {activeTab === 'zipcode' && <ZipCodeLookup />}
          {activeTab === 'scripts' && <ScriptDisplay />}
        </div>
      </div>
    </div>
  )
}