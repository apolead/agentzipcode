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
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-12 h-12 text-green-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-green-800">ZIP CODE ACTIVE</h3>
                <p className="text-green-600 text-lg">This area is currently serviced</p>
              </div>
            </div>
            {result.data && (
              <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-apo-text-medium mr-3" />
                    <div>
                      <div className="text-sm text-apo-text-light">Zip Code</div>
                      <div className="font-bold text-lg text-apo-text-dark">{result.data.zip}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-apo-text-light">City</div>
                    <div className="font-bold text-lg text-apo-text-dark">{result.data.city}</div>
                  </div>
                  <div>
                    <div className="text-sm text-apo-text-light">State</div>
                    <div className="font-bold text-lg text-apo-text-dark">{result.data.state_name}</div>
                  </div>
                </div>
              </div>
            )}
            <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg border border-green-300">
              <p className="text-green-800 font-bold text-lg mb-2">✅ Proceed with the call</p>
              <p className="text-green-700">Continue with contractor matching process</p>
            </div>
          </div>
        )
      case 'inactive':
        return (
          <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <XCircle className="w-12 h-12 text-red-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-red-800">ZIP CODE NOT ACTIVE</h3>
                <p className="text-red-600 text-lg">This area is not currently serviced</p>
              </div>
            </div>
            {result.data && (
              <div className="bg-white rounded-md p-4 border border-red-200 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="font-medium">{result.data.zip}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">City: </span>
                    <span className="font-medium">{result.data.city}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">State: </span>
                    <span className="font-medium">{result.data.state_name}</span>
                  </div>
                </div>
              </div>
            )}
            <div className="p-4 bg-red-100 rounded-md">
              <p className="text-red-800 font-semibold">❌ Use this script:</p>
              <p className="text-sm text-red-700 mt-2 italic">
                "I'm so sorry, it looks like we don't have any contractors in your area for that type of job right now. 
                I really appreciate you taking the time with me today. Please check back with us in the future as we're 
                always adding new professionals."
              </p>
            </div>
          </div>
        )
      case 'not_found':
        return (
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <AlertCircle className="w-12 h-12 text-yellow-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-yellow-800">ZIP CODE NOT IN DATABASE</h3>
                <p className="text-yellow-600 text-lg">This zip code was not found in our records</p>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-lg border border-yellow-300">
              <p className="text-yellow-800 font-bold text-lg mb-2">⚠️ Action Required:</p>
              <p className="text-yellow-700">
                Please verify the zip code with the customer and check again. If confirmed, 
                treat as inactive and use the not available script.
              </p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-apo-text-dark mb-4">Zip Code Lookup</h2>
        <p className="text-lg text-apo-text-medium leading-relaxed">Enter a zip code to check service availability in that area</p>
      </div>

      {/* Search Input */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <div className="flex-1 relative">
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter zip code (e.g., 90210)"
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-apo-purple focus:border-apo-purple text-lg font-medium transition-all"
              maxLength={5}
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-apo-text-light w-6 h-6" />
          </div>
          <button
            onClick={handleSearch}
            disabled={loading || !zipCode.trim()}
            className="px-8 py-4 bg-apo-purple text-white rounded-lg font-semibold hover:bg-apo-hover-purple disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 shadow-lg"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Search className="w-6 h-6" />
            )}
            Search Area
          </button>
        </div>
      </div>

      {/* Results */}
      {getStatusDisplay()}

      {/* Quick Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-apo-cyan to-blue-400 p-6 rounded-xl text-center text-white shadow-lg">
          <div className="text-3xl font-bold mb-2">{zipCodeData.length}</div>
          <div className="text-cyan-100 font-medium">Total Zip Codes</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-center text-white shadow-lg">
          <div className="text-3xl font-bold mb-2">
            {zipCodeData.filter(z => z.active?.toLowerCase() === 'yes').length}
          </div>
          <div className="text-green-100 font-medium">Active Areas</div>
        </div>
        <div className="bg-gradient-to-br from-apo-purple to-apo-light-purple p-6 rounded-xl text-center text-white shadow-lg">
          <div className="text-3xl font-bold mb-2">
            {zipCodeData.filter(z => z.active?.toLowerCase() !== 'yes').length}
          </div>
          <div className="text-purple-100 font-medium">Inactive Areas</div>
        </div>
      </div>
    </div>
  )
}