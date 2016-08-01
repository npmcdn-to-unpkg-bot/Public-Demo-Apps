//constants
var wrapclient = new Wrap("cfccabbfe849b821f659ab972285c4102d0c4c8a9e3223d1413898e56f189421", "https://wrapi.wrap.co/api");

var templateWrapName = "Wander Ticket Demo"; 

var templateWrap;
var tripData;
var productData;
var editorialData;
var lastPersonalizedWrap;

var sharingMessage = "Hello, Your travel ticket is available here: {{wrap}} Bon Voyage!"

tripData = {
  "1" : {
    "trip_id"         : 1,
    "trip_name"       : "8 Day Columbia Adventure",
    "trip_title"      : "8 Day Columbia Adventure",
    "trip_subtitle"   : "The Lost City, Colombia",
    "trip_img"        : "https://dl.dropboxusercontent.com/u/8626776/receipt/columbia.png",
    "hero_img"        : "https://dl.dropbox.com/s/jor7we2e8flregu/2.png",
    "gallery_img"     : "https://dl.dropbox.com/s/ky2c8se58471iw6/4.png",
    "background_img"  : "https://dl.dropboxusercontent.com/u/8626776/receipt/3.png",
    "video_url"       : "https://youtu.be/C3YDDuGiu61",
    "cur_price"       : 1750,
    "list_price"      : 2590,
    "merchant_about"  : "Ecoventura",
    "location"        : "175 DeHaro St. San Francisco, CA 94103",
    "contact_phone"   : "1-800-555-1221",
    "trip_url"        : "https://www.zozi.com/getaways/trek-to-the-lost-city-eight-day-colombia-adventure-active/17831",
    "trip_details"    : "SUNDAY: Puerto Baquerizo Moreno, San Cristobal (Chatham) Cerro Tijeretas & Leon Dormido, San Cristobal MONDAY: Cerro Brujo (SN, PR, KY) San Cristobal Punta Pitt, (SN, PR) San Cristobal TUESDAY: Punta Suarez, Espanola (Hood) Gardner Bay (SN, PR, KY) Espanola WEDNESDAY: Punta Cormorant (PR), Devil’s Crown or Champion (SN), FLOREANA Post Office Bay (SN), Baroness Point (PR), Floreana(Charles) THURSDAY: Highlands of Santa Cruz (Indefatigable) CCFL (Darwin Station), Santa Cruz FRIDAY: Bartolome (PR, SN) Las Bachas (SN) or Black Turtle Cove (PR) or Sombrero Chino (PR,SN) SATURDAY: South Plaza Island North Seymour (PR, SN) Sunday Interpretation Center, San Cristobal (Chatham)"    
  },
    "2" : {
    "trip_id"         : 2,
    "trip_name"       : "Glassbottom Boat Cruise in Kona",
    "trip_title"      : "Glassbottom Boat Cruise in Kona",
    "trip_subtitle"   : "Kailua-Kona, Hawaii",
    "trip_img"        : "https://dl.dropbox.com/s/oaif7g24gpcsipj/5.png",
    "hero_img"        : "https://dl.dropbox.com/s/6a8rfs8wachbutf/2.png",
    "gallery_img"     : "https://dl.dropbox.com/s/0lkzionk7ewld9j/4.png",
    "background_img"  : "https://dl.dropbox.com/s/a8yvl5s8nv0y56c/3.png",
    "video_url"       : "https://youtu.be/C3YDDuGiu61",
    "cur_price"       : 1650,
    "list_price"      : 1999,
    "merchant_about"  : "Expedia",
    "location"        : "334 Pier 49 Kailua Bay, Hi 12345",
    "contact_phone"   : "1-800-555-1226",
    "trip_url"        : "https://www.expedia.com/things-to-do/glassbottom-boat-cruise-in-kona.a251763.activity-details?srp=true&location=Hawaii%20(The%20Big%20Island),%20Hawaii,%20United%20States%20of%20America",
    "trip_details"    : "SUNDAY: 9am Please Get to the Pier Address 15 min early to complete paperwork before the 9am departure"    
  },
    "3" : {
    "trip_id"         : 3,
    "trip_name"       : "Surf Adventure in Nicaragua",
    "trip_title"      : "Surf Adventure in Nicaragua",
    "trip_subtitle"   : "Popoyo Beach, Nicaragua",
    "trip_img"        : "https://dl.dropbox.com/s/2qtf030nlz3b4ie/5.png",
    "hero_img"        : "https://dl.dropbox.com/s/oe28q5i2t13ris9/2.png",
    "gallery_img"     : "https://dl.dropbox.com/s/8ch0ec2zwnk4d2n/4.png",
    "background_img"  : "https://dl.dropbox.com/s/olniz9eznd9itih/3.png",
    "video_url"       : "https://youtu.be/C3YDDuGiu61",
    "cur_price"       : 659,
    "list_price"      : 880,
    "merchant_about"  : "Zozi",
    "location"        : "4440 Surfer Way, Apartado Postal 5541 Managua, Nicaragua",
    "contact_phone"   : "1-800-555-1232",
    "trip_url"        : "https://www.zozi.com/getaways/central-america-surf-escape-five-night-all-inclusive-surf-adventure-in-nicaragua-active-chill/17775",
    "trip_details"    : "Check in after 12am SUNDAY (MAR 26) and Check-out and before 11am day of departure."    
  },
    "4" : {
    "trip_id"         : 4,
    "trip_name"       : "Mona Lisa & Best of the Louvre",
    "trip_title"      : "Mona Lisa & Best of the Louvre",
    "trip_subtitle"   : "Musée du Louvre, Paris",
    "trip_img"        : "https://dl.dropbox.com/s/vib2dpsqkzenn2z/5.png?dl=0",
    "hero_img"        : "https://dl.dropbox.com/s/v0ofiho08779orz/2.png",
    "gallery_img"     : "https://dl.dropbox.com/s/26apfbnm2dfv30n/4.png",
    "background_img"  : "https://dl.dropbox.com/s/0gi72v75weiw5gy/3.png",
    "video_url"       : "https://youtu.be/C3YDDuGiu61",
    "cur_price"       : 320,
    "list_price"      : 499,
    "merchant_about"  : "Travelocity",
    "location"        : "75001 Paris, France",
    "contact_phone"   : "1-800-555-1233",
    "trip_url"        : "https://www.travelocity.com/things-to-do/semi-private-tour-mona-lisa-best-of-the-louvre.a256718.activity-details?srp=true&location=Paris%20(and%20vicinity),%20France",
    "trip_details"    : "Check into tour with your guide MONA LISA, 11am MAR 27, at the  LOUVRES EAST GATE "    
  },
    "5" : {
    "trip_id"         : 5,
    "trip_name"       : "Casamagna Marriott Cancun Resort",
    "trip_title"      : "Casamagna Marriott Cancun Resort",
    "trip_subtitle"   : "Boulevard Kukulcan, Retorno",
    "trip_img"        : "https://dl.dropbox.com/s/rlpfvvlax1lcpt1/5.png",
    "hero_img"        : "https://dl.dropbox.com/s/vr6f4so63jxje7u/2.png",
    "gallery_img"     : "https://dl.dropbox.com/s/5x8bp0bp28t97xc/4.png",
    "background_img"  : "https://dl.dropbox.com/s/3p80cq4t43of94e/3.png",
    "video_url"       : "https://youtu.be/C3YDDuGiu61",
    "cur_price"       : 952,
    "list_price"      : 1094,
    "merchant_about"  : "Kayak",
    "location"        : "77500 Cancún, Q.R., Mexico",
    "contact_phone"   : "1-800-555-1238",
    "trip_url"        : "http://www.priceline.com/vp-web/packageDetails.do?jsk=464a200a554a200a2016022422384922c021632667&plf=PCLN",
    "trip_details"    : "Check into hotel after SAT 10AM APRIL 1,  Check Out, before 1pm day of departure"    
  }
}

