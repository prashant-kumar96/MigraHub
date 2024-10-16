const ModalData = 
    [{
        "question" : "Where is your passport from?",
        "firstLine": "Citizens of India have a denial rate of 11%, which is lower than average",
        "secondLine": "Source: U.S. Department of State denial rate data",
    },
        {
            "question" : "Are you applying from India",
            "firstLine": "It's easier to prove you'll return home and not overstay your visa if you already live there",
            "secondLine": "We will show you the earliest time you should plan to travel, based on U.S. visa appointment wait time data for India, to help prevent you from missing your trip",
            "questionForNo":"Where will you apply for your visa",
            "firstLineForNo":"It's possible to apply from another country and get approved as long as you have the right interview strategy.",
            "secondLineForNo":"Applying outside of your passport country can make it harder to get a visa if you don't provide important context for the consular officer."
        },
        {
            "question" : "Do you either have a job, a spouse or own property in India",
            // "firstLine": "It's easier to prove you'll return home and not overstay your visa if you already live there",
            // "secondLine": "We will show you the earliest time you should plan to travel, based on U.S. visa appointment wait time data for India, to help prevent you from missing your trip",
            // "questionForNo":"Where will you apply for your visa",
            "lineForYes":"Strong connections to your home country help show you will return and not overstay in visa",
            "firstlineForNo":"We'll help you show the consular officer you plan to return home and not overstay your visa",
            "secondlineForNo":"We'll do this by explaining how to show strong connections to your country "
        }
]

export { ModalData }