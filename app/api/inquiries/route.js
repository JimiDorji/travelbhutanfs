import { prisma } from '../../../lib/prisma'  // Use this instead
import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const body = await request.json()

        // Parse dates if they exist
        const startDate = body.start_date ? new Date(body.start_date) : null
        const endDate = body.end_date ? new Date(body.end_date) : null

        const inquiry = await prisma.inquiry.create({
            data: {
                firstName: body.first_name,
                lastName: body.last_name,
                email: body.email,
                phone: body.phone,
                startDate: startDate,
                endDate: endDate,
                message: body.message
            }
        })

        return NextResponse.json(inquiry)
    } catch (error) {
        console.error('Error creating inquiry:', error)
        return NextResponse.json(
            { error: 'Failed to create inquiry' },
            { status: 500 }
        )
    }
}