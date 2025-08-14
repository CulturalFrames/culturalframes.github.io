// Cultural annotation data for CulturalFrames
const annotationData = {
  iran: [
    {
      id: 1,
      prompt: 'Decorated Haft-Seen table with symbolic items in Iranian home',
      image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Iran/dates-of-significance/9c11434898b5ebb91aab93f02ae7ee8b7de9043af3bc5c6e9e4de7e45d42f7cd_Iran_0.png',
      model: 'Flux.1-Dev',
      annotations: {
        image_prompt_alignment: {
          score: 0.17,
          missing_elements: {
            explicit: true,
            implicit: false
          },
          incorrect_words: ['Haft','Seen','symbolic','items'],
          feedback: 'This picture does not depict a traditional Haft-Seen table—none of the symbolic items are present. Instead, it resembles a Turkish or Arabic dining setup with unrecognizable food.'
        },
        image_quality: {
          score: 0.67,
          issues: {
            artifacts: true,
            unnatural_impression: true
          }
        },
        stereotypes: {
          present: false,
          comment: 'No stereotypes present'
        },
        overall_score: 2.3
      }
    }
  ],
  germany: [
    {
      id: 1,
      prompt: 'Casual hug between German friends at a cafe',
      image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/Germany/greetings/6623e4e772987e5da5ab61f025eaba2298d31a45c86285bad615a733ffd66766_Germany_0.png',
      model: 'SD-3.5-Large',
      annotations: {
        image_prompt_alignment: {
          score: 0.5,
          missing_elements: {
            explicit: true,
            implicit: true
          },
          incorrect_words: ['Casual', 'hug', 'cafe'],
          feedback: 'The hug is hard to see, scene doesn\'t look casual, person is drinking beer in a cafe which is not usual'
        },
        image_quality: {
          score: 0.5,
          issues: {
            artifacts: true,
            unnatural_impression: true
          }
        },
        stereotypes: {
          present: true,
          comment: 'There is a glas of beer which is not usuall in germany at a cafe'
        },
        overall_score: 2.3
      }
    }
  ],
  japan: [
    {
      id: 1,
      prompt: 'Ceremony honoring Amaterasu at a Shint\u014d shrine',
      image_url: 'https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Japan/religion/fa64515d0c7790a5f495d34e629df04f1b92302aa73e09ab329f1e503dbb5f11_Japan_0.png',
      model: 'GPT-Image',
      annotations: {
        image_prompt_alignment: {
          score: 0.5,
          missing_elements: {
            explicit: true,
            implicit: true
          },
          incorrect_words: ['Ceremony', 'honoring', 'Amaterasu'],
          feedback: 'It is inaccurate to show people sitting on the ground worshipping, and Amaterasu Omikami is a statue, not a living figure, and is not present.'
        },
        image_quality: {
          score: 0.5,
          issues: {
            artifacts: true,
            unnatural_impression: true
          }
        },
        stereotypes: {
          present: false,
          comment: 'No harmful stereotypes present'
        },
        overall_score: 3
      }
    }
  ],
  china: [
    {
      id: 1,
      prompt: 'Chinese couple receiving parental blessings in traditional attire',
      image_url: 'https://culturalframes.s3.amazonaws.com/final_images/SD35/China/family/bac511fe349e7eda564e966b43845b98e31daff21872d202efc49f9fecc6735a_China_0.png',
      model: 'SD-3.5-Large',
      annotations: {
        image_prompt_alignment: {
          score: 0.17,
          missing_elements: {
            explicit: true,
            implicit: true
          },
          incorrect_words: ['couple', 'parental', 'blessings'],
          feedback: 'The image lacks parents, who are traditionally present for the tea ceremony and to whom the couple presents tea to receive blessings; instead, it shows two young girls and a young man who do not resemble a couple or parents.'
        },
        image_quality: {
          score: 0.5,
          issues: {
            artifacts: true,
            unnatural_impression: true
          }
        },
        stereotypes: {
          present: false,
          comment: 'No stereotypes present'
        },
        overall_score: 2
      }
    }
  ],
  india: [
    {
      id: 1,
      prompt: 'Indian family preparing sweet modaks during Ganesh Chaturthi',
      image_url: 'https://culturalframes.s3.amazonaws.com/final_images/imagegen3/India/family/5891de4cb746a4d6d2d882c9826443d95e6e67b388b2f68305275ceeef013e5b_India_0.png',
      model: 'Imagen3',
      annotations: {
        image_prompt_alignment: {
          score: 0.83,
          missing_elements: {
            explicit: false,
            implicit: true
          },
          incorrect_words: ['modaks', 'Ganesh', 'Chaturthi'],
          feedback: 'The modak shown is yellow instead of the usual white (but this might vary based on region), and dough is placed on the table, which is uncommon. There is no symbolic element of the occasion, such as the deity\'s statue.'
        },
        image_quality: {
          score: 1,
          issues: {
            artifacts: false,
            unnatural_impression: false
          }
        },
        stereotypes: {
          present: false,
          comment: 'No stereotypes present'
        },
        overall_score: 4
      }
    }
  ],
  poland: [
    {
      id: 1,
      prompt: 'Guests enjoying Polish wedding feast with traditional dishes',
      image_url: 'https://culturalframes.s3.amazonaws.com/final_images/flux/Poland/family/48b3fb83bdf44ba1672f1cd1d035f2b27fdc5d66ada13be8854eb75bc59e7e1b_Poland_0.png',
      model: 'Flux.1-Dev',
      annotations: {
        image_prompt_alignment: {
          score: 0.67,
          missing_elements: {
            explicit: true,
            implicit: false
          },
          incorrect_words: ['Polish', 'traditional', 'dishes'],
          feedback: 'The image lacks clear Polish-specific indicators, and no traditional dishes are visible.'
        },
        image_quality: {
          score: 1,
          issues: {
            artifacts: false,
            unnatural_impression: false
          }
        },
        stereotypes: {
          present: false,
          comment: 'No stereotypes present'
        },
        overall_score: 4
      }
    }
  ]
};