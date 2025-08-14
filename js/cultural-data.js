// Cultural samples data for CulturalFrames
const culturalData = {
  india: [
  {
    id: 1,
    prompt: 'Family gathering with elders in traditional Indian attire',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/India/family/de798741c8e17781ca6eca06fde0dc940e762c6521ad4227f5ae9dd5b708f30e_India_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/India/family/de798741c8e17781ca6eca06fde0dc940e762c6521ad4227f5ae9dd5b708f30e_India_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/India/family/de798741c8e17781ca6eca06fde0dc940e762c6521ad4227f5ae9dd5b708f30e_India_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/India/family/de798741c8e17781ca6eca06fde0dc940e762c6521ad4227f5ae9dd5b708f30e_India_0.png' }
    ],
    meta: 'India • Family'
  },
  {
    id: 2,
    prompt: 'Indian home adorned with rangoli for Diwali celebrations',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/India/dates-of-significance/9bdc25a78a9ff6ec2785bccc4131d1b2df1430d5074881031b7890edfe5b473f_India_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/India/dates-of-significance/9bdc25a78a9ff6ec2785bccc4131d1b2df1430d5074881031b7890edfe5b473f_India_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/India/dates-of-significance/9bdc25a78a9ff6ec2785bccc4131d1b2df1430d5074881031b7890edfe5b473f_India_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/India/dates-of-significance/9bdc25a78a9ff6ec2785bccc4131d1b2df1430d5074881031b7890edfe5b473f_India_0.png' }
    ],
    meta: 'India • dates-of-significance'
  },
  {
    id: 3,
    prompt: 'Jain monk delivering a sermon in a Maharashtra temple',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/India/religion/0cbb662fe18fc613bd8010d07afb5bfd7794345dd0757c261e0e2bc3f91e177d_India_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/India/religion/0cbb662fe18fc613bd8010d07afb5bfd7794345dd0757c261e0e2bc3f91e177d_India_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/India/religion/0cbb662fe18fc613bd8010d07afb5bfd7794345dd0757c261e0e2bc3f91e177d_India_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/India/religion/0cbb662fe18fc613bd8010d07afb5bfd7794345dd0757c261e0e2bc3f91e177d_India_0.png' }
    ],
    meta: 'India • religion'
  },
  {
    id: 4,
    prompt: 'Indian family greeting elders with Namaste at a festive gathering.',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/India/greetings/1fbb0741b92a7650fd75465da5841c529cc4e6338bc5f18835c8bc98da568add_India_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/India/greetings/1fbb0741b92a7650fd75465da5841c529cc4e6338bc5f18835c8bc98da568add_India_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/India/greetings/1fbb0741b92a7650fd75465da5841c529cc4e6338bc5f18835c8bc98da568add_India_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/India/greetings/1fbb0741b92a7650fd75465da5841c529cc4e6338bc5f18835c8bc98da568add_India_0.png' }
    ],
    meta: 'India • dates-of-significance'
  },
  {
    id: 5,
    prompt: 'Guests removing shoes at Indian home entrance',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/India/etiquette/0c5e3b84c63f4696382204323a0ed785bfb18c47403fe392bde70b90252e686c_India_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/India/etiquette/0c5e3b84c63f4696382204323a0ed785bfb18c47403fe392bde70b90252e686c_India_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/India/etiquette/0c5e3b84c63f4696382204323a0ed785bfb18c47403fe392bde70b90252e686c_India_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/India/etiquette/0c5e3b84c63f4696382204323a0ed785bfb18c47403fe392bde70b90252e686c_India_0.png' }
    ],
    meta: 'India • etiquette'
  }],
  japan: [{
    id: 1,
    prompt: 'Japanese lanterns floating on river during Obon festival',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Japan/dates-of-significance/7e41e087686674a53821167dc916afb4d4a7ab2da6f6f01fce9dd5237a5b9d73_Japan_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Japan/dates-of-significance/7e41e087686674a53821167dc916afb4d4a7ab2da6f6f01fce9dd5237a5b9d73_Japan_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Japan/dates-of-significance/7e41e087686674a53821167dc916afb4d4a7ab2da6f6f01fce9dd5237a5b9d73_Japan_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Japan/dates-of-significance/7e41e087686674a53821167dc916afb4d4a7ab2da6f6f01fce9dd5237a5b9d73_Japan_0.png' }
    ],
    meta: 'Japan • dates-of-significance'
  },
  {
    id: 2,
    prompt: 'Traditional Shint\u014d wedding procession in Japanese garden',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Japan/family/5ec7dde8e5199af96c3b50a643a66e91b3bd4ee89da7a2e67fb1ffc70586383e_Japan_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Japan/family/5ec7dde8e5199af96c3b50a643a66e91b3bd4ee89da7a2e67fb1ffc70586383e_Japan_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Japan/family/5ec7dde8e5199af96c3b50a643a66e91b3bd4ee89da7a2e67fb1ffc70586383e_Japan_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Japan/family/5ec7dde8e5199af96c3b50a643a66e91b3bd4ee89da7a2e67fb1ffc70586383e_Japan_0.png' }
    ],
    meta: 'Japan • family'
  },
  {
    id: 3,
    prompt: 'Japanese tourists bowing to greet a guide at Kyoto temple',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Japan/greetings/c4899ce85732d02ae21d2f7af844561ee3c6fb2e4a4d7fa368dcb113536c024f_Japan_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Japan/greetings/c4899ce85732d02ae21d2f7af844561ee3c6fb2e4a4d7fa368dcb113536c024f_Japan_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Japan/greetings/c4899ce85732d02ae21d2f7af844561ee3c6fb2e4a4d7fa368dcb113536c024f_Japan_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Japan/greetings/c4899ce85732d02ae21d2f7af844561ee3c6fb2e4a4d7fa368dcb113536c024f_Japan_0.png' }
    ],
    meta: 'Japan • greetings'
  },
  {
    id: 4,
    prompt: 'Ceremony honoring Amaterasu at a Shint\u014d shrine',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Japan/religion/fa64515d0c7790a5f495d34e629df04f1b92302aa73e09ab329f1e503dbb5f11_Japan_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Japan/religion/fa64515d0c7790a5f495d34e629df04f1b92302aa73e09ab329f1e503dbb5f11_Japan_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Japan/religion/fa64515d0c7790a5f495d34e629df04f1b92302aa73e09ab329f1e503dbb5f11_Japan_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Japan/religion/fa64515d0c7790a5f495d34e629df04f1b92302aa73e09ab329f1e503dbb5f11_Japan_0.png' }
    ],
    meta: 'Japan • religion'
  },
  {
    id: 5,
    prompt: 'Friends enjoying ramen with chopsticks in a Japanese restaurant',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Japan/etiquette/90e8e866c28f07b22fdd9112d2adf6c4fc393a8c78517e9581cd817351d25f00_Japan_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Japan/etiquette/90e8e866c28f07b22fdd9112d2adf6c4fc393a8c78517e9581cd817351d25f00_Japan_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Japan/etiquette/90e8e866c28f07b22fdd9112d2adf6c4fc393a8c78517e9581cd817351d25f00_Japan_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Japan/etiquette/90e8e866c28f07b22fdd9112d2adf6c4fc393a8c78517e9581cd817351d25f00_Japan_0.png' }
    ],
    meta: 'Japan • etiquette'
  }],
  china: [{
    id: 1,
    prompt: 'Chinese man performing gongshou gesture during Lunar New Year greeting',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/China/greetings/3e49f7688d6c5f317450187940c9efb020745444983aab31f42eec24665bd7d2_China_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/China/greetings/3e49f7688d6c5f317450187940c9efb020745444983aab31f42eec24665bd7d2_China_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/China/greetings/3e49f7688d6c5f317450187940c9efb020745444983aab31f42eec24665bd7d2_China_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/China/greetings/3e49f7688d6c5f317450187940c9efb020745444983aab31f42eec24665bd7d2_China_0.png' }
    ],
    meta: 'China • greetings'
  },
  {
    id: 2,
    prompt: 'Young Chinese couple visiting parents during Spring Festival',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/China/family/928b4d2ef5c6416fdf0abbd2ee59969e71295b68dceca62a4272ac498c9d0834_China_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/China/family/928b4d2ef5c6416fdf0abbd2ee59969e71295b68dceca62a4272ac498c9d0834_China_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/China/family/928b4d2ef5c6416fdf0abbd2ee59969e71295b68dceca62a4272ac498c9d0834_China_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/China/family/928b4d2ef5c6416fdf0abbd2ee59969e71295b68dceca62a4272ac498c9d0834_China_0.png' }
    ],
    meta: 'China • family'
  },
  {
    id: 3,
    prompt: 'Chinese family offering incense at ancestor\'s altar',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/China/religion/a00f08b04bb36258dff8c879315e3365184ae13dbedce2e746f4b4fad031b3ba_China_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/China/religion/a00f08b04bb36258dff8c879315e3365184ae13dbedce2e746f4b4fad031b3ba_China_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/China/religion/a00f08b04bb36258dff8c879315e3365184ae13dbedce2e746f4b4fad031b3ba_China_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/China/religion/a00f08b04bb36258dff8c879315e3365184ae13dbedce2e746f4b4fad031b3ba_China_0.png' }
    ],
    meta: 'China • religion'
  },
  {
    id: 4,
    prompt: 'Traditional lion dance performance in a Chinese village square',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/China/dates-of-significance/e64fecc80eb3b091ace9610d0936eb5a6cebf6a1ec1f6ab04a50d256a3fa5d86_China_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/China/dates-of-significance/e64fecc80eb3b091ace9610d0936eb5a6cebf6a1ec1f6ab04a50d256a3fa5d86_China_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/China/dates-of-significance/e64fecc80eb3b091ace9610d0936eb5a6cebf6a1ec1f6ab04a50d256a3fa5d86_China_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/China/dates-of-significance/e64fecc80eb3b091ace9610d0936eb5a6cebf6a1ec1f6ab04a50d256a3fa5d86_China_0.png' }
    ],
    meta: 'China • dates-of-significance'
  },
  {
    id: 5,
    prompt: 'Traditional Chinese meal, chopsticks placed beside bowl, not inside',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/China/etiquette/8d56859f37b39fb1999587d4c5cc88ac1969af28592109f31d4230c2c5d856b2_China_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/China/etiquette/8d56859f37b39fb1999587d4c5cc88ac1969af28592109f31d4230c2c5d856b2_China_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/China/etiquette/8d56859f37b39fb1999587d4c5cc88ac1969af28592109f31d4230c2c5d856b2_China_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/China/etiquette/8d56859f37b39fb1999587d4c5cc88ac1969af28592109f31d4230c2c5d856b2_China_0.png' }
    ],
    meta: 'China • etiquette'
  }],
  iran: [{
    id: 1,
    prompt: 'Elder being greeted with hand over heart in Iran.',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Iran/greetings/41e21b45970f7008c9fbeeca1f909fe1fab49b3da402304b6856c523fdd6474e_Iran_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Iran/greetings/41e21b45970f7008c9fbeeca1f909fe1fab49b3da402304b6856c523fdd6474e_Iran_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Iran/greetings/41e21b45970f7008c9fbeeca1f909fe1fab49b3da402304b6856c523fdd6474e_Iran_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Iran/greetings/41e21b45970f7008c9fbeeca1f909fe1fab49b3da402304b6856c523fdd6474e_Iran_0.png' }
    ],
    meta: 'Iran • greetings'
  },
  {
    id: 2,
    prompt: 'Iranian mullah leading prayer at a local mosque',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Iran/religion/eaf095b0236fe55bca85e89140e30751758d226da47b9f99c58160048fdfebc0_Iran_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Iran/religion/eaf095b0236fe55bca85e89140e30751758d226da47b9f99c58160048fdfebc0_Iran_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Iran/religion/eaf095b0236fe55bca85e89140e30751758d226da47b9f99c58160048fdfebc0_Iran_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Iran/religion/eaf095b0236fe55bca85e89140e30751758d226da47b9f99c58160048fdfebc0_Iran_0.png' }
    ],
    meta: 'Iran • religion'
  },
  {
    id: 3,
    prompt: 'Persian family gathering around samovar for evening tea',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Iran/family/51f510525892ba78e5955ccf4f01828c5f62309f7aad972bf7d2e97fcb39af2b_Iran_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Iran/family/51f510525892ba78e5955ccf4f01828c5f62309f7aad972bf7d2e97fcb39af2b_Iran_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Iran/family/51f510525892ba78e5955ccf4f01828c5f62309f7aad972bf7d2e97fcb39af2b_Iran_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Iran/family/51f510525892ba78e5955ccf4f01828c5f62309f7aad972bf7d2e97fcb39af2b_Iran_0.png' }
    ],
    meta: 'Iran • family'
  },
  {
    id: 4,
    prompt: 'Families gather for Naw-Ruz feasts with traditional Iranian dishes',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Iran/dates-of-significance/39fc3c4049aed000d3d66cd6a03ccd27b11e6de345b06a288bfc9be81cd9a1dd_Iran_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Iran/dates-of-significance/39fc3c4049aed000d3d66cd6a03ccd27b11e6de345b06a288bfc9be81cd9a1dd_Iran_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Iran/dates-of-significance/39fc3c4049aed000d3d66cd6a03ccd27b11e6de345b06a288bfc9be81cd9a1dd_Iran_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Iran/dates-of-significance/39fc3c4049aed000d3d66cd6a03ccd27b11e6de345b06a288bfc9be81cd9a1dd_Iran_0.png' }
    ],
    meta: 'Iran • dates-of-significance'
  },
  {
    id: 5,
    prompt: 'Iranian family enjoying tea in a cozy Persian carpeted room',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Iran/etiquette/dccbcb782e2b7d21b3a5e7c8514b85528340c21f959758025336aed867b25df1_Iran_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Iran/etiquette/dccbcb782e2b7d21b3a5e7c8514b85528340c21f959758025336aed867b25df1_Iran_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Iran/etiquette/dccbcb782e2b7d21b3a5e7c8514b85528340c21f959758025336aed867b25df1_Iran_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Iran/etiquette/dccbcb782e2b7d21b3a5e7c8514b85528340c21f959758025336aed867b25df1_Iran_0.png' }
    ],
    meta: 'Iran • etiquette'
  }],
  germany: [{
    id: 1,
    prompt: 'Young couple gardening together in a small German backyard',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Germany/family/29608bc461ee1befc904513fc4f686919806acbcace2d7cbf5e2d1a94568719b_Germany_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Germany/family/29608bc461ee1befc904513fc4f686919806acbcace2d7cbf5e2d1a94568719b_Germany_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Germany/family/29608bc461ee1befc904513fc4f686919806acbcace2d7cbf5e2d1a94568719b_Germany_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Germany/family/29608bc461ee1befc904513fc4f686919806acbcace2d7cbf5e2d1a94568719b_Germany_0.png' }
    ],
    meta: 'Germany • family'
  },
  {
    id: 2,
    prompt: 'Catholic cathedral in a southern German city during a religious festival.',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Germany/religion/8bc9e8e49d323ab311dbd04849de5ad246cf4f0e409fcd3a1dac4f12cde34f6a_Germany_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Germany/religion/8bc9e8e49d323ab311dbd04849de5ad246cf4f0e409fcd3a1dac4f12cde34f6a_Germany_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Germany/religion/8bc9e8e49d323ab311dbd04849de5ad246cf4f0e409fcd3a1dac4f12cde34f6a_Germany_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Germany/religion/8bc9e8e49d323ab311dbd04849de5ad246cf4f0e409fcd3a1dac4f12cde34f6a_Germany_0.png' }
    ],
    meta: 'Germany • religion'
  },
  {
    id: 3,
    prompt: 'German villagers crafting floral designs for Fronleichnam festival',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Germany/dates-of-significance/c505bfae922ecc5733cbea5da2351b260a2804bf0810ece475f085e35d00aee2_Germany_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Germany/dates-of-significance/c505bfae922ecc5733cbea5da2351b260a2804bf0810ece475f085e35d00aee2_Germany_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Germany/dates-of-significance/c505bfae922ecc5733cbea5da2351b260a2804bf0810ece475f085e35d00aee2_Germany_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Germany/dates-of-significance/c505bfae922ecc5733cbea5da2351b260a2804bf0810ece475f085e35d00aee2_Germany_0.png' }
    ],
    meta: 'Germany • dates-of-significance'
  },
  {
    id: 4,
    prompt: 'Pedestrians waiting at crosswalk near Brandenburg Gate with red light',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Germany/etiquette/a0b9a65a5df5def121d4572385b95cc6fd1c8d64540c23b77f512d0b76949f50_Germany_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Germany/etiquette/a0b9a65a5df5def121d4572385b95cc6fd1c8d64540c23b77f512d0b76949f50_Germany_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Germany/etiquette/a0b9a65a5df5def121d4572385b95cc6fd1c8d64540c23b77f512d0b76949f50_Germany_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Germany/etiquette/a0b9a65a5df5def121d4572385b95cc6fd1c8d64540c23b77f512d0b76949f50_Germany_0.png' }
    ],
    meta: 'Germany • etiquette'
  },
  {
    id: 5,
    prompt: 'German colleagues shaking hands at Oktoberfest',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Germany/greetings/c47108852c694536bd306b6ad0d62c7002c86fa16225adc8308cd0a6845a37be_Germany_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Germany/greetings/c47108852c694536bd306b6ad0d62c7002c86fa16225adc8308cd0a6845a37be_Germany_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Germany/greetings/c47108852c694536bd306b6ad0d62c7002c86fa16225adc8308cd0a6845a37be_Germany_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Germany/greetings/c47108852c694536bd306b6ad0d62c7002c86fa16225adc8308cd0a6845a37be_Germany_0.png' }
    ],
    meta: 'Germany • greetings'
  }],
  poland: [{
    id: 1,
    prompt: 'Polish villagers burn straw Marzanna effigy at sunset riverside',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Poland/dates-of-significance/39897a11ec39a033054599afd50da9694d271968b3d3ad1fc22792dd5128ba49_Poland_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Poland/dates-of-significance/39897a11ec39a033054599afd50da9694d271968b3d3ad1fc22792dd5128ba49_Poland_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Poland/dates-of-significance/39897a11ec39a033054599afd50da9694d271968b3d3ad1fc22792dd5128ba49_Poland_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Poland/dates-of-significance/39897a11ec39a033054599afd50da9694d271968b3d3ad1fc22792dd5128ba49_Poland_0.png' }
    ],
    meta: 'Poland • dates-of-significance'
  },
  {
    id: 2,
    prompt: 'Polish family enjoying homemade barszcz around a rustic kitchen table',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Poland/family/e6ddc224a20901c1de909f19f85826dd46c4b5b05262a79001056cadc448b495_Poland_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Poland/family/e6ddc224a20901c1de909f19f85826dd46c4b5b05262a79001056cadc448b495_Poland_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Poland/family/e6ddc224a20901c1de909f19f85826dd46c4b5b05262a79001056cadc448b495_Poland_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Poland/family/e6ddc224a20901c1de909f19f85826dd46c4b5b05262a79001056cadc448b495_Poland_0.png' }
    ],
    meta: 'Poland • family'
  },
  {
    id: 3,
    prompt: 'Traditional Polish Easter celebration with family and church rituals',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Poland/religion/38980eae0b653d970fcf8099f9165b42758f37f51ace54213d14db342e459870_Poland_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Poland/religion/38980eae0b653d970fcf8099f9165b42758f37f51ace54213d14db342e459870_Poland_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Poland/religion/38980eae0b653d970fcf8099f9165b42758f37f51ace54213d14db342e459870_Poland_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Poland/religion/38980eae0b653d970fcf8099f9165b42758f37f51ace54213d14db342e459870_Poland_0.png' }
    ],
    meta: 'Poland • religion'
  },
  {
    id: 4,
    prompt: 'Polish business meeting handshake with direct eye contact',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Poland/greetings/4cf3f98b89324ffd5c2b38f81fbd27a15828ae866a8e6b932ed47d1a2aa8f922_Poland_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Poland/greetings/4cf3f98b89324ffd5c2b38f81fbd27a15828ae866a8e6b932ed47d1a2aa8f922_Poland_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Poland/greetings/4cf3f98b89324ffd5c2b38f81fbd27a15828ae866a8e6b932ed47d1a2aa8f922_Poland_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Poland/greetings/4cf3f98b89324ffd5c2b38f81fbd27a15828ae866a8e6b932ed47d1a2aa8f922_Poland_0.png' }
    ],
    meta: 'Poland • greetings'
  },
  {
    id: 5,
    prompt: 'Polish family holding hands around dinner table before meal',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Poland/etiquette/e95f56ab20785feab336833d010052bf364a1e9b0fdaa293ff4e474a452a0691_Poland_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Poland/etiquette/e95f56ab20785feab336833d010052bf364a1e9b0fdaa293ff4e474a452a0691_Poland_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Poland/etiquette/e95f56ab20785feab336833d010052bf364a1e9b0fdaa293ff4e474a452a0691_Poland_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Poland/etiquette/e95f56ab20785feab336833d010052bf364a1e9b0fdaa293ff4e474a452a0691_Poland_0.png' }
    ],
    meta: 'Poland • etiquette'
  }],
  'south-africa': [{
    id: 1,
    prompt: 'Sunday church service in Northern Cape community',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/South_Africa/religion/7334ebe2712c28e6b6f761ba1fc54b0efdeb8a141ee490f5082a10e98e909683_South_Africa_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/South_Africa/religion/7334ebe2712c28e6b6f761ba1fc54b0efdeb8a141ee490f5082a10e98e909683_South_Africa_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/South_Africa/religion/7334ebe2712c28e6b6f761ba1fc54b0efdeb8a141ee490f5082a10e98e909683_South_Africa_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/South_Africa/religion/7334ebe2712c28e6b6f761ba1fc54b0efdeb8a141ee490f5082a10e98e909683_South_Africa_0.png' }
    ],
    meta: 'South Africa • religion'
  },
  {
    id: 3,
    prompt: 'Two-handed handshake at a rural South African farm meeting',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/South_Africa/greetings/d2b98b48eae030a490148915d0fe2b8a45a9e87138abd05b07bdc6da49394779_South_Africa_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/South_Africa/greetings/d2b98b48eae030a490148915d0fe2b8a45a9e87138abd05b07bdc6da49394779_South_Africa_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/South_Africa/greetings/d2b98b48eae030a490148915d0fe2b8a45a9e87138abd05b07bdc6da49394779_South_Africa_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/South_Africa/greetings/d2b98b48eae030a490148915d0fe2b8a45a9e87138abd05b07bdc6da49394779_South_Africa_0.png' }
    ],
    meta: 'South Africa • greetings'
  },
  {
    id: 4,
    prompt: 'Volunteers distributing meals on Nelson Mandela Day',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/South_Africa/dates-of-significance/a215c394119e6e625ad41c3aa9a121e2844dee2f69af914f8af78612b54fc11b_South_Africa_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/South_Africa/dates-of-significance/a215c394119e6e625ad41c3aa9a121e2844dee2f69af914f8af78612b54fc11b_South_Africa_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/South_Africa/dates-of-significance/a215c394119e6e625ad41c3aa9a121e2844dee2f69af914f8af78612b54fc11b_South_Africa_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/South_Africa/dates-of-significance/a215c394119e6e625ad41c3aa9a121e2844dee2f69af914f8af78612b54fc11b_South_Africa_0.png' }
    ],
    meta: 'South Africa • dates-of-significance'
  },
  {
    id: 5,
    prompt: 'Guest offering local wine at a South African garden party',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/South_Africa/etiquette/fd096005ace4e080d4910133b21ef833ceade53ed9376a5f5127e39a17857368_South_Africa_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/South_Africa/etiquette/fd096005ace4e080d4910133b21ef833ceade53ed9376a5f5127e39a17857368_South_Africa_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/South_Africa/etiquette/fd096005ace4e080d4910133b21ef833ceade53ed9376a5f5127e39a17857368_South_Africa_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/South_Africa/etiquette/fd096005ace4e080d4910133b21ef833ceade53ed9376a5f5127e39a17857368_South_Africa_0.png' }
    ],
    meta: 'South Africa • etiquette'
  }],
  canada: [{
    id: 1,
    prompt: 'Poppies worn on lapels during Remembrance Day ceremony',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Canada/dates-of-significance/02ee6353c9485fc5af92bfe91039e317dca7869147638fc8f976986f899ab22f_Canada_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Canada/dates-of-significance/02ee6353c9485fc5af92bfe91039e317dca7869147638fc8f976986f899ab22f_Canada_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Canada/dates-of-significance/02ee6353c9485fc5af92bfe91039e317dca7869147638fc8f976986f899ab22f_Canada_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Canada/dates-of-significance/02ee6353c9485fc5af92bfe91039e317dca7869147638fc8f976986f899ab22f_Canada_0.png' }
    ],
    meta: 'Canada • dates-of-significance'
  },
  {
    id: 2,
    prompt: 'Canadian couple celebrating wedding in modern urban setting',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Canada/family/22455d2cc50ee2ce6f575f9de778974bce03b5569fec31f21f9aebef5d10b0e3_Canada_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Canada/family/22455d2cc50ee2ce6f575f9de778974bce03b5569fec31f21f9aebef5d10b0e3_Canada_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Canada/family/22455d2cc50ee2ce6f575f9de778974bce03b5569fec31f21f9aebef5d10b0e3_Canada_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Canada/family/22455d2cc50ee2ce6f575f9de778974bce03b5569fec31f21f9aebef5d10b0e3_Canada_0.png' }
    ],
    meta: 'Canada • family'
  },
  {
    id: 3,
    prompt: 'Two French Canadians greeting with cheek kisses at a Montreal caf\u00e9',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Canada/greetings/164dbef4fb9bb7f4a92d0cd96df35a22217b3c31489b97ebab7b5001986a8ac1_Canada_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Canada/greetings/164dbef4fb9bb7f4a92d0cd96df35a22217b3c31489b97ebab7b5001986a8ac1_Canada_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Canada/greetings/164dbef4fb9bb7f4a92d0cd96df35a22217b3c31489b97ebab7b5001986a8ac1_Canada_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Canada/greetings/164dbef4fb9bb7f4a92d0cd96df35a22217b3c31489b97ebab7b5001986a8ac1_Canada_0.png' }
    ],
    meta: 'Canada • greetings'
  },
  {
    id: 4,
    prompt: 'Guests offering maple syrup gift at Canadian brunch',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Canada/etiquette/317d1275c951be275a033cc8ba77cf2d3ab4e6890be656c7465834708d4e7afa_Canada_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Canada/etiquette/317d1275c951be275a033cc8ba77cf2d3ab4e6890be656c7465834708d4e7afa_Canada_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Canada/etiquette/317d1275c951be275a033cc8ba77cf2d3ab4e6890be656c7465834708d4e7afa_Canada_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Canada/etiquette/317d1275c951be275a033cc8ba77cf2d3ab4e6890be656c7465834708d4e7afa_Canada_0.png' }
    ],
    meta: 'Canada • etiquette'
  },
  {
    id: 5,
    prompt: 'Diverse group celebrating Diwali in a Canadian neighborhood',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Canada/religion/427a9db355622be8c848549e75645e0819aae1f8bff48614fa6cb4be044aa857_Canada_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Canada/religion/427a9db355622be8c848549e75645e0819aae1f8bff48614fa6cb4be044aa857_Canada_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Canada/religion/427a9db355622be8c848549e75645e0819aae1f8bff48614fa6cb4be044aa857_Canada_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Canada/religion/427a9db355622be8c848549e75645e0819aae1f8bff48614fa6cb4be044aa857_Canada_0.png' }
    ],
    meta: 'Canada • religion'
  }],
  brazil: [{
    id: 1,
    prompt: 'Bahian women washing Bonfim stairs with scented water',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Brazil/dates-of-significance/c120d22557d7c8d92308fa8fdadc5f589292271e868f3b04f7dddd5ec71a7cd5_Brazil_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Brazil/dates-of-significance/c120d22557d7c8d92308fa8fdadc5f589292271e868f3b04f7dddd5ec71a7cd5_Brazil_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Brazil/dates-of-significance/c120d22557d7c8d92308fa8fdadc5f589292271e868f3b04f7dddd5ec71a7cd5_Brazil_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Brazil/dates-of-significance/c120d22557d7c8d92308fa8fdadc5f589292271e868f3b04f7dddd5ec71a7cd5_Brazil_0.png' }
    ],
    meta: 'Brazil • dates-of-significance'
  },
  {
    id: 2,
    prompt: 'Candombl\u00e9 drumming circle with Afro-Brazilian participants in Salvador',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Brazil/religion/3c16db1bac4a7e42246806ce771249a34fbf104880b2047acf85edfd07f82e49_Brazil_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Brazil/religion/3c16db1bac4a7e42246806ce771249a34fbf104880b2047acf85edfd07f82e49_Brazil_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Brazil/religion/3c16db1bac4a7e42246806ce771249a34fbf104880b2047acf85edfd07f82e49_Brazil_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Brazil/religion/3c16db1bac4a7e42246806ce771249a34fbf104880b2047acf85edfd07f82e49_Brazil_0.png' }
    ],
    meta: 'Brazil • religion'
  },
  {
    id: 3,
    prompt: 'Brazilian family playing samba music in a backyard gathering',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Brazil/family/8b35ffa0d3b7c8b4ba2b94284e4486af2d0b2a041f02f0a9896784a0df7d5d0f_Brazil_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Brazil/family/8b35ffa0d3b7c8b4ba2b94284e4486af2d0b2a041f02f0a9896784a0df7d5d0f_Brazil_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Brazil/family/8b35ffa0d3b7c8b4ba2b94284e4486af2d0b2a041f02f0a9896784a0df7d5d0f_Brazil_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Brazil/family/8b35ffa0d3b7c8b4ba2b94284e4486af2d0b2a041f02f0a9896784a0df7d5d0f_Brazil_0.png' }
    ],
    meta: 'Brazil • family'
  },
  {
    id: 4,
    prompt: 'Warm embrace among friends at a Brazilian outdoor concert',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Brazil/greetings/c5f5d3ff689558432e2d8db2e4e8d2d6b3a45d0976d757925bd56fb8d4fe88d3_Brazil_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Brazil/greetings/c5f5d3ff689558432e2d8db2e4e8d2d6b3a45d0976d757925bd56fb8d4fe88d3_Brazil_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Brazil/greetings/c5f5d3ff689558432e2d8db2e4e8d2d6b3a45d0976d757925bd56fb8d4fe88d3_Brazil_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Brazil/greetings/c5f5d3ff689558432e2d8db2e4e8d2d6b3a45d0976d757925bd56fb8d4fe88d3_Brazil_0.png' }
    ],
    meta: 'Brazil • greetings'
  },
  {
    id: 5,
    prompt: 'Brazilian family gathering, host serving cafezinho to everyone',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Brazil/etiquette/af12e59a01d56fe15d5f83d4f7d6e1e0f05d25264758abed303825dd13927e19_Brazil_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Brazil/etiquette/af12e59a01d56fe15d5f83d4f7d6e1e0f05d25264758abed303825dd13927e19_Brazil_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Brazil/etiquette/af12e59a01d56fe15d5f83d4f7d6e1e0f05d25264758abed303825dd13927e19_Brazil_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Brazil/etiquette/af12e59a01d56fe15d5f83d4f7d6e1e0f05d25264758abed303825dd13927e19_Brazil_0.png' }
    ],
    meta: 'Brazil • etiquette'
  }],
  chile: [{
    id: 1,
    prompt: 'Friends greeting with abrazo in a Chilean park',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Chile/greetings/1a8e2c058afc55a2c8a1dcf898a95afeb0b95660281f5a1a7332afd1b2a7eb42_Chile_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Chile/greetings/1a8e2c058afc55a2c8a1dcf898a95afeb0b95660281f5a1a7332afd1b2a7eb42_Chile_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Chile/greetings/1a8e2c058afc55a2c8a1dcf898a95afeb0b95660281f5a1a7332afd1b2a7eb42_Chile_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Chile/greetings/1a8e2c058afc55a2c8a1dcf898a95afeb0b95660281f5a1a7332afd1b2a7eb42_Chile_0.png' }
    ],
    meta: 'Chile • greetings'
  },
  {
    id: 2,
    prompt: 'Paddlers racing outrigger canoes at Anakena Beach during Tapati',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Chile/dates-of-significance/b66cd959cd54a3c7566e757dad8647887d1580dee450c56210d8d00eba83a6f8_Chile_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Chile/dates-of-significance/b66cd959cd54a3c7566e757dad8647887d1580dee450c56210d8d00eba83a6f8_Chile_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Chile/dates-of-significance/b66cd959cd54a3c7566e757dad8647887d1580dee450c56210d8d00eba83a6f8_Chile_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Chile/dates-of-significance/b66cd959cd54a3c7566e757dad8647887d1580dee450c56210d8d00eba83a6f8_Chile_0.png' }
    ],
    meta: 'Chile • dates-of-significance'
  },
  {
    id: 3,
    prompt: 'Chilean family sharing a meal at a bustling street food market',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Chile/family/330fddcd9a84fd9df2a62e3d187fe5ab079020bd1ccaceace9f2788d0d8c06a1_Chile_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Chile/family/330fddcd9a84fd9df2a62e3d187fe5ab079020bd1ccaceace9f2788d0d8c06a1_Chile_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Chile/family/330fddcd9a84fd9df2a62e3d187fe5ab079020bd1ccaceace9f2788d0d8c06a1_Chile_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Chile/family/330fddcd9a84fd9df2a62e3d187fe5ab079020bd1ccaceace9f2788d0d8c06a1_Chile_0.png' }
    ],
    meta: 'Chile • family'
  },
  {
    id: 4,
    prompt: 'Protestant choir singing in a Chilean church',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Chile/religion/bb07f2c22994d429abdad8cf9aeda57b3df32be7532672ea59eb08f9a5a448ab_Chile_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Chile/religion/bb07f2c22994d429abdad8cf9aeda57b3df32be7532672ea59eb08f9a5a448ab_Chile_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Chile/religion/bb07f2c22994d429abdad8cf9aeda57b3df32be7532672ea59eb08f9a5a448ab_Chile_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Chile/religion/bb07f2c22994d429abdad8cf9aeda57b3df32be7532672ea59eb08f9a5a448ab_Chile_0.png' }
    ],
    meta: 'Chile • religion'
  },
  {
    id: 5,
    prompt: 'Visitor removing hat before entering Santiago church',
    models: [
      { name: 'SD-3.5-Large', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Chile/etiquette/6b9907c6863a4527d005e13eebc1bb294aa5b88df070b6413d7faa0694799d82_Chile_0.png' },
      { name: 'Imagen3', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Chile/etiquette/6b9907c6863a4527d005e13eebc1bb294aa5b88df070b6413d7faa0694799d82_Chile_0.png' },
      { name: 'GPT-Image', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Chile/etiquette/6b9907c6863a4527d005e13eebc1bb294aa5b88df070b6413d7faa0694799d82_Chile_0.png' },
      { name: 'Flux.1-Dev', image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Chile/etiquette/6b9907c6863a4527d005e13eebc1bb294aa5b88df070b6413d7faa0694799d82_Chile_0.png' }
    ],
    meta: 'Chile • etiquette'
  }]
};