productData = {
    "1" :     {
      "product_id" : 1,
      "product_img" : "https://dl.dropbox.com/s/gygu6dzd1jyf8hz/1.png",
      "product_name" : "Galapagos Day Bag",
      "brand" : "Travel Unlimited",
      "product_link" : "http://www.cafepress.com/+galapagos_islands_tote_bag,779164186?utm_medium=cpc&utm_term=779164186--c-9031947&utm_source=pla-google&utm_campaign=172674850&utm_content=13672359250",
      "product_desc" : "A great bag for hiking and biking ",
      "list_price" : 149,
      "offer_price" : 134
    },
    "2" :     {
      "product_id" : 2,
      "product_img" : "https://dl.dropbox.com/s/zeb0w22tgj8w5qj/2.png",
      "product_name" : "Light Hiking Bag",
      "brand" : "Mozone",
      "product_link" : "http://www.amazon.com/Mozone-Lightweight-Resistant-Backpack-foldable/dp/B00XCNO83M",
      "product_desc" : "A bag for serious day hikers ",
      "list_price" : 22.89,
      "offer_price" : 65.85
    },
    "3" :     {
      "product_id" : 3,
      "product_img" : "https://dl.dropbox.com/s/wyq0yuuygk8bkop/3.png",
      "product_name" : "Unisex Hiking Socks",
      "brand" : "Thorlo",
      "product_link" : "http://www.amazon.com/Thorlo-Unisex-Thorlon-Cushion-Hiking/dp/B000AHOWNY",
      "product_desc" : "Keep blisters away with a pair of good hiking socks ",
      "list_price" : 19.99,
      "offer_price" : 14.99
    },
    "4" :     {
      "product_id" : 4,
      "product_img" : "https://dl.dropbox.com/s/psgnni4khkb9w0s/4.png",
      "product_name" : "Mens Swim Suit",
      "brand" : "Speedo",
      "product_link" : "http://www.rei.com/c/mens-swimwear?r=c&ir=category%3Amens-swimwear&page=1",
      "product_desc" : "A good allaround swimsuit for hiking and swimming",
      "list_price" : 49.99,
      "offer_price" : 39.99
    },
    "5" :     {
      "product_id" : 5,
      "product_img" : "https://dl.dropbox.com/s/2qc66jrxgyqb6qm/5.png",
      "product_name" : "TYR Athletic Swim suit",
      "brand" : "TYR",
      "product_link" : "http://www.tyr.com/shop/catalog/product/view/id/14028/s/women-s-tyreco-solid-diamondfit-workout-bikini/category/18/",
      "product_desc" : "Stay cool with this fun athletic swimsuit ",
      "list_price" : 69.99,
      "offer_price" : 59.99
    },
    "6" :     {
      "product_id" : 6,
      "product_img" : "https://dl.dropbox.com/s/rlo9uqwyvlho8ui/6.png",
      "product_name" : "Banana Boat Sunscreen",
      "brand" : "Banana Boat",
      "product_link" : "http://www.bananaboat.com.au/sunscreen/sport-spf-50-200g-tube/",
      "product_desc" : "Protect your skin from the harmful rays of the sun with this 50 SPF sunscreen by Banana Boat",
      "list_price" : 14.99,
      "offer_price" : 9.99
    },
    "7" :     {
      "product_id" : 7,
      "product_img" : "https://dl.dropbox.com/s/t0eikq0kpzyuu1n/7.png",
      "product_name" : "Polarized Sunglasses",
      "brand" : "ATTCL",
      "product_link" : "http://www.amazon.com/Fashion-Driving-Polarized-Sunglasses-Unbreakable-metal/dp/B00ONIP0RS",
      "product_desc" : "Pretect your eyes as well as enjoy a new persepctive, with these polarizzed sunglasses",
      "list_price" : 85,
      "offer_price" : 70
    },
    "8" :     {
      "product_id" : 8,
      "product_img" : "https://dl.dropbox.com/s/x41a1mniz7lhydl/8.png",
      "product_name" : "Cell Phone Dry Bag",
      "brand" : "JOTO",
      "product_link" : "http://www.amazon.com/Universal-Waterproof-JOTO-Motorola-diagonal/dp/B00LBK7QBY",
      "product_desc" : "Keep all your valuables out of harms way with this Dry bag made to fit todays most popular phones ",
      "list_price" : 30,
      "offer_price" : 20
    },
    "9" :     {
      "product_id" : 9,
      "product_img" : "https://dl.dropbox.com/s/azaf1h74ls4ufpu/9.png",
      "product_name" : "Insulated Steel Bottle",
      "brand" : "Fifty/Fifty",
      "product_link" : "http://www.fiftyfiftybottles.com/40oz-bottles/",
      "product_desc" : "A bottle, insulated to keep cold things cold and hot things hot for at least 6 hours",
      "list_price" : 19,
      "offer_price" : 9
    },
    "10" :     {
      "product_id" : 10,
      "product_img" : "https://dl.dropbox.com/s/0hpwc9lilbdsots/10.png",
      "product_name" : "Strathmore Drawing Pad",
      "brand" : "Strathmore",
      "product_link" : "http://www.michaels.com/strathmore-400-series-drawing-pad/M10012263.html",
      "product_desc" : "Grab a pen or pencil and start sketching",
      "list_price" : 25,
      "offer_price" : 19.99
    },
    "11" :     {
      "product_id" : 11,
      "product_img" : "https://dl.dropbox.com/s/wazhvbmssq8n7ez/11.png",
      "product_name" : "The Da Vinci Code",
      "brand" : "Penguin Books",
      "product_link" : "http://www.penguinrandomhouse.com/books/19311/the-da-vinci-code-special-illustrated-edition-by-dan-brown/9780767926034/",
      "product_desc" : "Perfect for the person in your life who loves mystery, history and a dash of fiction",
      "list_price" : 19.99,
      "offer_price" : 10.99
    },
    "12" :     {
      "product_id" : 12,
      "product_img" : "https://dl.dropbox.com/s/9p91itux75f9iii/12.png",
      "product_name" : "Womens Walking Shoe",
      "brand" : "Merell",
      "product_link" : "http://shoefellas.com/product/merrell-womens-all-out-soar-walking-shoe-dragonfly-7-m-us/",
      "product_desc" : "While walking the Louvre dont worry about your feet, these walking shoes have you covered",
      "list_price" : 99,
      "offer_price" : 79
    },
    "13" :     {
      "product_id" : 13,
      "product_img" : "https://dl.dropbox.com/s/fec1iooas4q8e3u/13.png",
      "product_name" : "Mens Walking Shoe ",
      "brand" : "Merell ",
      "product_link" : "http://www.fitnshoes.com/MENS-Merrell-Grassbow-Air_p_326.html",
      "product_desc" : "While walking the Louvre dont worry about your feet, these walking shoes have you covered",
      "list_price" : 119,
      "offer_price" : 99
    },
    "14" :     {
      "product_id" : 14,
      "product_img" : "https://dl.dropbox.com/s/9dzi53p57zasdqj/14.png",
      "product_name" : "Cancun Travel Book ",
      "brand" : "Travel Publishing",
      "product_link" : "http://www.amazon.com/gp/product/0991809203/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0991809203&linkCode=as2&tag=cancuninsider-20",
      "product_desc" : "Be in the know, with this travel book that highlights the places to be an see in Cancun",
      "list_price" : 45,
      "offer_price" : 35
    },
    "15" :     {
      "product_id" : 15,
      "product_img" : "https://dl.dropbox.com/s/2yy9jltnyz15hpa/15.png",
      "product_name" : "Geometric Pattern Bikini",
      "brand" : "Uplure",
      "product_link" : "http://www.bluekangaroo.com/product/48542236/uplure-girl-women-halter-top-tropical-geometric-pattern-swimwear-bikini-set?th=s:sm",
      "product_desc" : "Stay classy with this cute bikini, meant for any beach, pool, or boat out there",
      "list_price" : 88,
      "offer_price" : 66
    },
    "16" :     {
      "product_id" : 16,
      "product_img" : "https://dl.dropbox.com/s/53n3d3nwn81d62g/16.png",
      "product_name" : "Men's Fanning Sandal",
      "brand" : "Reef",
      "product_link" : "https://www.surfdome.us/reef_flip_flops_-_reef_leather_fanning_flip_flops_-_white/brown-76657",
      "product_desc" : "Relaxation is key, thats why these sandals not only boast comfort, but a bottle opener",
      "list_price" : 45,
      "offer_price" : 29
    },
    "17" :     {
      "product_id" : 17,
      "product_img" : "https://dl.dropbox.com/s/wft8celsfhvzwqv/17.png",
      "product_name" : "Hawaiian Tropic Oil",
      "brand" : "Hawaiian Tropic ",
      "product_link" : "http://www.amazon.com/Hawaiian-Tropic-Dark-Tanning-Moisturizing/dp/B0031DMKVA/ref=sr_1_1_s_it?s=beauty&ie=UTF8&qid=1456526868&sr=1-1&refinements=p_n_feature_keywords_browse-bin%3A3737425011%2C7491599011",
      "product_desc" : "Trying to get a tan, add this to your regiment to get the sun kissed skin you want",
      "list_price" : 19.99,
      "offer_price" : 9.99
    },
    "18" :     {
      "product_id" : 18,
      "product_img" : "https://dl.dropbox.com/s/jvorf8hdsgr55kh/18.png",
      "product_name" : "180 Snorkeling Mask",
      "brand" : "Snorkel Hound",
      "product_link" : "http://www.amazon.com/Breathing-Snorkeling-Experience-Technology-Traditional/dp/B00ZSFDCV6/ref=pd_sim_468_2?ie=UTF8&dpID=410qEeJKgdL&dpSrc=sims&preST=_AC_UL160_SR92%2C160_&refRID=1A0M5PW07PJHRD09DA13",
      "product_desc" : "See everything with no fog in this top of the line 180 snorkeling mask",
      "list_price" : 89,
      "offer_price" : 69
    },
    "19" :     {
      "product_id" : 19,
      "product_img" : "https://dl.dropbox.com/s/mx9xeampaypxo99/19.png",
      "product_name" : "RFID Travel Money Belt",
      "brand" : "Amazon Basics",
      "product_link" : "http://www.amazon.com/AmazonBasics-RFID-Travel-Money-Belt/dp/B0160TU3HO",
      "product_desc" : "A traveling necessity. Keep valuables out of sight and out of mind",
      "list_price" : 49,
      "offer_price" : 29
    }
}

