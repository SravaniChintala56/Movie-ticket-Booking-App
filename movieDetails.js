
const today = new Date().toISOString().split("T")[0];

const Originalmovies=[
  {
    "id": "mv001",
    "title": "Hit3: The Third Case",
    "language": ["Telugu", "Tamil", "Kannada"],
    "duration": "3h 17m",
    "genre":["Crime", "Thriller", "Drama"],
    "rating": 8.8,
    "date":today,
    "description": "The universe is at war, and the sands of Arrakis hold the key to power.\nAmid shifting alliances and brutal battles, a hero rises from the ashes.\nCan he bring peace, or will the desert claim them all?",
    "theater": ["INOX - Garuda Mall", "INOX - GVK One", "INOX - Mantri Square"],
    "timings": ["12:15 PM", "3:30 PM", "6:45 PM", "10:00 PM"],
    "location": "Chennai",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA2NC4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410905-xlhtlqjgas-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/kAtfaaUgDRU",
    "reviews": ["Great performances and a gripping plot. Totally worth a watch!", "A cinematic masterpiece! Every frame was brilliant.", "Disappointing. Expected more from the trailer."]
  },
  {
    "id": "mv002",
    "title": "Shinchan",
    "language": ["English", "Hindi", "Malayalam", "Tamil"],
    "duration": "3h 43m",
    "genre": ["Adventure", "Family", "Drama"],
    "rating": 8.9,
    "date":today,
    "description": "After rising through the ranks of the criminal world, the hero now faces even greater threats.\nHe must protect not only his empire but also the people who depend on him.\nIn this battle for survival, loyalty and strength will be tested like never before.",
    "theater": [
      "INOX - Mantri Square",
      "PVR - Phoenix Marketcity",
      "INOX - GVK One"
    ],
    "timings": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    "location": "Hyderabad",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA4NjEgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00439369-yzjqdhyrde-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/YK2S82v9K6Q",
    "reviews":["Great performances and a gripping plot. Totally worth a watch!", "A cinematic masterpiece! Every frame was brilliant.", "Disappointing. Expected more from the trailer."]
  },
  {
    "id": "mv003",
    "title": "Phule",
    "language": ["Hindi", "Kannada", "Malayalam", "Telugu"],
    "duration": "2h 7m",
    "genre":["Comedy", "Family", "Fantasy"],
    "rating":9.5,
    "date":today,
    "description": "After rising through the ranks of the criminal world, the hero now faces even greater threats.\nHe must protect not only his empire but also the people who depend on him.\nIn this battle for survival, loyalty and strength will be tested like never before.",
    "theater": [
      "Cinepolis - Manjeera Mall",
      "Cinepolis - Forum Mall",
      "PVR - Orion Mall"
    ],
    "timings": ["12:15 PM", "3:30 PM", "6:45 PM", "10:00 PM"],
    "location": "Hyderabad",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS41LzEwICA1SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00326530-shqmvlultk-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/-HfTlM6r4CU",
    "reviews": [
      "Entertaining and emotional \u2014 a solid entertainer for families.",
      "Disappointing. Expected more from the trailer."
    ]
  },
  {
    "id": "mv004",
    "title": "Raid 2",
    "language": ["Telugu", "Malayalam", "Kannada"],
    "duration": "2h 46m",
    "genre":  ["Biography", "Drama", "Historical"],
    "rating": 8.3,
    "date": today,
    "description": "The universe is at war, and the sands of Arrakis hold the key to power.\nAmid shifting alliances and brutal battles, a hero rises from the ashes.\nCan he bring peace, or will the desert claim them all?",
    "theater": [
      "Cinepolis - Forum Mall",
      "PVR - Phoenix Marketcity",
      "INOX - Garuda Mall"
    ],
    "timings": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    "location": "Mumbai",
    "image":"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICA0MS41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00382745-lxrdjxktjl-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/aTX4v4qZhVQ",
    "reviews": [
      "Great performances and a gripping plot. Totally worth a watch!",
      "A cinematic masterpiece! Every frame was brilliant."
    ]
  },
  {
    "id": "mv005",
    "title": "Thunderbolts",
    "language": ["Hindi", "English", "Telugu", "Kannada"],
    "duration": "3h 1m",
    "genre":["Action", "Drama", "Thriller"],
    "rating": 8.2,
    "date":today,
    "description": "Two titans awaken from the depths to clash in an earth-shattering showdown.\nWith cities at risk and humanity caught in the middle, the stakes are higher than ever.\nOnly one monster can rule the realm beneath and above.",
    "theater": [
      "INOX - Garuda Mall",
      "INOX - Mantri Square",
      "Cinepolis - Manjeera Mall"
    ],
    "timings": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    "location": "Chennai",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAyMEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00413426-mlbzvlurxy-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/-sAOWhvheK8",
    "reviews": [
      "Too many slow scenes. Only saved by the lead actor's performance.",
      "Great performances and a gripping plot. Totally worth a watch!"
    ]
  },
  {
    "id": "mv006",
    "title": "Kantara",
    "language": ["Hindi", "Tamil", "English"],
    "duration": "2h 18m",
    "genre":["Adventure", "Sci-Fi", "Fantasy"],
    "rating": 7.4,
    "date": "today",
    "description": "The universe is at war, and the sands of Arrakis hold the key to power.\nAmid shifting alliances and brutal battles, a hero rises from the ashes.\nCan he bring peace, or will the desert claim them all?",
    "theater": [
      "Cinepolis - Forum Mall",
      "INOX - Mantri Square",
      "PVR - Orion Mall"
    ],
    "timings": ["12:15 PM", "3:30 PM", "6:45 PM", "10:00 PM"],
    "location": "Bangalore",
    "image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kantara-a-legend-chapter-1-et00377351-1701090949.jpg",
    "trailer":"https://www.youtube.com/embed/Mo-fv7b77t8",
    "reviews": [
      "Could've been better. The first half dragged but the climax made up for it.",
      "Great performances and a gripping plot. Totally worth a watch!",
      "Disappointing. Expected more from the trailer."
    ]
  },
  {
    "id": "mv007",
    "title": "FinalDestination",
    "language": ["Tamil", "Kannada", "Malayalam", "Hindi"],
    "duration": "3h 32m",
    "genre": ["Superhero", "Action", "Adventure"],
    "rating": 6.4,
    "date": today,
    "description": "The universe is at war, and the sands of Arrakis hold the key to power.\nAmid shifting alliances and brutal battles, a hero rises from the ashes.\nCan he bring peace, or will the desert claim them all?",
    "theater": ["PVR - Vega City", "INOX - GVK One", "INOX - Garuda Mall"],
    "timings": ["12:15 PM", "3:30 PM", "6:45 PM", "10:00 PM"],
    "location": "Chennai",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NzAuM0sgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00432143-hedyvulzka-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/UWMzKXsY9A4",
    "reviews": ["Great performances and a gripping plot. Totally worth a watch!", "A cinematic masterpiece! Every frame was brilliant.", "Disappointing. Expected more from the trailer."]
  },
  {
    "id": "mv008",
     "title": "Devmanus",
    "language": ["Hindi", "Malayalam", "Telugu", "Kannada", "Tamil"],
    "duration": "3h 42m",
    "genre":["Noir", "Thriller", "Mystery"],
    "rating": 8.7,
    "date": today,
    "description": "Two titans awaken from the depths to clash in an earth-shattering showdown.\nWith cities at risk and humanity caught in the middle, the stakes are higher than ever.\nOnly one monster can rule the realm beneath and above.",
    "theater": [
      "INOX - Mantri Square",
      "INOX - Garuda Mall",
      "Cinepolis - Manjeera Mall"
    ],
    "timings": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    "location": "Bangalore",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA3NTUgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00433859-zedldjnmrq-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/GKoOWmgzOJs",
    "reviews": [
      "Could've been better.The firsthalf dragged but the climax made for it.",
      "Entertaining and emotional \u2014 a solid entertainer for families.",
      "An absolute blockbuster! The storytelling and visuals were top-notch."
    ]
  },
  {
    "id": "mv009",
    "title": "Jawan",
    "language": ["Telugu", "Malayalam", "Tamil", "Hindi", "English"],
    "duration": "3h 20m",
    "genre":["Romance", "Comedy", "Musical"],
    "rating": 6.8,
    "date":today,
    "description": "After rising through the ranks of the criminal world, the hero now faces even greater threats.\nHe must protect not only his empire but also the people who depend on him.\nIn this battle for survival, loyalty and strength will be tested like never before.",
    "theater": [
      "Cinepolis - Forum Mall",
      "PVR - Vega City",
      "INOX - Garuda Mall"
    ],
    "timings": ["11:00 AM", "2:30 PM", "6:00 PM", "9:00 PM"],
    "location": "Hyderabad",
    "trailer":"https://www.youtube.com/embed/COv52Qyctws",
    "image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg",
    "reviews":["Great performances and a gripping plot. Totally worth a watch!", "A cinematic masterpiece! Every frame was brilliant.", "Disappointing. Expected more from the trailer."]
  },
  {
    "id": "mv010",
    "title": "Dune:PartTwo",
    "language": ["English","Hindi"],
    "duration": "3h 42m",
    "genre":["Historical", "War", "Drama"],
    "rating": 6.1,
    "date":today,
    "description": "After rising through the ranks of the criminal world, the hero now faces even greater threats.\nHe must protect not only his empire but also the people who depend on him.\nIn this battle for survival, loyalty and strength will be tested like never before.",
    "theater": [
      "PVR - Orion Mall",
      "Cinepolis - Manjeera Mall",
      "INOX - GVK One"
    ],
    "timings": ["12:15 PM", "3:30 PM", "6:45 PM", "10:00 PM"],
    "location": "Chennai",
    "image": "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/dune-part-two-et00331567-1712646774.jpg",
    "trailer":"https://www.youtube.com/embed/Way9Dexny3w",
    "reviews": [
      "A cinematic masterpiece! Every frame was brilliant.",
      "An absolute blockbuster! The storytelling and visuals were top-notch.",
      "Entertaining and emotional \u2014 a solid entertainer for families."
    ]
  },
  {
    "id": "mv011",
    "title": "Pushpa 2: The Rule",
    "language": ["Telugu","Tamil", "Malayalam"],
    "duration": "3h 45m",
    "genre":["Adventure", "Family", "Drama"],
    "rating":6.3,
    "date": today,
    "description": "After rising through the ranks of the criminal world, the hero now faces even greater threats.\nHe must protect not only his empire but also the people who depend on him.\nIn this battle for survival, loyalty and strength will be tested like never before.",
    "theater": [
      "INOX - GVK One",
      "PVR - Orion Mall",
      "PVR - Phoenix Marketcity"
    ],
    "timings": ["12:15 PM", "3:30 PM", "6:45 PM", "10:00 PM"],
    "location": "Bangalore",
    "image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa-2-the-rule-et00356724-1737184762.jpg",
    "trailer":"https://www.youtube.com/embed/g3JUbgOHgdw",
    "reviews":["Great performances and a gripping plot. Totally worth a watch!", "A cinematic masterpiece! Every frame was brilliant.", "Disappointing. Expected more from the trailer."]
  },
  {
    "id": "mv012",
    "title": "Spider-Man: No Way Home",
    "language": ["Telugu","English"],
    "duration": "3h 36m",
    "genre":["Sci-Fi", "Thriller", "Action"],
    "rating": 6.2,
    "date":today,
    "description": "After rising through the ranks of the criminal world, the hero now faces even greater threats.\nHe must protect not only his empire but also the people who depend on him.\nIn this battle for survival, loyalty and strength will be tested like never before.",
    "theater": [
      "Cinepolis - Manjeera Mall",
      "INOX - Garuda Mall",
      "INOX - Mantri Square"
    ],
    "timings": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    "location": "Chennai",
    "image": "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/spider-man-no-way-home-et00310790-1691659453.jpg",
    "trailer":"https://www.youtube.com/embed/JfVOs4VSpmA",
    "reviews": [
      "Great performances and a gripping plot. Totally worth a watch!",
      "Entertaining and emotional \u2014 a solid entertainer for families.",
      "An absolute blockbuster! The storytelling and visuals were top-notch.",
      "A cinematic masterpiece! Every frame was brilliant."
    ]
  },
  {
    "id": "mv013",
    "title": "Salaar",
    "language": ["Malayalam", "Telugu", "Kannada"],
    "duration": "3h 40m",
    "genre": ["Comedy", "Romance", "Drama"],
    "rating": 6.9,
    "date": today,
    "description": "Two titans awaken from the depths to clash in an earth-shattering showdown.\nWith cities at risk and humanity caught in the middle, the stakes are higher than ever.\nOnly one monster can rule the realm beneath and above.",
    "theater": [
      "INOX - Mantri Square",
      "PVR - Orion Mall",
      "Cinepolis - Forum Mall"
    ],
    "timings": ["11:00 AM", "2:30 PM", "6:00 PM", "9:00 PM"],
    "location": "Hyderabad",
    "image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg",
    "trailer":"https://www.youtube.com/embed/4GPvYMKtrtI",
    "reviews": [
      "A cinematic masterpiece! Every frame was brilliant.",
      "Great performances and a gripping plot. Totally worth a watch!",
      "Too many slow scenes. Only saved by the lead actor's performance.",
      "Entertaining and emotional \u2014 a solid entertainer for families.",
      "An absolute blockbuster! The storytelling and visuals were top-notch."
    ]
  },
  {
    "id": "mv014",
    "title": "The Batman",
    "language": ["Malayalam", "Kannada", "Hindi", "Tamil"],
    "duration": "3h 34m",
    "genre":  ["Horror", "Mystery", "Thriller"],
    "rating": 6.3,
    "date": today,
    "description": "After rising through the ranks of the criminal world, the hero now faces even greater threats.\nHe must protect not only his empire but also the people who depend on him.\nIn this battle for survival, loyalty and strength will be tested like never before.",
    "theater": [
      "Cinepolis - Manjeera Mall",
      "INOX - GVK One",
      "Cinepolis - Forum Mall"
    ],
    "timings": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    "location": "Chennai",
    "image":"https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-batman-et00129624-1662624581.jpg",
    "trailer":"https://www.youtube.com/embed/mqqft2x_Aa4",
    "reviews": [
      "Great performances and a gripping plot. Totally worth a watch!",
      "A cinematic masterpiece! Every frame was brilliant.",
      "An absolute blockbuster! The storytelling and visuals were top-notch.",
      "Disappointing. Expected more from the trailer.",
      "Could've been better. The first half dragged but the climax made up for it."
    ]
  },
  {
    "id": "mv015",
    "title": "Kesari Chapter",
    "language": ["Malayalam", "Kannada", "English", "Telugu"],
    "duration": "2h 56m",
    "genre":  ["Horror", "Thriller", "Supernatural"],
    "rating": 9.3,
    "date":today,
    "description": "The universe is at war, and the sands of Arrakis hold the key to power.\nAmid shifting alliances and brutal battles, a hero rises from the ashes.\nCan he bring peace, or will the desert claim them all?",
    "theater": [
      "Cinepolis - Forum Mall",
      "INOX - Mantri Square",
      "INOX - GVK One"
    ],
    "timings": ["12:15 PM", "3:30 PM", "6:45 PM", "10:00 PM"],
    "location": "Bangalore",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICA2MS42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00439158-flhksfkatd-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/r-7g08INMSI",
    "reviews": [
      "Could've been better. The first half dragged but the climax made up for it.",
      "Great performances and a gripping plot. Totally worth a watch!",
      "An absolute blockbuster! The storytelling and visuals were top-notch.",
      "A cinematic masterpiece! Every frame was brilliant."
    ]
  },
  {
    "id": "mv016",
    "title": "Hit: The First Case",
    "language": ["Kannada", "English", "Malayalam", "Telugu", "Hindi"],
    "duration": "2h 30m",
    "genre":["Adventure", "Family", "Drama"],
    "rating":8.3,
    "date":today,
    "description": "Two titans awaken from the depths to clash in an earth-shattering showdown.\nWith cities at risk and humanity caught in the middle, the stakes are higher than ever.\nOnly one monster can rule the realm beneath and above.",
    "theater": [
      "Cinepolis - Forum Mall",
      "PVR - Phoenix Marketcity",
      "Cinepolis - Manjeera Mall"
    ],
    "timings": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    "location": "Mumbai",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICAxMi4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00321702-gujqdebjbu-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/pfKMhJh_i9s",
    "reviews":["Great performances and a gripping plot. Totally worth a watch!","A cinematic masterpiece! Every frame was brilliant.","Disappointing. Expected more from the trailer."]
  },
  {
    "id": "mv017",
    "title": "PSI Arjun",
    "language": ["Telugu", "Malayalam", "English", "Tamil", "Hindi"],
    "duration": "3h 10m",
    "genre":["Thriller", "Suspense", "Crime"],
    "rating":9.3,
    "date": today,
    "description":"Two titans awaken from the depths to clash in an earth-shattering showdown.\nWith cities at risk and humanity caught in the middle, the stakes are higher than ever.\nOnly one monster can rule the realm beneath and above",
    "theater": ["Cinepolis - Forum Mall","PVR - Phoenix Marketcity","PVR - Vega City"],
    "timings": ["12:15 PM", "3:30 PM", "6:45 PM", "10:00 PM"],
    "location": "Chennai",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAxMDIgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00441594-syraycmhtd-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/n6_5pZHzytQ",
    "reviews":["Disappointing. Expected more from the trailer.","Too many slow scenes. Only saved by the lead actor's performance.","Could've been better. The first half dragged but the climax made up for it.","A cinematic masterpiece! Every frame was brilliant.","Entertaining and emotional a solid entertainer for families."]
  },
  {
    "id": "mv018",
    "title": "#Single",
    "language": ["Malayalam", "Kannada", "Hindi", "Telugu", "Tamil"],
    "duration": "2h 35m",
    "genre":["Fantasy", "Adventure", "Family"],
    "rating": 9.0,
    "date":today,
    "description": "The universe is at war, and the sands of Arrakis hold the key to power.\nAmid shifting alliances and brutal battles, a hero rises from the ashes.\nCan he bring peace, or will the desert claim them all?",
    "theater": ["Cinepolis - Forum Mall", "PVR - Vega City", "INOX - GVK One"],
    "timings": ["12:15 PM", "3:30 PM", "6:45 PM", "10:00 PM"],
    "location": "Hyderabad",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgOC4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00441505-pktddregfr-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/ElI6nCW_P4o",
    "reviews":["Great experience! The service was fast and the team was really helpful.","Overall good, but there's room for improvement in response time.","Absolutely fantastic! Exceeded my expectations in every way."]
  },
  {
    "id": "mv019",
    "title": "RRR",
    "language": ["Kannada", "Tamil", "Hindi"],
    "duration": "2h 8m",
    "genre": ["Action", "Sci-Fi", "Adventure"],
    "rating":6.5,
    "date": today,
    "description": "Two titans awaken from the depths to clash in an earth-shattering showdown.\nWith cities at risk and humanity caught in the middle, the stakes are higher than ever.\nOnly one monster can rule the realm beneath and above.",
    "theater": [
      "INOX - GVK One",
      "Cinepolis - Manjeera Mall",
      "Cinepolis - Forum Mall"
    ],
    "timings": ["11:00 AM", "2:30 PM", "6:00 PM", "9:00 PM"],
    "location": "Mumbai",
    "image": "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/rrr-et00094579-1700135873.jpg",
    "trailer":"https://www.youtube.com/embed/GY4BgdUSpbE",
    "reviews":["Great performances and a gripping plot. Totally worth a watch!", "A cinematic masterpiece! Every frame was brilliant.", "Disappointing. Expected more from the trailer."]
  },
  {
    "id": "mv020",
    "title": "Shubam",
    "language": ["Hindi", "Kannada", "Tamil", "English"],
    "duration": "3h 1m",
    "genre":["Psychological", "Thriller", "Drama"],
    "rating": 9.2,
    "date":today,
    "description": "The universe is at war, and the sands of Arrakis hold the key to power.\nAmid shifting alliances and brutal battles, a hero rises from the ashes.\nCan he bring peace, or will the desert claim them all?",
    "theater": ["INOX - Garuda Mall", "PVR - Orion Mall", "PVR - Vega City"],
    "timings": ["12:15 PM", "3:30 PM", "6:45 PM", "10:00 PM"],
    "location": "Chennai",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAxLjhLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00440249-qygrpvsvtj-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/I16T-dbgUKI",
    "reviews": [
      "Disappointing. Expected more from the trailer.",
      "Too many slow scenes. Only saved by the lead actor's performance.",
      "Great performances and a gripping plot. Totally worth a watch!",
      "Could've been better. The first half dragged but the climax made up for it.",
      "Entertaining and emotional \u2014 a solid entertainer for families."
    ]
  },
  {
    "id": "mv021",
    "title": "Sinners",
    "language": ["Hindi", "English"],
    "duration": "3h 19m",
    "genre":["Sports", "Drama", "Biography"],
    "rating": 8.4,
    "date":today,
    "theater": [
      "INOX - Garuda Mall",
      "Cinepolis - Manjeera Mall",
      "PVR - Vega City"
    ],
    "timings": ["11:00 AM", "2:30 PM", "6:00 PM", "9:00 PM"],
    "location": "Mumbai",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAxMS45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00413379-ahdyqjqlcu-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/bKGxHflevuk",
    "reviews": [
      "Could've been better. The first half dragged but the climax made up for it.",
      "Too many slow scenes. Only saved by the lead actor's performance.",
      "Great performances and a gripping plot. Totally worth a watch!",
      "Disappointing. Expected more from the trailer.",
      "A cinematic masterpiece! Every frame was brilliant."
    ]
  },
  {
    "id": "mv022",
    "title": "Piku",
    "language": ["Kannada", "Telugu", "English", "Malayalam"],
    "duration": "3h 0m",
    "genre":["Musical", "Romance", "Drama"],
    "rating": 7.7,
    "date":today,
    "description": "The universe is at war, and the sands of Arrakis hold the key to power.\nAmid shifting alliances and brutal battles, a hero rises from the ashes.\nCan he bring peace, or will the desert claim them all?",
    "theater": [
      "INOX - Garuda Mall",
      "Cinepolis - Forum Mall",
      "Cinepolis - Manjeera Mall"
    ],
    "timings": ["12:15 PM", "3:30 PM", "6:45 PM", "10:00 PM"],
    "location": "Hyderabad",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgNDAuMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00025352-qbhrqrcdth-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/oeiKUlUUNQ8",
    "reviews":["Great performances and a gripping plot. Totally worth a watch!", "A cinematic masterpiece! Every frame was brilliant.", "Disappointing. Expected more from the trailer."]
  },
  {
    "id": "mv023",
    "title": "The Bhootnii",
    "language": ["Malayalam", "Hindi", "Telugu", "Tamil", "Kannada"],
    "duration": "2h 4m",
    "genre":["Noir", "Thriller", "Mystery"],
    "rating": 9.4,
    "date":today,
    "description": "The universe is at war, and the sands of Arrakis hold the key to power.\nAmid shifting alliances and brutal battles, a hero rises from the ashes.\nCan he bring peace, or will the desert claim them all?",
    "theater": [
      "INOX - Garuda Mall",
      "Cinepolis - Forum Mall",
      "INOX - GVK One"
    ],
    "timings": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    "location": "Bangalore",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICAzSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00435722-dvbqwwqhem-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/L8Wfzxch7Xo",
    "reviews": [
      "Too many slow scenes. Only saved by the lead actor's performance.",
      "Great performances and a gripping plot. Totally worth a watch!"
    ]
  },
  {
    "id": "mv024",
    "title": "Thudarum",
    "language": ["Telugu","Kannada", "Tamil"],
    "duration": "2h 18m",
    "genre":["Thriller", "Suspense", "Crime"],
    "rating": 9.3,
    "date":today,
    "description": "After rising through the ranks of the criminal world, the hero now faces even greater threats.\nHe must protect not only his empire but also the people who depend on him.\nIn this battle for survival, loyalty and strength will be tested like never before.",
    "theater": [
      "Cinepolis - Forum Mall",
      "PVR - Orion Mall",
      "INOX - Garuda Mall"
    ],
    "timings": ["12:15 PM", "3:30 PM", "6:45 PM", "10:00 PM"],
    "location": "Mumbai",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAxMzcuOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00442565-hwuthklybk-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/HZrYlXuecRg",
    "reviews": [
      "Too many slow scenes. Only saved by the lead actor's performance.",
      "A cinematic masterpiece! Every frame was brilliant.",
      "Could've been better. The first half dragged but the climax made up for it."
    ]
  },
  {
    "id": "mv025",
    "title": "Until Dawn",
    "language": ["English"],
    "duration": "2h 7m",
    "genre":["Adventure", "Epic", "Action"],
    "rating":7.7,
    "date":today,
    "description": "Two titans awaken from the depths to clash in an earth-shattering showdown.With cities at risk and humanity caught in the middle, the stakes are higher than ever.\nOnly one monster can rule the realm beneath and above.",
    "theater": ["PVR - Vega City", "INOX - Mantri Square", "INOX - GVK One"],
    "timings": ["12:15 PM", "3:30 PM", "6:45 PM", "10:00 PM"],
    "location": "Mumbai",
    "trailer":"https://www.youtube.com/embed/GyEW_PBiUww",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICA1LjlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00429656-kuwbaufppl-portrait.jpg",
    "reviews":["A cinematic masterpiece! Every frame was brilliant.","An absolute blockbuster! The storytelling and visuals were top-notch.","Entertaining and emotional a solid entertainer for families."]
  },
  {
    "id": "mv026",
    "title": "Retro",
    "language": ["Malayalam","Tamil", "Telugu"],
    "duration": "3h 15m",
    "genre":["War", "Drama", "Action"],
    "rating": 7.6,
    "date":today,
    "description": "Two titans awaken from the depths to clash in an earth-shattering showdown.With cities at risk and humanity caught in the middle, the stakes are higher than ever.\nOnly one monster can rule the realm beneath and above.",
    "theater": [
      "PVR - Vega City",
      "PVR - Phoenix Marketcity",
      "INOX - Mantri Square"
    ],
    "timings": ["11:00 AM", "2:30 PM", "6:00 PM", "9:00 PM"],
    "location": "Chennai",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICA0NC45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00426563-gunlswcbjb-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/PxBR17orfRc",
    "reviews":["A cinematic masterpiece! Every frame was brilliant.","Great performances and a gripping plot. Totally worth a watch!","Too many slow scenes. Only saved by the lead actor's performance.","Entertaining and emotional a solid entertainer for families.","An absolute blockbuster! The storytelling and visuals were top-notch."]
  },
  {
    "id": "mv027",
    "title": "MineCraft",
    "language": ["Kannada", "Hindi", "Tamil", "Malayalam", "Telugu"],
    "duration": "2h 8m",
    "genre":["Animation", "Family", "Adventure"],
    "rating": 8.3,
    "date":today,
    "description": "The universe is at war, and the sands of Arrakis hold the key to power.\nAmid shifting alliances and brutal battles, a hero rises from the ashes.\nCan he bring peace, or will the desert claim them all?",
    "theater": [
      "Cinepolis - Forum Mall",
      "PVR - Phoenix Marketcity",
      "PVR - Orion Mall"
    ],
    "timings": ["11:00 AM", "2:30 PM", "6:00 PM", "9:00 PM"],
    "location": "Bangalore",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICA4SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410687-mpgaqjkuxy-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/wJO_vIDZn-I",
    "reviews":["Great performances and a gripping plot. Totally worth a watch!", "A cinematic masterpiece! Every frame was brilliant.", "Disappointing. Expected more from the trailer."]
  },
  {
    "id": "mv028",
    "title": "Ground Zero",
    "language": ["Malayalam","Hindi", "English", "Tamil"],
    "duration": "2h 55m",
    "genre":["Superhero", "Action", "Adventure"],
    "rating": 8.5,
    "date": today,
    "description": "After rising through the ranks of the criminal world, the hero now faces even greater threats.\nHe must protect not only his empire but also the people who depend on him.\nIn this battle for survival, loyalty and strength will be tested like never before.",
    "theater": [
      "Cinepolis - Manjeera Mall",
      "INOX - GVK One",
      "INOX - Mantri Square"
    ],
    "timings": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    "location": "Hyderabad",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICA0LjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00439759-nxujlsavwd-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/oAdc62oGzW8",
    "reviews": ["Great performances and a gripping plot. Totally worth a watch!", "A cinematic masterpiece! Every frame was brilliant.", "Disappointing. Expected more from the trailer."]
  },
  {
    "id": "mv029",
    "title": "There Will be Blood",
    "language": ["Malayalam", "English", "Hindi", "Kannada"],
    "duration": "3h 30m",
    "genre":["War", "Drama", "Action"],
    "rating":9.4,
    "date": today,
    "description": "After rising through the ranks of the criminal world, the hero now faces even greater threats.\nHe must protect not only his empire but also the people who depend on him.\nIn this battle for survival, loyalty and strength will be tested like never before.",
    "theater": ["INOX - GVK One", "PVR - Orion Mall", "INOX - Garuda Mall"],
    "timings": ["12:15 PM", "3:30 PM", "6:45 PM", "10:00 PM"],
    "location": "Hyderabad",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICAyMDggVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00001067-menynmxfgn-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/0FIm5ATyAY0",
    "reviews":["Great performances and a gripping plot. Totally worth a watch!", "A cinematic masterpiece! Every frame was brilliant.", "Disappointing. Expected more from the trailer."]
  },
  {
    "id": "mv030",
    "title": "Love Aaj kal",
    "language": ["Hindi","English"],
    "duration": "2h 1m",
    "genre":["Romance", "Comedy", "Musical"],
    "rating":8.8,
    "date": today,
    "description": "Two titans awaken from the depths to clash in an earth-shattering showdown.\nWith cities at risk and humanity caught in the middle, the stakes are higher than ever.\nOnly one monster can rule the realm beneath and above.",
    "theater": [
      "PVR - Vega City",
      "PVR - Phoenix Marketcity",
      "INOX - Garuda Mall"
    ],
    "timings": ["12:15 PM", "3:30 PM", "6:45 PM", "10:00 PM"],
    "location": "Hyderabad",
    "image": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICAxLjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00002664-swayppelyw-portrait.jpg",
    "trailer":"https://www.youtube.com/embed/dLH1gmk9_iE",
    "reviews":["Great performances and a gripping plot. Totally worth a watch!", "A cinematic masterpiece! Every frame was brilliant.", "Disappointing. Expected more from the trailer."]
  }
];


