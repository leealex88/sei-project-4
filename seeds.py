from app import app, db
from models.qplace import Qplace, Comment
from models.user import UserSchema
from models.type import Type

user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

    # Users ======================================

    ola, errors = user_schema.load({
    'username': 'olas',
    'email': 'ola@email',
    'password': 'pass',
    'password_confirmation': 'pass'
    })

    db.session.add_all([
        ola
    ])

    # Place Types ======================================

    library = Type(
        name='Library'
    )

    coffee_shop = Type(
        name='Coffee Shop'
    )

    work_space = Type(
        name='Work Space'
    )

    coffee_more = Type(
        name='Coffee&More'
    )



    db.session.add_all([
        library,
        coffee_shop,
        work_space,
        coffee_more,
    ])



    Timberyard = Qplace(
    name='Timberyard',
    type=work_space,
    image='https://media.timeout.com/images/101489917/630/472/image.jpg',
    bio='Ty offers a dynamic, independent creative public workspace fused with speciality tea, coffee and high-quality food. A challenge to the traditional coffee shop, we are an exciting environment that aims to provide products and services that are conductive to the evolving needs of life in London.',
    website='https://www.tyuk.com/',
    lat=51.5129,
    lng=-0.1274,
    creator=ola,
    buildingNumber= 7,
    street= 'Upper St Martin\'s Ln',
    city='London',
    postcode='WC2H 9D'

    )

    Ace = Qplace(
    name='Ace Hotel Shoreditch',
    type=work_space,
    image='https://d2a2nuxd7hhwtm.cloudfront.net/media/images/LDN-Food_and_Drink-Lobby_Bar-Gallery_1.width-960.jpg',
    bio='The place to congregate, socialize, work or wind down. We love a lobby. Ace Hotel London Shoreditch gave us another great chance to build a versatile social hub — a place to work, relax or wheel and deal 24 hours a day. We\'ve divided the space up into an open series of room-like zones — partitions made up of furniture arrangements and a series of full-height Crittall glass and steel screens, so you can tuck yourself away while still staying a healthy part of the hive.',
    website='https://www.acehotel.com/london/events-and-spaces/public-spaces-hotel-shoreditch/',
    lat=51.525719,
    lng=-0.077353,
    creator=ola,
    buildingNumber= 100,
    street= 'Shoreditch High St',
    city='London',
    postcode='E1 6JQ'
    )

    Forge = Qplace(
    name='Forge & CO',
    type=work_space,
    image='https://resizer.otstatic.com/v2/photos/huge/24090101.jpg',
    bio='Forge & Co provides ‘social working’ spaces for an always-on culture. We offer all-day, high-quality casual dining, public lounge areas, and cowork environments welcoming all vocations from our flagship site on Shoreditch High Street.',
    website='http://forgeandco.co.uk/',
    lat=51.5254139,
    lng=-0.0778167,
    creator=ola,
    buildingNumber= 24,
    street= 'Cornhill',
    city='London',
    postcode='EC3V 3ND'
    )

    EggBreak = Qplace(
    name='Egg Break',
    type=coffee_more,
    image='https://media-cdn.tripadvisor.com/media/photo-s/09/15/bf/ae/egg-break.jpg',
    bio='With a menu (and Wi-Fi) that is just as impressive as Soho House\'s, the Notting Hill based eatery has all the perks and none of the people, which makes it perfection. Only danger is their food truly is delish so you may end up accidently having breakfast, lunch and dinner while you\'re sat there.',
    website='http://www.eggbreak.com/',
    lat=51.508318,
    lng=-0.197952,
    creator=ola,
    buildingNumber= 30,
    street= 'Uxbridge St',
    city='London',
    postcode='W8 7TA'
    )

    Ridinghouse = Qplace(
    name='Riding House Cafe',
    type=coffee_more,
    image='https://ridinghouse.cafe/app/uploads/2017/01/RHC-PWF-0061-1-2000x0-c-default.jpg',
    bio='Just off Great Titchfield Street near Oxford Circus, The Riding House Café is an awesome place to work from if you\'re in central. Serving up some seriously delicious eggs with a side of free Wi-Fi, the place itself is also quite nice and bright because there are so many windows. This definitely helps with the cabin fever.',
    website='https://ridinghouse.cafe/',
    lat=51.518351,
    lng=-0.140723,
    creator=ola,
    buildingNumber= 43-51,
    street= 'Great Titchfield St',
    city='London',
    postcode='W1W 7PQ'
    )

    GoogleCampus = Qplace(
    name='Google Campus',
    type=work_space,
    image='https://www.marketme.co.uk/wp-content/uploads/2018/10/googlecampus.jpg',
    bio='Based in East London, you can register for free to use Google\'s Campus, which has an entire floor dedicated to free working space. Open every day until 6pm, the facilities offer up plenty of room and free Wi-Fi, plus it\'s filled with like-minded people – always good to have people on the same page as you to talk you down when you want to stab yourself with a bread knife. It\'s great for networking, too, as you never know who you\'ll meet. They also host a mind-boggling number of events each week on everything from the future of the retail industry to help for startups.',
    website='https://www.campus.co/london/en/faq/',
    lat=51.522586,
    lng=-0.08537,
    creator=ola,
    buildingNumber= 4-5,
    street= 'Bonhill St',
    city='London',
    postcode='EC2A 4BX'
    )

    JoeTheJuice = Qplace(
    name='Joe & the Juice',
    type=coffee_more,
    image='http://modellist-id.com/wp-content/uploads/2016/07/IMG_8390-e1469529036871.jpg',
    bio='There are a whole bunch of these around London, with cozy seating, free Wi-Fi and a delicious menu of coffees, juices and sandwiches.',
    website='https://www.joejuice.com/stores',
    lat=51.507906,
    lng=-0.142705,
    creator=ola,
    buildingNumber= 8,
    street= 'Berkeley St',
    city='London',
    postcode='W1J 8DN'
    )

    HoxtonHotel = Qplace(
    name='Hoxton Hotel',
    type=coffee_more,
    image='https://thehoxton.azureedge.net/media/8321/1_hoxton_williamsburg_11018.jpg',
    bio='This must be said for working from a hotel= no one will ever give you a dirty look when you feel like you must surely have overstayed your welcome. The Hoxton has super cool interiors with a multitude of rooms for you to tuck yourself away into. The trick though, is to get one of the sofa / chairs next to the main window as that\'s where most of the power sockets are. There\'s nothing worse than an ailing Macbook battery and no sockets in sight mid-deadline.',
    website='https://thehoxton.com/',
    lat=51.525357,
    lng=-0.082688,
    creator=ola,
    buildingNumber= 81,
    street= 'Great Eastern St',
    city='London',
    postcode='EC2A 3HU'
    )

    TheBritishLibrary = Qplace(
    name='The British Library',
    type=library,
    image='https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2011/06/BritishLibrary.jpg',
    bio='And if none of these are quite enough to make you feel like you\'re really, really working, The British Library in Kings Cross is great, provided you can get there early enough to bag one of the winning armchair seats which come complete with its own mini-table and plug socket. If you don\'t manage, there are obviously other places to work from in the vicinity too, although those are by far the best. You can sign up for free to use the reading rooms should you have loads of research to do, plus there\'s an awesome Peyton and Byrne café and restaurant with some delish food.',
    website='https://thehoxton.com/',
    lat=51.529985,
    lng=-0.127014,
    creator=ola,
    buildingNumber= 96,
    street= 'Euston Rd',
    city='London',
    postcode='NW1 2DB'
    )

    TheLondonLibrary = Qplace(
    name='The London Library',
    type=library,
    image='https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2015/10/Reading-Room-Philip-Vile-VIL_7743_100pc.jpg',
    bio='As the name might suggest, if you are looking for books, The London Library wouldn’t be a bad place to start. With a collection of over one million books and anyone eligible for membership, The London Library takes pride in its position amongst the elite of literary institutions in the capital, providing intellectual support some of the great minds of British culture since 1841. If a full membership doesn’t take your fancy, there are free evening tours of the library happening regularly throughout the year',
    website='https://www.londonlibrary.co.uk/',
    lat=51.506691,
    lng=-0.134990,
    creator=ola,
    buildingNumber= 14,
    street= 'St James\'s Square',
    city='London',
    postcode='SW1Y 4LG'
    )


    GuildhallLibrary = Qplace(
    name='Guildhall Library',
    type=library,
    image='https://cdn.londonandpartners.com/asset/0045f69eafb8c17a8544e38055637975.jpg',
    bio='The Victoria and Albert Museum has always been at the forefront of thought in art and design. The National Art Library supports this ambition and provides access to collections which are central to the V&A mission, including extensive research on topics like drawing, painting, sculpture, fashion, textiles and woodwork. The workspace in the National Art Library is among the most spectacular in London and should you feel peckish, tea at the V&A café is renowned for good reason.',
    website='http://www.guildhall.cityoflondon.gov.uk/',
    lat=51.516281,
    lng=-0.092910,
    creator=ola,
    buildingNumber= 2,
    street= 'Aldermanbury',
    city='London',
    postcode='EC2V 7HH'
    )
    TheBFIReubenLibrary = Qplace(
    name='The BFI Reuben Library',
    type=library,
    image='https://img.theculturetrip.com/768x512/smart/wp-content/uploads/2018/03/bfi-reuben-library-3.jpg',
    bio='With a mission statement to provide a ‘comprehensive coverage of the moving image in Britain’ The BFI Reuben Library and its textual, film and digital collections also remains international in its scope. The staff at the Reuben Library stand out for being especially helpful and attentive to researchers, able to assist large groups or individuals who choose to work in the excellently equipped Edwin Fox Foundation Reading Room.',
    website='https://www.bfi.org.uk/education-research/bfi-reuben-library',
    lat=51.503830,
    lng=-0.117180,
    creator=ola,
    buildingNumber= 1,
    street= 'Belvedere Rd',
    city='London',
    postcode='SE1 8XT'
    )

# Qplaces

    db.session.add_all([
        Timberyard,
        Ace,
        Forge,
        EggBreak,
        Ridinghouse,
        GoogleCampus,
        JoeTheJuice,
        HoxtonHotel,
        TheBritishLibrary,
        TheLondonLibrary,
        GuildhallLibrary,
        TheBFIReubenLibrary
    ])

# Comments

    # comment_one = Comment(
    # content="no no no",
    # qplace=CanadaWaterLibrary
    # )
    #
    # db.session.add_all([
    #     comment_one
    # ])



    db.session.commit()
