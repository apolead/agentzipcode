'use client'

import { useState, useEffect } from 'react'
import { Search, CheckCircle, XCircle, AlertCircle, Phone, MessageSquare } from 'lucide-react'
import ZipCodeLookup from '@/components/ZipCodeLookup'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Hero Section - Compact */}
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-apo-text-dark mb-2">
          Agent Call <span className="text-apo-light-purple">Dashboard</span>
        </h1>
        <p className="text-sm text-apo-text-medium max-w-xl mx-auto">
          Professional zip code lookup tool for agents
        </p>
      </div>

      {/* Centered Layout */}
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <ZipCodeLookup />
        </div>
      </div>
    </div>
  )
}