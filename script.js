// Simple tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
  // Tab switching
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Show corresponding content
      const targetId = this.dataset.tab + '-content';
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // Country selection tabs
  const countryTabs = document.querySelectorAll('.country-tab');
  
  countryTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all country tabs
      countryTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Update current country and reload samples
      currentCountry = this.dataset.country;
      carouselState[currentCountry] = 0;
      loadSamples().catch(console.error);
    });
  });
  
  // Carousel navigation
  const carouselBtns = document.querySelectorAll('.carousel-btn');
  carouselBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const track = document.querySelector('.carousel-track[data-task="cultural"]');
      const isNext = this.classList.contains('next');
      
      if (track) {
        const scrollAmount = 320; // card width + gap
        const currentScroll = track.scrollLeft;
        const newScroll = isNext ? currentScroll + scrollAmount : currentScroll - scrollAmount;
        
        track.scrollTo({
          left: newScroll,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Load initial samples
  loadSamples().catch(console.error);

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Simple mobile menu toggle (if needed)
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  if (mobileMenuToggle && navbarMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
      this.classList.toggle('active');
    });
  }
});

// Current country selection
let currentCountry = 'india';

// Carousel state per country
const carouselState = {
  india: 0,
  japan: 0,
  china: 0,
  iran: 0,
  germany: 0,
  poland: 0,
  'south-africa': 0,
  canada: 0,
  brazil: 0,
  chile: 0
};

