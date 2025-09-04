'use client'

import { useState, useEffect } from 'react'
import { Search, CheckCircle, XCircle, AlertCircle, MapPin } from 'lucide-react'
import Papa from 'papaparse'

interface ZipCodeData {
  zip: string
  city: string
  state_name: string
  active: string
}

export default function ZipCodeLookup() {
  const [zipCode, setZipCode] = useState('')
  const [result, setResult] = useState<{
    status: 'active' | 'inactive' | 'not_found' | null
    data?: ZipCodeData
  }>({ status: null })
  const [loading, setLoading] = useState(false)
  const [zipCodeData, setZipCodeData] = useState<ZipCodeData[]>([])

  useEffect(() => {
    // Load the CSV data
    const loadData = async () => {
      try {
        const response = await fetch('/data/zipcodes.csv')
        const csvText = await response.text()
        
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            setZipCodeData(results.data as ZipCodeData[])
          }
        })
      } catch (error) {
        console.error('Error loading zip code data:', error)
      }
    }

    loadData()
  }, [])

  const handleSearch = () => {
    if (!zipCode.trim()) return

    setLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      const foundZip = zipCodeData.find(item => item.zip === zipCode.trim())
      
      if (foundZip) {
        setResult({
          status: foundZip.active.toLowerCase() === 'yes' ? 'active' : 'inactive',
          data: foundZip
        })
      } else {
        setResult({ status: 'not_found' })
      }
      
      setLoading(false)
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const getStatusDisplay = () => {
    switch (result.status) {
      case 'active':
        return (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
            <div className="flex items-center mb-3">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <div>
                <h3 className="text-sm font-bold text-green-800">ACTIVE</h3>
                <p className="text-xs text-green-600">Area is serviced</p>
              </div>
            </div>
            {result.data && (
              <div className="bg-white rounded p-3 border border-green-200 mb-3">
                <div className="space-y-2">
                  <div className="flex items-center text-xs">
                    <MapPin className="w-3 h-3 text-apo-text-medium mr-1" />
                    <span className="font-medium">{result.data.zip} - {result.data.city}, {result.data.state_name}</span>
                  </div>
                </div>
              </div>
            )}
            <div className="p-2 bg-green-100 rounded text-center">
              <p className="text-green-800 font-medium text-xs">✅ Proceed with call</p>
            </div>
          </div>
        )
      case 'inactive':
        return (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <div className="flex items-center mb-3">
              <XCircle className="w-5 h-5 text-red-600 mr-2" />
              <div>
                <h3 className="text-sm font-bold text-red-800">NOT ACTIVE</h3>
                <p className="text-xs text-red-600">Area not serviced</p>
              </div>
            </div>
            {result.data && (
              <div className="bg-white rounded p-3 border border-red-200 mb-3">
                <div className="flex items-center text-xs">
                  <MapPin className="w-3 h-3 text-apo-text-medium mr-1" />
                  <span className="font-medium">{result.data.zip} - {result.data.city}, {result.data.state_name}</span>
                </div>
              </div>
            )}
            <div className="p-2 bg-red-100 rounded">
              <p className="text-red-800 font-medium text-xs mb-1">❌ Use not available script</p>
              <p className="text-red-700 text-xs italic">
                "I'm sorry, we don't have contractors in your area for that job right now..."
              </p>
            </div>
          </div>
        )
      case 'not_found':
        return (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <div className="flex items-center mb-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
              <div>
                <h3 className="text-sm font-bold text-yellow-800">NOT FOUND</h3>
                <p className="text-xs text-yellow-600">Not in database</p>
              </div>
            </div>
            <div className="p-2 bg-yellow-100 rounded">
              <p className="text-yellow-800 font-medium text-xs mb-1">⚠️ Verify with customer</p>
              <p className="text-yellow-700 text-xs">
                Double-check zip code, then treat as inactive if confirmed.
              </p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-apo-white rounded-lg shadow-lg p-4 sticky top-24">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-apo-text-dark mb-2 flex items-center">
          <Search className="w-4 h-4 mr-2 text-apo-purple" />
          Zip Code Lookup
        </h2>
      </div>

      {/* Compact Search Input */}
      <div className="mb-4">
        <div className="space-y-3">
          <div className="relative">
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter zip code"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-apo-purple focus:border-apo-purple text-sm transition-all"
              maxLength={5}
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={loading || !zipCode.trim()}
            className="w-full px-4 py-2 bg-apo-purple text-white rounded-md font-medium hover:bg-apo-hover-purple disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all text-sm"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Search className="w-4 h-4" />
            )}
            Search
          </button>
        </div>
      </div>

      {/* Results */}
      {getStatusDisplay()}

      {/* Compact Stats */}
      <div className="mt-4 space-y-2">
        <div className="bg-gradient-to-r from-apo-cyan to-blue-400 p-2 rounded text-center text-white">
          <div className="text-sm font-bold">{zipCodeData.length}</div>
          <div className="text-xs">Total Areas</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded text-center text-white">
          <div className="text-sm font-bold">
            {zipCodeData.filter(z => z.active?.toLowerCase() === 'yes').length}
          </div>
          <div className="text-xs">Active</div>
        </div>
        <div className="bg-gradient-to-r from-apo-purple to-apo-light-purple p-2 rounded text-center text-white">
          <div className="text-sm font-bold">
            {zipCodeData.filter(z => z.active?.toLowerCase() !== 'yes').length}
          </div>
          <div className="text-xs">Inactive</div>
        </div>
      </div>
    </div>
  )
}