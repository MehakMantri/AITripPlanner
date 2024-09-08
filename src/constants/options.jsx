export const SelectTravelList=[
    {
        id:1,
        title:'Just Me',
        desc:'A solo traveller exploring',
        icon:'✈',
        people:1
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two travellers in tandem',
        icon:'🥂',
        people:2
    },
    {
        id:3,
        title:'Family',
        desc:'A grp of fun loving adv',
        icon:'🏡',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekers',
        icon:'⛵',
        people:'5 to 10 People'
    },
]

export const SelectBudgetOptions = [
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵'
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰'
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸'
    },
]

export const AI_PROMPT='Generate Travel Plan For Location: {Location}, for {totalDays} Days for {traveller} with a {budget} budget, give me Hotels options list with Hotel Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggesr itinerary with Place Name, Place Details "Place Image URL, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day planned with the best time to visit in JSON format'