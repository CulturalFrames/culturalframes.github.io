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
      loadSamples();
    });
  });
  
  // Carousel navigation with circular looping
  const carouselBtns = document.querySelectorAll('.carousel-btn[data-task="cultural"]');
  carouselBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const isNext = this.classList.contains('next');
      const samples = culturalData[currentCountry] || [];
      const samplesLen = samples.length;
      
      if (samplesLen === 0) return;
      
      if (isNext) {
        // Loop back to first image when reaching the end
        carouselState[currentCountry] = (carouselState[currentCountry] + 1) % samplesLen;
      } else {
        // Loop to last image when going back from first
        carouselState[currentCountry] = carouselState[currentCountry] === 0 
          ? samplesLen - 1 
          : carouselState[currentCountry] - 1;
      }
      
      loadSamples();
    });
  });

  // Annotation country tab event listeners - removed since we no longer use country tabs

  // Annotation carousel navigation with circular looping
  const annotationCarouselBtns = document.querySelectorAll('.carousel-btn[data-task="annotation"]');
  annotationCarouselBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const isNext = this.classList.contains('next');
      const annotations = getAllAnnotations();
      const annotationsLen = annotations.length;
      
      if (annotationsLen === 0) return;
      
      if (isNext) {
        // Loop back to first annotation when reaching the end
        currentAnnotationIndex = (currentAnnotationIndex + 1) % annotationsLen;
      } else {
        // Loop to last annotation when going back from first
        currentAnnotationIndex = currentAnnotationIndex === 0 
          ? annotationsLen - 1 
          : currentAnnotationIndex - 1;
      }
      
      loadAnnotations();
    });
  });

  // Model tab event listeners - removed since model failure section is commented out

  // Metric failure carousel navigation with circular looping
  const metricFailureCarouselBtns = document.querySelectorAll('.carousel-btn[data-task="metric-failure"]');
  metricFailureCarouselBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const isNext = this.classList.contains('next');
      const failures = metricFailureData || [];
      const failuresLen = failures.length;
      
      if (failuresLen === 0) return;
      
      if (isNext) {
        // Loop back to first failure when reaching the end
        metricFailureCarouselState = (metricFailureCarouselState + 1) % failuresLen;
      } else {
        // Loop to last failure when going back from first
        metricFailureCarouselState = metricFailureCarouselState === 0 
          ? failuresLen - 1 
          : metricFailureCarouselState - 1;
      }
      
      loadMetricFailures();
    });
  });
  
  // Load initial samples, annotations, and metric failures
  loadSamples();
  loadAnnotations();
  loadMetricFailures();

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

// Cultural data is imported from cultural-data.js
// Annotation data is imported from annotation-data.js

// Current annotation state
let currentAnnotationIndex = 0;

// Model failure state variables removed since section is commented out

// Metric failure carousel state
let metricFailureCarouselState = 0;

// Load samples for current country
function loadSamples() {
  const track = document.querySelector('.carousel-track[data-task="cultural"]');
  if (!track) return;

  // Get samples for current country
  const samples = culturalData[currentCountry] || [];
  
  if (!samples || samples.length === 0) {
    track.innerHTML = '<div class="sample-card"><div class="sample-content">No samples available for this country.</div></div>';
    return;
  }

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

  // Update button states - always enabled for circular navigation
  const prevBtn = document.querySelector('.carousel-btn.prev[data-task="cultural"]');
  const nextBtn = document.querySelector('.carousel-btn.next[data-task="cultural"]');
  if (prevBtn) prevBtn.disabled = false;
  if (nextBtn) nextBtn.disabled = false;
}

// Get all annotations from all countries combined
function getAllAnnotations() {
  const allAnnotations = [];
  Object.keys(annotationData).forEach(country => {
    const countryAnnotations = annotationData[country] || [];
    countryAnnotations.forEach(annotation => {
      allAnnotations.push({
        ...annotation,
        country: country // Add country info for display
      });
    });
  });
  return allAnnotations;
}

