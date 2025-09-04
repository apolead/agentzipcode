'use client'

import { useState, useEffect } from 'react'
import { Search, CheckCircle, XCircle, AlertCircle, Phone, MessageSquare } from 'lucide-react'
import ZipCodeLookup from '@/components/ZipCodeLookup'
import ScriptDisplay from '@/components/ScriptDisplay'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Hero Section - Compact */}
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-apo-text-dark mb-2">
          Agent Call <span className="text-apo-light-purple">Dashboard</span>
        </h1>
        <p className="text-sm text-apo-text-medium max-w-xl mx-auto">
          Professional tools for zip code lookup and call scripts
        </p>
      </div>

      {/* Side-by-side Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Scripts Section - Left Side (3/4 width) */}
        <div className="lg:col-span-3">
          <ScriptDisplay />
        </div>
        
        {/* Zip Code Lookup - Right Side (1/4 width) */}
        <div className="lg:col-span-1">
          <ZipCodeLookup />
        </div>
      </div>
    </div>
  )
}