// Country-specific cultural sample data
const countryData = {
  india: [
    {
      id: 1,
      prompt: 'A family celebrating Diwali festival with traditional decorations',
      models: [
        { name: 'DALL-E 3', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Midjourney', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Stable Diffusion', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Firefly', image_url: 'assets/cultural_frames_cover.png' }
      ],
      meta: 'India • Hindi/English • Diwali'
    }
  ],
  japan: [
    {
      id: 1,
      prompt: 'Cherry blossom viewing (hanami) in a traditional Japanese garden',
      models: [
        { name: 'DALL-E 3', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Midjourney', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Stable Diffusion', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Firefly', image_url: 'assets/cultural_frames_cover.png' }
      ],
      meta: 'Japan • Japanese • Hanami'
    }
  ],
  china: [
    {
      id: 1,
      prompt: 'Spring Festival (Chinese New Year) family reunion dinner',
      models: [
        { name: 'DALL-E 3', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Midjourney', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Stable Diffusion', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Firefly', image_url: 'assets/cultural_frames_cover.png' }
      ],
      meta: 'China • Chinese • Spring Festival'
    }
  ],
  iran: [
    {
      id: 1,
      prompt: 'Nowruz celebration with traditional haft-sin table setting',
      models: [
        { name: 'DALL-E 3', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Midjourney', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Stable Diffusion', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Firefly', image_url: 'assets/cultural_frames_cover.png' }
      ],
      meta: 'Iran • Persian • Nowruz'
    }
  ],
  germany: [
    {
      id: 1,
      prompt: 'Oktoberfest celebration with traditional Bavarian clothing',
      models: [
        { name: 'DALL-E 3', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Midjourney', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Stable Diffusion', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Firefly', image_url: 'assets/cultural_frames_cover.png' }
      ],
      meta: 'Germany • German • Oktoberfest'
    }
  ],
  poland: [
    {
      id: 1,
      prompt: 'Traditional Polish Easter celebration with painted eggs',
      models: [
        { name: 'DALL-E 3', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Midjourney', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Stable Diffusion', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Firefly', image_url: 'assets/cultural_frames_cover.png' }
      ],
      meta: 'Poland • Polish • Easter'
    }
  ],
  'south-africa': [
    {
      id: 1,
      prompt: 'Traditional South African braai (barbecue) gathering',
      models: [
        { name: 'DALL-E 3', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Midjourney', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Stable Diffusion', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Firefly', image_url: 'assets/cultural_frames_cover.png' }
      ],
      meta: 'South Africa • English/Afrikaans • Braai'
    }
  ],
  canada: [
    {
      id: 1,
      prompt: 'Canadian Thanksgiving dinner with maple syrup and turkey',
      models: [
        { name: 'DALL-E 3', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Midjourney', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Stable Diffusion', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Firefly', image_url: 'assets/cultural_frames_cover.png' }
      ],
      meta: 'Canada • English/French • Thanksgiving'
    }
  ],
  brazil: [
    {
      id: 1,
      prompt: 'Carnival celebration with samba dancers and colorful costumes',
      models: [
        { name: 'DALL-E 3', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Midjourney', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Stable Diffusion', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Firefly', image_url: 'assets/cultural_frames_cover.png' }
      ],
      meta: 'Brazil • Portuguese • Carnival'
    }
  ],
  chile: [
    {
      id: 1,
      prompt: 'Chilean Independence Day celebration with traditional cueca dance',
      models: [
        { name: 'DALL-E 3', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Midjourney', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Stable Diffusion', image_url: 'assets/cultural_frames_cover.png' },
        { name: 'Firefly', image_url: 'assets/cultural_frames_cover.png' }
      ],
      meta: 'Chile • Spanish • Independence Day'
    }
  ]
};

// Load samples for current country
async function loadSamples() {
  const track = document.querySelector('.carousel-track[data-task="cultural"]');
  if (!track) return;

  // Get samples for current country
  const samples = countryData[currentCountry] || countryData['india'];
  const currentIndex = carouselState[currentCountry] || 0;

  // Clamp index
  if (currentIndex < 0) carouselState[currentCountry] = 0;
  if (currentIndex >= samples.length) carouselState[currentCountry] = samples.length - 1;

  const sample = samples[carouselState[currentCountry]];

  // Clear existing content
  track.innerHTML = '';

  if (!sample) return;

  const sampleCard = document.createElement('div');
  sampleCard.className = 'sample-card';
  
  // Generate model images HTML
  const modelImagesHTML = sample.models.map(model => `
    <div class="model-image-container">
      <img src="${model.image_url}" alt="${model.name} generated image" class="model-image" onerror="this.style.display='none'">
      <div class="model-label">${model.name}</div>
    </div>
  `).join('');

  sampleCard.innerHTML = `
    <div class="sample-content">
      <div class="cultural-prompt"><strong>Prompt:</strong> ${sample.prompt}</div>
      <div class="model-images-grid">
        ${modelImagesHTML}
      </div>
    </div>
    <div class="sample-meta">${sample.meta}</div>
  `;
  track.appendChild(sampleCard);

  // Update button states
  const prevBtn = document.querySelector('.carousel-btn.prev[data-task="cultural"]');
  const nextBtn = document.querySelector('.carousel-btn.next[data-task="cultural"]');
  if (prevBtn) prevBtn.disabled = carouselState[currentCountry] === 0;
  if (nextBtn) nextBtn.disabled = carouselState[currentCountry] === samples.length - 1;
}

// Carousel navigation
document.querySelectorAll('.carousel-btn').forEach(btn => {
  btn.onclick = function() {
    const isNext = this.classList.contains('next');
    const samples = countryData[currentCountry] || countryData['india'];
    const samplesLen = samples.length;
    
    if (isNext) carouselState[currentCountry] = Math.min(carouselState[currentCountry] + 1, samplesLen - 1);
    else carouselState[currentCountry] = Math.max(carouselState[currentCountry] - 1, 0);
    loadSamples();
  };
});

// Format Q&A content for display
function formatQAContent(content) {
  const lines = content.split('\n');
  let formattedContent = '';
  let currentQuestion = '';
  let currentAnswer = '';
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    if (trimmedLine.startsWith('Question')) {
      // Save previous Q&A if exists
      if (currentQuestion && currentAnswer) {
        formattedContent += `<div class="qa-pair">
          <div class="question">${currentQuestion}</div>
          <div class="answer">${currentAnswer}</div>
        </div>`;
      }
      
      // Start new question
      currentQuestion = trimmedLine.replace(/^Question \d+: /, '');
      currentAnswer = '';
    } else if (trimmedLine.startsWith('Answer:')) {
      currentAnswer = trimmedLine.replace('Answer:', '').trim();
    } else if (trimmedLine && !trimmedLine.startsWith('A)') && !trimmedLine.startsWith('B)') && !trimmedLine.startsWith('C)') && !trimmedLine.startsWith('D)')) {
      // Add to current answer if it's not a multiple choice option
      if (currentAnswer) {
        currentAnswer += ' ' + trimmedLine;
      }
    } else if (trimmedLine.startsWith('A)') || trimmedLine.startsWith('B)') || trimmedLine.startsWith('C)') || trimmedLine.startsWith('D)')) {
      // Add multiple choice options to question
      currentQuestion += '<br>' + trimmedLine;
    }
  }
  
  // Add the last Q&A pair
  if (currentQuestion && currentAnswer) {
    formattedContent += `<div class="qa-pair">
      <div class="question">${currentQuestion}</div>
      <div class="answer">${currentAnswer}</div>
    </div>`;
  }
  
  return formattedContent || content;
} 