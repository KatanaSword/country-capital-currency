const countriesData = [
    {
        name: "Afghanistan",
        capital: "Kabul",
        currency: "Afghan afghani",
        famousFor: "Historical sites like the Buddhas of Bamiyan",
    },
    {
        name: "Albania",
        capital: "Tirana",
        currency: "Albanian lek",
        famousFor: "Albanian Riviera and historical landmarks",
    },
    {
        name: "Algeria",
        capital: "Algiers",
        currency: "Algerian dinar",
        famousFor: "Sahara Desert and ancient Roman ruins",
    },
    {
        name: "Andorra",
        capital: "Andorra la Vella",
        currency: "Euro",
        famousFor: "Ski resorts and tourism",
    },
    {
        name: "Angola",
        capital: "Luanda",
        currency: "Angolan Kwanza (AOA)",
        famousFor: "Natural resources, wildlife, and oil production",
    },
    {
        name: "Antigua and Barbuda",
        capital: "St. John\'s'",
        currency: "East Caribbean Dollar (XCD)",
        famousFor: "Beautiful beaches and tourism",
    },
    {
        name: "Argentina",
        capital: "Buenos Aires",
        currency: "Argentine Peso (ARS)",
        famousFor: "Tango, beef, and football",
    },
    {
        name: "Armenia",
        capital: "Yerevan",
        currency: "Armenian Dram (AMD)",
        famousFor: "Historical landmarks and cultural heritage",
    },
    {
        name: "Australia",
        capital: "Australia",
        currency: "Australian Dollar (AUD)",
        famousFor: "Unique wildlife, Sydney Opera House, and natural wonders",
    },
    {
        name: "Austria",
        capital: "Vienna",
        currency: "Euro (EUR)",
        famousFor: "Classical music, historical architecture, and Alpine scenery",
    },
    {
        name: "Azerbaijan",
        capital: "Baku",
        currency: "Azerbaijani Manat (AZN)",
        famousFor: "Oil production, historical landmarks, and diverse culture",
    },
    {
        name: "Bahamas",
        capital: 'Nassau',
        currency: 'Bahamian Dollar (BSD)',
        famousFor: 'Beautiful beaches and tourism'
    },
    {
        name: "Bahrain",
        capital: 'Manama',
        currency: 'Bahraini Dinar (BHD)',
        famousFor: 'Pearl diving and financial services',
    },
    {
        name: "Bahamas",
        capital: 'Nassau',
        currency: 'Bahamian Dollar (BSD)',
        famousFor: 'Beautiful beaches and tourism'
    },
    {
        name: "Bahrain",
        capital: 'Manama',
        currency: 'Bahraini Dinar (BHD)',
        famousFor: 'Pearl diving and financial services'
    },
    {
        name: "Bangladesh",
        capital: 'Dhaka',
        currency: 'Bangladeshi Taka (BDT)',
        famousFor: 'Sundarbans mangrove forest and textiles'
    },
    {
        name: "Barbados",
        capital: 'Bridgetown',
        currency: 'Barbadian Dollar (BBD)',
        famousFor: 'Beautiful beaches and cricket'
    },
    {
        name: "Belarus",
        capital: 'Minsk',
        currency: 'Belarusian Ruble (BYN)',
        famousFor: 'Historical architecture and cultural heritage'
    },
    {
        name: "Belgium",
        capital: 'Brussels',
        currency: 'Euro (EUR)',
        famousFor: 'Chocolate, waffles, and medieval towns'
    },
    {
        name: "Belize",
        capital: 'Belmopan',
        currency: 'Belize Dollar (BZD)',
        famousFor: 'Barrier Reef and Mayan ruins'
    },
    {
        name: "Benin",
        capital: 'Porto-Novo',
        currency: 'West African CFA franc (XOF)',
        famousFor: 'Voodoo culture and historical sites'
    },
    {
        name: "Bhutan",
        capital: 'Thimphu',
        currency: 'Bhutanese Ngultrum (BTN)',
        famousFor: 'Himalayan landscapes and Gross National Happiness'
    },
    {
        name: "Bolivia",
        capital: 'Sucre',
        currency: 'Bolivian Boliviano (BOB)',
        famousFor: 'Andes Mountains, Salar de Uyuni, and cultural diversity'
    },
    {
        name: "Bosnia and Herzegovina",
        capital: 'Sarajevo',
        currency: 'Bosnia and Herzegovina Convertible Mark (BAM)',
        famousFor: 'Historical sites, diverse landscapes, and cultural heritage'
    },
    {
        name: "Botswana",
        capital: 'Gaborone',
        currency: 'Botswana Pula (BWP)',
        famousFor: 'Okavango Delta and wildlife conservation'
    },
    {
        name: "Brazil",
        capital: 'Brasília',
        currency: 'Brazilian Real (BRL)',
        famousFor: 'Amazon rainforest, Carnival, and football'
    },
    {
        name: "Brunei",
        capital: 'Bandar Seri Begawan',
        currency: 'Brunei Dollar (BND)',
        famousFor: 'Oil production and Islamic architecture'
    },
    {
        name: "Bulgaria",
        capital: 'Sofia',
        currency: 'Bulgarian Lev (BGN)',
        famousFor: 'Rose Valley, Black Sea coast, and historical landmarks'
    },
    {
        name: "Burkina Faso",
        capital: 'Ouagadougou',
        currency: 'West African CFA franc (XOF)',
        famousFor: 'Sahel region, traditional music, and art'
    },
    {
        name: "Burundi",
        capital: 'Bujumbura',
        currency: 'Burundian Franc (BIF)',
        famousFor: 'Great Rift Valley and traditional drumming'
    },
    {
        name: "Cabo Verde",
        capital: "Praia",
        currency: "Cape Verdean Escudo (CVE)",
        famousFor: "Beautiful beaches and volcanic landscapes"
    },
    {
        name: "Cambodia",
        capital: "Phnom Penh",
        currency: "Cambodian Riel (KHR)",
        famousFor: "Angkor Wat, ancient temples, and Khmer culture"
    },
    {
        name: "Cameroon",
        capital: "Yaoundé",
        currency: "Central African CFA franc (XAF)",
        famousFor: "Diverse landscapes, wildlife, and cultural diversity"
    },
    {
        name: "Canada",
        capital: "Ottawa",
        currency: "Canadian Dollar (CAD)",
        famousFor: "Vast landscapes, maple syrup, and multicultural cities"
    },
    {
        name: "Central African Republic",
        capital: "Bangui",
        currency: "Central African CFA franc (XAF)",
        famousFor: "Wildlife, rainforests, and traditional art"
    },
    {
        name: "Chad",
        capital: "N'Djamena",
        currency: "Central African CFA franc (XAF)",
        famousFor: "Saharan landscapes and diverse ethnic groups"
    },
    {
        name: "Chile",
        capital: "Santiago",
        currency: "Chilean Peso (CLP)",
        famousFor: "Andes Mountains, Patagonia, and wine"
    },
    {
        name: "China",
        capital: "Beijing",
        currency: "Chinese Yuan (CNY)",
        famousFor: "Great Wall, Terracotta Army, and ancient history"
    },
    {
        name: "Colombia",
        capital: "Bogotá",
        currency: "Colombian Peso (COP)",
        famousFor: "Coffee, emeralds, and diverse landscapes"
    },
    {
        name: "Comoros",
        capital: "Moroni",
        currency: "Comorian Franc (KMF)",
        famousFor: "Indian Ocean beaches and volcanic landscapes"
    },
    {
        name: "Congo (Congo-Brazzaville)",
        capital: "Brazzaville",
        currency: "Central African CFA franc (XAF)",
        famousFor: "Rainforests, wildlife, and cultural diversity"
    },
    {
        name: "Costa Rica",
        capital: "San José",
        currency: "Costa Rican Colón (CRC)",
        famousFor: "Breathtaking biodiversity, rainforests, and eco-tourism"
    },
    {
        name: "Croatia",
        capital: "Zagreb",
        currency: "Croatian Kuna (HRK)",
        famousFor: "Adriatic coastline, historic cities, and islands"
    },
    {
        name: "Cuba",
        capital: "Havana",
        currency: "Cuban Peso (CUP)",
        famousFor: "Vintage cars, cigars, and vibrant culture"
    },
    {
        name: "Cyprus",
        capital: "Nicosia",
        currency: "Euro (EUR)",
        famousFor: "Historical sites, beaches, and Mediterranean cuisine"
    },
    {
        name: "Czechia (Czech Republic)",
        capital: "Prague",
        currency: "Czech Koruna (CZK)",
        famousFor: "Historic castles, beer, and medieval towns"
    },
    {
        name: "Democratic Republic of the Congo",
        capital: "Kinshasa",
        currency: "Congolese Franc (CDF)",
        famousFor: "Rainforests, wildlife, and the Congo River"
    },
    {
        name: "Denmark",
        capital: "Copenhagen",
        currency: "Danish Krone (DKK)",
        famousFor: "Historic castles, the Little Mermaid, and design"
    },
    {
        name: "Djibouti",
        capital: "Djibouti",
        currency: "Djiboutian Franc (DJF)",
        famousFor: "Strategic location, Lake Assal, and diverse cultures"
    },
    {
        name: "Dominica",
        capital: "Roseau",
        currency: "Eastern Caribbean Dollar (XCD)",
        famousFor: "Lush rainforests, hot springs, and biodiversity"
    },
    {
        name: "Dominican Republic",
        capital: "Santo Domingo",
        currency: "Dominican Peso (DOP)",
        famousFor: "Beautiful beaches, historic sites, and baseball"
    },
    {
        name: "Ecuador",
        capital: "Quito",
        currency: "United States Dollar (USD)",
        famousFor: "Galápagos Islands, Amazon rainforest, and biodiversity"
    },
    {
        name: "Egypt",
        capital: "Cairo",
        currency: "Egyptian Pound (EGP)",
        famousFor: "Pyramids of Giza, ancient history, and the Nile River"
    },
    {
        name: "El Salvador",
        capital: "San Salvador",
        currency: "United States Dollar (USD)",
        famousFor: "Volcanoes, beaches, and Mayan archaeological sites"
    },
    {
        name: "Equatorial Guinea",
        capital: "Malabo",
        currency: "Central African CFA franc (XAF)",
        famousFor: "Oil production, wildlife, and cultural diversity"
    },
    {
        name: "Eritrea",
        capital: "Asmara",
        currency: "Eritrean Nakfa (ERN)",
        famousFor: "Historical architecture, Red Sea coastline, and diverse culture"
    },
    {
        name: "Estonia",
        capital: "Tallinn",
        currency: "Euro (EUR)",
        famousFor: "Digital innovation, medieval architecture, and Baltic Sea coastline"
    },
    {
        name: "Eswatini",
        capital: "Mbabane",
        currency: "Swazi Lilangeni (SZL)",
        famousFor: "Cultural festivals, wildlife reserves, and traditional ceremonies"
    },
    {
        name: "Ethiopia",
        capital: "Addis Ababa",
        currency: "Ethiopian Birr (ETB)",
        famousFor: "Historic sites, diverse landscapes, and coffee origin"
    },
    {
        name: "Fiji",
        capital: "Suva",
        currency: "Fijian Dollar (FJD)",
        famousFor: "Coral reefs, turquoise waters, and friendly hospitality"
    },
    {
        name: "Finland",
        capital: "Helsinki",
        currency: "Euro (EUR)",
        famousFor: "Northern Lights, lakes, and design innovation"
    },
    {
        name: "France",
        capital: "Paris",
        currency: "Euro (EUR)",
        famousFor: "Eiffel Tower, art, fashion, and culinary excellence"
    },
    {
        name: "Gabon",
        capital: "Libreville",
        currency: "Central African CFA franc (XAF)",
        famousFor: "Rainforests, wildlife, and diverse ecosystems"
    },
    {
        name: "Gambia",
        capital: "Banjul",
        currency: "Gambian Dalasi (GMD)",
        famousFor: "River Gambia, birdwatching, and vibrant culture"
    },
    {
        name: "Georgia",
        capital: "Tbilisi",
        currency: "Georgian Lari (GEL)",
        famousFor: "Caucasus Mountains, ancient history, and wine"
    },
    {
        name: "Germany",
        capital: "Berlin",
        currency: "Euro (EUR)",
        famousFor: "Historic castles, engineering, and cultural contributions"
    },
    {
        name: "Ghana",
        capital: "Accra",
        currency: "Ghanaian Cedi (GHS)",
        famousFor: "Gold Coast history, Ashanti culture, and cocoa production"
    },
    {
        name: "Greece",
        capital: "Athens",
        currency: "Euro (EUR)",
        famousFor: "Ancient ruins, mythology, and Mediterranean cuisine"
    },
    {
        name: "Grenada",
        capital: "St. George's",
        currency: "Eastern Caribbean Dollar (XCD)",
        famousFor: "Spice Island, beautiful beaches, and nutmeg production"
    },
    {
        name: "Guatemala",
        capital: "Guatemala City",
        currency: "Guatemalan Quetzal (GTQ)",
        famousFor: "Mayan ruins, volcanoes, and indigenous cultures"
    },
    {
        name: "Guinea",
        capital: "Conakry",
        currency: "Guinean Franc (GNF)",
        famousFor: "Mount Nimba, wildlife, and diverse ethnic groups"
    },
    {
        name: "Guinea-Bissau",
        capital: "Bissau",
        currency: "West African CFA franc (XOF)",
        famousFor: "Bijagos Archipelago, diverse ecosystems, and colonial history"
    },
    {
        name: "Guyana",
        capital: "Georgetown",
        currency: "Guyanese Dollar (GYD)",
        famousFor: "Kaieteur Falls, rainforests, and diverse wildlife"
    },
    {
        name: "Haiti",
        capital: "Port-au-Prince",
        currency: "Haitian Gourde (HTG)",
        famousFor: "Historical sites, vibrant culture, and mountainous landscapes"
    },
    {
        name: "Holy See",
        capital: "Vatican City",
        currency: "Euro (EUR)",
        famousFor: "Spiritual center of Catholicism, St. Peter's Basilica, and the Sistine Chapel"
    },
    {
        name: "Honduras",
        capital: "Tegucigalpa",
        currency: "Honduran Lempira (HNL)",
        famousFor: "Mayan ruins, diverse ecosystems, and Caribbean beaches"
    },
    {
        name: "Hungary",
        capital: "Budapest",
        currency: "Hungarian Forint (HUF)",
        famousFor: "Thermal baths, historic architecture, and the Danube River"
    },
    {
        name: "Iceland",
        capital: "Reykjavik",
        currency: "Icelandic Króna (ISK)",
        famousFor: "Geysers, glaciers, and the Northern Lights"
    },
    {
        name: "India",
        capital: "New Delhi",
        currency: "Indian Rupee (INR)",
        famousFor: "Taj Mahal, diverse cultures, and spicy cuisine"
    },
    {
        name: "Indonesia",
        capital: "Jakarta",
        currency: "Indonesian Rupiah (IDR)",
        famousFor: "Bali, Komodo dragons, and diverse landscapes"
    },
    {
        name: "Iran",
        capital: "Tehran",
        currency: "Iranian Rial (IRR)",
        famousFor: "Ancient history, Persian architecture, and cultural heritage"
    },
    {
        name: "Iraq",
        capital: "Baghdad",
        currency: "Iraqi Dinar (IQD)",
        famousFor: "Historical sites, Mesopotamian civilization, and Tigris-Euphrates rivers"
    },
    {
        name: "Ireland",
        capital: "Dublin",
        currency: "Euro (EUR)",
        famousFor: "Green landscapes, castles, and traditional music"
    },
    {
        name: "Israel",
        capital: "Jerusalem",
        currency: "Israeli New Shekel (ILS)",
        famousFor: "Religious sites, Dead Sea, and innovation"
    },
    {
        name: "Italy",
        capital: "Rome",
        currency: "Euro (EUR)",
        famousFor: "Colosseum, Renaissance art, and delicious cuisine"
    },
    {
        name: "Jamaica",
        capital: "Kingston",
        currency: "Jamaican Dollar (JMD)",
        famousFor: "Reggae music, beautiful beaches, and Blue Mountains"
    },
    {
        name: "Japan",
        capital: "Tokyo",
        currency: "Japanese Yen (JPY)",
        famousFor: "Mount Fuji, cherry blossoms, and advanced technology"
    },
    {
        name: "Jordan",
        capital: "Amman",
        currency: "Jordanian Dinar (JOD)",
        famousFor: "Petra, Dead Sea, and historical sites"
    },
    {
        name: "Kazakhstan",
        capital: "Nur-Sultan",
        currency: "Kazakhstani Tenge (KZT)",
        famousFor: "Vast landscapes, steppe regions, and cultural diversity"
    },
    {
        name: "Kenya",
        capital: "Nairobi",
        currency: "Kenyan Shilling (KES)",
        famousFor: "Safari destinations, Maasai Mara, and diverse wildlife"
    },
    {
        name: "Kiribati",
        capital: "South Tarawa",
        currency: "Kiribati Dollar (AUD)",
        famousFor: "Coral atolls, marine life, and the Line Islands"
    },
    {
        name: "Kuwait",
        capital: "Kuwait City",
        currency: "Kuwaiti Dinar (KWD)",
        famousFor: "Oil industry, modern architecture, and cultural heritage"
    },
    {
        name: "Kyrgyzstan",
        capital: "Bishkek",
        currency: "Kyrgyzstani Som (KGS)",
        famousFor: "Mountainous landscapes, Issyk-Kul Lake, and nomadic traditions"
    },
    {
        name: "Laos",
        capital: "Vientiane",
        currency: "Lao Kip (LAK)",
        famousFor: "Buddhist temples, Luang Prabang, and Mekong River"
    },
    {
        name: "Latvia",
        capital: "Riga",
        currency: "Euro (EUR)",
        famousFor: "Baltic Sea coastline, medieval towns, and cultural festivals"
    },
    {
        name: "Lebanon",
        capital: "Beirut",
        currency: "Lebanese Pound (LBP)",
        famousFor: "Cedars of Lebanon, historical ruins, and Mediterranean cuisine"
    },
    {
        name: "Lesotho",
        capital: "Maseru",
        currency: "Lesotho Loti (LSL)",
        famousFor: "Mountainous landscapes, traditional villages, and Basotho culture"
    },
    {
        name: "Liberia",
        capital: "Monrovia",
        currency: "Liberian Dollar (LRD)",
        famousFor: "Sapo National Park, Firestone Plantation, and diverse wildlife"
    },
    {
        name: "Libya",
        capital: "Tripoli",
        currency: "Libyan Dinar (LYD)",
        famousFor: "Roman ruins, Sahara Desert, and ancient history"
    },
    {
        name: "Liechtenstein",
        capital: "Vaduz",
        currency: "Swiss Franc (CHF)",
        famousFor: "Alpine landscapes, Vaduz Castle, and a constitutional monarchy"
    },
    {
        name: "Lithuania",
        capital: "Vilnius",
        currency: "Euro (EUR)",
        famousFor: "Baltic Sea coast, Trakai Island Castle, and Hill of Crosses"
    },
    {
        name: "Luxembourg",
        capital: "Luxembourg City",
        currency: "Euro (EUR)",
        famousFor: "Historic fortifications, banking, and European institutions"
    },
    {
        name: "Madagascar",
        capital: "Antananarivo",
        currency: "Malagasy Ariary (MGA)",
        famousFor: "Unique wildlife, baobab trees, and diverse ecosystems"
    },
    {
        name: "Malawi",
        capital: "Lilongwe",
        currency: "Malawian Kwacha (MWK)",
        famousFor: "Lake Malawi, wildlife reserves, and tea plantations"
    },
    {
        name: "Malaysia",
        capital: "Kuala Lumpur",
        currency: "Malaysian Ringgit (MYR)",
        famousFor: "Petronas Towers, rainforests, and diverse cultures"
    },
    {
        name: "Maldives",
        capital: "Malé",
        currency: "Maldivian Rufiyaa (MVR)",
        famousFor: "Coral atolls, overwater bungalows, and marine life"
    },
    {
        name: "Mali",
        capital: "Bamako",
        currency: "West African CFA franc (XOF)",
        famousFor: "Timbuktu, historic mosques, and the Niger River"
    },
    {
        name: "Malta",
        capital: "Valletta",
        currency: "Euro (EUR)",
        famousFor: "Historic sites, Mediterranean cuisine, and blue lagoons"
    },
    {
        name: "Marshall Islands",
        capital: "Majuro",
        currency: "United States Dollar (USD)",
        famousFor: "Coral reefs, World War II relics, and Micronesian culture"
    },
    {
        name: "Mauritania",
        capital: "Nouakchott",
        currency: "Mauritanian Ouguiya (MRU)",
        famousFor: "Sahara Desert, ancient caravan routes, and historical sites"
    },
    {
        name: "Mauritius",
        capital: "Port Louis",
        currency: "Mauritian Rupee (MUR)",
        famousFor: "Beaches, coral reefs, and the extinct dodo bird"
    },
    {
        name: "Mexico",
        capital: "Mexico City",
        currency: "Mexican Peso (MXN)",
        famousFor: "Pyramids of Teotihuacan, Mariachi music, and cuisine"
    },
    {
        name: "Micronesia",
        capital: "Palikir",
        currency: "United States Dollar (USD)",
        famousFor: "Archipelago of islands, coral reefs, and traditional navigation"
    },
    {
        name: "Moldova",
        capital: "Chisinau",
        currency: "Moldovan Leu (MDL)",
        famousFor: "Wine production, monasteries, and historical sites"
    },
    {
        name: "Monaco",
        capital: "Monaco",
        currency: "Euro (EUR)",
        famousFor: "Monte Carlo Casino, luxury lifestyle, and the Grand Prix"
    },
    {
        name: "Mongolia",
        capital: "Ulaanbaatar",
        currency: "Mongolian Tugrik (MNT)",
        famousFor: "Gobi Desert, nomadic culture, and Genghis Khan's legacy"
    },
    {
        name: "Montenegro",
        capital: "Podgorica",
        currency: "Euro (EUR)",
        famousFor: "Bay of Kotor, medieval towns, and Adriatic coast"
    },
    {
        name: "Morocco",
        capital: "Rabat",
        currency: "Moroccan Dirham (MAD)",
        famousFor: "Marrakech, Atlas Mountains, and vibrant souks"
    },
    {
        name: "Mozambique",
        capital: "Maputo",
        currency: "Mozambican Metical (MZN)",
        famousFor: "Indian Ocean beaches, wildlife reserves, and Portuguese architecture"
    },
    {
        name: "Myanmar (formerly Burma)",
        capital: "Naypyidaw",
        currency: "Burmese Kyat (MMK)",
        famousFor: "Bagan temples, Inle Lake, and diverse ethnic cultures"
    },
    {
        name: "Namibia",
        capital: "Windhoek",
        currency: "Namibian Dollar (NAD)",
        famousFor: "Namib Desert, Etosha National Park, and wildlife"
    },
    {
        name: "Nauru",
        capital: "Yaren",
        currency: "Australian Dollar (AUD)",
        famousFor: "Smallest island country, phosphate mining, and Pacific culture"
    },
    {
        name: "Nepal",
        capital: "Kathmandu",
        currency: "Nepalese Rupee (NPR)",
        famousFor: "Himalayas, Mount Everest, and diverse cultures"
    },
    {
        name: "Netherlands",
        capital: "Amsterdam",
        currency: "Euro (EUR)",
        famousFor: "Windmills, tulip fields, and cycling culture"
    },
    {
        name: "New Zealand",
        capital: "Wellington",
        currency: "New Zealand Dollar (NZD)",
        famousFor: "Stunning landscapes, Maori culture, and outdoor activities"
    },
    {
        name: "Nicaragua",
        capital: "Managua",
        currency: "Nicaraguan Córdoba (NIO)",
        famousFor: "Volcanoes, Lake Nicaragua, and colonial architecture"
    },
    {
        name: "Niger",
        capital: "Niamey",
        currency: "West African CFA franc (XOF)",
        famousFor: "Sahara Desert, wildlife, and traditional festivals"
    },
    {
        name: "Nigeria",
        capital: "Abuja",
        currency: "Nigerian Naira (NGN)",
        famousFor: "Nollywood, diverse cultures, and natural resources"
    },
    {
        name: "North Korea",
        capital: "Pyongyang",
        currency: "North Korean Won (KPW)",
        famousFor: "Hermit Kingdom, Juche ideology, and military parades"
    },
    {
        name: "North Macedonia (formerly Macedonia)",
        capital: "Skopje",
        currency: "North Macedonian Denar (MKD)",
        famousFor: "Ohrid, Alexander the Great, and Balkan history"
    },
    {
        name: "Norway",
        capital: "Oslo",
        currency: "Norwegian Krone (NOK)",
        famousFor: "Fjords, Northern Lights, and outdoor activities"
    },
    {
        name: "Oman",
        capital: "Muscat",
        currency: "Omani Rial (OMR)",
        famousFor: "Deserts, mountains, and traditional architecture"
    },
    {
        name: "Pakistan",
        capital: "Islamabad",
        currency: "Pakistani Rupee (PKR)",
        famousFor: "Himalayan peaks, historical sites, and diverse cultures"
    },
    {
        name: "Palau",
        capital: "Ngerulmud",
        currency: "United States Dollar (USD)",
        famousFor: "Rock Islands, coral reefs, and Jellyfish Lake"
    },
    {
        name: "Palestine State",
        capital: "Ramallah",
        currency: "Israeli New Shekel (ILS) and Jordanian Dinar (JOD)",
        famousFor: "Holy sites, historical landmarks, and cultural heritage"
    },
    {
        name: "Panama",
        capital: "Panama City",
        currency: "Panamanian Balboa (PAB) and United States Dollar (USD)",
        famousFor: "Panama Canal, biodiversity, and tropical rainforests"
    },
    {
        name: "Papua New Guinea",
        capital: "Port Moresby",
        currency: "Papua New Guinean Kina (PGK)",
        famousFor: "Diverse cultures, tribal art, and Kokoda Track"
    },
    {
        name: "Paraguay",
        capital: "Asunción",
        currency: "Paraguayan Guarani (PYG)",
        famousFor: "Iguaçu Falls, Jesuit missions, and the Chaco region"
    },
    {
        name: "Peru",
        capital: "Lima",
        currency: "Peruvian Nuevo Sol (PEN)",
        famousFor: "Machu Picchu, Amazon rainforest, and Inca heritage"
    },
    {
        name: "Philippines",
        capital: "Manila",
        currency: "Philippine Peso (PHP)",
        famousFor: "Beautiful beaches, rice terraces, and diverse islands"
    },
    {
        name: "Poland",
        capital: "Warsaw",
        currency: "Polish Złoty (PLN)",
        famousFor: "Historic cities, Wieliczka Salt Mine, and Polish cuisine"
    },
    {
        name: "Portugal",
        capital: "Lisbon",
        currency: "Euro (EUR)",
        famousFor: "Port wine, historic architecture, and scenic coastlines"
    },
    {
        name: "Qatar",
        capital: "Doha",
        currency: "Qatari Riyal (QAR)",
        famousFor: "Modern architecture, Arabian cuisine, and luxury living"
    },
    {
        name: "Romania",
        capital: "Bucharest",
        currency: "Romanian Leu (RON)",
        famousFor: "Transylvania, castles, and Carpathian Mountains"
    },
    {
        name: "Russia",
        capital: "Moscow",
        currency: "Russian Ruble (RUB)",
        famousFor: "Red Square, Hermitage Museum, and Trans-Siberian Railway"
    },
    {
        name: "Rwanda",
        capital: "Kigali",
        currency: "Rwandan Franc (RWF)",
        famousFor: "Mountain gorillas, Akagera National Park, and genocide recovery"
    },
    {
        name: "Saint Kitts and Nevis",
        capital: "Basseterre",
        currency: "Eastern Caribbean Dollar (XCD)",
        famousFor: "White sandy beaches, historic sites, and carnival celebrations"
    },
    {
        name: "Saint Lucia",
        capital: "Castries",
        currency: "Eastern Caribbean Dollar (XCD)",
        famousFor: "Pitons, Sulphur Springs, and lush rainforests"
    },
    {
        name: "Saint Vincent and the Grenadines",
        capital: "Kingstown",
        currency: "Eastern Caribbean Dollar (XCD)",
        famousFor: "Grenadine islands, coral reefs, and sailing destinations"
    },
    {
        name: "Samoa",
        capital: "Apia",
        currency: "Samoan Tala (WST)",
        famousFor: "Polynesian culture, To Sua Ocean Trench, and tropical landscapes"
    },
    {
        name: "San Marino",
        capital: "San Marino",
        currency: "Euro (EUR)",
        famousFor: "Ancient history, Mount Titano, and medieval architecture"
    },
    {
        name: "Sao Tome and Principe",
        capital: "São Tomé",
        currency: "São Tomé and Príncipe Dobra (STN)",
        famousFor: "Cocoa production, Obo National Park, and colonial architecture"
    },
    {
        name: "Saudi Arabia",
        capital: "Riyadh",
        currency: "Saudi Riyal (SAR)",
        famousFor: "Mecca and Medina, Red Sea coastline, and Arabian Desert"
    },
    {
        name: "Senegal",
        capital: "Dakar",
        currency: "West African CFA franc (XOF)",
        famousFor: "Goree Island, vibrant music, and diverse cultures"
    },
    {
        name: "Serbia",
        capital: "Belgrade",
        currency: "Serbian Dinar (RSD)",
        famousFor: "Belgrade nightlife, medieval monasteries, and vibrant festivals"
    },
    {
        name: "Seychelles",
        capital: "Victoria",
        currency: "Seychellois Rupee (SCR)",
        famousFor: "Praslin and La Digue islands, coral reefs, and luxury resorts"
    },
    {
        name: "Sierra Leone",
        capital: "Freetown",
        currency: "Sierra Leonean Leone (SLL)",
        famousFor: "Bunce Island, Tacugama Chimpanzee Sanctuary, and beautiful beaches"
    },
    {
        name: "Singapore",
        capital: "Singapore",
        currency: "Singapore Dollar (SGD)",
        famousFor: "Marina Bay Sands, Gardens by the Bay, and diverse culinary scene"
    },
    {
        name: "Slovakia",
        capital: "Bratislava",
        currency: "Euro (EUR)",
        famousFor: "High Tatras, medieval castles, and traditional folk culture"
    },
    {
        name: "Slovenia",
        capital: "Ljubljana",
        currency: "Euro (EUR)",
        famousFor: "Lake Bled, Julian Alps, and picturesque villages"
    },
    {
        name: "Solomon Islands",
        capital: "Honiara",
        currency: "Solomon Islands Dollar (SBD)",
        famousFor: "Coral reefs, World War II history, and diverse marine life"
    },
    {
        name: "Somalia",
        capital: "Mogadishu",
        currency: "Somali Shilling (SOS)",
        famousFor: "Horn of Africa, ancient port cities, and cultural heritage"
    },
    {
        name: "South Africa",
        capital: "Pretoria (administrative), Bloemfontein (judicial), Cape Town (legislative)",
        currency: "South African Rand (ZAR)",
        famousFor: "Kruger National Park, Table Mountain, and diverse landscapes"
    },
    {
        name: "South Korea",
        capital: "Seoul",
        currency: "South Korean Won (KRW)",
        famousFor: "K-pop, palaces, and advanced technology"
    },
    {
        name: "South Sudan",
        capital: "Juba",
        currency: "South Sudanese Pound (SSP)",
        famousFor: "Nile River, wildlife, and diverse ethnic groups"
    },
    {
        name: "Spain",
        capital: "Madrid",
        currency: "Euro (EUR)",
        famousFor: "Sagrada Familia, Flamenco dancing, and historic cities"
    },
    {
        name: "Sri Lanka",
        capital: "Colombo",
        currency: "Sri Lankan Rupee (LKR)",
        famousFor: "Tea plantations, ancient temples, and wildlife reserves"
    },
    {
        name: "Sudan",
        capital: "Khartoum",
        currency: "Sudanese Pound (SDG)",
        famousFor: "Pyramids of Meroe, Nile River, and diverse cultures"
    },
    {
        name: "Suriname",
        capital: "Paramaribo",
        currency: "Surinamese Dollar (SRD)",
        famousFor: "Amazon rainforest, diverse ethnic groups, and historic plantations"
    },
    {
        name: "Sweden",
        capital: "Stockholm",
        currency: "Swedish Krona (SEK)",
        famousFor: "Nordic landscapes, Vasa Museum, and innovative design"
    },
    {
        name: "Switzerland",
        capital: "Bern",
        currency: "Swiss Franc (CHF)",
        famousFor: "Swiss Alps, chocolate, and efficient public transportation"
    },
    {
        name: "Syria",
        capital: "Damascus",
        currency: "Syrian Pound (SYP)",
        famousFor: "Ancient ruins, Silk Road history, and Middle Eastern cuisine"
    },
    {
        name: "Tajikistan",
        capital: "Dushanbe",
        currency: "Tajikistani Somoni (TJS)",
        famousFor: "Pamir Mountains, Iskanderkul Lake, and Persian-influenced architecture"
    },
    {
        name: "Tanzania",
        capital: "Dodoma",
        currency: "Tanzanian Shilling (TZS)",
        famousFor: "Mount Kilimanjaro, Serengeti National Park, and Zanzibar"
    },
    {
        name: "Thailand",
        capital: "Bangkok",
        currency: "Thai Baht (THB)",
        famousFor: "Temples, tropical islands, and vibrant street food"
    },
    {
        name: "Timor-Leste",
        capital: "Dili",
        currency: "United States Dollar (USD)",
        famousFor: "Diverse landscapes, traditional ceremonies, and historical sites"
    },
    {
        name: "Togo",
        capital: "Lomé",
        currency: "West African CFA franc (XOF)",
        famousFor: "Togoville, Akloa Waterfall, and vibrant markets"
    },
    {
        name: "Tonga",
        capital: "Nuku'alofa",
        currency: "Tongan Pa'anga (TOP)",
        famousFor: "Polynesian monarchy, Ha'amonga 'a Maui, and coral reefs"
    },
    {
        name: "Trinidad and Tobago",
        capital: "Port of Spain",
        currency: "Trinidad and Tobago Dollar (TTD)",
        famousFor: "Carnival celebrations, Maracas Beach, and Pitch Lake"
    },
    {
        name: "Tunisia",
        capital: "Tunis",
        currency: "Tunisian Dinar (TND)",
        famousFor: "Carthage ruins, Sahara Desert, and Mediterranean beaches"
    },
    {
        name: "Turkey",
        capital: "Ankara",
        currency: "Turkish Lira (TRY)",
        famousFor: "Hagia Sophia, Cappadocia, and historical sites"
    },
    {
        name: "Turkmenistan",
        capital: "Ashgabat",
        currency: "Turkmenistan Manat (TMT)",
        famousFor: "Darvaza Gas Crater, ancient Silk Road cities, and Akhal-Teke horses"
    },
    {
        name: "Tuvalu",
        capital: "Funafuti",
        currency: "Tuvaluan Dollar (TVD)",
        famousFor: "Polynesian culture, Funafuti Conservation Area, and coral atolls"
    },
    {
        name: "Uganda",
        capital: "Kampala",
        currency: "Ugandan Shilling (UGX)",
        famousFor: "Mountain gorillas, Lake Victoria, and diverse landscapes"
    },
    {
        name: "Ukraine",
        capital: "Kyiv",
        currency: "Ukrainian Hryvnia (UAH)",
        famousFor: "Chernobyl, Carpathian Mountains, and historic cities"
    },
    {
        name: "United Arab Emirates",
        capital: "Abu Dhabi",
        currency: "United Arab Emirates Dirham (AED)",
        famousFor: "Burj Khalifa, luxury shopping, and desert landscapes"
    },
    {
        name: "United Kingdom",
        capital: "London",
        currency: "British Pound Sterling (GBP)",
        famousFor: "Big Ben, Buckingham Palace, and rich cultural heritage"
    },
    {
        name: "United States of America",
        capital: "Washington, D.C.",
        currency: "United States Dollar (USD)",
        famousFor: "Statue of Liberty, Grand Canyon, and diverse cities"
    },
    {
        name: "Uruguay",
        capital: "Montevideo",
        currency: "Uruguayan Peso (UYU)",
        famousFor: "Punta del Este, tango music, and historic neighborhoods"
    },
    {
        name: "Uzbekistan",
        capital: "Tashkent",
        currency: "Uzbekistani Som (UZS)",
        famousFor: "Samarkand, Registan Square, and Silk Road architecture"
    },
    {
        name: "Vanuatu",
        capital: "Port Vila",
        currency: "Vanuatu Vatu (VUV)",
        famousFor: "Volcanic landscapes, traditional villages, and coral reefs"
    },
    {
        name: "Venezuela",
        capital: "Caracas",
        currency: "Venezuelan Bolívar (VES)",
        famousFor: "Angel Falls, Orinoco River, and diverse ecosystems"
    },
    {
        name: "Vietnam",
        capital: "Hanoi",
        currency: "Vietnamese Dong (VND)",
        famousFor: "Halong Bay, Hoi An, and traditional cuisine"
    },
    {
        name: "Yemen",
        capital: "Sana'a",
        currency: "Yemeni Rial (YER)",
        famousFor: "Old City of Sana'a, Socotra Island, and Arabian Peninsula landscapes"
    },
    {
        name: "Zambia",
        capital: "Lusaka",
        currency: "Zambian Kwacha (ZMW)",
        famousFor: "Victoria Falls, wildlife reserves, and Zambezi River"
    },
    {
        name: "Zimbabwe",
        capital: "Harare",
        currency: "Zimbabwean Dollar (ZWL)",
        famousFor: "Great Zimbabwe, Victoria Falls, and diverse landscapes"
    },
];

module.exports = countriesData;