editorialData = {
  "1" :   {
    "editorial_id" : 1,
    "header_txt" : "11 races worth traveling to",
    "header_img" : "https://dl.dropbox.com/s/9tk78t8iedlc1w1/7.png",
    "author_name" : "DEAN KARNAZES",
    "author_img" : "https://dl.dropbox.com/s/1lub1wnzu2xr4bb/6.png",
    "body_txt" : "When you race as far and as frequently as Ultramarathon Man and ZOZI Guru Dean Karnazes does, you never know what you might experience. From bare-it-all Brazilians to old ladies wielding baguettes like weapons, Karnazes has seen the world and then some. (And you thought all he did was run.) Read on for 11 of Dean’s favorite marathons, ultras, and “death races,” and their individual highlights and quirks. 1. BIG SUR INTERNATIONAL MARATHON  The basics: Classic 26.2-mile marathon; 4,500 competitors Next race is April 24, 2016.  The Big Sur International Marathon each spring is so incredibly beautiful. The course runs along California’s coastline from Big Sur to Carmel on Highway 1. Motorized traffic is not allowed during the race so runners have the route all to themselves. When you drive the coastline, you're going around 45 miles an hour. You see great sites, but it all happens pretty quickly. When you take it in on foot, you just see so many new and incredible views. Bonus feature: Music. From orchestras to concert pianists to Tahitian bongo players around each corner, it's really a delightful overall experience."
  },
  "2" :   {
    "editorial_id" : 2,
    "header_txt" : "Another day: Gurus reveal their favorite destinations",
    "header_img" : "https://dl.dropbox.com/s/61wrvw7skqwpgai/2.png",
    "author_name" : "KIRSTEN AKENS",
    "author_img" : "https://dl.dropbox.com/s/780vgm6m4f6gqvg/1.png",
    "body_txt" : "Our ZOZI Gurus have explored the world from Antarctica to the Sahara. But when we asked Dean Karnazes, Jonny Moseley, Chris Lieto, and Tao Berman for their favorite travel destinations, they all said they loved their hometown the most. When home is Kona, Hawaii, or California’s Lake Tahoe area, it’s easy to see why. If you’re looking for an escape from your day-to-day life, you might want to vacation where they live. Read on to find out what to do and see in our Gurus’ backyards.  ... THE WEATHER’S WONDERFUL, THERE’S BLUE SKY, NO CROWDS, AND AMAZINGLY CLEAR WATER.”—CHRIS LIETO  Ironman Champion Chris Lieto says living in Kona, Hawaii, is like being on a permanent vacation. “How lucky I am to be in this spot, where the weather’s wonderful, there’s blue sky, no crowds, and amazingly clear water.” Part of Kona’s appeal for Chris is its essence, what he describes as a spirit of relaxation. Of course that doesn’t mean there aren’t a ton of activities to enjoy and land to explore. From snorkeling and diving, to rainforest hiking in the Honua’ula Forest Reserve and swimming with dolphins in Kona Town, Chris does them all, and then some. Visits to the other islands are just a quick flight away, and Chris recommends dropping in on them as well."
  },
  "3" :   {
    "editorial_id" : 3,
    "header_txt" : "Michael Mina's favorite warm up",
    "header_img" : "https://dl.dropbox.com/s/y35sa7808mm1fzg/2.png",
    "author_name" : "MICHAEL MINA",
    "author_img" : "https://dl.dropbox.com/s/dyurrydby69mjty/1.png",
    "body_txt" : "For Christmas Eve dinner my mother-in-law, Judith Tirado, always prepared cioppino—the San Francisco seafood stew that owes its origins to fishermen from Italy's Ligurian coast. She'd spend the entire day infusing the broth with basil and tomatoes. The whole house would smell amazing. Though she’s no longer here with us, we carry on the tradition by making her hearty, briny recipe, full of crab, shrimp, and clams. It’s exactly the kind of dish I’d want to come home to after a long, exciting day outside in the winter—hearty, but not heavy.  JUDITH'S DUNGENESS CRAB CIOPPINO  INGREDIENTS  3/4 cup extra-virgin olive oil 8 large garlic cloves—6 finely chopped, 2 whole 3 jalapeños, seeded and minced 2 red bell peppers, finely chopped 1 large onion, finely chopped 1 large bay leaf 2 tablespoons tomato paste 1/2 cup dry red wine One 28-ounce can peeled tomatoes, finely chopped, juices reserved Four 8-ounce bottles clam broth 1 1/2 cups water Salt and freshly ground pepper 1/2 cup packed basil leaves 1/2 teaspoon crushed red pepper 4 steamed Dungeness crabs, about 2 pounds each (see Note) 2 dozen littleneck clams, scrubbed 2 pounds firm, white-fleshed fish fillets such as halibut, skinned and cut into 1 1/2-inch chunks 2 pounds large shrimp, shelled and deveined 2 pounds mussels, scrubbed 1 pound sea scallops, halved vertically if large Crusty bread, for serving "
  },
  "4" :   {
    "editorial_id" : 4,
    "header_txt" : "Tips on swimming to Alcatraz",
    "header_img" : "https://dl.dropbox.com/s/rc3taljo6n93ze6/2.png",
    "author_name" : "CHRIS LIETO",
    "author_img" : "https://dl.dropbox.com/s/xhptkowqtboe9cr/1.png",
    "body_txt" : "Seven prisoners are presumed to have drowned while trying to escape Alcatraz Island. Today, people swim the stretch of frigid, shark-infested water for fun in races like the annual Sharkfest Swim and the Escape From Alcatraz Triathlon. One of those swimmers is ZOZI Guru Chris Lieto. Not only did the Ironman Champion survive the swim—it’s what launched his career as a triathlete. Read on to find out how he did it.  I had been living in the Huntington Beach/Newport Beach area and surfing a lot. We moved back to Northern California and in order to keep surfing, I had to drive from Lafayette to Santa Cruz. It was a long drive.  As I was looking for a different outlet to keep myself active, I heard about a race that went from the island of Alcatraz to San Francisco. I thought it sounded like a good challenge, and a lot of fun. Swimming wasn’t new to me—I grew up in the water, and played water polo in college—so I went to a local pool and joined a swim team to prepare.  A few of us on the team wanted to do the Alcatraz race, but we decided if we were going to do the swim, we wanted to race it old-school. It had always been said that even if a prisoner escaped the jail, he would still have to survive three things: swimming the challenging waters, avoiding the sharks, and managing the extreme cold of the bay.  Triathlon swimmer in the San Francisco Bay from Alcatraz Eugene Huxley I figured I could manage the rough waters and the marine life, so what going “old-school” really meant to me was doing without a wetsuit.  Of course, swimming without meant I was going to be really cold when I stepped out of the water. I had this great idea of boiling water and filling a bunch of five-gallon jugs that my wife could bring to pour over my head once I was finished. Problem solved.  I rose early. Boiled my water. Filled my jugs. We packed them up and drove to the race.  Racers have to take a boat to the start, and while we were cruising along, I was looking around at the group. Out of 400, only eight people weren’t wearing wetsuits."
  },
  "5" :   {
    "editorial_id" : 5,
    "header_txt" : "Chris Lieto runs alot",
    "header_img" : "https://dl.dropbox.com/s/edol169oxurhf7e/2.png",
    "author_name" : "APRIL KILCREASE",
    "author_img" : "https://dl.dropbox.com/s/qbalqmydwfxkztt/1.png",
    "body_txt" : "In 1997, ZOZI Guru Chris Lieto set a goal. The then 25-year-old wanted to be a Ironman triathlete, but he knew that turning pro wasn’t going to be enough for him. He wanted to be the best. In most people’s eyes, I set a goal that was crazy lofty, totally unachievable, and ridiculous,” says Lieto. “Friends and family ridiculed me and told me not to waste my time.   Far from letting that stop him, Lieto went on to win 50-plus triathlons, including more than 10 Ironman events and two U.S. Ironman Championships. He also placed among the top 10 at the Ironman World Championship in Hawaii three times, finishing with a career best of second place in 2009. Here, the triple-threat athlete slows down to talk about how he turned one heck of a career goal into a reality.  HAVE YOU ALWAYS BEEN SO FIT?  I played water polo in high school and college. In high school, I went out for cross country, because my older brother was on the team. After the first day of practice, I swore I’d never run again. The feeling of being unfit and running is the most painful, frustrating experience. You feel weak, you feel slow, you feel awkward, and it’s no fun.   AS A PROFESSIONAL IRONMAN TRIATHLETE, YOU HAD TO REGULARLY RUN MARATHON DISTANCES. WHAT GOT YOU TO TRY RUNNING AGAIN?  It wasn’t until I was 25 years old that I started running. My wife and I had recently moved back to the Bay Area, and I was looking for something to do. Since my background was in swimming, I decided to do the swim from Alcatraz to San Francisco as a challenge. While pursuing that goal, I met some professional triathletes. I looked at the lifestyle that they had, and I thought, that looks like fun"
  }
}

