import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), 'ProShield Zip Codes - Current master list.csv')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    
    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      }
    })
  } catch (error) {
    console.error('Error reading ZIP code data:', error)
    return NextResponse.json(
      { error: 'Failed to load ZIP code data' },
      { status: 500 }
    )
  }
}