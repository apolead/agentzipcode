'use client'

import React from 'react'
import { Phone, AlertTriangle, MessageSquare, PhoneCall, ExternalLink } from 'lucide-react'

interface ScriptLinksProps {
  onSectionClick: (sectionId: string) => void
}

export default function ScriptLinks({ onSectionClick }: ScriptLinksProps) {
  const scriptSections = [
    {
      id: 'inbound',
      title: '📞 Inbound Calls',
      icon: <Phone className="w-3 h-3" />,
      color: 'bg-blue-500',
      description: 'Greeting & Discovery'
    },
    {
      id: 'compliance',
      title: '📜 Compliance',
      icon: <AlertTriangle className="w-3 h-3" />,
      color: 'bg-yellow-500',
      description: 'Thumbtack Terms'
    },
    {
      id: 'quote',
      title: '🏗️ Quote Building',
      icon: <MessageSquare className="w-3 h-3" />,
      color: 'bg-green-500',
      description: 'Contractor Matching'
    },
    {
      id: 'objections',
      title: '✅ Objections',
      icon: <AlertTriangle className="w-3 h-3" />,
      color: 'bg-red-500',
      description: 'Common Rebuttals'
    },
    {
      id: 'outbound',
      title: '📞 Outbound',
      icon: <PhoneCall className="w-3 h-3" />,
      color: 'bg-purple-500',
      description: 'Follow-up Scripts'
    }
  ]

  return (
    <div className="bg-apo-white rounded-lg shadow-lg p-4 mt-4">
      <div className="mb-3">
        <h3 className="text-sm font-bold text-apo-text-dark mb-2 flex items-center">
          <ExternalLink className="w-4 h-4 mr-2 text-apo-purple" />
          Quick Script Access
        </h3>
        <p className="text-xs text-apo-text-medium">
          Click to jump to script sections
        </p>
      </div>

      <div className="space-y-2">
        {scriptSections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            className="w-full text-left p-2 rounded-md hover:bg-purple-50 transition-colors border border-gray-100 hover:border-apo-purple group"
          >
            <div className="flex items-center space-x-2">
              <div className={`p-1 ${section.color} text-white rounded`}>
                {section.icon}
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-apo-text-dark group-hover:text-apo-purple">
                  {section.title}
                </div>
                <div className="text-xs text-apo-text-light">
                  {section.description}
                </div>
              </div>
              <ExternalLink className="w-3 h-3 text-apo-text-light group-hover:text-apo-purple" />
            </div>
          </button>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="text-xs font-medium text-apo-text-dark mb-2">Quick Actions:</div>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              // Expand all sections
              const buttons = document.querySelectorAll('[data-section-toggle]')
              buttons.forEach(button => {
                const section = button.getAttribute('data-section-toggle')
                if (section && !document.querySelector(`[data-section-content="${section}"]`)) {
                  (button as HTMLElement).click()
                }
              })
            }}
            className="text-xs p-2 bg-apo-purple text-white rounded hover:bg-apo-hover-purple transition-colors"
          >
            Expand All
          </button>
          <button
            onClick={() => {
              // Collapse all sections
              const openSections = document.querySelectorAll('[data-section-content]')
              const buttons = document.querySelectorAll('[data-section-toggle]')
              buttons.forEach(button => {
                const section = button.getAttribute('data-section-toggle')
                if (section && document.querySelector(`[data-section-content="${section}"]`)) {
                  (button as HTMLElement).click()
                }
              })
            }}
            className="text-xs p-2 border border-apo-purple text-apo-purple rounded hover:bg-apo-purple hover:text-white transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>
    </div>
  )
}