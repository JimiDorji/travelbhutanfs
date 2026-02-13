// prisma/seed.js
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    const testimonials = [
        {
            name: "Sarah Thompson",
            country: "United Kingdom",
            quote: "Travel Bhutan exceeded every expectation. The guides were incredibly knowledgeable, and every detail was handled with care.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
            stay: "12-Day Cultural Journey"
        },
        {
            name: "Daniel Müller",
            country: "Germany",
            quote: "From monasteries to mountain passes, the experience felt deeply personal and profoundly authentic.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            stay: "Himalayan Trek Adventure"
        }
    ]

    for (const testimonial of testimonials) {
        await prisma.testimonial.create({
            data: testimonial
        })
    }

    console.log('Database seeded successfully!')
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })