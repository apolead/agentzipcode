'use client'

import React from 'react'
import { BookOpen } from 'lucide-react'

export default function ScriptDisplay() {
  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-apo-text-dark mb-2 flex items-center">
          <BookOpen className="w-5 h-5 mr-2 text-apo-purple" />
          Agent Scripts
        </h2>
        <p className="text-sm text-apo-text-medium">
          Script content area - simplified interface
        </p>
      </div>

      <div className="bg-apo-white rounded-lg shadow-md p-6 border border-gray-100 text-center">
        <div className="text-apo-text-medium">
          <BookOpen className="w-12 h-12 mx-auto mb-4 text-apo-purple opacity-50" />
          <p className="text-sm font-medium mb-2">Agent Script Interface</p>
          <p className="text-xs text-apo-text-light">
            Use Quick Actions in the sidebar to manage script sections
          </p>
        </div>
      </div>
    </div>
  )
}