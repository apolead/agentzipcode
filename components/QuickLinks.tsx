'use client'

import React from 'react'
import { ExternalLink, Globe, FileText, Shield, ClipboardList } from 'lucide-react'

export default function QuickLinks() {
  const quickLinks = [
    {
      id: 'proshield',
      title: 'ProShield Services',
      url: 'https://www.proshield.services/',
      description: 'Verify contractors in area',
      icon: <Shield className="w-3 h-3" />,
      color: 'bg-apo-purple',
      purpose: 'Check contractor availability'
    },
    {
      id: 'thumbtack-terms',
      title: 'Thumbtack Terms',
      url: 'https://thumbtack.com/terms/',
      description: 'Terms & Conditions',
      icon: <FileText className="w-3 h-3" />,
      color: 'bg-blue-500',
      purpose: 'Customer compliance review'
    },
    {
      id: 'thumbtack-privacy',
      title: 'Thumbtack Privacy',
      url: 'https://thumbtack.com/privacy/',
      description: 'Privacy Policy',
      icon: <FileText className="w-3 h-3" />,
      color: 'bg-green-500',
      purpose: 'Privacy policy reference'
    },
    {
      id: 'roofing-order',
      title: 'Roofing Order Form',
      url: 'https://forms.gle/Rf8TMzL6EZzc9TEKA',
      description: 'Submit roofing orders',
      icon: <ClipboardList className="w-3 h-3" />,
      color: 'bg-orange-500',
      purpose: 'Process roofing project orders'
    },
    {
      id: 'bath-order',
      title: 'Bath Order Form',
      url: 'https://forms.gle/wLc2msP8yCb355Kj6',
      description: 'Submit bath orders',
      icon: <ClipboardList className="w-3 h-3" />,
      color: 'bg-blue-600',
      purpose: 'Process bathroom project orders'
    },
    {
      id: 'kitchen-order',
      title: 'Kitchen Order Form',
      url: 'https://forms.gle/NhdWcJEZbTSVkKpM9',
      description: 'Submit kitchen orders',
      icon: <ClipboardList className="w-3 h-3" />,
      color: 'bg-red-500',
      purpose: 'Process kitchen project orders'
    },
    {
      id: 'windows-order',
      title: 'Windows Order Form',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSduNW1-_0tkCz1PYmY96C8Hizxu-hmliQ6GPrmvq05HIajOUA/viewform?usp=sharing&ouid=102385696802008243214',
      description: 'Submit window orders',
      icon: <ClipboardList className="w-3 h-3" />,
      color: 'bg-indigo-500',
      purpose: 'Process window project orders'
    }
  ]

  const handleLinkClick = (url: string, title: string) => {
    // Open in new tab/window
    window.open(url, '_blank', 'noopener,noreferrer')
    
    // Optional: Track click for analytics
    console.log(`Agent clicked: ${title} - ${url}`)
  }

  return (
    <div className="bg-apo-white rounded-lg shadow-lg p-4 mt-4">
      <div className="mb-3">
        <h3 className="text-sm font-bold text-apo-text-dark mb-2 flex items-center">
          <Globe className="w-4 h-4 mr-2 text-apo-cyan" />
          Web Links
        </h3>
        <p className="text-xs text-apo-text-medium">
          External resources from agent scripts
        </p>
      </div>

      <div className="space-y-2">
        {quickLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleLinkClick(link.url, link.title)}
            className="w-full text-left p-2 rounded-md hover:bg-blue-50 transition-colors border border-gray-100 hover:border-apo-cyan group"
            title={`${link.purpose} - Opens in new tab`}
          >
            <div className="flex items-center space-x-2">
              <div className={`p-1 ${link.color} text-white rounded`}>
                {link.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-apo-text-dark group-hover:text-apo-cyan truncate">
                  {link.title}
                </div>
                <div className="text-xs text-apo-text-light truncate">
                  {link.description}
                </div>
              </div>
              <ExternalLink className="w-3 h-3 text-apo-text-light group-hover:text-apo-cyan flex-shrink-0" />
            </div>
          </button>
        ))}
      </div>

    </div>
  )
}