let version2Movies=[...Originalmovies]
let Today=new Date();
let date=Today.getDate();
let months=["january","February","March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
let mnth=months[Today.getMonth()];


//create date buttons 
let datesContainer=document.querySelector('.dates')
// console.log(datesContainer);
for(let i=0;i<=4;i++){
  let today=new Date();
  let futureDate=new Date(today);
  futureDate.setDate(today.getDate()+i);
  let day=futureDate.getDate();
  let monthName=months[futureDate.getMonth()]
  datesContainer.innerHTML+=`<button onclick="showDate('${day}',this)" class="date">${day} ${monthName}</button>`
}

let reviewsContainer=document.querySelector('.reviews-container');

//getting id from localstorage
let movieID=JSON.parse(localStorage.getItem('movieId'));
let result=version2Movies.find(movie=>movie.id==movieID);
let movieCard=document.querySelector('.movie-card');
function renderMovieDetails(){
  movieCard.innerHTML=`<div class="movie-img"><img src="${result.image}" alt=""></div>
                <div class="movie-details">
                    <div class="drpdwns">
                        <div class="theater-container">
                            <p><i class="bi bi-chevron-down arrow1" style="vertical-align:middle;"></i> Theater</p>
                            <div class="theater-opts-container"></div>
                        </div>
                        <div class="timings-container">
                            <p><i class="bi bi-chevron-down arrow2" style="vertical-align:middle;"></i> Timings</p>
                            <div class="timings-opts-container"></div>
                        </div>
                        <div class="quality-level-container"><label><input type="radio" name="quality" value="2D">2D</label><label><input type="radio" name="quality" value="3D">3D</label></div>
                        <div class="price-container">
                          <p><i class="bi bi-chevron-down arrow3" style="vertical-align:middle;"></i> price</p>
                            <div class="prices-opts-container">
                              <div class="prices-opts" onclick="getPrice('100',this,event)"><i class="bi bi-currency-rupee"></i> 100</div>
                              <div class="prices-opts" onclick="getPrice('200',this,event)"><i class="bi bi-currency-rupee"></i> 200</div>
                              <div class="prices-opts" onclick="getPrice('300',this,event)"><i class="bi bi-currency-rupee"></i> 300</div>
                            </div>
                        </div>
                        <div class="noOftickets">
                          <div class="minus"><i class="bi bi-dash-lg"></i></div>
                          <div class="count">0</div>
                          <div class="plus"><i class="bi bi-plus-lg"></i></div>
                        </div>
                        <div class="totalpricetxt">Total:<i class="bi bi-currency-rupee"></i><span class="totalprice">0<span></div>
                    </div>
                    <div class="movie-desc">
                        <h3 class="mv-title">${result.title}</h3>
                        <div class="gnr-duration-container"><p class=""><b>Genre</b>:${result.genre.map(gnr=>gnr)}</p> <p>duration: ${result.duration}</p></div>
                        <div class="loc-rating-container"><p>Location:${result.location}</p><p>Rating: ${result.rating}</p></div>
                        <div class="desc">${result.reviews}</div>
                        <button class="booktckt-btn" onclick="bookedNow()">Book Tickets</button>
                    </div>
             </div>`
}

renderMovieDetails();
showReviews();


let vdoContainer=document.querySelector('.video-container');
vdoContainer.innerHTML=` <iframe
              src="${result.trailer}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen>
            </iframe>`


// Add reviews
let animesection2=document.querySelector('.anime-sec2');





let priceContainer=document.querySelector('.price-container');
let arrow3=document.querySelector('.arrow3');
let priceOptsContainer=document.querySelector('.prices-opts-container');
// console.log(arrow3);
priceContainer.addEventListener('click',()=>{
  arrow3.classList.toggle('arrowrotate');
  priceOptsContainer.classList.toggle('displayblock');
});


// get Data
let storeData={date:"",theater:"",time:"",pictureQuality:"",price:"",ticketsCount:"",totalPrice:"",moviedata:""};

// date functionality
function showDate(date,element){
  let dates=document.querySelectorAll('.date');
  dates.forEach(date=>date.classList.remove('active'));
  element.classList.add('active');
  storeData.date=element.textContent.trim();
  console.log(storeData.date)
};



let isOpen=false;
let selectedTheater="";
let theaterContainer=document.querySelector('.theater-container');
let theaterOptsContainer=document.querySelector('.theater-opts-container');
let arrow1=document.querySelector('.arrow1');
theaterContainer.addEventListener('click',()=>{
  arrow1.classList.toggle('arrowrotate');
  if(!isOpen){
     theaterOptsContainer.innerHTML="";
    result.theater.map(trname=>{
      // theaterOptsContainer.innerHTML+=`<div class="theatername">${trname}</div>`
      let div=document.createElement('div');
      div.classList.add('theatername');
      div.textContent=trname;
      if(trname==selectedTheater){
        div.classList.add('active');
      }
      div.addEventListener('click',(event)=>{
        event.stopPropagation();
        document.querySelectorAll('.theatername').forEach(thtr=>thtr.classList.remove('active'));
        div.classList.add('active');
        console.log(document.querySelectorAll('.theatername'));
        console.log("Active class added to:", div); 
        selectedTheater=trname;
        storeData.theater=div.textContent;
        console.log(storeData)
      })
      theaterOptsContainer.appendChild(div);
    });
  }
  theaterOptsContainer.classList.toggle('showdropdwn');
  isOpen=!isOpen;
});




//Timings dropdown
let timingsContainer=document.querySelector('.timings-container');
let timingsOptsContainer=document.querySelector('.timings-opts-container');
let arrow2=document.querySelector('.arrow2');
let selectedTime="";
timingsContainer.addEventListener('click',()=>{
  arrow2.classList.toggle('arrowrotate');
  timingsOptsContainer.innerHTML="";
  let now=new Date();
  let todayDate=new Date().getDate();
  let hasshows=false;
  result.timings.map(tm=>{
    let showTime=true;
    if(storeData.date==""){
      showTime=false;
    }
    if(parseInt(storeData.date)==todayDate.toString()){
      let [time,meridian]=tm.split(" ");
      let [hrs,mins]=time.split(":").map(Number);
      if(meridian =="PM" && hrs<12){
        hrs+=12;
      }
      if(meridian=="AM" && hrs==12){
        hrs=0;
      }
      let time24hrs=`${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:00`;
      let todayStr = now.toISOString().split('T')[0];
      let selectedDatetime=new Date(`${today}T${time24hrs}`);
      if(now>=selectedDatetime){
        showTime=false;
      }
    }
    if(showTime){
      hasshows=true;
      let div=document.createElement('div');
      div.classList.add('time');
      div.textContent=tm;
      if(tm==selectedTime){
        div.classList.add('active');
      }
      timingsOptsContainer.appendChild(div);
      div.addEventListener('click',(event)=>{
        event.stopPropagation();
        document.querySelectorAll('.time').forEach(timeopt=>timeopt.classList.remove('active'));
        div.classList.add('active');
        selectedTime=tm;
        storeData.time=tm;
        console.log(storeData);
      })
    }
  });
  if(!hasshows && storeData.date!=""){
    timingsOptsContainer.textContent="No shows Available";
    timingsOptsContainer.style.cursor="default";
  }
  timingsOptsContainer.classList.toggle('showdropdwn');
});





//    2D/3D functionality
let radiobtns=document.querySelectorAll('input[name="quality"]');
radiobtns.forEach(btn=>{
  btn.addEventListener('change',()=>{
    if(btn.checked){
      storeData.pictureQuality=btn.value;
      bookMovienow();
    }
  });
});


function getPrice(price,ele,event){
  event.stopPropagation();
  document.querySelectorAll('.prices-opts').forEach(opt=>opt.classList.remove('active'));
  ele.classList.add('active');
  let selectedPrice=price;
  storeData.price=selectedPrice;
  totalPrice();
  bookMovienow();
}






// noOftickets functionality
let cnt=1;
storeData.ticketsCount=cnt;
let countele=document.querySelector('.count');
countele.textContent=cnt;

let minusContainer=document.querySelector('.minus');
minusContainer.addEventListener('click',()=>{
  if(countele.textContent>1){
    cnt--;
    countele.textContent=cnt;
    storeData.ticketsCount=cnt;
    totalPrice();
    bookMovienow();
  }
});

let plusContainer=document.querySelector('.plus');
plusContainer.addEventListener('click',()=>{
  if(countele.textContent==1 || countele.textContent<10){
    cnt++;
    countele.textContent=cnt;
    storeData.ticketsCount=cnt;
    totalPrice();
    bookMovienow();
  }
})




// to enable the book tickets btn
let bookticketbtn=document.querySelector('.booktckt-btn');
bookticketbtn.disabled=true;
function bookMovienow(){
  const existingbooking=localStorage.getItem('mybooking');
  if(storeData.date !="" && storeData.theater !="" && storeData.time !="" && storeData.pictureQuality !="" && storeData.price!=""){
    bookticketbtn.disabled=false;
    bookticketbtn.style.cursor="pointer";
    bookticketbtn.style.color="white";
    bookticketbtn.style.backgroundColor="rgb(248, 68, 100)";
  }
}


//booking functionality****

function bookedNow(){
  const booking={
    ...storeData,
    moviedata:result,
    seats:generateSeats()
  }

  let mybooking=JSON.parse(localStorage.getItem('mybooking'))||[];
  mybooking.push(booking);
  console.log(mybooking)
  localStorage.setItem('mybooking',JSON.stringify(mybooking));
  let url=window.location.href;
  url=url.replace('movieDetails.html','bookings.html');
  window.open(url,'_self');
  
}


let totalprice=document.querySelector('.totalprice');
function totalPrice(){
  if (storeData.price!=""){
    storeData.totalPrice =parseInt(storeData.price)* parseInt(storeData.ticketsCount);
    totalprice.textContent=storeData.totalPrice;
  }
}

// addingreview
let charcount=document.getElementById('charcount');
let txtarea=document.getElementById('txtarea');
txtarea.addEventListener('input',()=>{
  charcount.textContent=150-(txtarea.value.length);
  if(txtarea.value.length>20){
    addreviewbtn.disabled=false;
    addreviewbtn.style.cursor="pointer";
  }else{
    addreviewbtn.disabled=true;
    addreviewbtn.style.cursor="default";
  }
});



function showReviews(){
  let savedUpdatedMovies=JSON.parse(localStorage.getItem('updatedMovies'))||[...version2Movies];
  // console.log(savedUpdatedMovies)
  if(savedUpdatedMovies){
    for(let movie of savedUpdatedMovies){
      if(movie.id==movieID){
        movie.reviews.forEach(review=>{
        reviewsContainer.innerHTML+=`<li>${review}</li>`;
        });
      }
    }
  };
};
let addreviewbtn=document.querySelector('.addreview-btn');
function addReview(){   //inline addreview event
  for (let movie of version2Movies) {
    if (movie.id === movieID && txtarea.value.length > 20) {
      console.log("matched id")
      movie.reviews.push(txtarea.value);
      localStorage.setItem('updatedMovies',JSON.stringify(version2Movies));
      txtarea.value = ""; // clear input
      charcount.textContent = "150"; // reset character count
      addreviewbtn.disabled = true;
      addreviewbtn.style.cursor = "default";
      break; 
    }
  }
  
};



// Seats Functionality
function generateSeats(){
  let rows="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const seats=[];
  let rowIndex=Math.floor(Math.random()*rows.length);
  let row=rows[rowIndex]
  let seatNumbers=Math.ceil(Math.random()*10);
  if(storeData.ticketsCount!=""){
    for(let i=0;i<storeData.ticketsCount;i++){
      let seat=`${row}${seatNumbers+i}`
      seats.push(seat)
    }
  }
  return seats;
}