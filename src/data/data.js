const tourdata = [
    {
        slug: "bhutan-tour-3-days",
        tour_name: "Bhutan Tour - 3 Days",
        title: "Bhutan Tour - 3 Days",
        category: "cultural",
        days: 3,
        duration: "3 Days",
        travelers: "2-8",
        rating: "4.8",
        image: "/tour/img/thimphu-festivals.avif",
        highlights: ["Tiger's Nest Monastery", "Rinpung Dzong", "Ta Dzong Museum", "Paro Valley"],
        itinerary: [
            {
                day: 1,
                title: "Arrival at Paro",
                location: "Paro",
                activities: [
                    { time: "Arrival", description: "Arrive at Paro International Airport with views of the Himalayan peaks and the serene Paro valley." },
                    { time: "Arrival Formalities", description: "Complete immigration and customs, then meet the local guide and driver." },
                    { time: "Transfer", description: "Transfer to hotel, check-in, acclimatize to altitude, and relax." },
                    { time: "Lunch", description: "Lunch at a local restaurant featuring Bhutanese vegetarian and non-vegetarian dishes." },
                    { time: "Sightseeing", description: "Visit Rinpung Dzong, a fortress serving as both religious and administrative center known for intricate Bhutanese architecture." },
                    { time: "Sightseeing", description: "Explore Ta Dzong, the National Museum, showcasing Bhutan’s history, culture, and religious heritage." },
                    { time: "Evening", description: "Leisure walk through Paro’s main street with cafes, handicraft shops, and local goods." },
                    { time: "Dinner", description: "Dinner at hotel with Bhutanese, Indian, and international cuisine." },
                    { time: "Overnight", description: "Overnight stay in Paro." }
                ]
            },
            {
                day: 2,
                title: "Hike to Tiger’s Nest Monastery and Paro Sightseeing",
                location: "Paro",
                activities: [
                    { time: "Morning", description: "Early breakfast at hotel followed by drive to the base of Tiger’s Nest trailhead." },
                    { time: "Hike", description: "Begin 4 km uphill hike (approx. 2 hours one way) to Tiger’s Nest Monastery at 3120 m altitude." },
                    { time: "Break", description: "Stop at the halfway cafeteria for refreshments and panoramic views of the monastery on the cliff." },
                    { time: "Exploration", description: "Explore Tiger’s Nest Monastery and learn about Guru Rinpoche’s role in introducing Buddhism to Bhutan." },
                    { time: "Lunch", description: "Descend to cafeteria for lunch with scenic valley views." },
                    { time: "Return", description: "Hike down to base and drive back to Paro." },
                    { time: "Afternoon Sightseeing", description: "Visit Paro Dzong (Rinpung Dzong) to explore its architecture and administrative significance." },
                    { time: "Evening", description: "Explore Kyichu Lhakhang, one of Bhutan’s oldest temples dating back to the 7th century." },
                    { time: "Dinner", description: "Dinner at hotel or local restaurant with traditional Bhutanese dishes." },
                    { time: "Overnight", description: "Overnight stay in Paro and preparation for departure." }
                ]
            },
            {
                day: 3,
                title: "Departure from Paro",
                location: "Paro",
                activities: [
                    { time: "Morning", description: "Breakfast at hotel with final views of Paro valley." },
                    { time: "Leisure", description: "Free time for a short walk, souvenir shopping, or relaxation at hotel depending on flight time." },
                    { time: "Check-Out", description: "Complete hotel check-out and prepare travel documents." },
                    { time: "Transfer", description: "Airport transfer with assistance from guide and driver." },
                    { time: "Departure", description: "Flight check-in, boarding, and departure from Paro International Airport, concluding the 3-day Bhutan tour." }
                ]
            }
        ],
        includes: [
            "All ground transport in a private vehicle including airport and hotel transfers",
            "Comfortable accommodation throughout the tour",
            "Entrance fees to museums and monuments",
            "Bhutanese Tourist Visa fee",
            "Full board meals: breakfast, lunch, dinner, tea and snacks",
            "Private vehicle transportation as per itinerary",
            "Experienced English-speaking licensed Bhutanese guide",
            "Staff salary, allowance, equipment, food and clothing",
            "Mineral drinking water during the tour",
            "All government taxes and official expenses"
        ],
        excludes: [
            "International airfare to and from Paro",
            "Travel insurance (cancellation, medical, repatriation, etc.)",
            "Personal expenses such as calls, internet, laundry, beverages and alcohol",
            "Special filming, camera and drone permit fees",
            "Private or customized trip costs",
            "Tips for guide and driver",
            "Any services or activities not mentioned in the itinerary or cost includes section"
        ]
    },
    {
        slug: "bhutan-discovery-tour-4-days",
        tour_name: "Bhutan Discovery Tour - 4 Days",
        title: "Bhutan Discovery Tour - 4 Days",
        category: "cultural",
        days: 4,
        duration: "4 Days",
        travelers: "2-8",
        rating: "4.9",
        image: "/tour/img/unique-bhutan-tour.avif",
        highlights: ["Bhutan Gate", "Thimphu Dzong", "Punakha Valley", "Buddha Dordenma"],
        itinerary: [
            {
                "day": 1,
                "title": "Arrival in Paro and Transfer to Thimphu",
                "route": {
                    "from": "Paro",
                    "to": "Thimphu",
                    "distance_km": 65,
                    "drive_time": "1 hour",
                    "altitude_m": 2280
                },
                "activities": [
                    {
                        "time": "Arrival",
                        "description": "Arrive at Paro International Airport in a scenic valley surrounded by mountains and traditional Bhutanese architecture."
                    },
                    {
                        "time": "Meet and Greet",
                        "description": "Warm welcome by local guide and driver at the airport."
                    },
                    {
                        "time": "Transfer",
                        "description": "Scenic 1-hour drive (65 km) to Thimphu with views of Bhutanese landscapes."
                    },
                    {
                        "time": "Acclimatization",
                        "description": "Begin acclimatizing to the slightly higher altitude of Thimphu."
                    },
                    {
                        "time": "Hotel Check-In",
                        "description": "Check into hotel, relax, and freshen up after the flight."
                    },
                    {
                        "time": "Afternoon Exploration",
                        "description": "Leisure walk around Thimphu city, explore local cafes, and try Bhutanese cuisine including butter tea."
                    },
                    {
                        "time": "Dinner",
                        "description": "Dinner at hotel or local restaurant featuring Bhutanese dishes such as Ema Datshi and Red Rice."
                    },
                    {
                        "time": "Overnight",
                        "description": "Overnight stay in Thimphu."
                    }
                ]
            },
            {
                "day": 2,
                "title": "Thimphu Sightseeing and Drive Back to Paro",
                "route": {
                    "from": "Thimphu",
                    "to": "Paro",
                    "distance_km": 65,
                    "drive_time": "1 hour"
                },
                "activities": [
                    {
                        "time": "Morning",
                        "description": "Breakfast at hotel and start full-day sightseeing in Thimphu."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Visit National Memorial Chorten, built in memory of the third king and a center for daily religious activities."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Explore Tashichho Dzong, a monastery and fortress serving as the seat of government and monastic body."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Visit Folk Heritage Museum showcasing traditional Bhutanese lifestyle and house replica."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Explore Textile Museum to learn about Bhutan’s traditional weaving culture."
                    },
                    {
                        "time": "Lunch",
                        "description": "Lunch at a local restaurant with Bhutanese specialties such as Momos and Phaksha Paa."
                    },
                    {
                        "time": "Additional Sightseeing",
                        "description": "Visit Buddha Dordenma Statue at Kuensel Phodrang for panoramic views of Thimphu Valley and stop at Craft Bazaar for local handicrafts and textiles."
                    },
                    {
                        "time": "Drive",
                        "description": "Scenic 1-hour drive back to Paro retracing the lush valley route."
                    },
                    {
                        "time": "Evening",
                        "description": "Check into hotel in Paro and relax."
                    },
                    {
                        "time": "Dinner",
                        "description": "Dinner at hotel with traditional Bhutanese dishes."
                    },
                    {
                        "time": "Overnight",
                        "description": "Overnight stay in Paro."
                    }
                ]
            },
            {
                "day": 3,
                "title": "Hike to Tiger’s Nest Monastery and Paro Sightseeing",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Early Morning",
                        "description": "Early breakfast at hotel and drive to the base of Tiger’s Nest trailhead."
                    },
                    {
                        "time": "Hike",
                        "description": "Trek 4 km each way (approx. 2 hours ascent) to Tiger’s Nest Monastery at 3120 m altitude on a well-maintained but steep trail."
                    },
                    {
                        "time": "Cafeteria Stop",
                        "description": "Rest at halfway cafeteria with tea or coffee and panoramic views of the cliffside monastery."
                    },
                    {
                        "time": "Exploration",
                        "description": "Explore temples and meditation caves of Tiger’s Nest and learn about its religious significance."
                    },
                    {
                        "time": "Descent and Lunch",
                        "description": "Hike down and have lunch at the cafeteria or base depending on pace."
                    },
                    {
                        "time": "Afternoon Sightseeing",
                        "description": "Visit National Museum of Bhutan located in an old watchtower above Paro Dzong."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Explore Paro Dzong (Rinpung Dzong), the administrative and monastic center known for architecture and wall paintings."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Visit Kyichu Lhakhang, one of Bhutan’s oldest sacred temples dating back to the 7th century."
                    },
                    {
                        "time": "Dinner",
                        "description": "Dinner at hotel reflecting on the day’s hiking and cultural experiences."
                    },
                    {
                        "time": "Overnight",
                        "description": "Overnight stay in Paro."
                    }
                ]
            },
            {
                "day": 4,
                "title": "Departure from Paro",
                "route": {
                    "from": "Paro",
                    "to": "Paro International Airport",
                    "drive_time": "20 minutes"
                },
                "activities": [
                    {
                        "time": "Morning",
                        "description": "Breakfast at hotel and reflection on the journey."
                    },
                    {
                        "time": "Preparation",
                        "description": "Pack belongings, check out of hotel, and settle any incidental bills."
                    },
                    {
                        "time": "Transfer",
                        "description": "Drive to Paro International Airport with assistance from guide and driver."
                    },
                    {
                        "time": "Departure",
                        "description": "Complete airport check-in, security, boarding, and depart Bhutan with lasting memories."
                    }
                ]
            }
        ],
        includes: [
            "All ground transport in a private vehicle including airport and hotel transfers",
            "Comfortable accommodation throughout the trip",
            "Entrance fees to museums and monuments and Bhutanese Tourist Visa fee",
            "Full board meals: breakfast, lunch, dinner, tea and snacks",
            "Private transportation as per itinerary",
            "Experienced English-speaking licensed Bhutanese guide",
            "Staff salary, allowances, equipment, food and clothing",
            "Mineral drinking water during the tour",
            "All government taxes and official expenses"
        ],
        excludes: [
            "International airfare to and from Paro",
            "Travel insurance (cancellation, interruption, medical treatment, repatriation, etc.)",
            "Personal expenses such as calls, internet, laundry, beverages and alcohol",
            "Special filming, camera and drone permit fees",
            "Private or customized trip costs",
            "Tips for guide and driver",
            "Any additional services or personal expenses not mentioned in the itinerary or cost includes section"
        ]
    },
    {
        slug: "bhutan-heritage-tour-5-days",
        tour_name: "Bhutan Heritage Tour - 5 Days",
        title: "Bhutan Heritage Tour - 5 Days",
        category: "spiritual",
        days: 5,
        duration: "5 Days",
        travelers: "2-8",
        rating: "4.9",
        image: "/tour/img/incredible-bhutan.avif",
        highlights: ["Punakha Dzong", "Hike to Druk Wangyal", "Dochula Pass", "Chimi Lhakhang"],
        itinerary: [
            {
                "day": 1,
                "title": "Arrival in Paro and Transfer to Thimphu",
                "route": {
                    "from": "Paro",
                    "to": "Thimphu",
                    "distance_km": 65,
                    "drive_time": "1 hour",
                    "thimphu_altitude_m": 2320
                },
                "activities": [
                    {
                        "time": "Arrival",
                        "description": "Arrive at Paro International Airport from international hubs such as Kathmandu, Delhi, Bangkok, or Dhaka and enjoy serene landscapes and fresh mountain air."
                    },
                    {
                        "time": "Immigration",
                        "description": "Complete immigration and customs procedures with pre-arranged tour formalities."
                    },
                    {
                        "time": "Meet and Greet",
                        "description": "Meet local guide outside the terminal who will accompany you throughout the journey."
                    },
                    {
                        "time": "Transfer",
                        "description": "Scenic 1-hour drive (65 km) to Thimphu along river valleys with prayer flags and traditional Bhutanese architecture."
                    },
                    {
                        "time": "Acclimatization",
                        "description": "Begin altitude adjustment en route to Thimphu at 2,320 meters."
                    },
                    {
                        "time": "Hotel Check-In",
                        "description": "Check into hotel, relax, and refresh after the journey."
                    },
                    {
                        "time": "Exploration",
                        "description": "Optional evening walk through Thimphu markets and handicraft stores to experience local culture."
                    },
                    {
                        "time": "Dinner",
                        "description": "Welcome dinner at hotel or local restaurant featuring Bhutanese dishes such as Ema Datshi."
                    },
                    {
                        "time": "Overnight",
                        "description": "Overnight stay in Thimphu."
                    }
                ]
            },
            {
                "day": 2,
                "title": "Thimphu Sightseeing and Drive to Punakha",
                "route": {
                    "from": "Thimphu",
                    "to": "Punakha",
                    "distance_km": 75,
                    "drive_time": "3-4 hours"
                },
                "activities": [
                    {
                        "time": "Morning",
                        "description": "Breakfast at hotel followed by sightseeing in Thimphu."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Visit National Memorial Chorten, a focal point for daily religious activities built in memory of the third king."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Explore Buddha Dordenma Statue at Kuenselphodrang Nature Park with panoramic views of Thimphu Valley."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Visit Folk Heritage Museum to learn about traditional Bhutanese rural life and artifacts."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Explore Tashichho Dzong, housing the throne room, government offices, and monastic body."
                    },
                    {
                        "time": "Lunch",
                        "description": "Lunch at a local restaurant in Thimphu featuring Bhutanese cuisine."
                    },
                    {
                        "time": "Drive",
                        "description": "Scenic drive to Punakha via Dochula Pass with views of the Himalayan range and 108 memorial chortens."
                    },
                    {
                        "time": "Break",
                        "description": "Photography and tea break at Dochula Pass."
                    },
                    {
                        "time": "Arrival",
                        "description": "Check into hotel in Punakha and relax after the drive."
                    },
                    {
                        "time": "Dinner",
                        "description": "Dinner at hotel featuring regional specialties including local rice and river fish."
                    },
                    {
                        "time": "Overnight",
                        "description": "Overnight stay in Punakha."
                    }
                ]
            },
            {
                "day": 3,
                "title": "Punakha Sightseeing and Drive Back to Paro",
                "route": {
                    "from": "Punakha",
                    "to": "Paro",
                    "distance_km": 150,
                    "drive_time": "5 hours"
                },
                "activities": [
                    {
                        "time": "Morning",
                        "description": "Breakfast at hotel and begin Punakha sightseeing."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Visit Punakha Dzong located at the confluence of Pho Chhu and Mo Chhu rivers, especially beautiful during jacaranda bloom."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Walk across Punakha Suspension Bridge offering scenic river and valley views."
                    },
                    {
                        "time": "Mid-Morning",
                        "description": "Drive to Chimi Lhakhang, the Temple of Fertility, with a short walk through village fields."
                    },
                    {
                        "time": "Lunch",
                        "description": "Traditional lunch at a local restaurant or picnic style in Punakha."
                    },
                    {
                        "time": "Drive",
                        "description": "Scenic 150 km drive back to Paro with rest stops and possible visit to Simtokha Dzong near Thimphu."
                    },
                    {
                        "time": "Evening",
                        "description": "Check into hotel in Paro and relax after the long journey."
                    },
                    {
                        "time": "Dinner",
                        "description": "Dinner at hotel enjoying Bhutanese favorites."
                    },
                    {
                        "time": "Overnight",
                        "description": "Overnight stay in Paro."
                    }
                ]
            },
            {
                "day": 4,
                "title": "Hike to Tiger’s Nest Monastery and Paro Sightseeing",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Early Morning",
                        "description": "Breakfast at hotel and drive to the base of Tiger’s Nest trail."
                    },
                    {
                        "time": "Hike",
                        "description": "Begin 4 km hike (approx. 2 hours ascent) to Tiger’s Nest Monastery perched 900 meters above Paro Valley at 3,120 m altitude."
                    },
                    {
                        "time": "Rest Stops",
                        "description": "Take rest breaks along the trail to enjoy scenic views and hydrate."
                    },
                    {
                        "time": "Exploration",
                        "description": "Explore temples and meditation halls of Tiger’s Nest linked to Guru Padmasambhava’s meditation."
                    },
                    {
                        "time": "Lunch",
                        "description": "Lunch at the halfway cafeteria with panoramic monastery views during descent."
                    },
                    {
                        "time": "Afternoon Sightseeing",
                        "description": "Visit Kyichu Lhakhang, one of Bhutan’s oldest temples built in the 7th century."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Explore Rinpung Dzong (Paro Dzong), the administrative and religious center known as the Fortress on a Heap of Jewels."
                    },
                    {
                        "time": "Dinner",
                        "description": "Dinner at hotel after a physically and culturally enriching day."
                    },
                    {
                        "time": "Overnight",
                        "description": "Overnight stay in Paro."
                    }
                ]
            },
            {
                "day": 5,
                "title": "Departure from Paro",
                "route": {
                    "from": "Paro",
                    "to": "Paro International Airport",
                    "drive_time": "20 minutes"
                },
                "activities": [
                    {
                        "time": "Morning",
                        "description": "Breakfast at hotel and reflection on the Bhutan journey."
                    },
                    {
                        "time": "Check-Out",
                        "description": "Complete hotel check-out and ensure all belongings and travel documents are ready."
                    },
                    {
                        "time": "Transfer",
                        "description": "Drive to Paro International Airport with assistance from guide and driver."
                    },
                    {
                        "time": "Departure",
                        "description": "Airport check-in, security procedures, boarding, and departure from Bhutan with lasting memories."
                    }
                ]
            }
        ],
        includes: [
            "All ground transport in a private vehicle including airport and hotel transfers",
            "Comfortable accommodation throughout the tour",
            "Entrance fees to museums and monuments and Bhutanese Tourist Visa fee",
            "Full board meals: breakfast, lunch, dinner, tea and snacks",
            "Private transportation as per itinerary",
            "Experienced English-speaking licensed Bhutanese guide",
            "Staff salary, allowances, equipment, food and clothing",
            "Mineral drinking water during the tour",
            "All government taxes and official expenses"
        ],
        excludes: [
            "International airfare to and from Paro",
            "Travel insurance (cancellation, interruption, medical treatment, repatriation, etc.)",
            "Personal expenses such as calls, internet, laundry, beverages and alcohol",
            "Special filming, camera and drone permit fees",
            "Private or customized trip costs",
            "Tips for guide and driver",
            "Any additional services or personal expenses not mentioned in the itinerary or cost includes section"
        ]
    },
    {
        slug: "cultural-tour-6-days",
        tour_name: "Cultural Tour - 6 Days",
        title: "Cultural Tour - 6 Days",
        category: "cultural",
        days: 6,
        duration: "6 Days",
        travelers: "2-8",
        rating: "4.8",
        image: "/tour/img/bhutan-cultural-tour.avif",
        highlights: ["Tiger's Nest Monastery", "Rinpung Dzong", "Ta Dzong Museum", "Paro Valley"],
        itinerary: [
            {
                "day": 1,
                "title": "Arrival at Paro and Transfer to Thimphu",
                "altitude_meters": 2300,
                "duration": "2 hours drive",
                "activities": [
                    "Arrival at Paro International Airport",
                    "Meet and greet by tour representative",
                    "Immigration and customs assistance",
                    "Transfer to Thimphu with scenic Himalayan views",
                    "Hotel check-in and freshen up",
                    "Tour briefing by guide",
                    "Optional evening exploration of Thimphu markets and streets",
                    "Dinner with authentic Bhutanese cuisine",
                    "Relaxation and overnight stay in Thimphu"
                ],
                "overnight": "Thimphu"
            },
            {
                "day": 2,
                "title": "Thimphu Sightseeing and Transfer to Punakha",
                "altitude_meters": 1250,
                "duration": "3-4 hours drive",
                "activities": [
                    "Breakfast at hotel",
                    "Visit Tashichho Dzong",
                    "Visit Memorial Chorten",
                    "Visit Buddha Dordenma",
                    "Visit Craft Bazaar",
                    "Lunch in Thimphu",
                    "Scenic drive to Punakha via terraced fields and villages",
                    "Hotel check-in and relaxation",
                    "Evening leisure by Mo Chhu River or town exploration",
                    "Dinner and overnight stay in Punakha"
                ],
                "overnight": "Punakha"
            },
            {
                "day": 3,
                "title": "Excursion to Gangtey and Wangdue Phodrang",
                "altitude_meters": {
                    "gangtey": 2890,
                    "wangdiphodrang": 1460
                },
                "duration": "6-7 hours",
                "activities": [
                    "Breakfast at hotel",
                    "Drive to Gangtey Valley",
                    "Visit Gangtey Monastery (Gangtey Gonpa)",
                    "Walk along Gangtey Nature Trail",
                    "Bird watching including black-necked cranes (seasonal)",
                    "Lunch in Gangtey",
                    "Drive to Wangdue Phodrang",
                    "Visit Wangdue Phodrang Dzong",
                    "Return drive to Punakha",
                    "Dinner and overnight stay in Punakha"
                ],
                "overnight": "Punakha"
            },
            {
                "day": 4,
                "title": "Drive from Wangdue Phodrang to Paro",
                "altitude_meters": 2260,
                "duration": "4-5 hours drive",
                "activities": [
                    "Breakfast at hotel",
                    "Departure from Wangdue Phodrang to Paro",
                    "Scenic drive through mountain roads and valleys",
                    "Stops at viewpoints and cultural landmarks en route",
                    "Tea break at local tea house",
                    "Arrival in Paro and hotel check-in",
                    "Optional exploration of Paro markets and streets",
                    "Dinner and overnight stay in Paro"
                ],
                "overnight": "Paro"
            },
            {
                "day": 5,
                "title": "Hike to Taktsang (Tiger’s Nest Monastery)",
                "duration": "5 hours round trip",
                "activities": [
                    "Early breakfast",
                    "Drive to Taktsang trail base",
                    "Hike through pine forests to Tiger’s Nest viewpoint",
                    "Continue ascent to Taktsang Monastery",
                    "Explore temples, shrines and meditation caves",
                    "Lunch at Taktsang cafeteria",
                    "Descent back to trail base",
                    "Return drive to Paro",
                    "Leisure afternoon in Paro",
                    "Dinner and overnight stay in Paro"
                ],
                "overnight": "Paro"
            },
            {
                "day": 6,
                "title": "Paro Departure",
                "activities": [
                    "Breakfast at hotel",
                    "Packing and hotel check-out",
                    "Transfer to Paro International Airport",
                    "Airport check-in assistance",
                    "Final departure"
                ]
            }
        ],
        includes: [
            "All ground transport in a private vehicle including airport and hotel transfers",
            "Comfortable lodging throughout the tour",
            "Full board meals including breakfast, lunch, dinner, tea and snacks",
            "All ground transportation in a comfortable private vehicle as per itinerary",
            "Licensed English-speaking Bhutanese professional tour guide",
            "All Bhutanese staff and porter wages, salary, equipment, food and clothing",
            "Mineral drinking water during the tour",
            "All government taxes and official expenses"
        ],
        excludes: [
            "International flight airfare to and from Paro",
            "Entrance fees to museums and monuments and Bhutanese tourist visa fee",
            "Travel insurance (cancellation, interruption, medical treatment, repatriation)",
            "Telephone calls, internet, laundry, soft drinks and alcoholic beverages",
            "Special filming, camera and drone permit fees",
            "Tips for guide and driver",
            "Any services or personal expenses not mentioned in the itinerary or inclusions"
        ]
    },
    {
        slug: "cultural-Bhutan-tour-9-days",
        tour_name: "Cultural Bhutan Tour - 9 Days",
        title: "Cultural Bhutan Tour - 9 Days",
        category: "cultural",
        days: 9,
        duration: "9 Days",
        travelers: "2-8",
        rating: "4.8",
        image: "/tour/img/cultural-with-nature-bhutantour.avif",
        highlights: ["Tiger's Nest Monastery", "Rinpung Dzong", "Ta Dzong Museum", "Paro Valley"],
        itinerary: [
            {
                "day": 1,
                "title": "Arrival in Paro and Transfer to Thimphu",
                "distance": "55 km",
                "duration": "1.5 hours drive",
                "activities": [
                    "Arrival at Paro International Airport",
                    "Warm welcome by tour representative",
                    "Scenic drive to Thimphu through valleys and villages",
                    "Hotel check-in and rest",
                    "Optional stroll in Thimphu and view of Tashichho Dzong",
                    "Welcome dinner and acclimatization"
                ],
                "overnight": "Thimphu"
            },
            {
                "day": 2,
                "title": "Thimphu Sightseeing",
                "activities": [
                    "Visit Buddha Dordenma Statue",
                    "Explore National Memorial Chorten",
                    "Tour Tashichho Dzong",
                    "Visit Folk Heritage Museum",
                    "Visit National Textile Museum",
                    "Lunch at local restaurant",
                    "Browse Craft Bazaar and local markets",
                    "Evening leisure time"
                ],
                "overnight": "Thimphu"
            },
            {
                "day": 3,
                "title": "Thimphu to Gangtey",
                "distance": "150 km",
                "duration": "5 hours drive",
                "activities": [
                    "Drive from Thimphu to Gangtey",
                    "Stop at Dochula Pass for Himalayan views and 108 chortens",
                    "Pass through Wangdue Phodrang",
                    "Lunch en route",
                    "Arrival in Phobjikha Valley",
                    "Visit Gangtey Goemba Monastery",
                    "Optional nature trail walk in Phobjikha Valley"
                ],
                "overnight": "Gangtey"
            },
            {
                "day": 4,
                "title": "Gangtey to Bumthang",
                "distance": "200 km",
                "duration": "7 hours drive",
                "activities": [
                    "Drive from Gangtey to Bumthang",
                    "Stop at Trongsa and visit Trongsa Dzong",
                    "Cross Yotong La Pass",
                    "Lunch in Chumey Valley",
                    "Arrival in Bumthang and evening exploration",
                    "Rest and acclimatization"
                ],
                "overnight": "Bumthang"
            },
            {
                "day": 5,
                "title": "Bumthang Sightseeing",
                "activities": [
                    "Visit Jakar Dzong",
                    "Explore Jambay Lhakhang",
                    "Visit Kurjey Lhakhang Complex",
                    "Discover Tamshing Lhakhang",
                    "Lunch at local restaurant",
                    "Visit Red Panda Brewery and Swiss Cheese Factory",
                    "Explore Wangdichholing Palace",
                    "Evening leisure in Bumthang"
                ],
                "overnight": "Bumthang"
            },
            {
                "day": 6,
                "title": "Bumthang to Punakha",
                "distance": "205 km",
                "duration": "7 hours drive",
                "activities": [
                    "Early drive from Bumthang to Punakha",
                    "Cross Yotong La Pass",
                    "Brief stop at Trongsa",
                    "Lunch near Chendebji Chorten",
                    "Cross Peleg La Pass",
                    "Arrival in Punakha and evening leisure"
                ],
                "overnight": "Punakha"
            },
            {
                "day": 7,
                "title": "Punakha to Paro",
                "distance": "120 km",
                "duration": "4.5 hours drive",
                "activities": [
                    "Visit Punakha Dzong",
                    "Stop at Chimi Lhakhang (Fertility Temple)",
                    "Scenic drive to Paro",
                    "Lunch en route",
                    "Hotel check-in in Paro",
                    "Optional visit to Paro Rinpung Dzong",
                    "Evening leisure in Paro"
                ],
                "overnight": "Paro"
            },
            {
                "day": 8,
                "title": "Paro Sightseeing",
                "activities": [
                    "Hike to Tiger’s Nest Monastery",
                    "Lunch at viewpoint cafeteria",
                    "Visit Kyichu Lhakhang",
                    "Explore Paro Rinpung Dzong",
                    "Optional visit to National Museum (Ta Dzong)",
                    "Evening leisure and reflection"
                ],
                "overnight": "Paro"
            },
            {
                "day": 9,
                "title": "Departure from Paro",
                "activities": [
                    "Leisure morning in Paro",
                    "Breakfast at hotel",
                    "Transfer to Paro International Airport",
                    "Farewell to Bhutan and flight departure"
                ]
            }
        ],
        includes: [
            "All ground transport in a private vehicle including airport and hotel transfers",
            "Comfortable lodging throughout the tour",
            "All entrance fees to museums and monuments and Bhutanese tourist visa fee",
            "Full board meals including breakfast, lunch, dinner, tea and snacks",
            "All ground transportation as per itinerary",
            "Experienced English-speaking guide",
            "Staff wages, salary, equipment, food and clothing"
        ],
        excludes: [
            "Licensed English-speaking Bhutanese professional tour guides",
            "Mineral drinking water during the tour",
            "Government taxes and official expenses",
            "International flight airfare to and from Paro",
            "Travel insurance",
            "Personal expenses such as calls, internet, laundry and beverages",
            "Special filming, camera and drone permit fees",
            "Tips for guide and driver",
            "Any services not mentioned in the inclusions"
        ]
    },
    {
        slug: "bhutan-tour-8-days",
        tour_name: "Bhutan Tour - 8 Days",
        title: "Bhutan Tour - 8 Days",
        category: "cultural",
        days: 8,
        duration: "8 Days",
        travelers: "2-8",
        rating: "4.8",
        image: "/tour/img/incredible-bhutan.avif",
        highlights: ["Tiger's Nest Monastery", "Rinpung Dzong", "Ta Dzong Museum", "Paro Valley"],
        itinerary: [
            {
                "day": 1,
                "title": "Fly to Paro and Drive to Thimphu",
                "activities": [
                    "Arrival at Paro International Airport",
                    "Immigration and customs clearance",
                    "Meet and greet by tour representative",
                    "Scenic drive from Paro to Thimphu",
                    "Hotel check-in and lunch",
                    "Optional exploration of Thimphu including Memorial Chorten or Buddha Dordenma",
                    "Dinner and evening at leisure"
                ],
                "overnight": "Thimphu"
            },
            {
                "day": 2,
                "title": "Thimphu Sightseeing",
                "activities": [
                    "Visit National Memorial Chorten",
                    "Visit Buddha Dordenma Statue",
                    "Explore Tashichho Dzong",
                    "Lunch at local restaurant",
                    "Visit Textile Museum or Folk Heritage Museum",
                    "Browse Handicrafts Market",
                    "Visit Changangkha Lhakhang",
                    "Dinner and leisure evening"
                ],
                "overnight": "Thimphu"
            },
            {
                "day": 3,
                "title": "Thimphu to Gangtey",
                "duration": "6-7 hours drive",
                "activities": [
                    "Drive from Thimphu to Gangtey",
                    "Stop at Dochula Pass for Himalayan views and 108 chortens",
                    "Lunch at Wangduephodrang",
                    "Arrival in Phobjikha Valley",
                    "Visit Gangtey Goenpa Monastery",
                    "Optional Gangtey Nature Trail walk",
                    "Dinner and evening relaxation"
                ],
                "overnight": "Gangtey"
            },
            {
                "day": 4,
                "title": "Gangtey to Punakha",
                "duration": "2.5 hours drive",
                "activities": [
                    "Drive from Gangtey to Punakha",
                    "Stop at Chimi Lhakhang (Fertility Temple)",
                    "Lunch in Punakha",
                    "Visit Punakha Dzong at Pho Chhu and Mo Chhu confluence",
                    "Walk across Punakha Suspension Bridge",
                    "Hotel check-in and leisure evening"
                ],
                "overnight": "Punakha"
            },
            {
                "day": 5,
                "title": "Full Day in Punakha",
                "duration": "6-7 hours",
                "activities": [
                    "Hike to Khamsum Yulley Namgyal Chorten",
                    "Visit Ritsha Village and observe rural Bhutanese life",
                    "Lunch in Punakha valley",
                    "Visit Punakha Dzong for in-depth exploration",
                    "Visit Nalanda Buddhist Institute (Dalayna)",
                    "Optional Mo Chhu River rafting",
                    "Dinner and evening reflection"
                ],
                "overnight": "Punakha"
            },
            {
                "day": 6,
                "title": "Punakha to Paro",
                "duration": "4 hours drive",
                "activities": [
                    "Drive from Punakha to Paro",
                    "Stop at Simtokha Dzong en route",
                    "Lunch on the way",
                    "Visit Paro Rinpung Dzong",
                    "Optional visit to Ta Dzong National Museum",
                    "Evening leisure and dinner in Paro"
                ],
                "overnight": "Paro"
            },
            {
                "day": 7,
                "title": "Paro Sightseeing",
                "activities": [
                    "Hike to Tiger’s Nest Monastery",
                    "Visit Kyichu Lhakhang",
                    "Lunch at local restaurant",
                    "Explore Paro town and local shops",
                    "Optional revisit to Rinpung Dzong",
                    "Farewell dinner and evening reflection"
                ],
                "overnight": "Paro"
            },
            {
                "day": 8,
                "title": "Departure from Paro to Kathmandu",
                "activities": [
                    "Breakfast at hotel",
                    "Drive to Paro International Airport",
                    "Airport check-in and boarding",
                    "Flight from Paro to Kathmandu",
                    "Arrival in Kathmandu and end of tour"
                ]
            }
        ],
        includes: [
            "All ground transport in a private vehicle including airport and hotel transfers",
            "Comfortable lodging throughout the tour",
            "All entrance fees to museums and monuments and Bhutanese tourist visa fee",
            "Full board meals including breakfast, lunch, dinner, tea and snacks",
            "All ground transportation as per itinerary",
            "Experienced English-speaking guide",
            "Staff wages, salary, equipment, food and clothing"
        ],
        excludes: [
            "Licensed English-speaking Bhutanese professional tour guides",
            "Mineral drinking water during the tour",
            "Government taxes and official expenses",
            "International flight airfare to and from Paro",
            "Travel insurance",
            "Personal expenses such as calls, internet, laundry and beverages",
            "Special filming, camera and drone permit fees",
            "Tips for guide and driver",
            "Any services not mentioned in the inclusions"
        ]
    },
    {
        slug: "laya-trek-17-days",
        tour_name: "Laya Trek - 17 Days",
        title: "Laya Trek - 17 Days",
        category: "adventure",
        days: 17,
        duration: "17 Days",
        travelers: "2-8",
        rating: "4.8",
        image: "/tour/img/laya-gasa-trek-17-day-adventure.avif",
        highlights: ["Tiger's Nest Monastery", "Rinpung Dzong", "Ta Dzong Museum", "Paro Valley"],
        itinerary: [
            {
                "day": 1,
                "title": "Arrival at Paro",
                "altitude_m": 2235,
                "activities": [
                    "Arrival at Paro Airport",
                    "Meet guide and trekking team",
                    "Acclimatization and rest",
                    "Optional local exploration",
                    "Trek briefing and preparation"
                ],
                "overnight": "Hotel in Paro"
            },
            {
                "day": 2,
                "title": "Acclimatization and Hike to Tiger’s Nest",
                "altitude_m": 3120,
                "activities": [
                    "Drive to Tiger’s Nest trailhead",
                    "Hike to Taktsang Monastery (4-5 hours round trip)",
                    "Explore monastery and viewpoints",
                    "Lunch at cafeteria or packed lunch",
                    "Return to Paro and rest"
                ],
                "overnight": "Hotel in Paro"
            },
            {
                "day": 3,
                "title": "Trek from Drukgyal Dzong to Shana",
                "distance_km": 17,
                "duration": "6-7 hours",
                "altitude_m": 2850,
                "activities": [
                    "Drive to Drukgyal Dzong",
                    "Begin trek along Paro River through forests and villages",
                    "Packed lunch on trail",
                    "Arrive and camp at Shana"
                ],
                "overnight": "Camp at Shana"
            },
            {
                "day": 4,
                "title": "Trek from Shana to Sio Thangthangkha",
                "distance_km": 19,
                "duration": "7-8 hours",
                "altitude_m": 3750,
                "activities": [
                    "Trek along Paro River through alpine forests",
                    "Lunch on trail",
                    "Arrive at meadow campsite with mountain views",
                    "Acclimatization and evening briefing"
                ],
                "overnight": "Camp at Sio Thangthangkha"
            },
            {
                "day": 5,
                "title": "Trek from Sio Thangthangkha to Jangothang",
                "distance_km": 19,
                "duration": "7-8 hours",
                "altitude_m": 4050,
                "activities": [
                    "Steeper ascent through alpine meadows",
                    "Views of Mount Jomolhari and Jichu Drake",
                    "Lunch on trail",
                    "Camp setup and acclimatization walk"
                ],
                "overnight": "Camp at Jangothang"
            },
            {
                "day": 6,
                "title": "Acclimatization Day at Jangothang",
                "altitude_m": 4050,
                "activities": [
                    "Rest and acclimatization",
                    "Short hikes to Jomolhari Base Camp",
                    "Wildlife spotting and photography",
                    "Interaction with yak herders",
                    "Gear preparation and evening briefing"
                ],
                "overnight": "Camp at Jangothang"
            },
            {
                "day": 7,
                "title": "Trek from Jangothang to Lingshi",
                "distance_km": 18,
                "duration": "6-7 hours",
                "altitude_m": 4100,
                "activities": [
                    "Trek via Nyile La pass (4890m)",
                    "Panoramic mountain views",
                    "Descend to Lingshi basin",
                    "Optional visit to Lingshi Dzong"
                ],
                "overnight": "Camp at Lingshi"
            },
            {
                "day": 8,
                "title": "Trek from Lingshi to Chebisa",
                "distance_km": 12,
                "duration": "5-6 hours",
                "altitude_m": 3850,
                "activities": [
                    "Gradual descent through meadows and villages",
                    "Cultural interaction with locals",
                    "Visit waterfall near campsite",
                    "Leisure village exploration"
                ],
                "overnight": "Camp at Chebisa"
            },
            {
                "day": 9,
                "title": "Trek from Chebisa to Shomuthang",
                "distance_km": 17,
                "duration": "6-7 hours",
                "altitude_m": 4130,
                "activities": [
                    "Ascent to Gobu La pass (4410m)",
                    "River crossings and alpine meadows",
                    "Wildlife spotting",
                    "Camp by river at Shomuthang"
                ],
                "overnight": "Camp at Shomuthang"
            },
            {
                "day": 10,
                "title": "Trek from Shomuthang to Robluthang",
                "distance_km": 15,
                "duration": "5-6 hours",
                "altitude_m": 4160,
                "activities": [
                    "Cross Jerela pass (4760m)",
                    "Rocky descent to remote campsite",
                    "Rhododendron forest scenery",
                    "Acclimatization and evening briefing"
                ],
                "overnight": "Camp at Robluthang"
            },
            {
                "day": 11,
                "title": "Trek from Robluthang to Lingmithang",
                "distance_km": 19,
                "duration": "7-8 hours",
                "altitude_m": 4140,
                "activities": [
                    "Cross Shinche La pass (5000m)",
                    "Descend into Lingmithang valley",
                    "Forest wildlife spotting",
                    "Camp setup by river"
                ],
                "overnight": "Camp at Lingmithang"
            },
            {
                "day": 12,
                "title": "Trek from Lingmithang to Laya",
                "distance_km": 10,
                "duration": "3-4 hours",
                "altitude_m": 3850,
                "activities": [
                    "Moderate descent through forest",
                    "Arrival at Laya village",
                    "Cultural interaction with Layap community",
                    "Village exploration and relaxation"
                ],
                "overnight": "Camp at Laya"
            },
            {
                "day": 13,
                "title": "Trek from Laya to Koena",
                "distance_km": 19,
                "duration": "7-8 hours",
                "altitude_m": 3800,
                "activities": [
                    "Mixed ascents and descents with stream crossings",
                    "Scenic valley and mountain views",
                    "Camp setup in remote Koena area"
                ],
                "overnight": "Camp at Koena"
            },
            {
                "day": 14,
                "title": "Trek from Koena to Gasa",
                "distance_km": 18,
                "duration": "7-8 hours",
                "altitude_m": 2900,
                "activities": [
                    "Descend through bamboo and mixed forests",
                    "Cross Bari La pass (3740m)",
                    "Arrive at Gasa and visit hot springs",
                    "Optional exploration of Gasa Dzong"
                ],
                "overnight": "Camp at Gasa"
            },
            {
                "day": 15,
                "title": "Drive from Gasa to Punakha",
                "distance_km": 75,
                "duration": "2-3 hours",
                "activities": [
                    "Morning at Gasa and optional hot spring visit",
                    "Scenic drive to Punakha",
                    "Hotel check-in and rest",
                    "Optional visit to Punakha Dzong and suspension bridge"
                ],
                "overnight": "Hotel in Punakha"
            },
            {
                "day": 16,
                "title": "Drive from Punakha to Thimphu",
                "distance_km": 76,
                "duration": "2-3 hours",
                "activities": [
                    "Morning exploration of Punakha",
                    "Scenic drive to Thimphu",
                    "Check-in and lunch",
                    "Visit Tashichho Dzong, Memorial Chorten, Buddha Dordenma",
                    "Shopping and evening leisure"
                ],
                "overnight": "Hotel in Thimphu"
            },
            {
                "day": 17,
                "title": "Drive from Thimphu to Paro and Departure",
                "distance_km": 50,
                "duration": "1 hour",
                "activities": [
                    "Breakfast in Thimphu",
                    "Drive to Paro with scenic views",
                    "Optional last-minute sightseeing in Paro",
                    "Airport transfer and departure"
                ]
            }
        ],
        includes: [
            "All ground transport in a private vehicle including airport and hotel transfers",
            "Comfortable lodging throughout the trek",
            "Tented accommodation during trekking days",
            "All entrance fees to museums and monuments and Bhutanese tourist visa fee",
            "Full board meals including breakfast, lunch, dinner, tea and snacks",
            "All ground transportation as per itinerary",
            "Experienced English-speaking tour and trekking guide"
        ],
        excludes: [
            "Porter and pack animal services for trekking",
            "International flight airfare to and from Paro",
            "Travel insurance",
            "Personal expenses such as calls, internet, laundry and beverages",
            "Special filming, camera and drone permit fees",
            "Tips for guide and driver",
            "Any services not mentioned in the inclusions"
        ]
    },
    {
        slug: "druk-path-trekking-8-days",
        tour_name: "Druk Path Trekking - 8 Days",
        title: "Druk Path Trekking - 8 Days",
        category: "adventure",
        days: 8,
        duration: "8 Days",
        travelers: "2-8",
        rating: "4.8",
        image: "/tour/img/druk-path-trekking.avif",
        highlights: ["Tiger's Nest Monastery", "Rinpung Dzong", "Ta Dzong Museum", "Paro Valley"],
        itinerary: [
            {
                "day": 1,
                "title": "Arrival in Paro",
                "altitude_m": 2280,
                "activities": [
                    "Arrival at Paro International Airport",
                    "Meet tour operator and transfer to hotel",
                    "Acclimatization and rest",
                    "Optional exploration of Paro town or Paro Rinpung Dzong",
                    "Trek briefing and equipment check",
                    "Dinner and preparation for trek"
                ],
                "overnight": "Hotel in Paro"
            },
            {
                "day": 2,
                "title": "Sightseeing and Acclimatization Hike to Tiger’s Nest",
                "distance_km": 5,
                "duration": "4-5 hours",
                "altitude_m": 3180,
                "activities": [
                    "Drive to Tiger’s Nest trailhead",
                    "Hike through pine forests to Taktsang Monastery",
                    "Tea house rest stop with monastery views",
                    "Explore monastery temples and caves",
                    "Lunch on return",
                    "Drive back to Paro and rest"
                ],
                "overnight": "Hotel in Paro"
            },
            {
                "day": 3,
                "title": "Drive to Ta Dzong and Trek to Jele Dzong",
                "distance_km": 10,
                "duration": "4-5 hours",
                "altitude_m": 3400,
                "activities": [
                    "Drive to Ta Dzong (National Museum)",
                    "Begin trek through pine forests",
                    "Packed lunch en route",
                    "Arrive at Jele Dzong and explore",
                    "Set up camp near dzong and evening briefing"
                ],
                "overnight": "Camp at Jele Dzong"
            },
            {
                "day": 4,
                "title": "Trek from Jele Dzong to Jangchulakha",
                "distance_km": 10,
                "duration": "3-4 hours",
                "altitude_m": 3650,
                "activities": [
                    "Gradual ascent with Himalayan views",
                    "Trek through rhododendron forests",
                    "Lunch on trail",
                    "Arrive at highland pasture campsite",
                    "Camp setup, dinner and stargazing"
                ],
                "overnight": "Camp at Jangchulakha"
            },
            {
                "day": 5,
                "title": "Trek from Jangchulakha to Jimilangtsho",
                "distance_km": 11,
                "duration": "4-5 hours",
                "altitude_m": 3870,
                "activities": [
                    "Trek through alpine meadows and forests",
                    "Mountain views across the Himalayas",
                    "Arrival at Jimilangtsho Lake",
                    "Lunch by the lake and area exploration",
                    "Camp setup near the lake"
                ],
                "overnight": "Camp at Jimilangtsho"
            },
            {
                "day": 6,
                "title": "Trek from Jimilangtsho to Simkotra Tsho",
                "distance_km": 11,
                "duration": "4-5 hours",
                "altitude_m": 4110,
                "activities": [
                    "Ascend through meadows and rocky terrain",
                    "Scenic lunch break on trail",
                    "Arrive at Simkotra Tsho high-altitude lake",
                    "Explore surroundings and relax",
                    "Dinner and stargazing by campsite"
                ],
                "overnight": "Camp at Simkotra Tsho"
            },
            {
                "day": 7,
                "title": "Trek from Simkotra Tsho to Thimphu via Phajodhing",
                "distance_km": 14,
                "duration": "5-6 hours",
                "activities": [
                    "Sunrise at Simkotra Tsho and breakfast",
                    "Descend via Phajodhing monastery",
                    "Lunch on scenic trail",
                    "Final descent towards Thimphu",
                    "Transfer to hotel and relaxation",
                    "Optional sightseeing in Thimphu",
                    "Celebratory dinner"
                ],
                "overnight": "Hotel in Thimphu"
            },
            {
                "day": 8,
                "title": "Drive from Thimphu to Paro and Departure",
                "duration": "1.5 hours drive",
                "activities": [
                    "Breakfast in Thimphu",
                    "Optional last-minute exploration or shopping",
                    "Drive back to Paro",
                    "Lunch in Paro (time permitting)",
                    "Transfer to Paro International Airport",
                    "Departure"
                ]
            }
        ],
        includes: [
            "All ground transport in a private vehicle including airport and hotel transfers",
            "Comfortable lodging throughout the trip",
            "Tented accommodation during trekking days",
            "All entrance fees to museums and monuments and Bhutanese tourist visa fee",
            "Full board meals including breakfast, lunch, dinner, tea and snacks",
            "All ground transportation as per itinerary",
            "Experienced English-speaking tour and trekking guide",
            "Porter and pack animal services for trekking",
            "Staff wages, equipment, food and clothing for trekking crew"
        ],
        excludes: [
            "Government taxes and official expenses",
            "International flight airfare to and from Paro",
            "Travel insurance",
            "Personal expenses such as calls, internet, laundry and beverages",
            "Special filming, camera and drone permit fees",
            "Tips for guide and driver",
            "Any services not mentioned in the inclusions"
        ]
    },
    {
        slug: "merak-sakteng-trek-10-days",
        tour_name: "Merak Sakteng Trek - 10 Days",
        title: "Merak Sakteng Trek - 10 Days",
        category: "adventure",
        days: 10,
        duration: "10 Days",
        travelers: "2-8",
        rating: "4.8",
        image: "/tour/img/10-days-merak-sakteng-trek.avif",
        highlights: ["Tiger's Nest Monastery", "Rinpung Dzong", "Ta Dzong Museum", "Paro Valley"],
        itinerary: [
            {
                "day": 1,
                "title": "Arrival in Paro",
                "altitude_m": 2280,
                "activities": [
                    "Arrival at Paro Airport and welcome by tour team",
                    "Transfer to hotel and orientation briefing",
                    "Rest and acclimatization",
                    "Optional exploration of Paro town and local markets"
                ],
                "overnight": "Hotel in Paro"
            },
            {
                "day": 2,
                "title": "Hike to Tiger’s Nest Monastery and Drive to Thimphu",
                "altitude_m": 3120,
                "duration": "5-6 hours hike",
                "activities": [
                    "Guided hike to Tiger’s Nest Monastery",
                    "Lunch at Viewpoint Café",
                    "Descend and drive to Thimphu",
                    "Evening exploration of Thimphu and Tashichho Dzong"
                ],
                "overnight": "Hotel in Thimphu"
            },
            {
                "day": 3,
                "title": "Drive from Thimphu to Merak",
                "duration": "6-7 hours drive",
                "altitude_m": 3500,
                "activities": [
                    "Scenic drive through valleys, forests and mountain passes",
                    "Arrival in Merak village",
                    "Interaction with Brokpa community",
                    "Guesthouse check-in and evening acclimatization walk",
                    "Trek briefing for upcoming days"
                ],
                "overnight": "Guesthouse in Merak"
            },
            {
                "day": 4,
                "title": "Trek from Merak to Miksateng",
                "duration": "5-6 hours",
                "altitude_m": 3700,
                "activities": [
                    "Trek through pastures, hills and alpine landscapes",
                    "Packed lunch en route",
                    "Arrival at Miksateng village",
                    "Camp or guesthouse stay and evening relaxation"
                ],
                "overnight": "Camp or Guesthouse in Miksateng"
            },
            {
                "day": 5,
                "title": "Trek from Miksateng to Sakteng",
                "duration": "4-5 hours",
                "altitude_m": 3000,
                "activities": [
                    "Trek through rhododendron forests and meadows",
                    "Cross small streams and scenic landscapes",
                    "Arrival in Sakteng village within wildlife sanctuary",
                    "Village exploration and cultural interaction"
                ],
                "overnight": "Camp or Guesthouse in Sakteng"
            },
            {
                "day": 6,
                "title": "Exploring Sakteng",
                "activities": [
                    "Guided cultural village tour",
                    "Visit Sakteng Wildlife Sanctuary",
                    "Interaction with local artisans and craft makers",
                    "Traditional lunch with villagers",
                    "Cultural workshop or traditional dance performance",
                    "Evening reflection and optional stargazing"
                ],
                "overnight": "Camp or Guesthouse in Sakteng"
            },
            {
                "day": 7,
                "title": "Trek from Sakteng to Jyonkhar Teng",
                "duration": "6-7 hours",
                "altitude_m": 2950,
                "activities": [
                    "Trek through alpine meadows and rhododendron forests",
                    "Packed lunch on trail",
                    "Arrival in Jyonkhar Teng village",
                    "Camp setup or guesthouse stay and evening walk"
                ],
                "overnight": "Camp or Guesthouse in Jyonkhar Teng"
            },
            {
                "day": 8,
                "title": "Trek from Jyonkhar Teng to Trashigang",
                "duration": "5-6 hours",
                "activities": [
                    "Trek through rural landscapes and hamlets",
                    "Views of Himalayan peaks and valleys",
                    "Arrival in Trashigang town",
                    "Visit Trashigang Dzong and local market exploration"
                ],
                "overnight": "Hotel or Guesthouse in Trashigang"
            },
            {
                "day": 9,
                "title": "Return to Paro",
                "activities": [
                    "Travel from Trashigang to Paro by road or domestic flight",
                    "Scenic stops en route and lunch",
                    "Hotel check-in in Paro and evening at leisure",
                    "Reflection on journey and preparation for departure"
                ],
                "overnight": "Hotel in Paro"
            },
            {
                "day": 10,
                "title": "Departure from Paro",
                "activities": [
                    "Breakfast at hotel and final packing",
                    "Transfer to Paro International Airport",
                    "Airport check-in and farewell",
                    "Flight departure"
                ]
            }
        ],
        includes: [
            "All ground transport in a private vehicle including airport and hotel transfers",
            "Comfortable lodging throughout the trek",
            "Tented accommodation during trekking days",
            "All entrance fees to museums and monuments and Bhutanese tourist visa fee",
            "Full board meals including breakfast, lunch, dinner, tea and snacks",
            "All ground transportation as per itinerary",
            "Experienced English-speaking tour and trekking guide",
            "Porter and pack animal services for trekking",
            "Staff wages, equipment, food and clothing for trekking crew",
            "All government taxes and official expenses"
        ],
        excludes: [
            "International flight airfare to and from Paro",
            "Travel insurance",
            "Personal expenses such as calls, internet, laundry and beverages",
            "Special filming, camera and drone permit fees",
            "Tips for guide and driver",
            "Any services not mentioned in the inclusions"
        ]
    },
    {
        slug: "bumthang-cultural-trek-12-days",
        tour_name: "Bumthang Cultural Trek - 12 Days",
        title: "Bumthang Cultural Trek - 12 Days",
        category: "adventure",
        days: 12,
        duration: "12 Days",
        travelers: "2-8",
        rating: "4.8",
        image: "/tour/img/bumthang-trek.avif",
        highlights: ["Tiger's Nest Monastery", "Rinpung Dzong", "Ta Dzong Museum", "Paro Valley"],
        itinerary: [
            {
                "day": 1,
                "title": "Arrival in Paro (2,280m/7,480ft)",
                "activities": [
                    "Arrival at Paro International Airport and welcome by Amen Bhutan Tours representative",
                    "Transfer to hotel in Paro and check-in",
                    "Rest and acclimatization",
                    "Pre-trek meeting and briefing with trekking guide",
                    "Introduction to trekking team, safety, and cultural guidelines",
                    "Dinner at hotel or nearby restaurant",
                    "Overnight stay in Paro hotel"
                ]
            },
            {
                "day": 2,
                "title": "Sightseeing and Acclimatization Hike to Tiger’s Nest Monastery (3,180m)",
                "activities": [
                    "Breakfast at hotel in Paro",
                    "Drive to trailhead of Tiger’s Nest Monastery",
                    "Orientation and safety briefing",
                    "Hike through pine forests towards Paro Taktsang",
                    "Enjoy panoramic views of Paro Valley",
                    "Explore Tiger’s Nest Monastery and surroundings",
                    "Packed lunch near monastery",
                    "Descend back to trailhead",
                    "Drive back to Paro hotel",
                    "Dinner and overnight stay in Paro"
                ]
            },
            {
                "day": 3,
                "title": "Drive from Paro to Thimphu (1 hour)",
                "activities": [
                    "Breakfast and check-out from hotel",
                    "Scenic drive to Thimphu",
                    "Check-in at accommodation in Thimphu",
                    "Free time to explore markets and cultural sites",
                    "Optional visits to Tashichho Dzong, National Memorial Chorten, Buddha Dordenma",
                    "Lunch at local restaurant",
                    "Afternoon exploration of Thimphu",
                    "Dinner and overnight stay in Thimphu"
                ]
            },
            {
                "day": 4,
                "title": "Drive to Punakha via Dochu-La Pass (4-5 hours)",
                "activities": [
                    "Breakfast and check-out from Thimphu hotel",
                    "Drive towards Punakha via Dochu-La Pass (3,100m)",
                    "Stop at Dochu-La Pass for views and photography",
                    "Descend into Punakha Valley",
                    "Check-in at Punakha accommodation",
                    "Lunch at hotel or local restaurant",
                    "Visit Punakha Dzong at Pho Chhu and Mo Chhu rivers",
                    "Leisure exploration of Punakha",
                    "Dinner and overnight stay in Punakha"
                ]
            },
            {
                "day": 5,
                "title": "Drive to Bumthang via Trongsa (6-7 hours)",
                "activities": [
                    "Breakfast and check-out from Punakha hotel",
                    "Scenic drive to Bumthang via Trongsa",
                    "Enjoy landscapes of forests, valleys, and villages",
                    "Stop at Trongsa Dzong for exploration",
                    "Lunch at local restaurant in Trongsa",
                    "Continue drive to Bumthang",
                    "Check-in at accommodation in Bumthang",
                    "Free time to explore Bumthang town",
                    "Dinner and overnight stay in Bumthang"
                ]
            },
            {
                "day": 6,
                "title": "Sightseeing in Bumthang including Jakar Dzong",
                "activities": [
                    "Breakfast at hotel",
                    "Visit Jakar Dzong (Castle of the White Bird)",
                    "Visit Tamshing Lhakhang temple",
                    "Visit Kurjey Lhakhang sacred site",
                    "Lunch at local restaurant",
                    "Visit Jambay Lhakhang temple",
                    "Visit Swiss Farm in Bumthang",
                    "Leisure time in Bumthang town",
                    "Dinner and overnight stay in Bumthang"
                ]
            },
            {
                "day": 7,
                "title": "Trek from Bumthang to Ngang Lhakhang (5-6 hours)",
                "activities": [
                    "Breakfast and trek preparation",
                    "Meet trekking team and route briefing",
                    "Trek through forests, meadows, and villages",
                    "Enjoy panoramic Himalayan views",
                    "Picnic lunch on trail",
                    "Cultural interactions with local villagers",
                    "Arrival at Ngang Lhakhang and temple visit",
                    "Check-in at guesthouse or farmhouse",
                    "Dinner and cultural interaction",
                    "Overnight stay in Ngang Lhakhang"
                ]
            },
            {
                "day": 8,
                "title": "Trek from Ngang Lhakhang to Ugyenchholing (6-7 hours, 3100m)",
                "activities": [
                    "Breakfast and daypack preparation",
                    "Meet guide and briefing on trekking route",
                    "Trek through forests, meadows, and valleys",
                    "Gradual ascent to higher altitude",
                    "Lunch break along the trail",
                    "Interact with villagers and learn local culture",
                    "Arrival at Ugyenchholing village",
                    "Explore village and relax",
                    "Dinner and overnight stay in Ugyenchholing"
                ]
            },
            {
                "day": 9,
                "title": "Trek from Ugyenchholing to Jakar",
                "activities": [
                    "Breakfast and trekking preparation",
                    "Meet guide and overview of route",
                    "Trek through forests, valleys, and meadows",
                    "Gradual descent towards Jakar",
                    "Visit cultural landmarks and monasteries on route",
                    "Lunch break on the trail",
                    "Arrival in Jakar and hotel check-in",
                    "Explore Jakar town and local markets",
                    "Dinner and overnight stay in Jakar"
                ]
            },
            {
                "day": 10,
                "title": "Drive back to Punakha (5-6 hours)",
                "activities": [
                    "Breakfast and check-out from Jakar hotel",
                    "Scenic drive back to Punakha",
                    "Stop at viewpoints and cultural landmarks",
                    "Lunch at local restaurant en route",
                    "Arrival and check-in at Punakha accommodation",
                    "Free time to explore Punakha valley",
                    "Dinner and overnight stay in Punakha"
                ]
            },
            {
                "day": 11,
                "title": "Drive back to Paro via Dochu-La Pass",
                "activities": [
                    "Breakfast and check-out from Punakha hotel",
                    "Drive to Paro via Dochu-La Pass",
                    "Stop at Dochu-La Pass for panoramic Himalayan views",
                    "Continue scenic drive to Paro valley",
                    "Lunch at local restaurant on the way",
                    "Check-in at Paro hotel",
                    "Free time for shopping or sightseeing",
                    "Dinner and overnight stay in Paro"
                ]
            },
            {
                "day": 12,
                "title": "Transfer to Paro International Airport – Departure",
                "activities": [
                    "Breakfast at hotel in Paro",
                    "Check-out and final departure preparation",
                    "Transfer to Paro International Airport",
                    "Airport check-in, security, and immigration",
                    "Board flight and departure from Bhutan"
                ]
            }
        ],
        includes: [
            "All ground transport in a private vehicle including airport and hotel transfers",
            "Comfortable lodging throughout the trip",
            "Accommodation in tented camps during trekking days",
            "All entrance fees to museums and monuments and Bhutanese tourist visa fee",
            "Full board meals including breakfast, lunch, dinner, tea and snacks",
            "All ground transportation in a comfortable private vehicle as per itinerary",
            "Experienced English-speaking guide",
            "Porter and pack animal services for trekking",
            "All Bhutanese staff and porter wages, salary, equipment, food and clothing",
            "Licensed English-speaking Bhutanese professional tour and trekking guides",
            "All government taxes and official expenses"
        ],
        excludes: [
            "International flight airfare to and from Paro",
            "Travel insurance for cancellation, interruption, medical treatment and repatriation",
            "Personal expenses such as telephone calls, internet, laundry, soft drinks and alcoholic beverages",
            "Special filming, camera and drone permit fees",
            "Tips for guide and driver",
            "Any services or personal expenses not mentioned in the itinerary or inclusions"
        ]
    },
    {
        "slug": "paro-tshechu-festival-9-days",
        "tour_name": "Paro Tshechu Festival - 9 Days",
        "title": "Paro Tshechu Festival - 9 Days",
        "category": "festival",
        "days": 9,
        "duration": "9 Days",
        "travelers": "2-8",
        "rating": "4.9",
        "image": "/tour/img/paro-festival.avif",
        "highlights": [
            "Paro Tshechu Festival",
            "Tiger’s Nest Monastery",
            "Punakha Dzong",
            "Gangtey Monastery",
            "Dochula Pass",
            "Phobjikha Valley"
        ],
        "itinerary": [
            {
                "day": 1,
                "title": "Arrival in Paro and Transfer to Thimphu",
                "location": "Paro – Thimphu",
                "activities": [
                    {
                        "time": "Flight Arrival",
                        "description": "Arrive at Paro International Airport with spectacular Himalayan mountain views during descent."
                    },
                    {
                        "time": "Immigration",
                        "description": "Complete immigration and customs clearance and meet your local guide."
                    },
                    {
                        "time": "Transfer",
                        "description": "Scenic drive from Paro to Thimphu (1.5–2 hours) through valleys, villages and river landscapes."
                    },
                    {
                        "time": "Hotel Check-in",
                        "description": "Check in at your hotel in Thimphu and relax after your journey."
                    },
                    {
                        "time": "Optional Exploration",
                        "description": "Visit Tashichho Dzong, National Memorial Chorten or explore local markets depending on arrival time."
                    },
                    {
                        "time": "Evening",
                        "description": "Orientation briefing about Bhutanese culture, customs and upcoming itinerary."
                    }
                ]
            },
            {
                "day": 2,
                "title": "Thimphu City Tour",
                "location": "Thimphu",
                "activities": [
                    {
                        "time": "Morning",
                        "description": "Breakfast followed by guided sightseeing tour of Thimphu city."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Visit Tashichho Dzong, the administrative headquarters and monastic center."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Explore National Memorial Chorten where locals circumambulate and offer prayers."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Visit Buddha Dordenma Statue overlooking Thimphu valley."
                    },
                    {
                        "time": "Temple Visit",
                        "description": "Visit Changangkha Lhakhang and receive blessings from resident monks."
                    },
                    {
                        "time": "Craft Market",
                        "description": "Explore local craft market for textiles, masks and thangka paintings."
                    },
                    {
                        "time": "Evening",
                        "description": "Optional cultural performance showcasing Bhutanese music and dance."
                    }
                ]
            },
            {
                "day": 3,
                "title": "Thimphu to Punakha via Dochula Pass",
                "location": "Thimphu – Punakha",
                "activities": [
                    {
                        "time": "Drive",
                        "description": "Drive to Punakha with stop at Dochula Pass (3,100m) for Himalayan panoramic views and 108 chortens."
                    },
                    {
                        "time": "Temple Visit",
                        "description": "Visit Chimi Lhakhang, the Temple of the Divine Madman."
                    },
                    {
                        "time": "Dzong Visit",
                        "description": "Explore Punakha Dzong at the confluence of Pho Chhu and Mo Chhu rivers."
                    },
                    {
                        "time": "Leisure",
                        "description": "Walk across the Punakha Suspension Bridge and enjoy valley scenery."
                    }
                ]
            },
            {
                "day": 4,
                "title": "Punakha to Phobjikha Valley",
                "location": "Punakha – Phobjikha",
                "activities": [
                    {
                        "time": "Drive",
                        "description": "Scenic drive to Phobjikha Valley via Wangdue Phodrang."
                    },
                    {
                        "time": "Monastery Visit",
                        "description": "Visit Gangtey Monastery overlooking the glacial valley."
                    },
                    {
                        "time": "Nature Trail",
                        "description": "Walk along Gangtey Nature Trail through forests and meadows with birdwatching opportunities."
                    },
                    {
                        "time": "Conservation Center",
                        "description": "Visit Black-Necked Crane Information Center and learn about conservation efforts."
                    }
                ]
            },
            {
                "day": 5,
                "title": "Phobjikha to Thimphu",
                "location": "Phobjikha – Thimphu",
                "activities": [
                    {
                        "time": "Return Drive",
                        "description": "Drive back to Thimphu through scenic valleys and rural landscapes."
                    },
                    {
                        "time": "Stops",
                        "description": "Optional stops at Wangdue market and scenic viewpoints."
                    },
                    {
                        "time": "Leisure",
                        "description": "Free time to explore Thimphu city or revisit favorite sites."
                    }
                ]
            },
            {
                "day": 6,
                "title": "Thimphu to Paro",
                "location": "Thimphu – Paro",
                "activities": [
                    {
                        "time": "Drive",
                        "description": "Scenic drive back to Paro valley with Himalayan views."
                    },
                    {
                        "time": "Town Exploration",
                        "description": "Explore Paro town, traditional streets, handicraft shops and markets."
                    },
                    {
                        "time": "Dzong Visit",
                        "description": "Visit Paro Rinpung Dzong, a historic fortress-monastery with intricate murals."
                    }
                ]
            },
            {
                "day": 7,
                "title": "Attend Paro Tshechu Festival",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Festival",
                        "description": "Attend Paro Tshechu, one of Bhutan’s most vibrant religious festivals."
                    },
                    {
                        "time": "Mask Dances",
                        "description": "Witness sacred mask dances performed by monks depicting Buddhist legends and teachings."
                    },
                    {
                        "time": "Rituals",
                        "description": "Observe religious ceremonies, prayers and spiritual rituals for blessings and protection."
                    },
                    {
                        "time": "Cultural Interaction",
                        "description": "Interact with locals, browse handicraft stalls and experience Bhutanese festive traditions."
                    }
                ]
            },
            {
                "day": 8,
                "title": "Tiger’s Nest Monastery Hike and Paro Sightseeing",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Hike",
                        "description": "Hike to Taktsang (Tiger’s Nest) Monastery perched on a cliff above Paro Valley."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Visit National Museum, Kyichu Lhakhang or relax with optional Bhutanese hot stone bath."
                    },
                    {
                        "time": "Shopping",
                        "description": "Explore Paro markets for textiles, handicrafts and traditional souvenirs."
                    }
                ]
            },
            {
                "day": 9,
                "title": "Departure from Paro",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Transfer",
                        "description": "Transfer to Paro International Airport for onward flight."
                    },
                    {
                        "time": "Departure",
                        "description": "Board departure flight and conclude Bhutan festival journey."
                    }
                ]
            }
        ],
        "includes": [
            "Bhutan tourist royalties, visa fees and government taxes",
            "Accommodation in listed or similar 3-star hotels",
            "All meals including tea and coffee",
            "All land transfers and sightseeing with entrance fees",
            "Bottled drinking water in vehicle",
            "Licensed English-speaking Bhutanese guide"
        ],
        "excludes": [
            "International flight airfare to and from Paro",
            "Travel insurance",
            "Personal expenses such as drinks, laundry, calls and internet",
            "Alcoholic beverages and soft drinks",
            "Tips for guide and driver",
            "Any services not mentioned in the inclusions"
        ]
    },
    {
        "slug": "thimphu-tshechu-festival-7-days",
        "tour_name": "Thimphu Tshechu Festival - 7 Days",
        "title": "Thimphu Tshechu Festival - 7 Days",
        "category": "festival",
        "days": 7,
        "duration": "7 Days",
        "travelers": "2-8",
        "rating": "4.9",
        "image": "/tour/img/thimphu-festivals.avif",
        "highlights": [
            "Thimphu Tshechu Festival",
            "Tiger’s Nest Monastery",
            "Tashichho Dzong",
            "Punakha Dzong",
            "Dochula Pass",
            "Buddha Dordenma"
        ],
        "itinerary": [
            {
                "day": 1,
                "title": "Arrival in Paro",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Flight Arrival",
                        "description": "Arrive at Paro International Airport with spectacular Himalayan views during descent."
                    },
                    {
                        "time": "Immigration",
                        "description": "Complete immigration and customs procedures and meet your tour representative."
                    },
                    {
                        "time": "Transfer",
                        "description": "Transfer to your accommodation in Paro and check in."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Explore Paro town, visit Rinpung Dzong and the National Museum if time permits."
                    },
                    {
                        "time": "Evening",
                        "description": "Dinner with traditional Bhutanese cuisine and leisure time to relax."
                    }
                ]
            },
            {
                "day": 2,
                "title": "Drive to Thimphu and City Sightseeing",
                "location": "Paro – Thimphu",
                "activities": [
                    {
                        "time": "Drive",
                        "description": "Scenic drive from Paro to Thimphu through valleys and mountain landscapes."
                    },
                    {
                        "time": "Dzong Visit",
                        "description": "Visit Tashichho Dzong, the seat of Bhutan’s government and monastic body."
                    },
                    {
                        "time": "Sightseeing",
                        "description": "Explore Memorial Chorten and National Folk Heritage Museum."
                    },
                    {
                        "time": "Market Visit",
                        "description": "Browse Bhutanese handicrafts market for textiles and souvenirs."
                    },
                    {
                        "time": "Statue Visit",
                        "description": "Visit Buddha Dordenma Statue for panoramic views of Thimphu valley."
                    },
                    {
                        "time": "Evening",
                        "description": "Optional cultural show or leisure time exploring Thimphu city."
                    }
                ]
            },
            {
                "day": 3,
                "title": "Attend Thimphu Tshechu Festival",
                "location": "Thimphu",
                "activities": [
                    {
                        "time": "Festival",
                        "description": "Attend the vibrant Thimphu Tshechu festival at the dzong courtyard."
                    },
                    {
                        "time": "Masked Dances",
                        "description": "Witness sacred cham dances performed by monks depicting Buddhist teachings and legends."
                    },
                    {
                        "time": "Rituals",
                        "description": "Observe religious ceremonies, blessings and sacred offerings."
                    },
                    {
                        "time": "Cultural Performances",
                        "description": "Enjoy traditional music, folk songs and theatrical cultural presentations."
                    },
                    {
                        "time": "Community Experience",
                        "description": "Interact with locals and immerse in Bhutanese festival traditions."
                    },
                    {
                        "time": "Cuisine",
                        "description": "Sample local Bhutanese dishes from food stalls around the festival grounds."
                    }
                ]
            },
            {
                "day": 4,
                "title": "Thimphu to Punakha via Dochula Pass",
                "location": "Thimphu – Punakha",
                "activities": [
                    {
                        "time": "Drive",
                        "description": "Scenic drive to Punakha with a stop at Dochula Pass (3,100m) for Himalayan views and 108 chortens."
                    },
                    {
                        "time": "Temple Visit",
                        "description": "Visit Chimi Lhakhang, the Temple of the Divine Madman."
                    },
                    {
                        "time": "Dzong Visit",
                        "description": "Explore Punakha Dzong located at the confluence of Pho Chhu and Mo Chhu rivers."
                    },
                    {
                        "time": "Village Walk",
                        "description": "Stroll through Ritsha village and observe traditional Bhutanese rural life."
                    },
                    {
                        "time": "Bridge Walk",
                        "description": "Walk across Punakha Suspension Bridge with scenic valley views."
                    }
                ]
            },
            {
                "day": 5,
                "title": "Return to Paro via Wangdue Phodrang",
                "location": "Punakha – Paro",
                "activities": [
                    {
                        "time": "Drive",
                        "description": "Drive back to Paro with stop at Wangdue Phodrang town."
                    },
                    {
                        "time": "Dzong Visit",
                        "description": "Visit Wangdue Phodrang Dzong overlooking the valley confluence."
                    },
                    {
                        "time": "Tea Break",
                        "description": "Enjoy tea break at a local café with Bhutanese snacks."
                    },
                    {
                        "time": "Town Exploration",
                        "description": "Explore Paro town markets and traditional architecture."
                    },
                    {
                        "time": "Dzong Visit",
                        "description": "Visit Rinpung Dzong, a historic fortress-monastery of Paro valley."
                    }
                ]
            },
            {
                "day": 6,
                "title": "Hike to Tiger’s Nest Monastery",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Hike Start",
                        "description": "Begin early morning hike to Taktsang (Tiger’s Nest) Monastery through pine forests."
                    },
                    {
                        "time": "Viewpoint",
                        "description": "Stop at scenic viewpoints with waterfalls and prayer flags for panoramic monastery views."
                    },
                    {
                        "time": "Monastery Visit",
                        "description": "Explore Taktsang Monastery’s prayer halls, meditation caves and sacred shrines."
                    },
                    {
                        "time": "Descent",
                        "description": "Return hike to trailhead and celebratory lunch in Paro."
                    },
                    {
                        "time": "Leisure",
                        "description": "Afternoon relaxation or optional sightseeing in Paro."
                    }
                ]
            },
            {
                "day": 7,
                "title": "Departure from Paro",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Check-out",
                        "description": "Check out from hotel and prepare for departure."
                    },
                    {
                        "time": "Transfer",
                        "description": "Transfer to Paro International Airport for onward flight."
                    },
                    {
                        "time": "Departure",
                        "description": "Board departure flight and conclude Bhutan festival journey."
                    }
                ]
            }
        ],
        "includes": [
            "Bhutan tourist royalties, visa fees and government taxes",
            "All land transfers and sightseeing with entrance fees",
            "All meals including tea and coffee",
            "Bottled drinking water in vehicle",
            "Licensed English-speaking Bhutanese guide"
        ],
        "excludes": [
            "Accommodation in 3-star or similar hotels",
            "Travel insurance",
            "Personal expenses such as drinks, laundry, calls and internet",
            "Alcoholic beverages and soft drinks",
            "Tips for guide and driver",
            "Luxury hotel upgrades at additional cost"
        ]
    },
    {
        "slug": "punakha-tshechu-festival-8-days",
        "tour_name": "Punakha Tshechu Festival - 8 Days",
        "title": "Punakha Tshechu Festival - 8 Days",
        "category": "festival",
        "days": 8,
        "duration": "8 Days",
        "travelers": "2-8",
        "rating": "4.9",
        "image": "/tour/img/punakha-festival.avif",
        "highlights": [
            "Punakha Tshechu Festival",
            "Punakha Dzong",
            "Dochula Pass",
            "Tiger’s Nest Monastery",
            "Thimphu Cultural Sites",
            "Chimi Lhakhang"
        ],
        "itinerary": [
            {
                "day": 1,
                "title": "Arrival in Paro and Drive to Thimphu",
                "location": "Paro – Thimphu",
                "activities": [
                    {
                        "time": "Arrival",
                        "description": "Arrive at Paro International Airport and complete immigration and customs procedures."
                    },
                    {
                        "time": "Meet & Greet",
                        "description": "Meet your tour representative and begin scenic drive to Thimphu."
                    },
                    {
                        "time": "Scenic Drive",
                        "description": "Enjoy Himalayan views, lush valleys and traditional villages during the 1.5–2 hour drive."
                    },
                    {
                        "time": "Hotel Check-in",
                        "description": "Check into accommodation in Thimphu and relax after travel."
                    },
                    {
                        "time": "Orientation",
                        "description": "Brief orientation about Thimphu city and upcoming tour experiences."
                    }
                ]
            },
            {
                "day": 2,
                "title": "Thimphu Sightseeing",
                "location": "Thimphu",
                "activities": [
                    {
                        "time": "Dzong Visit",
                        "description": "Visit Tashichho Dzong, seat of Bhutan’s government and central monastic body."
                    },
                    {
                        "time": "Statue Visit",
                        "description": "Explore Buddha Dordenma Statue with panoramic valley views."
                    },
                    {
                        "time": "Chorten Visit",
                        "description": "Visit Memorial Chorten and observe local devotees performing rituals."
                    },
                    {
                        "time": "Arts Institute",
                        "description": "Visit National Institute for Zorig Chusum to see traditional Bhutanese arts and crafts."
                    },
                    {
                        "time": "Market Walk",
                        "description": "Explore Centenary Farmers Market and local handicraft bazaars."
                    }
                ]
            },
            {
                "day": 3,
                "title": "Drive from Thimphu to Punakha",
                "location": "Thimphu – Punakha",
                "activities": [
                    {
                        "time": "Drive",
                        "description": "Scenic drive to Punakha via Dochula Pass with Himalayan views."
                    },
                    {
                        "time": "Dochula Pass",
                        "description": "Visit Dochula Pass and admire the 108 chortens and panoramic mountain scenery."
                    },
                    {
                        "time": "Temple Visit",
                        "description": "Stop at Chimi Lhakhang, the Temple of the Divine Madman."
                    },
                    {
                        "time": "Dzong Visit",
                        "description": "Explore Punakha Dzong, Bhutan’s most majestic riverside fortress-monastery."
                    },
                    {
                        "time": "River Activity",
                        "description": "Optional river rafting experience on Mo Chhu River or riverside picnic lunch."
                    }
                ]
            },
            {
                "day": 4,
                "title": "Attend Punakha Drupchen Festival",
                "location": "Punakha",
                "activities": [
                    {
                        "time": "Morning Rituals",
                        "description": "Participate in early morning prayers and rituals at Punakha Dzong."
                    },
                    {
                        "time": "Ceremonies",
                        "description": "Witness sacred ceremonies, chanting and offerings performed by monks."
                    },
                    {
                        "time": "Cham Dances",
                        "description": "Enjoy vibrant masked cham dances depicting Buddhist legends and teachings."
                    },
                    {
                        "time": "Thongdrol",
                        "description": "Attend the unveiling of the sacred Throngdrol thangka blessing ceremony."
                    },
                    {
                        "time": "Cultural Interaction",
                        "description": "Engage with locals and experience community gatherings during the festival."
                    }
                ]
            },
            {
                "day": 5,
                "title": "Drive from Punakha to Paro",
                "location": "Punakha – Paro",
                "activities": [
                    {
                        "time": "Scenic Drive",
                        "description": "Drive back to Paro via Dochula Pass enjoying panoramic Himalayan landscapes."
                    },
                    {
                        "time": "Tea Break",
                        "description": "Stop for refreshments along the mountain route."
                    },
                    {
                        "time": "Arrival",
                        "description": "Arrive in Paro and check into your hotel."
                    },
                    {
                        "time": "Town Exploration",
                        "description": "Explore Paro town markets and visit Paro Dzong."
                    }
                ]
            },
            {
                "day": 6,
                "title": "Leisure and Sightseeing in Paro",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Excursion",
                        "description": "Visit Taktsang Monastery (Tiger’s Nest) or explore Paro’s cultural landmarks."
                    },
                    {
                        "time": "Town Walk",
                        "description": "Explore Paro town’s traditional architecture, shops and handicraft markets."
                    },
                    {
                        "time": "Optional Activities",
                        "description": "Participate in cultural experiences like Bhutanese archery or museum visits."
                    },
                    {
                        "time": "Relaxation",
                        "description": "Relax in parks or enjoy Bhutanese hot stone bath and wellness experiences."
                    }
                ]
            },
            {
                "day": 7,
                "title": "Hike to Taktsang Monastery",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Hike Start",
                        "description": "Begin iconic hike to Taktsang (Tiger’s Nest) Monastery through pine forests."
                    },
                    {
                        "time": "Viewpoints",
                        "description": "Stop at cafeteria viewpoint for stunning panoramic views of the monastery."
                    },
                    {
                        "time": "Monastery Visit",
                        "description": "Explore temples, shrines and meditation caves inside Taktsang Monastery."
                    },
                    {
                        "time": "Descent",
                        "description": "Return hike to trailhead and reflect on spiritual journey."
                    }
                ]
            },
            {
                "day": 8,
                "title": "Departure from Paro",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Final Breakfast",
                        "description": "Enjoy breakfast and prepare for departure."
                    },
                    {
                        "time": "Airport Transfer",
                        "description": "Transfer to Paro International Airport with required travel documents."
                    },
                    {
                        "time": "Departure",
                        "description": "Board flight and depart Bhutan with cherished festival memories."
                    }
                ]
            }
        ],
        "includes": [
            "Bhutan tourist royalties, visa fees and government taxes",
            "Accommodation in listed or similar 3-star hotels",
            "All meals with tea and coffee throughout the trip",
            "All land transfers, sightseeing and entrance fees",
            "Bottled drinking water and vehicle services"
        ],
        "excludes": [
            "Travel insurance",
            "Personal expenses such as laundry, calls and internet",
            "Alcoholic beverages and soft drinks",
            "Luxury hotel upgrades at additional cost"
        ]
    },
    {
        "slug": "bumthang-nimalung-tshechu-festival-11-days",
        "tour_name": "Bumthang Nimalung Tshechu Festival - 11 Days",
        "title": "Bumthang Nimalung Tshechu Festival - 11 Days",
        "category": "festival",
        "days": 11,
        "duration": "11 Days",
        "travelers": "2-8",
        "rating": "4.9",
        "image": "/tour/img/bumthang-nimalung-festival.avif",
        "highlights": [
            "Nimalung Tshechu Festival",
            "Tiger’s Nest Monastery",
            "Phobjikha Valley",
            "Punakha Dzong",
            "Gangtey Goempa",
            "Bumthang Sacred Temples"
        ],
        "itinerary": [
            {
                "day": 1,
                "title": "Arrival in Paro and Transfer to Thimphu",
                "location": "Paro – Thimphu",
                "activities": [
                    {
                        "time": "Arrival",
                        "description": "Arrive at Paro International Airport and complete visa, immigration and customs procedures."
                    },
                    {
                        "time": "Meet & Greet",
                        "description": "Meet your guide from Amen Bhutan Tours and Treks and discuss the journey ahead."
                    },
                    {
                        "time": "Scenic Drive",
                        "description": "Drive 1.5 hours to Thimphu via river valleys, forests and Tachog Lhakhang bridge viewpoints."
                    },
                    {
                        "time": "City Introduction",
                        "description": "Visit National Memorial Chorten and enjoy a brief city orientation tour."
                    },
                    {
                        "time": "Welcome Dinner",
                        "description": "Enjoy Bhutanese cuisine and relax to acclimatize to the altitude."
                    }
                ]
            },
            {
                "day": 2,
                "title": "Thimphu Excursion Tour",
                "location": "Thimphu",
                "activities": [
                    {
                        "time": "Dzong Visit",
                        "description": "Explore Tashichho Dzong, the seat of Bhutan’s government and central monastic body."
                    },
                    {
                        "time": "Statue Visit",
                        "description": "Visit Buddha Dordenma Statue for panoramic views of Thimphu Valley."
                    },
                    {
                        "time": "Wildlife",
                        "description": "See Bhutan’s national animal at Motithang Takin Preserve."
                    },
                    {
                        "time": "Museums & Markets",
                        "description": "Visit Textile Museum and browse Thimphu Handicrafts Market for local crafts."
                    },
                    {
                        "time": "Evening",
                        "description": "Leisure walk in Thimphu town and optional cultural performance."
                    }
                ]
            },
            {
                "day": 3,
                "title": "Drive from Thimphu to Punakha",
                "location": "Thimphu – Punakha",
                "activities": [
                    {
                        "time": "Scenic Drive",
                        "description": "Drive 2–3 hours via Dochula Pass with Himalayan panoramic views and 108 chortens."
                    },
                    {
                        "time": "Dzong Visit",
                        "description": "Visit Punakha Dzong at the confluence of Pho Chhu and Mo Chhu rivers."
                    },
                    {
                        "time": "Village Walk",
                        "description": "Explore nearby villages to experience Bhutanese rural life."
                    }
                ]
            },
            {
                "day": 4,
                "title": "Drive to Phobjikha Valley via Gangtey",
                "location": "Punakha – Phobjikha",
                "activities": [
                    {
                        "time": "Temple Visit",
                        "description": "Visit Chimi Lhakhang, temple of the Divine Madman."
                    },
                    {
                        "time": "Monastery",
                        "description": "Explore Gangtey Goempa monastery overlooking Phobjikha Valley."
                    },
                    {
                        "time": "Village Walk",
                        "description": "Walk through Gangtey village observing local lifestyle and rural environment."
                    }
                ]
            },
            {
                "day": 5,
                "title": "Drive from Phobjikha to Bumthang",
                "location": "Phobjikha – Bumthang",
                "activities": [
                    {
                        "time": "Nature Walk",
                        "description": "Explore Gangtey Nature Trail and visit Black-Necked Crane Information Centre."
                    },
                    {
                        "time": "Scenic Drive",
                        "description": "Drive 6–7 hours through mountain passes, forests and villages to Bumthang."
                    },
                    {
                        "time": "En Route Stops",
                        "description": "Visit Trongsa Dzong and Chendebji Chorten for panoramic views and cultural insights."
                    }
                ]
            },
            {
                "day": 6,
                "title": "Attend Nimalung Tshechu Festival",
                "location": "Bumthang – Nimalung Monastery",
                "activities": [
                    {
                        "time": "Festival Start",
                        "description": "Travel to Nimalung Monastery near Chumey to attend sacred festival ceremonies."
                    },
                    {
                        "time": "Thongdrol Ceremony",
                        "description": "Witness the unfurling of the giant Thangka believed to confer blessings."
                    },
                    {
                        "time": "Mask Dances",
                        "description": "Enjoy cham mask dances and religious rituals performed by monks."
                    },
                    {
                        "time": "Cultural Interaction",
                        "description": "Explore stalls, interact with locals in traditional attire and sample festival foods."
                    }
                ]
            },
            {
                "day": 7,
                "title": "Excursion Day in Bumthang",
                "location": "Bumthang",
                "activities": [
                    {
                        "time": "Temple Visits",
                        "description": "Visit Jambay Lhakhang, Kurjey Lhakhang and Tamzhing Monastery."
                    },
                    {
                        "time": "Cultural Experiences",
                        "description": "Explore Bumthang handicraft shops known for yathra weaving."
                    },
                    {
                        "time": "Local Industry",
                        "description": "Visit Bumthang Brewery and Cheese Factory for tasting local products."
                    }
                ]
            },
            {
                "day": 8,
                "title": "Drive from Bumthang to Wangdue",
                "location": "Bumthang – Wangdue",
                "activities": [
                    {
                        "time": "Scenic Drive",
                        "description": "Drive 5–6 hours through Pele La Pass and central Bhutan landscapes."
                    },
                    {
                        "time": "Stop in Trongsa",
                        "description": "Optional visit to historic Trongsa Dzong overlooking deep valleys."
                    },
                    {
                        "time": "Arrival",
                        "description": "Visit Wangdue Phodrang Dzong ruins and explore local town life."
                    }
                ]
            },
            {
                "day": 9,
                "title": "Drive to Paro and Sightseeing",
                "location": "Wangdue – Paro",
                "activities": [
                    {
                        "time": "Drive",
                        "description": "Drive 3 hours through river valleys and terraced fields to Paro."
                    },
                    {
                        "time": "Dzong Visit",
                        "description": "Visit Rinpung Dzong, administrative and monastic center of Paro."
                    },
                    {
                        "time": "Museum",
                        "description": "Explore Ta Dzong National Museum displaying Bhutanese art and relics."
                    },
                    {
                        "time": "Temple Visit",
                        "description": "Visit Kyichu Lhakhang, one of Bhutan’s oldest temples dating back to the 7th century."
                    }
                ]
            },
            {
                "day": 10,
                "title": "Hike to Tiger’s Nest Monastery",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Trailhead Drive",
                        "description": "Drive 20 minutes to the trailhead for Taktsang Monastery hike."
                    },
                    {
                        "time": "Hike",
                        "description": "Ascend through pine forests and prayer flags to Tiger’s Nest Monastery."
                    },
                    {
                        "time": "Monastery Exploration",
                        "description": "Explore sacred caves, temples and learn about Guru Padmasambhava’s legend."
                    },
                    {
                        "time": "Descent",
                        "description": "Return hike to base and relax at hotel after the spiritual trek."
                    }
                ]
            },
            {
                "day": 11,
                "title": "Departure from Paro",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Final Breakfast",
                        "description": "Enjoy breakfast and complete hotel check-out."
                    },
                    {
                        "time": "Airport Transfer",
                        "description": "Transfer to Paro International Airport with scenic final valley views."
                    },
                    {
                        "time": "Departure",
                        "description": "Board flight and depart Bhutan with unforgettable festival memories."
                    }
                ]
            }
        ],
        "includes": [
            "All in-country transfers and airport pickups",
            "Comfortable accommodation near festival sites",
            "Daily breakfast, lunch and dinner",
            "Guided tours covering all major attractions",
            "Festival entry fees for Nimalung Tshechu",
            "Participation in cultural festival activities"
        ],
        "excludes": [
            "International airfare",
            "Travel insurance",
            "Personal expenses and alcoholic beverages",
            "Tips and gratuities for guide and driver",
            "Bhutan visa fees",
            "Optional activities outside the itinerary"
        ]
    },
    {
        "slug": "jomolhari-trek-12-days",
        "tour_name": "Jomolhari Trek - 12 Days",
        "title": "Jomolhari Trek",
        "category": "trekking",
        "days": 12,
        "duration": "12 Days",
        "travelers": "2-10",
        "rating": "4.9",
        "image": "/tour/img/jomolhari-trek.avif",
        "highlights": [
            "Jomolhari Base Camp",
            "Tiger’s Nest Monastery",
            "High Himalayan Passes",
            "Lingshi Village",
            "Alpine Meadows & Glaciers",
            "Thimphu Cultural Sightseeing"
        ],
        "itinerary": [
            {
                "day": 1,
                "title": "Arrival in Paro",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Arrival",
                        "description": "Arrive at Paro International Airport, meet the representative and transfer to hotel."
                    },
                    {
                        "time": "Pre-Trek Briefing",
                        "description": "Attend a detailed briefing on Jomolhari Trek covering itinerary, safety and equipment."
                    },
                    {
                        "time": "Cultural Introduction",
                        "description": "Introduction to Bhutanese culture, customs and trekking etiquette."
                    }
                ]
            },
            {
                "day": 2,
                "title": "Acclimatization Hike to Tiger’s Nest Monastery",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Drive to Trailhead",
                        "description": "Scenic drive to the trailhead of Paro Taktsang (Tiger’s Nest Monastery)."
                    },
                    {
                        "time": "Hike",
                        "description": "Trek 4–5 hours through pine forests to reach the iconic cliffside monastery."
                    },
                    {
                        "time": "Monastery Exploration",
                        "description": "Explore temples, shrines and meditation caves while learning its spiritual significance."
                    },
                    {
                        "time": "Return",
                        "description": "Descend to trailhead and return to Paro for final trek preparation meeting."
                    }
                ]
            },
            {
                "day": 3,
                "title": "Paro to Sharna Trek",
                "location": "Paro – Sharna",
                "distance": "17 km",
                "duration": "5-6 hours",
                "activities": [
                    {
                        "time": "Drive",
                        "description": "Scenic drive to the trek starting point with views of rivers and mountain landscapes."
                    },
                    {
                        "time": "Trek Start",
                        "description": "Begin trek through forests, meadows and gradual ascents toward Sharna village."
                    },
                    {
                        "time": "Camping",
                        "description": "Overnight at tented campsite in Sharna with dinner prepared by trekking crew."
                    }
                ]
            },
            {
                "day": 4,
                "title": "Sharna to Sio Thangthangkha",
                "location": "Sharna – Thangthangkha",
                "distance": "21 km",
                "duration": "7-8 hours",
                "activities": [
                    {
                        "time": "Forest Trails",
                        "description": "Trek through dense forests, streams and alpine meadows with panoramic mountain views."
                    },
                    {
                        "time": "Wildlife & Flora",
                        "description": "Spot wildflowers, grazing yaks and Himalayan birds along the trail."
                    },
                    {
                        "time": "Camp",
                        "description": "Overnight camping at high-altitude Thangthangkha campsite."
                    }
                ]
            },
            {
                "day": 5,
                "title": "Thangthangkha to Jangothang",
                "location": "Thangthangkha – Jangothang",
                "distance": "19 km",
                "duration": "5-6 hours",
                "activities": [
                    {
                        "time": "Alpine Trek",
                        "description": "Gradual ascent through alpine landscapes with views of Mount Jomolhari."
                    },
                    {
                        "time": "Base Camp",
                        "description": "Arrive at Jangothang campsite (Jomolhari Base Camp) and acclimatize."
                    }
                ]
            },
            {
                "day": 6,
                "title": "Acclimatization Day at Jangothang",
                "location": "Jangothang",
                "activities": [
                    {
                        "time": "Acclimatization Walks",
                        "description": "Short hikes to Tshophu Lake and nearby viewpoints to adjust to altitude."
                    },
                    {
                        "time": "Optional Excursions",
                        "description": "Optional trek to Jomolhari Glacier or visit Lingshi Dzong viewpoints."
                    },
                    {
                        "time": "Camp Activities",
                        "description": "Photography, cultural interaction with staff and relaxing campfire evening."
                    }
                ]
            },
            {
                "day": 7,
                "title": "Jangothang to Lingshi",
                "location": "Jangothang – Lingshi",
                "distance": "21 km",
                "duration": "6-7 hours",
                "activities": [
                    {
                        "time": "High Pass Trek",
                        "description": "Cross rugged high mountain passes with dramatic Himalayan landscapes."
                    },
                    {
                        "time": "Village Visit",
                        "description": "Explore Lingshi village and learn about traditional highland lifestyles."
                    }
                ]
            },
            {
                "day": 8,
                "title": "Lingshi to Shodu",
                "location": "Lingshi – Shodu",
                "distance": "22 km",
                "duration": "7-8 hours",
                "activities": [
                    {
                        "time": "Mountain Trails",
                        "description": "Trek through alpine meadows, forests and valleys with stunning peak views."
                    },
                    {
                        "time": "Campsite",
                        "description": "Overnight camping at scenic Shodu campsite surrounded by mountains."
                    }
                ]
            },
            {
                "day": 9,
                "title": "Shodu to Barshong",
                "location": "Shodu – Barshong",
                "distance": "14 km",
                "duration": "4-5 hours",
                "activities": [
                    {
                        "time": "Forest Trek",
                        "description": "Trek through lush forests, meadows and rocky trails toward Barshong."
                    },
                    {
                        "time": "Village Exploration",
                        "description": "Explore Barshong village and interact with local residents."
                    }
                ]
            },
            {
                "day": 10,
                "title": "Barshong to Dodina and Drive to Thimphu",
                "location": "Barshong – Dodina – Thimphu",
                "distance": "22 km trek",
                "duration": "7-8 hours",
                "activities": [
                    {
                        "time": "Final Trek",
                        "description": "Complete final trekking stretch through scenic landscapes to Dodina."
                    },
                    {
                        "time": "Drive",
                        "description": "Drive to Thimphu after trek completion and check into hotel."
                    }
                ]
            },
            {
                "day": 11,
                "title": "Sightseeing in Thimphu",
                "location": "Thimphu",
                "activities": [
                    {
                        "time": "City Tour",
                        "description": "Visit Buddha Dordenma Statue and Tashichho Dzong."
                    },
                    {
                        "time": "Museums & Markets",
                        "description": "Explore Bhutan Postal Museum and traditional craft markets."
                    },
                    {
                        "time": "Cultural Sites",
                        "description": "Visit Changangkha Lhakhang and Memorial Chorten."
                    },
                    {
                        "time": "Evening",
                        "description": "Enjoy cultural dinner show with traditional Bhutanese dances."
                    }
                ]
            },
            {
                "day": 12,
                "title": "Departure from Paro",
                "location": "Thimphu – Paro",
                "activities": [
                    {
                        "time": "Transfer",
                        "description": "Drive from Thimphu to Paro Airport for departure."
                    },
                    {
                        "time": "Flight",
                        "description": "Check-in, clear security and depart Bhutan with trekking memories."
                    }
                ]
            }
        ],
        "includes": [
            "All ground transport in a private vehicle including airport transfers",
            "Comfortable hotel accommodation during tour",
            "Tented camp accommodation during trekking days",
            "All meals: breakfast, lunch, dinner, tea and snacks",
            "All entrance fees and Bhutan tourist visa fee",
            "Experienced English-speaking trekking guide",
            "Porters and pack animal services",
            "All staff salary, equipment, food and clothing",
            "All government taxes and official expenses"
        ],
        "excludes": [
            "International flight airfare to and from Paro",
            "Travel insurance (medical, cancellation, repatriation)",
            "Personal expenses such as internet, laundry and beverages",
            "Special filming, camera and drone permit fees",
            "Tips for guide and driver",
            "Any services not mentioned in the inclusions"
        ]
    },
    {
        "slug": "black-necked-crane-tshechu-festival-8-days",
        "tour_name": "Black Necked Crane Tshechu Festival Tour",
        "title": "Black Necked Crane Tshechu (Festival)",
        "category": "festival",
        "days": 8,
        "duration": "8 Days",
        "travelers": "2-12",
        "rating": "4.8",
        "image": "/tour/img/black-necked-crane-festival.avif",
        "highlights": [
            "Black-Necked Crane Festival at Gangtey",
            "Tiger’s Nest Monastery Hike",
            "Phobjikha Valley Nature Walks",
            "Punakha Dzong & Dochula Pass",
            "Thimphu Cultural Sightseeing",
            "Gangtey Monastery Visit"
        ],
        "itinerary": [
            {
                "day": 1,
                "title": "Arrival in Paro and Transfer to Thimphu",
                "location": "Paro – Thimphu",
                "distance": "55 km",
                "duration": "1.5 hours drive",
                "activities": [
                    {
                        "time": "Arrival",
                        "description": "Arrive at Paro International Airport and meet tour representative."
                    },
                    {
                        "time": "Transfer",
                        "description": "Scenic drive to Thimphu through lush valleys, rivers and traditional villages."
                    },
                    {
                        "time": "Orientation",
                        "description": "Brief orientation about Thimphu city, attractions and cultural experiences."
                    },
                    {
                        "time": "Leisure",
                        "description": "Evening free to explore local markets, cafes and Bhutanese restaurants."
                    }
                ]
            },
            {
                "day": 2,
                "title": "Sightseeing Tour in Thimphu",
                "location": "Thimphu",
                "activities": [
                    {
                        "time": "Memorial Chorten",
                        "description": "Visit the sacred stupa built in memory of the Third King of Bhutan."
                    },
                    {
                        "time": "Buddha Dordenma",
                        "description": "Explore the giant Buddha statue overlooking Thimphu valley."
                    },
                    {
                        "time": "Tashichho Dzong",
                        "description": "Discover the fortress-monastery housing the throne room and government offices."
                    },
                    {
                        "time": "Zorig Chusum Institute",
                        "description": "Observe traditional Bhutanese arts such as painting, carving and sculpture."
                    },
                    {
                        "time": "Folk Heritage Museum",
                        "description": "Learn about Bhutanese rural lifestyle, culture and architecture."
                    },
                    {
                        "time": "Changangkha Lhakhang",
                        "description": "Visit the ancient hilltop temple for blessings and panoramic city views."
                    },
                    {
                        "time": "Craft Bazaar",
                        "description": "Shop for handmade Bhutanese textiles, crafts and souvenirs."
                    }
                ]
            },
            {
                "day": 3,
                "title": "Drive from Thimphu to Punakha with Sightseeing",
                "location": "Thimphu – Punakha",
                "distance": "74 km",
                "duration": "2-3 hours drive",
                "activities": [
                    {
                        "time": "Dochula Pass",
                        "description": "Stop at Dochula Pass to view the Himalayan range and 108 memorial stupas."
                    },
                    {
                        "time": "Druk Wangyal Lhakhang",
                        "description": "Visit the temple dedicated to Bhutan’s Fourth King with detailed murals."
                    },
                    {
                        "time": "Chimi Lhakhang",
                        "description": "Short hike through rice paddies to the fertility temple of Drukpa Kunley."
                    },
                    {
                        "time": "Punakha Dzong",
                        "description": "Explore the magnificent riverside fortress at the confluence of Pho Chhu and Mo Chhu."
                    },
                    {
                        "time": "Optional Visit",
                        "description": "Visit Sangchhen Dorji Lhuendrup Nunnery for valley views and spiritual interaction."
                    }
                ]
            },
            {
                "day": 4,
                "title": "Drive from Punakha to Gangtey / Phobjikha Valley",
                "location": "Punakha – Gangtey/Phobjikha",
                "distance": "85 km",
                "duration": "2-3 hours drive",
                "activities": [
                    {
                        "time": "Wangdue Phodrang",
                        "description": "Stop at Wangdue town and admire the historic dzong overlooking river confluence."
                    },
                    {
                        "time": "Phobjikha Valley",
                        "description": "Arrive at the glacial valley known for marshlands, forests and scenic landscapes."
                    },
                    {
                        "time": "Gangtey Monastery",
                        "description": "Visit the 17th-century Gangtey Gonpa, an important Nyingma monastery."
                    },
                    {
                        "time": "Crane Information Center",
                        "description": "Learn about conservation of endangered black-necked cranes."
                    },
                    {
                        "time": "Nature Walk",
                        "description": "Enjoy tranquil nature walks spotting flora and fauna of the valley."
                    }
                ]
            },
            {
                "day": 5,
                "title": "Attend Black-Necked Crane Festival at Gangtey Goempa",
                "location": "Gangtey / Phobjikha",
                "activities": [
                    {
                        "time": "Festival Opening",
                        "description": "Witness opening rituals and blessings at Gangtey Monastery."
                    },
                    {
                        "time": "Cultural Performances",
                        "description": "Enjoy masked dances, folk songs and traditional Bhutanese music."
                    },
                    {
                        "time": "Crane-Themed Exhibitions",
                        "description": "Explore artwork, crafts and exhibits dedicated to black-necked cranes."
                    },
                    {
                        "time": "Conservation Programs",
                        "description": "Attend awareness sessions on crane conservation and environmental education."
                    },
                    {
                        "time": "Local Cuisine",
                        "description": "Sample Bhutanese festival foods such as momos, ema datshi and red rice."
                    },
                    {
                        "time": "Closing Ceremony",
                        "description": "Conclude the day with prayers and blessings for the cranes and festival success."
                    }
                ]
            },
            {
                "day": 6,
                "title": "Drive from Gangtey to Paro",
                "location": "Gangtey – Paro",
                "distance": "205 km",
                "duration": "6-7 hours drive",
                "activities": [
                    {
                        "time": "Scenic Drive",
                        "description": "Journey through valleys, villages and mountain passes including Dochula Pass."
                    },
                    {
                        "time": "Wangdue Stop",
                        "description": "Short stop at Wangdue Phodrang town for rest and exploration."
                    },
                    {
                        "time": "Arrival",
                        "description": "Arrive in Paro Valley and check into hotel for relaxation."
                    }
                ]
            },
            {
                "day": 7,
                "title": "Hike to Tiger’s Nest Monastery",
                "location": "Paro",
                "distance": "6.4 km hike",
                "duration": "3-4 hours",
                "activities": [
                    {
                        "time": "Trailhead Start",
                        "description": "Begin hike through pine and rhododendron forests with valley views."
                    },
                    {
                        "time": "Taktsang Cafeteria",
                        "description": "Midway rest stop with refreshments and panoramic monastery views."
                    },
                    {
                        "time": "Tiger’s Nest Visit",
                        "description": "Explore the sacred cliffside monastery with guided cultural insights."
                    },
                    {
                        "time": "Descent",
                        "description": "Return hike to trailhead enjoying scenic landscapes."
                    }
                ]
            },
            {
                "day": 8,
                "title": "Departure from Paro",
                "location": "Paro",
                "activities": [
                    {
                        "time": "Transfer",
                        "description": "Transfer to Paro International Airport for departure."
                    },
                    {
                        "time": "Airport Formalities",
                        "description": "Complete check-in, security screening and immigration clearance."
                    },
                    {
                        "time": "Flight",
                        "description": "Board flight and depart Bhutan with memorable festival experiences."
                    }
                ]
            }
        ],
        "includes": [
            "Bhutan royalties, tourist fees, visa fees and taxes",
            "Accommodation in listed or similar 3-star hotels",
            "All meals including tea and coffee throughout the trip",
            "All land transfers and sightseeing with entrance fees",
            "Bottled water in the vehicle and camp services"
        ],
        "excludes": [
            "Travel insurance",
            "Personal expenses",
            "Alcoholic and soft drinks",
            "Telephone and internet charges",
            "Tips for guide and driver",
            "Luxury hotel upgrades at additional cost"
        ]
    },
    {
        "slug": "snowman-trek-bhutan-30-days",
        "tour_name": "Snowman Trek",
        "title": "Snowman Trekking in Bhutan",
        "category": "adventure",
        "days": 30,
        "duration": "30 Days",
        "travelers": "2-8",
        "rating": "5.0",
        "image": "/tour/img/snowman-trekking-in-bhutan.avif",
        "highlights": [
            "One of the World's Toughest Treks",
            "Cross High Himalayan Passes above 5000m",
            "Mount Jomolhari & Remote Lunana Region",
            "Laya & Layap Culture Experience",
            "High-Altitude Glacial Lakes & Valleys",
            "Traverse Bhutan’s Most Remote Wilderness"
        ],
        "itinerary": [
            { "day": 1, "title": "Arrival in Paro", "location": "Paro", "description": "Arrival at Paro International Airport, transfer to hotel, orientation briefing on Snowman Trek logistics and acclimatization." },
            { "day": 2, "title": "Paro Sightseeing", "location": "Paro", "description": "Visit Rinpung Dzong, National Museum, Kyichu Lhakhang and stroll through Paro town." },
            { "day": 3, "title": "Hike to Tiger’s Nest Monastery", "location": "Paro", "distance": "9 km", "duration": "5-6 hrs", "description": "Iconic acclimatization hike to Taktsang Monastery with panoramic valley views." },

            { "day": 4, "title": "Trek Drugyal Dzong to Shana", "location": "Shana", "distance": "17 km", "duration": "5-6 hrs", "description": "Start of Snowman Trek through farmland, forests and Paro valley landscapes." },
            { "day": 5, "title": "Shana to Thangthangkha", "location": "Thangthangkha", "distance": "22 km", "duration": "7-8 hrs", "altitude": "3610m" },
            { "day": 6, "title": "Thangthangkha to Jangothang", "location": "Jangothang", "distance": "19 km", "duration": "5-6 hrs", "altitude": "4080m" },
            { "day": 7, "title": "Acclimatization Day at Jangothang", "location": "Jangothang", "description": "Rest and explore base of Mt. Jomolhari with short hikes and acclimatization." },

            { "day": 8, "title": "Jangothang to Lingshi via Nyele La Pass", "location": "Lingshi", "distance": "18 km", "duration": "6-7 hrs", "altitude": "4010m" },
            { "day": 9, "title": "Lingshi to Chebisa", "location": "Chebisa", "distance": "12 km", "duration": "5-6 hrs", "altitude": "3880m" },
            { "day": 10, "title": "Chebisa to Shomuthang via Gobu La", "location": "Shomuthang", "distance": "17 km", "duration": "6-7 hrs", "altitude": "4220m" },
            { "day": 11, "title": "Shomuthang to Robluthang via Jarela Pass", "location": "Robluthang", "distance": "18 km", "duration": "6-7 hrs", "altitude": "4160m" },
            { "day": 12, "title": "Robluthang to Limithang via Sinche La Pass", "location": "Limithang", "distance": "19 km", "duration": "6-7 hrs", "altitude": "4140m" },

            { "day": 13, "title": "Limithang to Laya Village", "location": "Laya", "distance": "10 km", "duration": "4-5 hrs", "altitude": "3850m" },
            { "day": 14, "title": "Rest Day in Laya", "location": "Laya", "description": "Cultural immersion with Layap people and acclimatization day." },

            { "day": 15, "title": "Laya to Rhoduphu", "location": "Rhoduphu", "distance": "19 km", "duration": "7-8 hrs", "altitude": "4160m" },
            { "day": 16, "title": "Rhoduphu to Narethang", "location": "Narethang", "distance": "17 km", "duration": "5-6 hrs", "altitude": "4900m" },
            { "day": 17, "title": "Narethang to Tarina", "location": "Tarina", "distance": "18 km", "duration": "6-7 hrs", "altitude": "4350m" },
            { "day": 18, "title": "Tarina to Woche", "location": "Woche", "distance": "17 km", "duration": "6-7 hrs", "altitude": "4350m" },
            { "day": 19, "title": "Woche to Lhedi", "location": "Lhedi", "distance": "17 km", "duration": "6-7 hrs", "altitude": "4200m" },
            { "day": 20, "title": "Lhedi to Thanza", "location": "Thanza", "distance": "17 km", "duration": "7-8 hrs", "altitude": "4150m" },
            { "day": 21, "title": "Rest Day in Thanza", "location": "Thanza", "description": "Rest and acclimatization in remote Lunana region." },

            { "day": 22, "title": "Thanza to Tshochena", "location": "Tshochena", "distance": "18 km", "duration": "7-8 hrs", "altitude": "5000m" },
            { "day": 23, "title": "Tshochena to Jichu Dramo", "location": "Jichu Dramo", "distance": "14 km", "duration": "4-5 hrs", "altitude": "5050m" },
            { "day": 24, "title": "Jichu Dramo to Chukarpo", "location": "Chukarpo", "distance": "16 km", "duration": "5-6 hrs", "altitude": "4600m" },
            { "day": 25, "title": "Chukarpo to Thampe Tsho", "location": "Thampe Tsho", "distance": "18 km", "duration": "6-7 hrs", "altitude": "4300m" },
            { "day": 26, "title": "Thampe Tsho to Maurothang", "location": "Maurothang", "distance": "16 km", "duration": "5-6 hrs", "altitude": "3610m" },

            { "day": 27, "title": "Maurothang to Sephu & Drive to Gangtey", "location": "Gangtey", "description": "Final trek descent followed by scenic drive to Gangtey Valley." },
            { "day": 28, "title": "Drive Gangtey to Thimphu", "location": "Thimphu", "duration": "3-4 hrs drive", "distance": "135 km" },
            { "day": 29, "title": "Thimphu Sightseeing", "location": "Thimphu", "description": "Visit Tashichho Dzong, Memorial Chorten, Buddha Dordenma, Folk Heritage Museum and local markets." },
            { "day": 30, "title": "Drive to Paro & Departure", "location": "Paro", "duration": "1.5 hrs drive", "distance": "55 km", "description": "Transfer to Paro International Airport for final departure." }
        ],
        "includes": [
            "All ground transport and airport transfers",
            "Accommodation in hotels and tented camps",
            "All meals during trek and tour",
            "Licensed English-speaking trekking guide",
            "Porters and pack animal services",
            "All permits, entrance fees and government taxes"
        ],
        "excludes": [
            "International airfare",
            "Travel insurance",
            "Personal expenses and beverages",
            "Filming and drone permits",
            "Tips for guide and trekking staff",
            "Any services not mentioned in inclusions"
        ]
    },
    {
        "slug": "gangtey-valley-trek-10-days",
        "tour_name": "Gangtey Valley Trek",
        "title": "Gangtey Valley Trek in Bhutan",
        "category": "adventure",
        "days": 10,
        "duration": "10 Days",
        "travelers": "2-12",
        "rating": "5.0",
        "image": "/tour/img/gangtey-valley-trek-10-day-adventure.avif",
        "highlights": [
            "Scenic Trek through Phobjikha Valley",
            "Cross Tsele La and Shobju La Passes",
            "Explore Remote Villages of Gogona & Khotokha",
            "Visit Gangtey Gompa Monastery",
            "Tiger’s Nest Monastery Hike",
            "Dochula Pass Himalayan Panoramas"
        ],
        "itinerary": [
            {
                "day": 1,
                "title": "Arrival in Paro",
                "location": "Paro",
                "description": "Arrival at Paro International Airport, meet guide, transfer to hotel, evening leisure and trek briefing."
            },
            {
                "day": 2,
                "title": "Paro to Thimphu",
                "location": "Thimphu",
                "duration": "1 hr drive",
                "distance": "50 km",
                "description": "Scenic drive to Thimphu with sightseeing including Memorial Chorten, Buddha Dordenma and Folk Heritage Museum."
            },
            {
                "day": 3,
                "title": "Thimphu to Gangtey Gompa",
                "location": "Gangtey",
                "duration": "5 hrs drive",
                "distance": "135 km",
                "description": "Drive via Dochula Pass to Phobjikha Valley, visit Gangtey Monastery and explore crane habitat valley."
            },
            {
                "day": 4,
                "title": "Trek Gangtey to Gogona",
                "location": "Gogona",
                "distance": "14 km",
                "duration": "5-6 hrs",
                "altitude": "3400m",
                "description": "Trek through meadows, villages and forests crossing Tsele La Pass before descending to Gogona village."
            },
            {
                "day": 5,
                "title": "Trek Gogona to Khotokha",
                "location": "Khotokha",
                "distance": "16 km",
                "duration": "6-7 hrs",
                "altitude": "3400m",
                "description": "Ascend to Shobju La Pass and descend into the wide and scenic Khotokha Valley with forested trails."
            },
            {
                "day": 6,
                "title": "Trek to Tikke Zampa & Drive to Punakha",
                "location": "Punakha",
                "distance": "12 km trek",
                "duration": "5-6 hrs trek + 1 hr drive",
                "description": "Final descent trek to Tikke Zampa followed by drive to Punakha and visit Punakha Dzong."
            },
            {
                "day": 7,
                "title": "Punakha to Thimphu",
                "location": "Thimphu",
                "duration": "3 hrs drive",
                "distance": "75 km",
                "description": "Drive back to Thimphu via Dochula Pass with optional visits to museums and markets."
            },
            {
                "day": 8,
                "title": "Excursion to Haa Valley",
                "location": "Haa Valley",
                "duration": "Full day excursion",
                "description": "Scenic drive over Chele La Pass to explore Haa Valley, visit Lhakhang Karpo and Lhakhang Nagpo temples."
            },
            {
                "day": 9,
                "title": "Return to Paro & Hike to Tiger’s Nest",
                "location": "Paro",
                "distance": "6 km hike",
                "duration": "5-6 hrs",
                "altitude": "3120m",
                "description": "Drive to Paro and hike to the iconic Taktsang (Tiger’s Nest) Monastery perched on a cliff."
            },
            {
                "day": 10,
                "title": "Departure from Paro",
                "location": "Paro",
                "description": "Transfer to Paro International Airport for final departure."
            }
        ],
        "includes": [
            "All ground transport in a private vehicle including airport transfers",
            "Comfortable lodging during tour",
            "Tented accommodation during trekking days",
            "Full board meals throughout the tour and trek",
            "Licensed English-speaking Bhutanese guide",
            "Porters and pack animal services for trekking",
            "All entrance fees, Bhutan tourist visa fee and government taxes"
        ],
        "excludes": [
            "International flight airfare to and from Paro",
            "Travel insurance",
            "Personal expenses such as drinks, laundry and internet",
            "Filming, camera and drone permit fees",
            "Tips for guide and driver",
            "Any services not mentioned in the inclusions"
        ]
    },
    {
        "slug": "chele-la-trek-7-days",
        "tour_name": "Chele La Trek",
        "title": "Chele La Trek in Bhutan",
        "category": "adventure",
        "days": 7,
        "duration": "7 Days",
        "travelers": "2-12",
        "rating": "5.0",
        "image": "/tour/img/chele-la-trek-7-day-itinerary.avif",
        "highlights": [
            "Hike to Tiger’s Nest Monastery",
            "Cross Chele La and Sagala Passes",
            "Trek through Rhododendron Forests",
            "Panoramic Views of Mt. Jomolhari",
            "Explore Haa Valley",
            "Cultural Sightseeing in Thimphu"
        ],
        "itinerary": [
            {
                "day": 1,
                "title": "Arrival in Paro and Sightseeing",
                "location": "Paro",
                "altitude": "2200m",
                "description": "Arrival at Paro International Airport, hotel check-in, acclimatization and sightseeing including National Museum and Rinpung Dzong. Evening trek briefing and welcome dinner."
            },
            {
                "day": 2,
                "title": "Hike to Taktsang Monastery for Acclimatization",
                "location": "Paro",
                "altitude": "3000m",
                "distance": "5-6 hrs hike",
                "description": "Hike through pine forests to the sacred Tiger’s Nest Monastery, explore temples and descend back to Paro for rest."
            },
            {
                "day": 3,
                "title": "Drive Paro to Haa and Trek to Sagala",
                "location": "Sagala",
                "duration": "2-3 hrs drive + 3-4 hrs trek",
                "altitude": "3890m",
                "description": "Drive via Chele La Pass to Haa Valley, then trek through alpine meadows and conifer forests to Sagala campsite."
            },
            {
                "day": 4,
                "title": "Trek from Sagala to Ningula",
                "location": "Ningula",
                "duration": "5-6 hrs trek",
                "altitude": "3850m",
                "description": "Moderate trek through rhododendron forests and panoramic Himalayan views, camp overnight at Ningula."
            },
            {
                "day": 5,
                "title": "Trek to Chele Pass and Drive to Thimphu",
                "location": "Thimphu",
                "duration": "4-5 hrs trek + drive",
                "altitude": "3990m",
                "description": "Gradual ascent to Chele Pass with panoramic Himalayan vistas, then descend and drive to Thimphu for hotel stay."
            },
            {
                "day": 6,
                "title": "Sightseeing in Thimphu and Drive to Paro",
                "location": "Paro",
                "duration": "Full day",
                "description": "Visit Memorial Chorten, Tashichho Dzong, Folk Heritage Museum and Buddha Dordenma before driving back to Paro."
            },
            {
                "day": 7,
                "title": "Departure from Paro",
                "location": "Paro",
                "description": "Transfer to Paro International Airport for final departure and onward journey."
            }
        ],
        "includes": [
            "All ground transport in a private vehicle including airport transfers",
            "Comfortable lodging during tour",
            "Tented accommodation during trekking days",
            "Full board meals throughout the tour and trek",
            "Licensed English-speaking Bhutanese guide",
            "Porters and pack animal services for trekking",
            "All entrance fees, Bhutan tourist visa fee and government taxes"
        ],
        "excludes": [
            "International flight airfare to and from Paro",
            "Travel insurance",
            "Personal expenses such as drinks, laundry and internet",
            "Filming, camera and drone permit fees",
            "Tips for guide and driver",
            "Any services not mentioned in the inclusions"
        ]
    },
    {
        slug: "fly-fishing-bhutan",
        tour_name: "Divine Fly Fishing Bhutan Experience",
        title: "Fly Fishing in Bhutan Valleys",
        category: "adventure",
        days: 5,
        duration: "5 Days",
        travelers: "1-6",
        rating: "4.9",
        image: "/tour/img/fly-fishing.avif",
        highlights: [
            "Haa Valley Fly Fishing",
            "Paro River Trout Fishing",
            "Phobjikha Valley Experience",
            "Bumthang Brown Trout Fishing"
        ],

        itinerary: [
            {
                day: 1,
                title: "Arrival in Paro & Transfer to Thimphu",
                location: "Paro / Thimphu",
                activities: [
                    { time: "Arrival", description: "Arrive at Paro International Airport and meet your fly fishing guide." },
                    { time: "Transfer", description: "Scenic drive to Thimphu with views of river valleys and Himalayan foothills." },
                    { time: "Briefing", description: "Orientation about fly fishing rules, safety, permits, and gear introduction." },
                    { time: "Evening", description: "Leisure evening in Thimphu preparing for fishing adventures." },
                    { time: "Overnight", description: "Overnight stay in Thimphu." }
                ]
            },
            {
                day: 2,
                title: "Fly Fishing in Haa Valley",
                location: "Haa Valley",
                activities: [
                    { time: "Morning", description: "Drive via Chele La Pass to Haa Valley with panoramic Himalayan views." },
                    { time: "Fishing", description: "Fly fishing session targeting Brown Trout, Snow Trout, and Rainbow Trout." },
                    { time: "Lunch", description: "Light snacks and beverages by riverside." },
                    { time: "Afternoon", description: "Guided fishing techniques: Dry Fly Fishing and Euro Nymphing." },
                    { time: "Evening", description: "Relax and enjoy serene valley landscapes." },
                    { time: "Overnight", description: "Overnight stay in Haa Valley." }
                ]
            },
            {
                day: 3,
                title: "Paro Valley Trout Fishing",
                location: "Paro Valley",
                activities: [
                    { time: "Morning", description: "Drive back to Paro and begin guided fishing along Paro river." },
                    { time: "Fishing", description: "Catch Brown Trout and Snow Trout in pristine alpine streams." },
                    { time: "Lunch", description: "Picnic lunch with river and mountain views." },
                    { time: "Afternoon", description: "Advanced casting techniques and river reading session." },
                    { time: "Evening", description: "Explore Paro town and local handicraft markets." },
                    { time: "Overnight", description: "Overnight stay in Paro." }
                ]
            },
            {
                day: 4,
                title: "Phobjikha Valley Fishing Experience",
                location: "Phobjikha Valley",
                activities: [
                    { time: "Morning", description: "Drive to Phobjikha Valley, winter home of black-necked cranes." },
                    { time: "Fishing", description: "Fly fishing for Brown Trout in calm marshland streams." },
                    { time: "Lunch", description: "Light snacks and beverages provided during fishing session." },
                    { time: "Afternoon", description: "Nature walk and photography in the glacial valley landscape." },
                    { time: "Evening", description: "Relax at lodge and enjoy Bhutanese hospitality." },
                    { time: "Overnight", description: "Overnight stay in Phobjikha Valley." }
                ]
            },
            {
                day: 5,
                title: "Bumthang Valley & Departure",
                location: "Bumthang / Paro",
                activities: [
                    { time: "Morning", description: "Optional fishing session in Bumthang valley streams for Brown Trout." },
                    { time: "Transfer", description: "Drive back towards Paro with scenic Himalayan landscapes." },
                    { time: "Leisure", description: "Free time for packing, souvenir shopping, or relaxation." },
                    { time: "Departure", description: "Transfer to Paro Airport for final departure." }
                ]
            }
        ],

        includes: [
            "Fishing permits for all designated valleys",
            "Professional fly fishing guide",
            "Fly fishing gear and equipment",
            "Light snacks and beverages during fishing sessions",
            "All ground transport in a private vehicle",
            "Comfortable accommodation during the trip",
            "Full board meals during the tour",
            "Government taxes and official expenses"
        ],

        excludes: [
            "International airfare to and from Paro",
            "Travel insurance (medical, cancellation, etc.)",
            "Personal expenses such as drinks, laundry, internet",
            "Tips for guide and driver",
            "Any services not mentioned in the includes section"
        ]
    },
    {
        "slug": "bhutan-motorcycle-tour-9-days",
        "tour_name": "Bhutan Motorcycle Tour - 9 Days",
        "title": "Bhutan Motorcycle Tour - 9 Days",
        "category": "adventure",
        "days": 9,
        "duration": "9 Days",
        "travelers": "2-10",
        "rating": "4.9",
        "image": "/tour/img/biking-in-bhutan.avif",
        "highlights": [
            "Ride through Paro, Thimphu, Punakha & Gangtey valleys",
            "Dochula Pass Himalayan panorama",
            "Tiger’s Nest Monastery hike",
            "Punakha Dzong & Suspension Bridge",
            "Gangtey Nature Trail and Monastery",
            "Scenic Himalayan mountain road adventure"
        ],
        "itinerary": [
            {
                "day": 1,
                "title": "Arrive at Paro",
                "location": "Paro",
                "activities": [
                    { "time": "Arrival", "description": "Arrival at Paro International Airport and warm welcome by tour guide." },
                    { "time": "Transfer", "description": "Transfer to hotel with scenic views of Paro Valley and traditional architecture." },
                    { "time": "Check-in", "description": "Hotel check-in and time to relax and acclimatize to altitude." },
                    { "time": "Leisure", "description": "Gentle walk around Paro town to adapt to the climate and elevation." },
                    { "time": "Briefing", "description": "Evening tour briefing, itinerary discussion and introduction to fellow riders." },
                    { "time": "Motorcycle Check", "description": "Introduction to motorcycles and familiarization with riding equipment." }
                ]
            },
            {
                "day": 2,
                "title": "Paro Sightseeing",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Breakfast at hotel and preparation for sightseeing." },
                    { "time": "Hike", "description": "Hike to Tiger’s Nest Monastery with panoramic mountain views." },
                    { "time": "Lunch", "description": "Lunch at cafeteria near Tiger’s Nest or in Paro town." },
                    { "time": "Museum Visit", "description": "Visit National Museum housed in Ta Dzong showcasing Bhutanese heritage." },
                    { "time": "Dzong Visit", "description": "Explore Paro Rinpung Dzong known for intricate murals and architecture." },
                    { "time": "Evening", "description": "Stroll through Paro market for handicrafts and souvenirs." },
                    { "time": "Dinner", "description": "Dinner at local restaurant with Bhutanese and international cuisine." }
                ]
            },
            {
                "day": 3,
                "title": "Paro to Thimphu Ride (55 km)",
                "location": "Thimphu",
                "activities": [
                    { "time": "Morning", "description": "Breakfast and preparation for first motorcycle ride." },
                    { "time": "Ride", "description": "Scenic ride from Paro to Thimphu through winding mountain roads." },
                    { "time": "Check-in", "description": "Hotel check-in and refreshment." },
                    { "time": "Sightseeing", "description": "Visit National Memorial Chorten and Buddha Dordenma statue." },
                    { "time": "Dzong Visit", "description": "Explore Tashichho Dzong, seat of Bhutan’s government and monastic body." },
                    { "time": "Evening", "description": "Leisure exploration of Thimphu’s markets, cafes and handicraft shops." }
                ]
            },
            {
                "day": 4,
                "title": "Thimphu to Punakha Ride (70 km)",
                "location": "Punakha",
                "activities": [
                    { "time": "Departure", "description": "Ride towards Punakha via scenic mountain roads." },
                    { "time": "Pass Visit", "description": "Stop at Dochula Pass for Himalayan views and visit 108 memorial chortens." },
                    { "time": "Arrival", "description": "Hotel check-in and rest in Punakha." },
                    { "time": "Dzong Visit", "description": "Explore Punakha Dzong at the confluence of Pho and Mo Chhu rivers." },
                    { "time": "Bridge Walk", "description": "Walk across Punakha Suspension Bridge with valley views." },
                    { "time": "Village Walk", "description": "Explore nearby villages and experience local rural life." }
                ]
            },
            {
                "day": 5,
                "title": "Punakha to Gangtey Ride (150 km)",
                "location": "Gangtey",
                "activities": [
                    { "time": "Morning", "description": "Breakfast and pre-ride briefing for long scenic ride." },
                    { "time": "Ride", "description": "Ride through winding mountain roads and diverse Himalayan landscapes." },
                    { "time": "Pass Stop", "description": "Stop at Pelela Pass for panoramic mountain views." },
                    { "time": "Arrival", "description": "Arrival in Gangtey Valley and hotel check-in." },
                    { "time": "Monastery Visit", "description": "Visit Gangtey Goenpa Monastery overlooking Phobjikha Valley." },
                    { "time": "Nature Walk", "description": "Optional Gangtey Nature Trail walk through serene landscapes." }
                ]
            },
            {
                "day": 6,
                "title": "Gangtey to Punakha Ride (73 km)",
                "location": "Punakha",
                "activities": [
                    { "time": "Morning", "description": "Breakfast and optional early morning valley walk." },
                    { "time": "Ride", "description": "Ride back to Punakha enjoying scenic mountain viewpoints." },
                    { "time": "Lunch", "description": "Leisure lunch at local restaurant or hotel." },
                    { "time": "Optional Activity", "description": "River rafting on Mo Chhu or Pho Chhu rivers." },
                    { "time": "Temple Visit", "description": "Visit Chimi Lhakhang, the famous fertility temple." },
                    { "time": "Evening", "description": "Relaxation and optional cultural experience in Punakha." }
                ]
            },
            {
                "day": 7,
                "title": "Punakha to Thimphu Ride (70 km)",
                "location": "Thimphu",
                "activities": [
                    { "time": "Morning", "description": "Breakfast and motorcycle checks before departure." },
                    { "time": "Ride", "description": "Ride back to Thimphu via scenic valleys and mountain roads." },
                    { "time": "Pass Stop", "description": "Stop again at Dochula Pass for panoramic Himalayan views." },
                    { "time": "Arrival", "description": "Hotel check-in and relaxation in Thimphu." },
                    { "time": "Afternoon", "description": "Visit Royal Textile Academy or Folk Heritage Museum." },
                    { "time": "Evening", "description": "Dinner and optional cultural show or live traditional performance." }
                ]
            },
            {
                "day": 8,
                "title": "Thimphu to Paro Ride (55 km)",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Breakfast and last-minute shopping in Thimphu." },
                    { "time": "Ride", "description": "Scenic ride back to Paro with photo stops along the route." },
                    { "time": "Arrival", "description": "Hotel check-in and relaxation in Paro." },
                    { "time": "Village Visit", "description": "Optional visit to a traditional farmhouse for cultural experience." },
                    { "time": "Farewell Dinner", "description": "Special farewell dinner celebrating the motorcycle journey." },
                    { "time": "Cultural Show", "description": "Optional cultural performance to conclude the tour." }
                ]
            },
            {
                "day": 9,
                "title": "Depart Paro",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Breakfast and final packing at hotel." },
                    { "time": "Check-out", "description": "Hotel check-out and preparation for departure." },
                    { "time": "Transfer", "description": "Transfer to Paro International Airport." },
                    { "time": "Departure", "description": "Flight check-in, boarding and farewell to Bhutan." }
                ]
            }
        ],
        "includes": [
            "Motorcycle rental with maintenance for high-altitude roads",
            "Self-drive or guided motorcycle tour options",
            "Comprehensive Bhutan motorcycle travel guide and route maps",
            "Group biking tours with experienced support crew",
            "Safety gear including helmets and protective equipment",
            "Accommodation and meals throughout the tour",
            "Support vehicle for luggage transport and emergency backup",
            "Expert local tour guides ensuring safety and cultural insights",
            "All local permits and entrance fees as per itinerary"
        ],
        "excludes": [
            "International airfare to and from Bhutan",
            "Comprehensive travel insurance",
            "Personal expenses such as beverages, laundry and souvenirs",
            "Tips and gratuities for guides and support staff",
            "Optional activities not included in the itinerary",
            "Emergency evacuation or medical costs"
        ]
    },
    {
        "slug": "kayaking-and-rafting-bhutan",
        "tour_name": "Kayaking and Rafting - 7 Days",
        "title": "Kayaking and Rafting Adventure in Bhutan",
        "category": "adventure",
        "days": 7,
        "duration": "7 Days",
        "travelers": "2-12",
        "rating": "4.8",
        "image": "/tour/img/rafting-in-bhutan.avif",
        "highlights": [
            "Rafting on Mo Chhu River in Punakha",
            "Dochula Pass Himalayan views",
            "Tiger’s Nest Monastery hike",
            "Punakha Dzong & Suspension Bridge",
            "Paro and Thimphu cultural sightseeing",
            "Village visits and cultural immersion"
        ],
        "itinerary": [
            {
                "day": 1,
                "title": "Arrival in Paro",
                "location": "Paro",
                "activities": [
                    { "time": "Arrival", "description": "Arrival at Paro International Airport and assistance with immigration and customs." },
                    { "time": "Transfer", "description": "Private transfer to hotel for check-in and refreshment." },
                    { "time": "Lunch", "description": "Welcome lunch at a local restaurant featuring Bhutanese cuisine." },
                    { "time": "Sightseeing", "description": "Visit Paro Rinpung Dzong, a historic fortress-monastery with intricate woodwork." },
                    { "time": "Museum Visit", "description": "Explore the National Museum housed in Ta Dzong showcasing Bhutanese artifacts." },
                    { "time": "Evening", "description": "Stroll through Paro town visiting local shops and handicraft stores." },
                    { "time": "Dinner", "description": "Welcome dinner at hotel or local restaurant with traditional Bhutanese dishes." }
                ]
            },
            {
                "day": 2,
                "title": "Paro to Thimphu",
                "location": "Thimphu",
                "activities": [
                    { "time": "Morning", "description": "Breakfast at hotel followed by scenic drive to Thimphu." },
                    { "time": "Stop", "description": "Visit Tachog Lhakhang temple and cross the traditional iron chain bridge." },
                    { "time": "Lunch", "description": "Lunch at a local restaurant in Thimphu." },
                    { "time": "Sightseeing", "description": "Visit Buddha Dordenma Statue overlooking Thimphu valley." },
                    { "time": "Dzong Visit", "description": "Explore Tashichho Dzong, the seat of Bhutan’s government and monastic body." },
                    { "time": "Evening", "description": "Stroll around Thimphu market or Centenary Farmers’ Market (weekends)." },
                    { "time": "Dinner", "description": "Dinner at local restaurant followed by hotel check-in and rest." }
                ]
            },
            {
                "day": 3,
                "title": "Thimphu to Punakha",
                "location": "Punakha",
                "activities": [
                    { "time": "Morning", "description": "Breakfast and departure for Punakha via Dochula Pass." },
                    { "time": "Pass Visit", "description": "Stop at Dochula Pass to admire 108 chortens and Himalayan panoramic views." },
                    { "time": "Drive", "description": "Continue scenic descent through lush valleys and traditional villages." },
                    { "time": "Lunch", "description": "Lunch at local restaurant in Punakha." },
                    { "time": "Dzong Visit", "description": "Explore Punakha Dzong at the confluence of Pho Chhu and Mo Chhu rivers." },
                    { "time": "Bridge Walk", "description": "Walk across the Punakha Suspension Bridge with river valley views." },
                    { "time": "Evening", "description": "Hotel check-in, dinner and optional cultural performance or hot stone bath." }
                ]
            },
            {
                "day": 4,
                "title": "Rafting in Punakha",
                "location": "Punakha",
                "activities": [
                    { "time": "Morning", "description": "Breakfast followed by rafting safety briefing and gear distribution." },
                    { "time": "Rafting", "description": "Start rafting on Mo Chhu River with Class II–III rapids suitable for beginners." },
                    { "time": "Scenic Views", "description": "Enjoy views of Punakha Dzong, lush valleys and traditional farmhouses from the river." },
                    { "time": "Lunch", "description": "Picnic lunch by the riverside at a scenic location." },
                    { "time": "Afternoon Rafting", "description": "Continue rafting through exciting rapids and spot local wildlife along riverbanks." },
                    { "time": "Village Visit", "description": "Optional visit to a nearby village to interact with locals and learn their lifestyle." },
                    { "time": "Evening", "description": "Return to hotel, dinner and leisure time for relaxation or stargazing." }
                ]
            },
            {
                "day": 5,
                "title": "Punakha to Paro",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Breakfast and departure for Paro via Dochula Pass." },
                    { "time": "Coffee Break", "description": "Stop at Dochula Pass for tea or coffee with Himalayan views." },
                    { "time": "Lunch", "description": "Lunch at a local restaurant en route." },
                    { "time": "Dzong Visit", "description": "Visit Simtokha Dzong, Bhutan’s oldest fortress now housing a Buddhist studies institute." },
                    { "time": "Arrival", "description": "Arrive in Paro and hotel check-in." },
                    { "time": "Leisure", "description": "Explore Paro town or visit Kyichu Lhakhang temple." },
                    { "time": "Dinner", "description": "Dinner at local restaurant featuring dishes like Ema Datshi and Red Rice." }
                ]
            },
            {
                "day": 6,
                "title": "Hike to Tiger’s Nest Monastery",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Early breakfast and drive to Tiger’s Nest trailhead." },
                    { "time": "Hike", "description": "Begin 4–5 hour round-trip hike through pine forests and prayer flag-lined paths." },
                    { "time": "Monastery Visit", "description": "Explore Taktsang Monastery perched 900 meters above the valley floor." },
                    { "time": "Lunch", "description": "Lunch at midway cafeteria or packed lunch with monastery views." },
                    { "time": "Descent", "description": "Hike down to base and return to Paro hotel." },
                    { "time": "Evening", "description": "Leisure time followed by celebratory dinner reflecting on the journey." }
                ]
            },
            {
                "day": 7,
                "title": "Departure from Paro",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Final breakfast in Bhutan and packing for departure." },
                    { "time": "Check-Out", "description": "Hotel check-out and last-minute stroll around Paro if time permits." },
                    { "time": "Transfer", "description": "Transfer to Paro International Airport." },
                    { "time": "Departure", "description": "Flight check-in, immigration clearance and departure from Bhutan." }
                ]
            }
        ],
        "includes": [
            "All ground transport in a private vehicle including airport transfers",
            "Standard accommodation in Paro, Thimphu and Punakha on twin sharing basis",
            "All entrance fees to museums and monuments",
            "Bhutanese Tourist Visa fee",
            "Full board meals: breakfast, lunch, dinner, tea and snacks",
            "Professional English-speaking Bhutanese tour guide",
            "Rafting equipment including helmets, paddles and life jackets",
            "All government taxes and official expenses",
            "Mineral drinking water during the tour"
        ],
        "excludes": [
            "International airfare to and from Bhutan",
            "Comprehensive travel insurance",
            "Personal expenses such as calls, internet, laundry, beverages and alcohol",
            "Special filming, camera and drone permit fees",
            "Tips for guide and driver",
            "Optional activities not mentioned in the itinerary",
            "Any other personal expenses not listed in the cost includes section"
        ]
    },
    {
        "slug": "bhutan-photography-tour-13-days",
        "tour_name": "Bhutan Photography Tour - 13 Days",
        "title": "13 Days Bhutan Photography Tour",
        "category": "cultural",
        "days": 13,
        "duration": "13 Days",
        "travelers": "2-10",
        "rating": "4.9",
        "image": "/tour/img/bhutan-photography.jpg",
        "highlights": [
            "Tiger’s Nest Monastery photography hike",
            "Dochula Pass Himalayan panoramas",
            "Bumthang cultural and landscape photography",
            "Trashiyangtse Dzong and Chorten Kora",
            "Thimphu and Paro street photography",
            "Eastern Bhutan village and artisan portraits"
        ],
        "itinerary": [
            {
                "day": 1,
                "title": "Arrival Paro – Drive to Thimphu",
                "location": "Thimphu",
                "activities": [
                    { "time": "Arrival", "description": "Arrival at Paro International Airport and warm Bhutanese welcome by guide." },
                    { "time": "Drive", "description": "Scenic 1-hour drive to Thimphu with views of valleys and traditional architecture." },
                    { "time": "Check-in", "description": "Hotel check-in, relaxation and acclimatization at 2,250m altitude." },
                    { "time": "Photography Walk", "description": "Leisure walk around Thimphu capturing local life and urban Bhutanese scenes." },
                    { "time": "Dinner", "description": "Welcome dinner featuring traditional Bhutanese cuisine and tour briefing." }
                ]
            },
            {
                "day": 2,
                "title": "Thimphu – Trongsa",
                "location": "Trongsa",
                "activities": [
                    { "time": "Morning", "description": "Early breakfast and departure for scenic drive to Trongsa (5–6 hrs)." },
                    { "time": "Photo Stops", "description": "Stops at Dochula Pass for panoramic Himalayan landscape photography." },
                    { "time": "Sightseeing", "description": "Visit Chendebji Chorten, a stupa modeled after Swayambhunath." },
                    { "time": "Arrival", "description": "Arrive in Trongsa, hotel check-in and explore the impressive Trongsa Dzong." },
                    { "time": "Evening", "description": "Dinner and photo review session with tips from tour leader." }
                ]
            },
            {
                "day": 3,
                "title": "Trongsa – Mongar",
                "location": "Mongar",
                "activities": [
                    { "time": "Morning", "description": "Breakfast and early departure for scenic drive to Mongar (6–7 hrs)." },
                    { "time": "Drive", "description": "Photography stops along forested mountain roads and dramatic vistas." },
                    { "time": "Pass Crossing", "description": "Cross Thrumshing La Pass (3,780m) for misty high-altitude photography." },
                    { "time": "Lunch", "description": "Lunch at local restaurant capturing rural lifestyle scenes." },
                    { "time": "Evening", "description": "Arrive in Mongar, evening walk and authentic street photography." }
                ]
            },
            {
                "day": 4,
                "title": "Mongar – Galing",
                "location": "Galing",
                "activities": [
                    { "time": "Morning", "description": "Breakfast and scenic drive through farmlands and traditional villages." },
                    { "time": "Village Visit", "description": "Interact with locals in Galing village for cultural portrait photography." },
                    { "time": "Lunch", "description": "Traditional lunch with a local family and cultural immersion experience." },
                    { "time": "Exploration", "description": "Explore village architecture, fields and landscapes for photography." },
                    { "time": "Sunset", "description": "Sunset landscape photography over rolling hills and countryside." }
                ]
            },
            {
                "day": 5,
                "title": "Trashiyangtse Excursions",
                "location": "Trashiyangtse",
                "activities": [
                    { "time": "Morning", "description": "Drive to Trashiyangtse with scenic photography stops en route." },
                    { "time": "Dzong Visit", "description": "Visit Trashiyangtse Dzong capturing architecture and monastic life." },
                    { "time": "Chorten Visit", "description": "Photograph Chorten Kora stupa and devotional activities of locals." },
                    { "time": "Artisan Workshops", "description": "Visit traditional craft workshops photographing artisans at work." },
                    { "time": "Nature Walk", "description": "Optional nature walk for bird and wildlife photography." }
                ]
            },
            {
                "day": 6,
                "title": "Trashigang – Bumthang",
                "location": "Bumthang",
                "activities": [
                    { "time": "Morning", "description": "Early breakfast and scenic drive to Bumthang (6–7 hrs)." },
                    { "time": "Photo Stops", "description": "Stops at high passes including Thrumshing La for panoramic shots." },
                    { "time": "Lunch", "description": "Lunch en route with candid rural photography opportunities." },
                    { "time": "Arrival", "description": "Arrive in Bumthang, check-in and gentle evening exploration." },
                    { "time": "Dinner", "description": "Dinner featuring Bumthang specialties like buckwheat pancakes." }
                ]
            },
            {
                "day": 7,
                "title": "Bumthang Sightseeing",
                "location": "Bumthang",
                "activities": [
                    { "time": "Morning", "description": "Visit Jakar Dzong overlooking Chokhor Valley for architectural shots." },
                    { "time": "Monastery Visit", "description": "Explore Kurje Lhakhang and Tamshing Lhakhang sacred temples." },
                    { "time": "Lunch", "description": "Lunch at local restaurant sampling regional dishes." },
                    { "time": "Valley Exploration", "description": "Visit Red Panda Brewery and Cheese Factory for lifestyle photography." },
                    { "time": "Evening", "description": "Visit Burning Lake (Mebar Tsho) for serene landscape photography." }
                ]
            },
            {
                "day": 8,
                "title": "Bumthang – Punakha",
                "location": "Punakha",
                "activities": [
                    { "time": "Morning", "description": "Early breakfast and scenic drive to Punakha (6–7 hrs)." },
                    { "time": "Pass Crossing", "description": "Cross Pele La Pass with panoramic mountain photography opportunities." },
                    { "time": "Photo Stops", "description": "Multiple stops capturing rural life, valleys and alpine landscapes." },
                    { "time": "Temple Visit", "description": "Visit Chimi Lhakhang fertility temple via scenic village walk." },
                    { "time": "Evening", "description": "Arrive Punakha, sunset photography near rivers and dzong area." }
                ]
            },
            {
                "day": 9,
                "title": "Punakha – Thimphu",
                "location": "Thimphu",
                "activities": [
                    { "time": "Morning", "description": "Visit Punakha Dzong at the confluence of Pho Chhu and Mo Chhu rivers." },
                    { "time": "Bridge Walk", "description": "Walk across Punakha Suspension Bridge for dynamic photography angles." },
                    { "time": "Drive", "description": "Scenic drive back to Thimphu with photo stops en route." },
                    { "time": "Pass Stop", "description": "Stop at Dochula Pass for panoramic Himalayan views and chorten photography." },
                    { "time": "Evening", "description": "Evening street photography walk around Thimphu market area." }
                ]
            },
            {
                "day": 10,
                "title": "Thimphu Sightseeing",
                "location": "Thimphu",
                "activities": [
                    { "time": "Morning", "description": "Visit National Memorial Chorten capturing daily religious activities." },
                    { "time": "Viewpoint", "description": "Photograph Buddha Dordenma statue overlooking Thimphu valley." },
                    { "time": "Museum Visit", "description": "Explore Folk Heritage Museum showcasing Bhutanese lifestyle." },
                    { "time": "Textile Museum", "description": "Capture traditional Bhutanese weaving and textile displays." },
                    { "time": "Evening", "description": "Visit Tashichho Dzong and optional night photography session." }
                ]
            },
            {
                "day": 11,
                "title": "Thimphu – Paro Sightseeing",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Drive to Paro with stop at historic Simtokha Dzong." },
                    { "time": "Dzong Visit", "description": "Explore Rinpung Dzong capturing Bhutanese fortress architecture." },
                    { "time": "Museum Visit", "description": "Visit Ta Dzong National Museum for cultural photography." },
                    { "time": "Temple Visit", "description": "Visit Kyichu Lhakhang, one of Bhutan’s oldest temples." },
                    { "time": "Evening", "description": "Street photography in Paro town followed by dinner and preparation for hike." }
                ]
            },
            {
                "day": 12,
                "title": "Excursion to Tiger’s Nest Monastery",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Early breakfast and drive to Tiger’s Nest trailhead." },
                    { "time": "Hike", "description": "6–7 hour round-trip hike through pine forests with multiple photo viewpoints." },
                    { "time": "Monastery Visit", "description": "Explore Taktsang Monastery exteriors and capture dramatic cliffside shots." },
                    { "time": "Lunch", "description": "Lunch at cafeteria midway down with panoramic monastery views." },
                    { "time": "Evening", "description": "Return to hotel, dinner and photo review session." }
                ]
            },
            {
                "day": 13,
                "title": "Departure",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Final breakfast and packing of belongings and photography gear." },
                    { "time": "Check-out", "description": "Hotel check-out and transfer to Paro International Airport." },
                    { "time": "Departure", "description": "Flight departure with reflections on Bhutan photography journey." }
                ]
            }
        ],
        "includes": [
            "Comfortable accommodations throughout the tour",
            "All meals during the trip including local delicacies",
            "All internal transport and airport transfers",
            "Experienced English-speaking photography guide",
            "All necessary permits and entry fees",
            "Support staff including porters and cooks where required",
            "Basic trekking and travel equipment (sleeping bags, tents, mats)"
        ],
        "excludes": [
            "International airfare to and from Bhutan",
            "Comprehensive travel insurance covering high altitude travel",
            "Personal expenses such as laundry, calls, bar bills and Wi-Fi",
            "Additional meals, drinks and alcoholic beverages",
            "Tips and gratuities for guides and staff",
            "Emergency evacuation or itinerary changes due to personal reasons",
            "Visa fees and specialized personal photography equipment rental",
            "Souvenirs and handicraft purchases"
        ]
    },
    {
        "slug": "bhutan-birding-tour-8-days",
        "tour_name": "Bhutan Birding Tour - 8 Days",
        "title": "8 Days Bhutan Birding Tour",
        "category": "nature",
        "days": 8,
        "duration": "8 Days",
        "travelers": "2-10",
        "rating": "4.8",
        "image": "/tour/img/bird-watching-in-bhutan.avif",
        "highlights": [
            "Birding in Thimphu forests and botanical gardens",
            "High-altitude birdwatching at Dochula Pass",
            "River birding along Mo Chhu in Punakha",
            "Black-necked Crane habitat in Phobjikha Valley",
            "Paro Valley alpine and riverine bird species",
            "Hike to Tiger’s Nest with forest bird sightings"
        ],
        "itinerary": [
            {
                "day": 1,
                "title": "Arrival in Paro & Drive to Thimphu",
                "location": "Thimphu",
                "activities": [
                    { "time": "Arrival", "description": "Arrival at Paro International Airport, meet guide and complete immigration formalities." },
                    { "time": "Drive", "description": "Scenic 1.5-hour drive to Thimphu with views of rivers, terraced fields and villages." },
                    { "time": "Stop", "description": "Visit Tachogang Lhakhang (Iron Bridge Temple) with initial birdwatching opportunities." },
                    { "time": "Check-in", "description": "Hotel check-in in Thimphu and rest after the journey." },
                    { "time": "Evening", "description": "Optional exploration of Thimphu streets and Craft Bazaar." }
                ]
            },
            {
                "day": 2,
                "title": "Bird Habitat Exploration in Thimphu",
                "location": "Thimphu",
                "activities": [
                    { "time": "Morning", "description": "Early birding excursion in Botanical Garden and riverside forests spotting nutcrackers, choughs and warblers." },
                    { "time": "Sightseeing", "description": "Visit National Memorial Chorten and Tashichho Dzong for cultural exploration." },
                    { "time": "Lunch", "description": "Traditional Bhutanese lunch at a local restaurant." },
                    { "time": "Afternoon", "description": "Birdwatching at Kuenselphodrang Nature Park near Buddha Dordenma statue." },
                    { "time": "Evening", "description": "Leisure walk or additional birding in Royal Botanical Garden." }
                ]
            },
            {
                "day": 3,
                "title": "Thimphu to Punakha Valley",
                "location": "Punakha",
                "activities": [
                    { "time": "Morning", "description": "Drive to Punakha crossing Dochula Pass (3,100m) with Himalayan Monal and Blood Pheasant sightings." },
                    { "time": "Pass Stop", "description": "Birdwatching at Dochula Pass around 108 chortens and alpine forests." },
                    { "time": "Arrival", "description": "Descend into subtropical Punakha Valley and visit Punakha Dzong." },
                    { "time": "Lunch", "description": "Lunch at local restaurant featuring valley produce." },
                    { "time": "Afternoon", "description": "Birdwatching along Mo Chhu River spotting herons, kingfishers and raptors." }
                ]
            },
            {
                "day": 4,
                "title": "Punakha Birding and Cultural Exploration",
                "location": "Punakha",
                "activities": [
                    { "time": "Morning", "description": "Early birding along Mo Chhu River searching for White-bellied Heron and Pallas’s Fish Eagle." },
                    { "time": "Temple Visit", "description": "Walk through rice fields to Chimi Lhakhang for birding and cultural immersion." },
                    { "time": "Lunch", "description": "Traditional Bhutanese lunch in Punakha Valley." },
                    { "time": "Afternoon", "description": "Explore Punakha Dzong and surrounding gardens with birdwatching opportunities." },
                    { "time": "Evening", "description": "Evening birding in Punakha Valley spotting kestrels, hoopoes and sparrowhawks." }
                ]
            },
            {
                "day": 5,
                "title": "Drive from Punakha to Phobjikha Valley",
                "location": "Phobjikha",
                "activities": [
                    { "time": "Morning", "description": "Drive to Phobjikha Valley through changing forest habitats with birding stops en route." },
                    { "time": "Arrival", "description": "Arrive in glacial Phobjikha Valley known for Black-necked Cranes (winter months)." },
                    { "time": "Lunch", "description": "Local lunch featuring buckwheat and dairy-based valley cuisine." },
                    { "time": "Exploration", "description": "Walk through meadows and wetlands observing cranes, griffons and magpies." },
                    { "time": "Monastery Visit", "description": "Visit Gangtey Monastery overlooking valley with excellent birdwatching spots." }
                ]
            },
            {
                "day": 6,
                "title": "Phobjikha to Paro Valley",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Early birdwatching in Phobjikha Valley spotting cranes, thrushes and finches." },
                    { "time": "Drive", "description": "Scenic 5–6 hour drive back to Paro with birding stops in forested areas." },
                    { "time": "Lunch", "description": "Lunch at local restaurant en route." },
                    { "time": "Arrival", "description": "Check-in at hotel in Paro and rest after long drive." },
                    { "time": "Evening", "description": "Evening birdwatching around Paro Valley spotting redstarts and riverine species." }
                ]
            },
            {
                "day": 7,
                "title": "Hike to Tiger’s Nest Monastery",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Early breakfast and start hike to Tiger’s Nest Monastery through pine forests." },
                    { "time": "Birding", "description": "Observe forest birds such as Blue Whistling Thrush and laughingthrushes along the trail." },
                    { "time": "Monastery Visit", "description": "Explore Taktsang Monastery perched at 3,120m with panoramic valley views." },
                    { "time": "Lunch", "description": "Lunch at local restaurant in Paro after descent." },
                    { "time": "Afternoon", "description": "Visit Kyichu Lhakhang or explore Paro town and markets." }
                ]
            },
            {
                "day": 8,
                "title": "Departure from Paro",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Optional final birdwatching session around Paro Valley and river habitats." },
                    { "time": "Breakfast", "description": "Breakfast at hotel and check-out procedures." },
                    { "time": "Transfer", "description": "Transfer to Paro International Airport with assistance from guide." },
                    { "time": "Departure", "description": "Flight departure marking the end of Bhutan Birding Tour." }
                ]
            }
        ],
        "includes": [
            "Bhutan royalties, tourist fees, visa fees and government taxes",
            "Accommodation in listed or similar 3-star hotels",
            "All meals including tea and coffee throughout the trip",
            "All land transfers and sightseeing with entrance fees",
            "Bottled drinking water in vehicle and basic camp services"
        ],
        "excludes": [
            "Travel insurance",
            "Personal expenses of any nature",
            "Alcoholic and soft drinks such as beer, whisky, coke and fanta",
            "Telephone and internet charges",
            "Tips for guide and driver"
        ]
    },
    {
        "slug": "bhutan-buddhist-pilgrimage-tour-8-days",
        "tour_name": "Bhutan Buddhist Pilgrimage Tour - 8 Days",
        "title": "8 Days Bhutan Buddhist Pilgrimage Tour",
        "category": "spiritual",
        "days": 8,
        "duration": "8 Days",
        "travelers": "2-10",
        "rating": "4.8",
        "image": "/tour/img/pilgrimage-tour.avif",
        "highlights": [
            "Visit sacred Buddhist sites across western Bhutan",
            "Pilgrimage to Tiger’s Nest Monastery in Paro",
            "Explore Gangtey Monastery in Phobjikha Valley",
            "Punakha Dzong and Khamsum Yulley Namgyal Chorten hike",
            "Dochula Pass with 108 chortens and Himalayan views",
            "Cultural and spiritual immersion in Thimphu and Paro"
        ],
        "itinerary": [
            {
                "day": 1,
                "title": "Arrival in Paro & Transfer to Thimphu",
                "location": "Thimphu",
                "activities": [
                    { "time": "Arrival", "description": "Arrive at Paro International Airport and receive a warm welcome from the tour representative." },
                    { "time": "Transfer", "description": "Scenic 55 km drive to Thimphu along Paro Chu river and lush valleys." },
                    { "time": "Check-in", "description": "Hotel check-in in Thimphu followed by rest and acclimatization." },
                    { "time": "Orientation", "description": "Brief orientation about the pilgrimage journey, cultural etiquette, and travel tips." }
                ]
            },
            {
                "day": 2,
                "title": "Spiritual and Cultural Exploration in Thimphu",
                "location": "Thimphu",
                "activities": [
                    { "time": "Morning", "description": "Guided city tour including National Memorial Chorten and Buddha Dordenma Statue." },
                    { "time": "Museums", "description": "Visit Folk Heritage Museum and National Textile Museum to learn Bhutanese traditions." },
                    { "time": "Dzong Visit", "description": "Explore Tashichho Dzong, seat of government and central monastic body." },
                    { "time": "Market", "description": "Walk through Handicrafts Market to observe traditional crafts and textiles." },
                    { "time": "Evening", "description": "Free time to explore Thimphu or relax followed by dinner at the hotel." }
                ]
            },
            {
                "day": 3,
                "title": "Thimphu to Gangtey via Dochula Pass",
                "location": "Gangtey",
                "activities": [
                    { "time": "Morning", "description": "Early breakfast and drive 150 km to Gangtey through scenic Himalayan landscapes." },
                    { "time": "Dochula Pass", "description": "Stop at Dochula Pass (3,100m) with panoramic Himalayan views and 108 chortens." },
                    { "time": "Lunch", "description": "Lunch at a local restaurant en route to Phobjikha Valley." },
                    { "time": "Arrival", "description": "Arrive in Gangtey and check into hotel in the serene Phobjikha Valley." },
                    { "time": "Monastery Visit", "description": "Visit Gangtey Monastery, an important Nyingmapa Buddhist center." }
                ]
            },
            {
                "day": 4,
                "title": "Gangtey to Punakha",
                "location": "Punakha",
                "activities": [
                    { "time": "Morning", "description": "Explore Phobjikha Valley with nature walk and views of black-necked crane habitat." },
                    { "time": "Drive", "description": "Drive 75 km to Punakha with scenic viewpoints along the route." },
                    { "time": "Lunch", "description": "Lunch upon arrival in Punakha featuring regional cuisine." },
                    { "time": "Dzong Visit", "description": "Visit Punakha Dzong at the confluence of Pho Chhu and Mo Chhu rivers." },
                    { "time": "Suspension Bridge", "description": "Optional walk across the suspension bridge offering picturesque valley views." }
                ]
            },
            {
                "day": 5,
                "title": "Spiritual Sites and Exploration in Punakha",
                "location": "Punakha",
                "activities": [
                    { "time": "Morning", "description": "Hike to Khamsum Yulley Namgyal Chorten overlooking Punakha Valley." },
                    { "time": "Insight", "description": "Explore the chorten’s intricate religious paintings symbolizing peace and harmony." },
                    { "time": "Village Tour", "description": "Visit local villages to experience Bhutanese rural life and traditional farming." },
                    { "time": "Leisure", "description": "Relax at the hotel or walk along the banks of Mo Chhu River in the evening." },
                    { "time": "Dinner", "description": "Dinner at hotel reflecting on spiritual experiences of the day." }
                ]
            },
            {
                "day": 6,
                "title": "Punakha to Paro via Dochula Pass",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Drive 120 km back to Paro enjoying mountain passes and lush valleys." },
                    { "time": "Stop", "description": "Optional stop again at Dochula Pass for Himalayan views and refreshments." },
                    { "time": "Lunch", "description": "Lunch at a local restaurant along the route." },
                    { "time": "Arrival", "description": "Check into hotel in Paro and relax after the scenic journey." },
                    { "time": "Exploration", "description": "Explore Paro town or visit a traditional farmhouse for cultural insight." }
                ]
            },
            {
                "day": 7,
                "title": "Paro Spiritual Sightseeing & Tiger’s Nest Pilgrimage",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Visit Rinpung Dzong, an important religious and administrative center." },
                    { "time": "Museum", "description": "Explore the National Museum of Bhutan showcasing religious art and artifacts." },
                    { "time": "Hike", "description": "Pilgrimage hike to Taktsang (Tiger’s Nest Monastery) perched at 3,120m." },
                    { "time": "Cafeteria Stop", "description": "Tea break at midway cafeteria with panoramic monastery views." },
                    { "time": "Evening", "description": "Return to hotel, relax and reflect on the spiritual significance of the pilgrimage." }
                ]
            },
            {
                "day": 8,
                "title": "Departure from Paro",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Breakfast at hotel followed by packing and check-out procedures." },
                    { "time": "Transfer", "description": "Transfer to Paro International Airport arranged by tour operator." },
                    { "time": "Departure", "description": "Flight departure with reflections on the spiritual journey through Bhutan." }
                ]
            }
        ],
        "includes": [
            "Accommodation on twin sharing or single room basis",
            "Breakfast and dinner at hotels and lunch at local restaurants",
            "All transfers and sightseeing as per itinerary",
            "English-speaking accompanying guide",
            "Government royalty, taxes and entrance fees",
            "Two bottles of water per person per day in vehicle"
        ],
        "excludes": [
            "Travel insurance",
            "Personal expenses such as drinks, postage and laundry",
            "Telephone and internet charges",
            "Emergency evacuation costs",
            "Tips and gratuities",
            "Costs due to unforeseen events",
            "Extra optional activities like cultural shows or kayaking"
        ]
    },
    {
        "slug": "bhutan-luxury-escape-7-days",
        "tour_name": "Bhutan Luxury Escape - 7 Days",
        "title": "7 Days Luxury Bhutan Cultural Escape",
        "category": "luxury",
        "days": 7,
        "duration": "7 Days",
        "travelers": "2-6",
        "rating": "4.9",
        "image": "/tour/img/luxury-bhutan-escape.avif",
        "highlights": [
            "Luxury stays in 5-star resorts across Paro, Thimphu and Punakha",
            "Private guided cultural and spiritual tours",
            "Dochula Pass panoramic Himalayan views",
            "Exclusive hike to Tiger’s Nest Monastery",
            "Fine dining with authentic Bhutanese and international cuisine"
        ],
        "itinerary": [
            {
                "day": 1,
                "title": "Arrival in Paro & Transfer to Thimphu",
                "location": "Thimphu",
                "activities": [
                    { "time": "Arrival", "description": "Arrive at Paro International Airport and receive VIP welcome assistance." },
                    { "time": "Transfer", "description": "Private luxury vehicle transfer to Thimphu with scenic Himalayan views." },
                    { "time": "Check-in", "description": "Check-in at a luxury 5-star hotel and relax." },
                    { "time": "Evening", "description": "Welcome dinner at a fine dining restaurant with Bhutanese delicacies." }
                ]
            },
            {
                "day": 2,
                "title": "Thimphu Luxury Cultural Exploration",
                "location": "Thimphu",
                "activities": [
                    { "time": "Morning", "description": "Visit Buddha Dordenma and National Memorial Chorten with private guide." },
                    { "time": "Afternoon", "description": "Explore Folk Heritage Museum and Textile Museum." },
                    { "time": "Evening", "description": "Private shopping experience at local craft boutiques." }
                ]
            },
            {
                "day": 3,
                "title": "Thimphu to Punakha via Dochula Pass",
                "location": "Punakha",
                "activities": [
                    { "time": "Drive", "description": "Scenic drive to Punakha via Dochula Pass with luxury picnic stop." },
                    { "time": "Sightseeing", "description": "Visit Punakha Dzong and suspension bridge." },
                    { "time": "Evening", "description": "Relax at luxury riverside resort with spa experience." }
                ]
            },
            {
                "day": 4,
                "title": "Punakha Valley Experience",
                "location": "Punakha",
                "activities": [
                    { "time": "Morning", "description": "Hike to Khamsum Yulley Namgyal Chorten with private guide." },
                    { "time": "Afternoon", "description": "Leisure time with optional river rafting or wellness spa." },
                    { "time": "Evening", "description": "Private candlelight dinner overlooking the valley." }
                ]
            },
            {
                "day": 5,
                "title": "Punakha to Paro",
                "location": "Paro",
                "activities": [
                    { "time": "Drive", "description": "Luxury drive back to Paro with scenic photo stops." },
                    { "time": "Sightseeing", "description": "Visit Paro Dzong and National Museum." },
                    { "time": "Evening", "description": "Relax at luxury resort with cultural performance." }
                ]
            },
            {
                "day": 6,
                "title": "Tiger’s Nest Monastery Excursion",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Exclusive guided hike to Tiger’s Nest Monastery." },
                    { "time": "Lunch", "description": "Gourmet lunch at scenic viewpoint cafeteria." },
                    { "time": "Evening", "description": "Spa and wellness therapy at luxury resort." }
                ]
            },
            {
                "day": 7,
                "title": "Departure from Paro",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Leisure breakfast and private airport transfer." },
                    { "time": "Departure", "description": "Flight departure with VIP assistance." }
                ]
            }
        ],
        "includes": [
            "Luxury 5-star hotel accommodations",
            "Private luxury vehicle and chauffeur",
            "All meals including fine dining experiences",
            "Professional English-speaking guide",
            "Entrance fees and permits",
            "Spa and wellness session"
        ],
        "excludes": [
            "International airfare",
            "Travel insurance",
            "Personal expenses and beverages",
            "Tips and gratuities"
        ]
    },
    {
        "slug": "bhutan-ultra-luxury-himalayan-retreat-10-days",
        "tour_name": "Bhutan Ultra Luxury Himalayan Retreat - 10 Days",
        "title": "10 Days Ultra Luxury Bhutan Himalayan Retreat",
        "category": "luxury",
        "days": 10,
        "duration": "10 Days",
        "travelers": "2-8",
        "rating": "5.0",
        "image": "/tour/img/ultra-luxury-bhutan.avif",
        "highlights": [
            "Stay at Bhutan’s finest luxury lodges and resorts",
            "Private helicopter and exclusive scenic drives",
            "Personalized cultural and spiritual experiences",
            "Premium wellness, spa and meditation sessions",
            "Luxury guided excursions across Paro, Thimphu, Punakha and Gangtey"
        ],
        "itinerary": [
            {
                "day": 1,
                "title": "Arrival in Paro",
                "location": "Paro",
                "activities": [
                    { "time": "Arrival", "description": "VIP arrival assistance and luxury transfer to resort." },
                    { "time": "Evening", "description": "Private welcome dinner with traditional Bhutanese performance." }
                ]
            },
            {
                "day": 2,
                "title": "Paro Exclusive Exploration",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Visit Rinpung Dzong and Kyichu Lhakhang with expert guide." },
                    { "time": "Afternoon", "description": "Luxury farmhouse visit with authentic Bhutanese cuisine." }
                ]
            },
            {
                "day": 3,
                "title": "Helicopter Scenic Experience & Thimphu Transfer",
                "location": "Thimphu",
                "activities": [
                    { "time": "Morning", "description": "Optional helicopter scenic flight over Himalayan valleys." },
                    { "time": "Afternoon", "description": "Transfer to Thimphu and check-in at premium luxury hotel." }
                ]
            },
            {
                "day": 4,
                "title": "Thimphu Cultural & Wellness Day",
                "location": "Thimphu",
                "activities": [
                    { "time": "Morning", "description": "Visit Buddha Dordenma and Tashichho Dzong privately." },
                    { "time": "Afternoon", "description": "Luxury spa therapy and guided meditation session." }
                ]
            },
            {
                "day": 5,
                "title": "Thimphu to Punakha",
                "location": "Punakha",
                "activities": [
                    { "time": "Drive", "description": "Scenic drive via Dochula Pass with champagne picnic." },
                    { "time": "Sightseeing", "description": "Explore Punakha Dzong and valley viewpoints." }
                ]
            },
            {
                "day": 6,
                "title": "Punakha Valley Luxury Experience",
                "location": "Punakha",
                "activities": [
                    { "time": "Morning", "description": "Private hike to Khamsum Yulley Namgyal Chorten." },
                    { "time": "Afternoon", "description": "Optional rafting or wellness spa at resort." }
                ]
            },
            {
                "day": 7,
                "title": "Punakha to Gangtey",
                "location": "Gangtey",
                "activities": [
                    { "time": "Drive", "description": "Luxury drive to Gangtey with scenic stops." },
                    { "time": "Monastery", "description": "Visit Gangtey Monastery and explore Phobjikha Valley." }
                ]
            },
            {
                "day": 8,
                "title": "Gangtey Nature & Birding Experience",
                "location": "Gangtey",
                "activities": [
                    { "time": "Morning", "description": "Nature trail walk with private naturalist guide." },
                    { "time": "Afternoon", "description": "Relaxation at luxury lodge with valley views." }
                ]
            },
            {
                "day": 9,
                "title": "Return to Paro & Tiger’s Nest Excursion",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Drive back to Paro and prepare for Tiger’s Nest hike." },
                    { "time": "Afternoon", "description": "Guided hike to Taktsang Monastery with premium picnic lunch." }
                ]
            },
            {
                "day": 10,
                "title": "Departure from Paro",
                "location": "Paro",
                "activities": [
                    { "time": "Morning", "description": "Leisure breakfast and private luxury airport transfer." },
                    { "time": "Departure", "description": "VIP departure assistance and end of luxury retreat." }
                ]
            }
        ],
        "includes": [
            "Ultra-luxury 5-star lodges and resorts",
            "Private luxury transport and optional helicopter experience",
            "All gourmet meals and fine dining",
            "Professional private guide and concierge service",
            "Spa, wellness and meditation sessions",
            "All permits, entrance fees and government taxes"
        ],
        "excludes": [
            "International flights",
            "Travel insurance",
            "Personal expenses and premium beverages",
            "Tips and gratuities"
        ]
    }
];

export default tourdata;