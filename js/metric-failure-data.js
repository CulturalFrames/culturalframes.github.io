// Metric failure data for CulturalFrames - Human vs Metric Discrepancies
const metricFailureData = [
  {
    prompt: "Sister tying rakhi on brother's wrist, India.",
    image_url: "https://culturalframes.s3.amazonaws.com/final_images/flux/India/dates-of-significance/d8aa1cb977cb3abad5eb9c75e0417e209c613707df772a0a9df399ae29b02164_India_0.png",
    model: "Flux.1-Dev",
    country: "India",
    domain: "Dates of Significance",
    human_evaluation: {
      reasoning: "Rakhi is not shown in the image, and also the girl is holding the boy's hand instead of tying rakhi."
    },
    metric_evaluation: {
      reasoning: "The image effectively captures the cultural context of Raksha Bandhan, with a sister tying a rakhi on her brother's wrist. The attire and setting are consistent with Indian traditions. However, slight improvements could be made in ensuring the clarity of the rakhi itself."
    }
  },
  {
    prompt: "Guests in yukata entering Japanese ryokan, shoes lined at entrance",
    image_url: "https://culturalframes.s3.amazonaws.com/final_images/gpt-image/Japan/etiquette/f304b818dd72b4a833133a864f19a5ed0fcf68b55b82e9a55a0729effcf7f540_Japan_0.png",
    model: "GPT-Image", 
    country: "Japan",
    domain: "Etiquette",
    human_evaluation: {
        reasoning: "Multiple Japanese etiquette violations: shoes include sandals with outdooe shoes mixed with indoor ones, positioned incorrectly (should be at the floor level bump, not further away), facing wrong direction, and guests appear to step on the lower entrance level which Japanese consider dirty rather than the proper upper entrance level."
      },
    metric_evaluation: {
      reasoning: "The image effectively depicts guests wearing yukata entering a Japanese ryokan, with shoes lined up at the entrance. The composition and elements align perfectly with the text prompt."
    }
  },
  {
    prompt: "Folk dancers performing cueca in Colchagua vineyard during Chile's Vendimia",
    image_url: "https://culturalframes.s3.amazonaws.com/final_images/SD35/Chile/dates-of-significance/bd43f32e79d6dd97e5dec62cbfb588933ed01b4dc2bede762fc3916546379808_Chile_0.png",
    model: "SD-3.5-Large",
    country: "Chile",
    domain: "Dates of Significance",
       human_evaluation: {
       reasoning: "The dancers aren't dressed properly for cueca and men are missing from the dance. The dance form itself doesn't correspond to cueca movements, and it appears to show a different type of dance entirely."
     },
    metric_evaluation: {
      reasoning: "The image effectively captures folk dancers performing cueca, with traditional attire and appropriate dance poses. The vineyard setting resembles Colchagua, and the mountainous backdrop aligns with a Chilean landscape. The scene successfully evokes the atmosphere of Chile's Vendimia festival, closely following the prompt."
    }
  },
  {
    prompt: "German host inviting guest into living room with open door gesture",
    image_url: "https://culturalframes.s3.amazonaws.com/final_images/imagegen3/Germany/etiquette/1b08014bc321e79c39385d0025ae68acdb54550b30aaa28ebc917982d5f99308_Germany_0.png",
    model: "Imagen3",
    country: "Germany",
    domain: "Etiquette",
    human_evaluation: {
      reasoning: "The door is closed and it is not clear if the guest is actually present in the scene, and the gesture appears more like 'take a seat' rather than inviting someone with an open door gesture."
    },
    metric_evaluation: {
      reasoning: "The German host is depicted with an inviting, open-door gesture in a welcoming and well-decorated living room setting. The image effectively captures the prompt with only minor adjustments needed to enhance German-specific cultural elements. Overall a very successful representation."
    }
  },
  {
    prompt: "Families sharing dumplings during Chinese New Year celebration",
    image_url: "https://culturalframes.s3.amazonaws.com/final_images/flux/China/dates-of-significance/ce43266b7b7630e9718cfe293ee611dec7f653be9bfe2d39c0e61cabde8dabee_China_0.png", 
    model: "Flux.1-Dev",
    country: "China",
    domain: "Dates of Significance",
    human_evaluation: {
      reasoning: "The image shows baozi (steamed buns) rather than dumplings. Additionally, the scene depicts only children without family members, and they appear to be making dumplings rather than sharing them. Also dumplings are eaten with other dishes."
    },
    metric_evaluation: {
      reasoning: "Successfully depicts family members gathered around a table with dumplings and traditional Chinese New Year decor including red lanterns. Effectively captures the essence of family sharing dumplings, closely following the prompt with only slight deductions for not showing broader celebration context."
    }
  },
  {
    prompt: "Iranian mullah leading prayer at a local mosque",
    image_url: "https://culturalframes.s3.amazonaws.com/final_images/SD35/Iran/religion/eaf095b0236fe55bca85e89140e30751758d226da47b9f99c58160048fdfebc0_Iran_0.png",
    model: "SD-3.5-Large",
    country: "Iran",
    domain: "Religion",
    human_evaluation: {
      reasoning: "The mullah is not in the front row leading the prayer. The figure doesn't look like a typical Iranian mullah, and there are floating heads in front of him. The people appear Sunni rather than the typical Shia practices expected in Iran."
    },
    metric_evaluation: {
      reasoning: "Image effectively depicts a religious figure in traditional attire leading prayer within a mosque setting. The architecture and gathering of people suggest a local mosque environment, with attire and setting aligning well with the concept of an Iranian mullah leading prayer, following the prompt closely."
    }
  }
];