function getTripData(tripID) {
  return tripData[tripID];
}

function getEditorialData(editorialID) {
  return editorialData[editorialID];
}

function createPersonalizedWrap() {
    var selectedTripID = $("#trip").find(':selected').data('id');
    var tripData = getTripData(selectedTripID);
    var passName = $("#passenger_name").val();
    var phoneNumber = $("#passenger_phone").val();
    var tripTitle = $("#trip").val();

    if (passName.length < 1 || phoneNumber.length < 1) {
      $("#controller").prepend('<div class="growl growl-static"> <div class="alert alert-dark alert-dismissable" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">×</span> </button>  Name and Phone Number are required fields. </div> </div>');
      return;
    }

    var hash = {};
    hash[templateWrap.cards[0].id] = {
        "passenger":      $("#passenger_name").val(),
        "departure_date": $("#departure_date").val(),
        "trip_title" :    $("#trip").val(),
        "row":            randomRow(),
        "seat":           randomSeat(),
        "gate":           randomGate(),
        "barcode_img":    randomBarcode(),
        "trip_img" :      tripData["trip_img"],
    	"background_img": tripData["background_img"],
    };
    hash[templateWrap.cards[1].id] = tripData;
    hash[templateWrap.cards[2].id] = {
      "products":
        [ productData[$("#product1").find(':selected').data('id')],
          productData[$("#product2").find(':selected').data('id')],
          productData[$("#product3").find(':selected').data('id')]
        ]
    };
    hash[templateWrap.cards[3].id] = getEditorialData($("#story").find(':selected').data('id'));
    hash[templateWrap.cards[4].id] = {
      "trips": [
        getTripData($("#trip_offer_1").find(':selected').data('id')),
        getTripData($("#trip_offer_2").find(':selected').data('id')),
        getTripData($("#trip_offer_3").find(':selected').data('id'))
      ]
    }
    body = {};
    var tags = "Tags, go, here"
    body.tags = tags;
    body.personalized_json = hash;

    console.log("Sending HASH: ", body)
    
    wrapclient.wraps.createPersonalized(templateWrap.id, body)
    .then(function(newWrap) {
        lastPersonalizedWrap = newWrap;
        $("#generated_wraps").removeClass("hidden");
        var shareBody =  {"type": 'sms', "phone_number":phoneNumber, "body":sharingMessage};

        wrapclient.wraps.share(newWrap.id, shareBody)
        $("#generated_wrap_list").append('<li class="list-group-item"> <div class="media"> <a class="media-left" href="#"> <img class="media-object img-circle" src="assets/img/model-0' + _.sample(_.range(10, 50)) + '.png"> </a> <div class="media-body"> <a target="_blank" href="' + newWrap.canonicalUrl + '"> <button class="btn btn-primary-outline btn-sm pull-right"> <span class="icon icon-aircraft"></span> View </button> </a> <strong id="passenger_name">' + passName + '</strong><br><small id="trip">'+tripTitle+'</small> </div> </div> </li>');
        console.log(newWrap);
        console.log(newWrap.canonicalUrl);
    })
    .catch(function(error) {
        //Show error to user
        console.log("Problem Personalizing", error);
    })
}

