from app.models import db, Media, environment, SCHEMA


def seed_medias():
  objects = [
    Media(user_id = 1, post_id = 1, media_file = "https://static01.nyt.com/images/2022/07/26/business/26economy-briefing-jenner-teigen/merlin_168565467_0688f920-db52-42e1-b0af-5e085acaa2da-articleLarge.jpg?quality=75&auto=webp&disable=upscale", type = "image"),
    Media(user_id = 1, post_id = 2, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyifO7OVhrCW0unY7LFlppci95stI-QXIUJxDkex8yaxXxx8gLIgaUD7Qn9fDkf6LZm6A&usqp=CAU", type = "image"),
    Media(user_id = 1, post_id = 3, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfp8j0M7UvY-UB2IH0fRxGAB695cdd8lm70Q&usqp=CAU", type = "image"),
    Media(user_id = 1, post_id = 4, media_file = "https://ichef.bbci.co.uk/news/976/cpsprodpb/2F25/production/_122696021_gettyimages-1233053858.jpg", type = "image"),
    Media(user_id = 1, post_id = 5, media_file = "https://ichef.bbci.co.uk/news/640/cpsprodpb/12269/production/_121454347_dani.jpg", type = "image"),
    Media(user_id = 1, post_id = 6, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBW6W_sKaJ5Jp_O582lKN6U-9uUi6GW-9Ho5HOnqdyy6LmcBM11DBiOMAUCXhB-jL6iw&usqp=CAU", type = "image"),
    Media(user_id = 1, post_id = 7, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6GgKe-OIJhrAb_2fjqmbNYlGeMkT6-5Y13_EjgLrj8-SAdmoyqbyHlASwEJlHhvp38k&usqp=CAU", type = "image"),
    Media(user_id = 1, post_id = 8, media_file = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQGexK0URsmca8-Ccc4o0NpJ9VwbWjmc0n0tpv7yu2vjFar1sUApE-XaMdbFP6eHpozGj7ANr_jLM8o0YCmW9rsm09BLTo4iqfevNx8zexzSIqZKt8VXR2-CtZ9FbL8QX5ggthLM2gQT01Mh9SO9ie_ruAqBZS0NJrDYPsltVKL4fCDKQn5LiLp4aK/s999/Captions-for-Instagram-posts.jpg", type = "image"),
    Media(user_id = 1, post_id = 9, media_file = "https://hips.hearstapps.com/hmg-prod/images/gigi-zayn-1523106915.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*", type = "image"),
    Media(user_id = 1, post_id = 10, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ391_fx6_RW5GAz7-Zd3TJZVcC7-EIXXcBRQ&usqp=CAU", type = "image"),
    Media(user_id = 1, post_id = 11, media_file = "https://media.npr.org/assets/img/2022/10/09/gettyimages-1243694046_wide-fd46c8cb8ca1da55a8efbaa0b4dd6e9e5de98e48-s1100-c50.jpg", type = "image"),
    Media(user_id = 1, post_id = 12, media_file = "https://assets.vogue.com/photos/5891fe15b4a4bd466012b92c/1:1/w_640,h_640,c_limit/02-hayley-bloomingdale-instagram-rules.jpg", type = "image"),
    Media(user_id = 1, post_id = 13, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGU26kpf4bTEQBhuXW0X8O1gzUJ50Ypu1RA&usqp=CAU", type = "image"),
    Media(user_id = 1, post_id = 14, media_file = "https://www.plannthat.com/wp-content/uploads/2018/07/create-viral-instagram-content.jpeg", type = "image"),
    Media(user_id = 1, post_id = 15, media_file = "https://create.vista.com/s3-static/elements/upload_3.webp", type = "image"),
    Media(user_id = 1, post_id = 16, media_file = "https://www.cheatsheet.com/wp-content/uploads/2020/03/Untitled-design-2020-03-04T132401.993.jpg", type = "image"),
    Media(user_id = 1, post_id = 17, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV8IgAnf2WFdwe2xTGEbBcCtTyQBsITekBDNYoE-kxL55cHtY-UkA5iCYp-T63fqzT4Bo&usqp=CAU", type = "image"),
    Media(user_id = 1, post_id = 18, media_file = "https://media.vogue.fr/photos/5c939dc108858f0493e2e83f/2:3/w_2560%2Cc_limit/GettyImages-1030119388.jpg", type = "image"),
    Media(user_id = 1, post_id = 19, media_file = "https://variety.com/wp-content/uploads/2022/07/Kim-Kardashian-Kylie-Jenner-Instagram.jpg", type = "image"),
    Media(user_id = 2, post_id = 20, media_file = "https://www.oberlo.com/media/1603957801-image22-1.jpg?w=1824&fit=max", type = "image"),
    Media(user_id = 2, post_id = 21, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRojn0KYFVgDkJbLt9DAkdX89ajdBHRL3eSfA&usqp=CAU", type = "image"),
    Media(user_id = 2, post_id = 22, media_file = "https://www.connectsafely.org/wp-content/uploads/2021/10/teens-selfie--scaled.jpg", type = "image"),
    Media(user_id = 2, post_id = 23, media_file = "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80", type = "image"),
    Media(user_id = 2, post_id = 24, media_file = "https://parade.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc2MDAxNjMzMDM1Mzg5/travel-instagram-captions.jpg", type = "image"),
    Media(user_id = 2, post_id = 25, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOsZMvnWZ_UhM8LNU-_l45F1QKN0lD3koLg&usqp=CAU", type = "image"),
    Media(user_id = 2, post_id = 26, media_file = "https://hips.hearstapps.com/vidthumb/images/gettyimages-1654264714.jpg?crop=1.00xw:0.846xh;0,0.0697xh", type = "image"),
    Media(user_id = 2, post_id = 27, media_file = "https://www.hubspot.com/hubfs/how-to-post-to-instagram-from-your-computer.jpeg", type = "image"),
    Media(user_id = 2, post_id = 28, media_file = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Kylie_Jenner_Vogue.png/172px-Kylie_Jenner_Vogue.png", type = "image"),
    Media(user_id = 2, post_id = 29, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxoYIzctdrPndG_28WMRIADfy5VMhhBf9Zg&usqp=CAU", type = "image"),
    Media(user_id = 2, post_id = 30, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMqRE8xR2qIYm13OggmxhoYSENaQlVKnFkw&usqp=CAU", type = "image"),
    Media(user_id = 2, post_id = 31, media_file = "https://www.adobe.com/express/discover/sizes/media_1a7cad854c40c48c0b5f7bf3a8b4559292ed474bc.png?width=400&format=png&optimize=medium", type = "image"),
    Media(user_id = 2, post_id = 32, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbvfc3CKSvNzYGm4-zrk-l2L4Sc0I2cmf4w&usqp=CAU", type = "image"),
    Media(user_id = 2, post_id = 33, media_file = "https://blog.hootsuite.com/wp-content/uploads/2021/04/Instagram-for-business-02-1.png", type = "image"),
    Media(user_id = 2, post_id = 34, media_file = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/KhabyLame.jpg/159px-KhabyLame.jpg", type = "image"),
    Media(user_id = 2, post_id = 35, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUwDzMAgx8zlKFVlA9a4TWYoiHQ3tM7kwEQ&usqp=CAU", type = "image"),
    Media(user_id = 2, post_id = 36, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngk6Lj_bsYm5bsQxTjVG2K40ALCGavCxltg&usqp=CAU", type = "image"),
    Media(user_id = 2, post_id = 37, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9viH_FxPlJG5thYLAd7BNh6l_R7SPGOECxuqApe2oBezry7jbs4XnxcweKBOMbUdjl78&usqp=CAU", type = "image"),
    Media(user_id = 2, post_id = 38, media_file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcuLRjHF36GbLlUIqYU1BFCmLf06OwdyQ7mNo8wNXpHozLXvSSbFsVWSxQKDK3d0OF6zk&usqp=CAU", type = "image"),
    Media(user_id = 3, post_id = 39, media_file = "https://www.travelalaska.com/sites/default/files/2022-01/Haida-GlacierBay-GettyImages-1147753605.jpg", type = "image"),
    Media(user_id = 3, post_id = 40, media_file = "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1145794687.jpg", type = "image"),
    Media(user_id = 3, post_id = 41, media_file = "https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg", type = "image"),
    Media(user_id = 3, post_id = 42, media_file = "https://www.state.gov/wp-content/uploads/2018/11/Denmark-2113x1406.jpg", type = "image"),
    Media(user_id = 3, post_id = 43, media_file = "https://cdn.internationalliving.com/wp-content/uploads/2020/02/Germany-1.jpg", type = "image"),
    Media(user_id = 3, post_id = 44, media_file = "https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200", type = "image"),
    Media(user_id = 3, post_id = 45, media_file = "https://i.natgeofe.com/k/e965ea18-80fa-4205-a1df-3ec327ddb567/hungary-budapest.jpg", type = "image"),
    Media(user_id = 3, post_id = 46, media_file = "https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop", type = "image"),
    Media(user_id = 3, post_id = 47, media_file = "https://i.natgeofe.com/k/2847c949-6de3-4d11-998a-d3ce12d9edb0/finland-cityscape_3x2.jpg", type = "image"),
    Media(user_id = 3, post_id = 48, media_file = "https://www.nationsonline.org/gallery/UK/Palace-of-Westminster-Parliament.jpg", type = "image"),
    Media(user_id = 3, post_id = 49, media_file = "https://ecfr.eu/wp-content/uploads/yemen-aden.jpg", type = "image"),
    Media(user_id = 3, post_id = 50, media_file = "https://cdn.britannica.com/09/61509-050-EB149D2D/Muscat-Oman.jpg", type = "image"),
    Media(user_id = 3, post_id = 51, media_file = "https://www.worldatlas.com/r/w1200/upload/70/2f/ef/shutterstock-538942345.jpg", type = "image"),
    Media(user_id = 3, post_id = 52, media_file = "https://i.natgeofe.com/k/04665f4a-3f8d-4b62-8ca3-09ce7dfc5a20/france-eiffel-tower_4x3.jpg", type = "image"),
    Media(user_id = 3, post_id = 53, media_file = "https://www.peru.travel/Contenido/AcercaDePeru/Imagen/en/6/0.0/Principal/Machu%20Picchu.jpg", type = "image"),
    Media(user_id = 3, post_id = 54, media_file = "https://a.cdn-hotels.com/gdcs/production173/d841/3371da00-bbc8-408e-9769-ca365f03fadd.jpg", type = "image"),
    Media(user_id = 3, post_id = 55, media_file = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/26/e6/5c/the-havannah.jpg?w=700&h=-1&s=1", type = "image"),
    Media(user_id = 3, post_id = 56, media_file = "https://api.time.com/wp-content/uploads/2022/07/Worlds-Greatest-Places-2022-KigaliRwanda.jpeg", type = "image"),
    Media(user_id = 3, post_id = 57, media_file = "https://broganabroad.com/wp-content/uploads/2020/05/Alkmaar-Netherlands.jpg.webp", type = "image"),
    Media(user_id = 4, post_id = 58, media_file = "https://www.state.gov/wp-content/uploads/2022/02/shutterstock_1025960785-2560x1300.jpg", type = "image"),
    Media(user_id = 4, post_id = 59, media_file = "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg", type = "image"),
    Media(user_id = 4, post_id = 60, media_file = "https://media.cntraveler.com/photos/56cb8369b19e7d9b785203a5/master/w_2048,h_1536,c_limit/Beautiful-Canada-Stanley-Park.jpg", type = "image"),
    Media(user_id = 4, post_id = 61, media_file = "http://www.nationsonline.org/gallery/Denmark/Copenhagen-view-from-Vor-Frelsers-church.jpg", type = "image"),
    Media(user_id = 4, post_id = 62, media_file = "https://www.state.gov/wp-content/uploads/2019/04/India-2106x1406.jpg", type = "image"),
    Media(user_id = 4, post_id = 63, media_file = "https://i.natgeofe.com/k/ee89c8e4-abae-442e-9d0a-33ea9f1270e7/hungary-baths.jpg?w=636&h=424", type = "image"),
    Media(user_id = 4, post_id = 64, media_file = "https://imageio.forbes.com/specials-images/imageserve/5df7fb014e2917000783339f/0x0.jpg?format=jpg&width=1200", type = "image"),
    Media(user_id = 4, post_id = 65, media_file = "https://i.natgeofe.com/n/81cf55d9-8f0d-4bd7-a69f-9dd17186ed87/helsinki-finland_16x9.jpg?w=1200", type = "image"),
    Media(user_id = 4, post_id = 66, media_file = "https://cdn.insuremytrip.com/resources/29277/travel_insurance_uk_tower_bridge.jpg", type = "image"),
    Media(user_id = 4, post_id = 67, media_file = "https://www.worldbank.org/content/dam/photos/780x439/2022/apr/Yemen-Shibam.jpg", type = "image"),
    Media(user_id = 4, post_id = 68, media_file = "https://lp-cms-production.imgix.net/2020-09/shutterstockRF_624873095.jpg", type = "image"),
    Media(user_id = 4, post_id = 69, media_file = "https://www.bradtguides.com/wp-content/uploads/2020/05/rsz_dig05-1200x1047.jpg", type = "image"),
    Media(user_id = 4, post_id = 70, media_file = "https://www.nationsonline.org/gallery/France/View-of-Versailles.jpg", type = "image"),
    Media(user_id = 4, post_id = 71, media_file = "https://www.state.gov/wp-content/uploads/2019/04/Peru-e1556104258870-2500x1406.jpg", type = "image"),
    Media(user_id = 4, post_id = 72, media_file = "https://www.expatica.com/app/uploads/sites/13/2019/11/qatar.jpg", type = "image"),
    Media(user_id = 4, post_id = 73, media_file = "https://cdn.britannica.com/92/96692-050-0419F736/Iririki-Island-harbour-Port-Vila-Vanuatu-Efate.jpg", type = "image"),
    Media(user_id = 4, post_id = 74, media_file = "https://deih43ym53wif.cloudfront.net/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg", type = "image"),
    Media(user_id = 4, post_id = 75, media_file = "https://www.state.gov/wp-content/uploads/2018/11/Netherlands-2114x1406.jpg", type = "image"),
    Media(user_id = 4, post_id = 76, media_file = "https://cdn.britannica.com/49/20349-050-C5029C80/Uluru-Ayers-Rock-Uluru-Kata-Tjuta-National-Park-Australia.jpg", type = "image"),
    Media(user_id = 5, post_id = 77, media_file = "https://media.timeout.com/images/105240237/image.jpg", type = "image"),
    Media(user_id = 5, post_id = 78, media_file = "https://www.state.gov/wp-content/uploads/2019/04/Canada-e1556023963820-2500x1406.jpg", type = "image"),
    Media(user_id = 5, post_id = 79, media_file = "https://i.natgeofe.com/k/c4b51a61-ac20-4b96-a52a-609ab6576a4e/denmark-copenhagen-canal_16x9.jpg?w=1200", type = "image"),
    Media(user_id = 5, post_id = 80, media_file = "https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg", type = "image"),
    Media(user_id = 5, post_id = 81, media_file = "https://studyineurope.com.sg/storage/5323/conversions/SinH_Singapur_1920x1066_7-image_carousel_webp.webp", type = "image"),
    Media(user_id = 5, post_id = 82, media_file = "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/gettyimages-829204664.jpg", type = "image"),
    Media(user_id = 5, post_id = 83, media_file = "https://imageio.forbes.com/specials-images/imageserve/620ca273d9db9336241d67d9/Fantastic-landscape-of-Finland-with-northern-lights-/960x0.jpg?format=jpg&width=960", type = "image"),
    Media(user_id = 5, post_id = 84, media_file = "https://www.usnews.com/object/image/00000151-f4cd-d422-ad79-f6fd80700000/bc16-uk-gallery-02.jpg?update-time=1452030941918&size=responsive640", type = "image"),
    Media(user_id = 5, post_id = 85, media_file = "https://www.wilsoncenter.org/sites/default/files/styles/og_image/public/media/images/blog_post/yemen_shutterstock.jpg", type = "image"),
    Media(user_id = 5, post_id = 86, media_file = "https://qtxasset.com/cdn-cgi/image/w=384,h=216,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud1/media/image/Travel%20Agent%20Central-1511299745/Muscat_0.jpg/Muscat_0.jpg?VersionId=O_ZLUA79XtlqNH00o25qnx2U0TC8srrI", type = "image"),
    Media(user_id = 5, post_id = 87, media_file = "https://res.cloudinary.com/dtpgi0zck/image/upload/s--Uml25mjA--/c_fill,h_580,w_860/v1/EducationHub/photos/great-zimbabwes-great-enclosure.jpg", type = "image"),
    Media(user_id = 5, post_id = 88, media_file = "https://i.natgeofe.com/k/54b5e731-f8d6-4a93-92e0-b7b137cac411/france-champs-elysees-paris.jpg?w=636&h=358", type = "image"),
    Media(user_id = 5, post_id = 89, media_file = "https://imageio.forbes.com/specials-images/imageserve/1180683658/AERIAL-VIEW-OF-MIRAFLORES--LIMA--PERU/960x0.jpg?format=jpg&width=960", type = "image"),
    Media(user_id = 5, post_id = 90, media_file = "https://media.cnn.com/api/v1/images/stellar/prod/221031125729-02-world-cup-qatar-opinion.jpg?c=original", type = "image"),
    Media(user_id = 5, post_id = 91, media_file = "https://www.state.gov/wp-content/uploads/2019/04/Vanuatu-2109x1406.jpg", type = "image"),
    Media(user_id = 5, post_id = 92, media_file = "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKO5yop5ZNks/v1/-1x-1.jpg", type = "image"),
    Media(user_id = 5, post_id = 93, media_file = "https://cdn.britannica.com/14/177914-050-0149FB36/Urk-part-Zuiderzee-North-East-Polder-Netherlands.jpg", type = "image"),
    Media(user_id = 5, post_id = 94, media_file = "https://assets3.thrillist.com/v1/image/2875152/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70", type = "image"),
    Media(user_id = 5, post_id = 95, media_file = "https://lp-cms-production.imgix.net/2022-02/shutterstockRF_776445706.jpg", type = "image")
  ]
  db.session.add_all(objects)
  db.session.commit()


def undo_medias():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.medias RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM medias")

    db.session.commit()