// Load annotations from all countries
function loadAnnotations() {
  const track = document.querySelector('.carousel-track[data-task="annotation"]');
  if (!track) return;

  // Get all annotations from all countries
  const annotations = getAllAnnotations();
  
  if (!annotations || annotations.length === 0) {
    track.innerHTML = '<div class="annotation-card"><div class="annotation-header">No annotations available.</div></div>';
    return;
  }

  // Clamp index
  if (currentAnnotationIndex < 0) currentAnnotationIndex = 0;
  if (currentAnnotationIndex >= annotations.length) currentAnnotationIndex = annotations.length - 1;

  const annotation = annotations[currentAnnotationIndex];

  // Clear existing content
  track.innerHTML = '';

  if (!annotation) return;

  // Helper functions for cleaner code
  const getScoreClass = (score) => {
    if (score >= 0.8) return 'excellent';
    if (score >= 0.6) return 'good';
    if (score >= 0.3) return 'fair';
    return 'poor';
  };

  const formatScore = (score) => {
    return score.toString();
  };

  const annotationCard = document.createElement('div');
  annotationCard.className = 'annotation-card';
  
  // Generate compact left-right layout annotation HTML
  annotationCard.innerHTML = `
    <div class="annotation-left">
      <div class="annotation-prompt-section">
        <div class="annotation-prompt-text">${annotation.prompt}</div>
      </div>
      <img src="${annotation.image_url}" alt="Cultural sample" class="annotation-image">
      <div class="annotation-meta">
        <div class="annotation-model">${annotation.model}</div>
        <div class="annotation-country">${annotation.country}</div>
      </div>
    </div>
    
    <div class="annotation-right">
      <!-- Image-Prompt Alignment (Core) -->
      <div class="alignment-section">
        <div class="alignment-header">
          <div class="alignment-title">Image-Prompt Alignment</div>
          <div class="alignment-score ${getScoreClass(annotation.annotations.image_prompt_alignment.score)}">${formatScore(annotation.annotations.image_prompt_alignment.score)}</div>
        </div>
        
        <div class="field-section">
          <div class="field-title">Missing Elements:</div>
          <div class="alignment-labels">
            ${annotation.annotations.image_prompt_alignment.missing_elements.explicit ? '<span class="alignment-label missing">Explicit</span>' : ''}
            ${annotation.annotations.image_prompt_alignment.missing_elements.implicit ? '<span class="alignment-label missing">Implicit</span>' : ''}
            ${!annotation.annotations.image_prompt_alignment.missing_elements.explicit && !annotation.annotations.image_prompt_alignment.missing_elements.implicit ? '<span style="font-size: 0.8rem; color: var(--text-light);">None</span>' : ''}
          </div>
        </div>
        
        <div class="field-section">
          <div class="field-title">Incorrect Words:</div>
          ${annotation.annotations.image_prompt_alignment.incorrect_words.length > 0 ? `
          <div class="incorrect-words">
            ${annotation.annotations.image_prompt_alignment.incorrect_words.map(word => `<span class="word-highlight">${word}</span>`).join('')}
          </div>
          ` : '<div style="font-size: 0.8rem; color: var(--text-light);">None</div>'}
        </div>
        
        <div class="field-section full-width">
          <div class="field-title">Annotator Comments:</div>
          <div class="annotation-comments">${annotation.annotations.image_prompt_alignment.feedback}</div>
        </div>
      </div>

      <!-- Stereotypes -->
      <div class="stereotype-section">
        <div class="stereotype-title">
          Stereotypes
          <div class="stereotype-indicator ${annotation.annotations.stereotypes.present ? 'present' : 'absent'}">
            ${annotation.annotations.stereotypes.present ? '⚠️ Present' : '✓ Absent'}
          </div>
        </div>
        <div class="annotation-comments">${annotation.annotations.stereotypes.comment}</div>
      </div>

      <!-- Bottom Row: Image Quality + Overall Score -->
      <div class="bottom-row">
        <div class="quality-section">
          <div class="annotation-section-title">Image Quality</div>
          <div class="quality-score ${getScoreClass(annotation.annotations.image_quality.score)}">${formatScore(annotation.annotations.image_quality.score)}</div>
          ${(annotation.annotations.image_quality.issues.artifacts || annotation.annotations.image_quality.issues.unnatural_impression) ? `
          <div class="quality-issues">
            ${annotation.annotations.image_quality.issues.artifacts ? '<span class="issue-tag">Artifacts</span>' : ''}
            ${annotation.annotations.image_quality.issues.unnatural_impression ? '<span class="issue-tag">Unnatural</span>' : ''}
          </div>
          ` : '<div style="font-size: 0.75rem; color: var(--text-light);">No issues detected</div>'}
        </div>

        <div class="score-section">
          <div class="annotation-section-title">Overall Score</div>
          <div class="overall-score ${getScoreClass(annotation.annotations.overall_score / 5)}">${annotation.annotations.overall_score}/5</div>
          <div style="font-size: 1rem; color: #fbbf24;">
            ${'★'.repeat(annotation.annotations.overall_score)}${'☆'.repeat(5 - annotation.annotations.overall_score)}
          </div>
        </div>
      </div>
    </div>
  `;
  
  track.appendChild(annotationCard);

  // Update button states - always enabled for circular navigation
  const prevBtn = document.querySelector('.carousel-btn.prev[data-task="annotation"]');
  const nextBtn = document.querySelector('.carousel-btn.next[data-task="annotation"]');
  if (prevBtn) prevBtn.disabled = false;
  if (nextBtn) nextBtn.disabled = false;
}

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