function randomRow() {
    return _.sample(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"])
}

function randomSeat() {
    //Between 10-70
    return _.sample(_.range(10, 70));
}

function randomGate() {
    var seat = randomSeat();
    var row = randomRow();
    return (seat + row);
}

function randomBarcode() {
    var urlFirst = "https://dl.dropboxusercontent.com/u/8626776/receipt/barcode";
    var endJpg = ".jpg";
    var strNum = _.sample(_.range(1, 10));
    return urlFirst + strNum + endJpg
}

function tripSelectionChange() {
    var selectedTripID = $("#trip").find(':selected').data('id');
    //Update the image.
    $("#trip_preview_img").attr("src", "images/trips/" + selectedTripID + ".jpg");
}

function tripOfferSelectionChange(offerID) {
    var productID = $("#trip_offer_" + offerID).find(':selected').data('id');
    //Update the image.
    $("#trip_offer_img" + offerID).attr("src", "images/trips/" + productID + ".jpg");
}

function productSelectionChange(productSelectorID) {
    var productID = $("#product" + productSelectorID).find(':selected').data('id');
    //Update the image.
    $("#product_preview_img" + productSelectorID).attr("src", "images/products/" + productID + ".jpg");
}

function storySelectionChange() {
    var storyID = $("#story").find(':selected').data('id');
    //Update the image.
    $("#story_preview_img").attr("src", "images/editorials/" + storyID + ".jpg");
}


function hideLoginForm() {
    //Hide the login form as you're now authorized
    $("#login_panel").fadeOut(750, function() {
        $("#controller").fadeIn(500);
        $("#side_bar").fadeIn(500);
    })

    /* Discover the correct template wrap to use. 
        This could be hardcoded to a templateID, but discovery allows 
        for any account to use this, if they have a wrap named as the var "templateWrapName" 
        (defined at top of main.js)
    */

    wrapclient.wraps.list({"tag":"Wander"})
    .then(function(wrapArray){
      var foundTemplateWrap = false;
      wrapArray.forEach(function(element, array, index) {
        if (element.name == templateWrapName) {
          foundTemplateWrap = true;
          wrapclient.wraps.get(element.id)
          .then(function(returnedWrap) {
            templateWrap = returnedWrap;
          })
          .catch(function(error) {
            console.log("Problem Getting Template Wrap", error);
          });
        }
      })
      if (!foundTemplateWrap) {
        var msg = "This account is missing the <strong>" + templateWrapName + "</strong> wrap which is needed to demonstrate this workflow. Please <a href='index.html'>login</a> with a different account.";
        console.log(msg);
        $("#searchform").append('<div class="growl growl-static" style="margin-top:12px;"> <div class="alert alert-dark alert-dismissable" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">×</span> </button>' + msg + '</div> </div>');
        $('#side_bar').hide();
      }
    })
    .catch(function(error) {
      console.log("Problem listing wraps?", error);
    });
    //
}

function connectLoginForm() {
    $('#signup_btn').click(function() {
        window.location.href = 'https://www.wrap.co';
        return false;
    })

    $("#login_btn").on("click", function() {
      hideLoginForm();
      return false;
    })

}

function checkForCompletion() {
    var filledOut = false;

    var val1 = $('#passenger_name').val().length;
    var val2 = $('#passenger_email').val().length;
    var val3 = $('#passenger_phone').val().length;
    var val4 = $('#departure_date').val().length;

    if (val1 > 0 && val2 > 0 && val3 > 0 && val4 > 0) {
        filledOut = true;
    }

    //Check that all needed fields are selected. If so enable the remaing controls. 
    if (filledOut) {
        $('#send_wrap_text').removeClass("disabled");
        $('#send_wrap_email').removeClass("disabled");

        $('#step_1').removeClass("alert-warning");
        $('#step_1').addClass("alert-success");
    } else {
        $('#send_wrap_text').addClass("disabled");
        $('#send_wrap_email').addClass("disabled");

        $('#step_1').addClass("alert-warning");
        $('#step_1').removeClass("alert-success");
    }
}

$(function() {
    // jQuery .ready() function

    //hide panels
    $('#side_bar').hide();
    $('#controller').hide();

    connectLoginForm();
    $('#step_1_form').on("change", function() {
        checkForCompletion();
    });

    $('#trip_date').on("change", function() {
        checkForCompletion();
    });

    $('#trip').on("change", function() {
        tripSelectionChange();
    });
    $('#product1').on("change", function() {
        productSelectionChange(1);
    });
      $('#product2').on("change", function() {
          productSelectionChange(2);
      });
      $('#product3').on("change", function() {
          productSelectionChange(3);
      });

    $('#trip_offer_1').on("change", function() {
        tripOfferSelectionChange(1);
    });
      $('#trip_offer_2').on("change", function() {
          tripOfferSelectionChange(2);
      });
      $('#trip_offer_3').on("change", function() {
          tripOfferSelectionChange(3);
      });    
    
    $('#story').on("change", function() {
        storySelectionChange();
    });
    $('#datetimepicker1').datetimepicker({
        format: 'll'
    });
    $("#send_wrap_text").on("click", function() {
        createPersonalizedWrap();
        return false;
    })
});
