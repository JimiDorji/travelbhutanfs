import { prisma } from '../../../lib/prisma'  // Use this instead
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const testimonials = await prisma.testimonial.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
        return NextResponse.json(testimonials)
    } catch (error) {
        console.error('Error fetching testimonials:', error)
        return NextResponse.json(
            { error: 'Failed to fetch testimonials' },
            { status: 500 }
        )
    }
}

export async function POST(request) {
    try {
        const body = await request.json()
        const testimonial = await prisma.testimonial.create({
            data: {
                name: body.name,
                country: body.country,
                quote: body.quote,
                rating: body.rating ? parseInt(body.rating) : null,
                avatar: body.avatar,
                stay: body.stay
            }
        })
        return NextResponse.json(testimonial)
    } catch (error) {
        console.error('Error creating testimonial:', error)
        return NextResponse.json(
            { error: 'Failed to create testimonial' },
            { status: 500 }
        )
    }
}