// Model failure function removed since section is commented out

// Load metric failures
function loadMetricFailures() {
  const track = document.querySelector('.carousel-track[data-task="metric-failure"]');
  if (!track) return;

  // Get metric failures
  const failures = metricFailureData || [];
  
  if (!failures || failures.length === 0) {
    track.innerHTML = '<div class="metric-failure-card"><div class="metric-comparison-left">No metric failure cases available.</div></div>';
    return;
  }

  // Clamp index
  if (metricFailureCarouselState < 0) metricFailureCarouselState = 0;
  if (metricFailureCarouselState >= failures.length) metricFailureCarouselState = failures.length - 1;

  const failure = failures[metricFailureCarouselState];

  // Clear existing content
  track.innerHTML = '';

  if (!failure) return;

  const failureCard = document.createElement('div');
  failureCard.className = 'metric-failure-card';
  

  
  failureCard.innerHTML = `
    <div class="metric-comparison-left">
      <img src="${failure.image_url}" alt="Metric evaluation example" class="metric-image">
      <div class="metric-meta">
        <div class="metric-model-label">${failure.model}</div>
        <div class="metric-country-label">${failure.country} • ${failure.domain}</div>
      </div>
    </div>
    
    <div class="metric-comparison-right">
      <div class="metric-prompt">
        <strong>Prompt:</strong> ${failure.prompt}
      </div>
      
      <div class="evaluation-comparison">
        <div class="metric-evaluation">
          <div class="evaluation-header">
            <div class="evaluation-title">🤖 Metric Reasoning</div>
          </div>
          <div class="evaluation-reasoning">${failure.metric_evaluation.reasoning}</div>
        </div>
        
        <div class="human-evaluation">
          <div class="evaluation-header">
            <div class="evaluation-title">👥 Human Reasoning</div>
          </div>
          <div class="evaluation-reasoning">${failure.human_evaluation.reasoning}</div>
        </div>
      </div>
    </div>
  `;
  
  track.appendChild(failureCard);

  // Update button states - always enabled for circular navigation
  const prevBtn = document.querySelector('.carousel-btn.prev[data-task="metric-failure"]');
  const nextBtn = document.querySelector('.carousel-btn.next[data-task="metric-failure"]');
  if (prevBtn) prevBtn.disabled = false;
  if (nextBtn) nextBtn.disabled = false;
} 