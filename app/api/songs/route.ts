import { NextResponse } from 'next/server'

import { songs } from '@/server/songs'

export async function GET() {
  try {
    return NextResponse.json(songs, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro interno do sistema.' },
      { status: 500 }
    )
  }
}
