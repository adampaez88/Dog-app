# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Breed.destroy_all 

Breed.create(breed: 'Akita', 
            info: 'https://www.akc.org/dog-breeds/akita/', 
            image_url: 'http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001904/Akita-On-White-01.jpg',
            description: 'small'
        )
Breed.create(breed: 'Shiba-Inu', 
            info: 'https://www.akc.org/dog-breeds/shiba-inu/', 
            image_url: 'https://i.pinimg.com/originals/1a/ac/af/1aacaff36d04df6b1d189c6f22b4ceb9.jpg',
            description: 'small'
        )
Breed.create(breed: 'Blue Heeler/Australian Cattle Dog', 
            info: 'https://www.akc.org/dog-breeds/australian-cattle-dog/', 
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfl_vVQAd0pwR8xDm5NLYqPJCvS9SCWDzi_4UrDEHiUXkEhlJ&s',
            description: 'small'
        )
Breed.create(breed: 'Golden Retriever', 
            info: 'https://www.akc.org/dog-breeds/golden-retriever/', 
            image_url: 'https://files.slack.com/files-pri/T02MD9XTF-FR8GXG086/fullsizeoutput_249d.jpeg',
            description: 'small'
        )
Breed.create(breed: 'Pitbull', 
            info: 'https://americanbullydaily.com/pitbull-dogs-guide/', 
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDzRYhVMbj38g680HGEpXW_zTJhpe0riaFFUfsH51WBonbKAMPQ&s',
            description: 'small'
        )
Breed.create(breed: 'German Shepard', 
            info: 'https://www.akc.org/dog-breeds/german-shepherd-dog/', 
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAi4wYsAuuoH_XZtLleBgDY5si2WhbuGWojHwsml4WUg4u1EQa&s',
            description: 'small'
        )
Breed.create(breed: 'Rottweiler', 
            info: 'https://www.akc.org/dog-breeds/rottweiler/', 
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsbKSmvcJSDstfNHmYXJobe4GhqBMY-ZgN849PmMUaT6D55fC3&s',
            description: 'small'
        )
Breed.create(breed: 'Chihuahua', 
            info: 'https://www.akc.org/dog-breeds/chihuahua/', 
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_VLkbK-jSZD3v1OJ_r3CaKv_OP-cZKfXY84FFN9-0GgzttkFuQ&s',
            description: 'small'
        )
Breed.create(breed: 'French Bulldog', 
            info: 'https://www.akc.org/dog-breeds/french-bulldog/', 
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2VL6T-p4gyboPldGDbw9zm68o8aITeP2AHE2o_uTgd3AN8hAeOA&s',
            description: 'small'
        )
Breed.create(breed: 'Bulldog', 
            info: 'https://www.akc.org/dog-breeds/bulldog/', 
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPEXyo8qmFmUVyh6ISgTT6AJ1Yswm93KQzVKtHitFjRDN5G2pZw&s',
            description: 'small'
        )
Breed.create(breed: 'Beagle', 
            info: 'https://www.akc.org/dog-breeds/beagle/', 
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RG41NwdAqXRgZyMFoFvPc8iqFhxr_aRksVn6TmyQ0ZH1MLRj&s',
            description: 'small'
        )
Breed.create(breed: 'Labrador Retriever', 
            info: 'https://www.akc.org/dog-breeds/labrador-retriever/', 
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfAMG5eJtnyr9Ao_UlfjReWBcKqkeL84KQBHvU2uHaPFMvCu2XBA&s',
            description: 'small'
        )
Breed.create(breed: 'Cane Corso', 
            info: 'https://www.akc.org/dog-breeds/cane-corso/', 
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx9avQONUKriFYaqJHzydxHPFaVcvwHJuFLZIIEMmay-gLIc9uow&s',
            description: 'small'
        )
Breed.create(breed: 'Saint Bernard', 
            info: 'https://www.akc.org/dog-breeds/st-bernard/', 
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQulzgeKTSq1nFrZfSG9rOcXo-vGITwxf58k75izIHbfcwUmLtV&s',
            description: 'small'
        )

Breed.create(breed: 'Mastiff',
            info: 'https://www.akc.org/dog-breeds/mastiff/',
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxU2_d3hbX5N70yn2F_FT2prcDz5dpkD3Vf2H6FGegA1qHQr60&s',
            description: 'small'
        )
Breed.create(breed: 'Great Dane',
            info: 'https://www.akc.org/dog-breeds/great-dane/',
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdbvqXf5VDsDZArFT3SfUZPyB95v040MU9jb6XgK1ijlAbpUZhQ&s',
            description: 'small'
        )
