// DARK / LIGHT THEME
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme');
if(storedTheme){
  root.setAttribute('data-theme', storedTheme);
  themeBtn.textContent = storedTheme==='light'?'🌙':'☀️';
}
themeBtn.addEventListener('click', ()=>{
  const cur = root.getAttribute('data-theme')==='light'?'dark':'light';
  root.setAttribute('data-theme', cur);
  localStorage.setItem('theme', cur);
  themeBtn.textContent = cur==='light'?'🌙':'☀️';
});

// YEAR
document.getElementById('year').textContent = new Date().getFullYear();

// BACK TO TOP
document.getElementById('backToTop').addEventListener('click', e=>{
  e.preventDefault();
  window.scrollTo({top:0, behavior:'smooth'});
});

// HERO TAGS ANIMATION
window.addEventListener('load', ()=>{
  document.querySelectorAll('.tag').forEach(tag=>{
    tag.classList.add('slide-in');
  });
});

// SECTION CONTENT DATA
const sections = {
  about:`<h2>About</h2>
<p>I teach and supervise courses in apparel and textile engineering, and focus on sustainability and machine learning based projects. My current interests include ML-assisted inspection, nanoparticles-based multifunctional textiles, and eco-friendly dyeing.</p>`,
  
  highlights:`<h2>Highlights</h2>
<ul>
<li>Defect detection via texture features for fabrics.</li>
<li>Natural dyeing with plant extracts.</li>
<li>Student project: Arduino-based working environment monitoring in the garments floor</li>
<li>Protective textile concepts & finishing for performance.</li>
<li>Presently, I am serving as a lecturer at Atish Dipankar University of Science and Technology (Full-time). Also, I am serving as a lecturer at Bangladesh University of Textiles (Part-time)</li>
<li>Outside teaching, I build lightweight demos with Google Colab, MATLAB for limited local storage and easy sharing.</li>
</ul>`,

  research:`<h2>Research Interests</h2>
<ul>
<li>Textile circularity & reuse</li>
<li>Biodegradation of textile materials</li>
<li>Natural dyeing</li>
<li>Protective & functional textiles</li>
<li>ML for fabric inspection</li>
</ul>`,

  methods:`<h2>Methods & Tools</h2>
<ul>
<li>UPF testing for nanoparticle-treated textiles</li>
<li>Arduino-based embedded system</li>
<li>Python, MATLAB, Colab, TensorFlow/Keras</li>
</ul>`,

  openTo:`<h2>Open To</h2>
<p>Collaboration, MSc/PhD supervision discussions, and consultancy on sustainable process design and educational content.</p>`,

  teaching:`<h2>Teaching</h2>
<ul>
<li>Apparel Manufacturing-I</li>
<li>Apparel Manufacturing-II</li>
<li>Pattern to Finished Garments</li>
</ul>`,

  studentOpportunities:`<h2>Student Opportunities</h2>
<p>Interested in basics of Apparel Manufacturing, Natural dyeing with agricultural waste, Arduino applications, or ML for defect detection? <a href="#contact">Get in touch</a>.</p>`,

  projects:`<h2>Projects</h2>
<ul>
<li><strong>Fabric Defect Detector:</strong> Texture analysis to flag sewing and surface defects. Deployed via lightweight web app suitable for Colab + HTML. <br><em>Python • OpenCV • TensorFlow</em></li>
<li><strong>Natural Dyeing:</strong> Optimization of extraction and mordanting for stable shades. <br><em>DoE • UV–Vis • Fastness</em></li>
<li><strong>Arduino-based environment monitoring:</strong> Undergraduate research project exploring different working conditions. <br><em>Arduino • IoT</em></li>
</ul>`,

  publications:`<h2>Selected Publications</h2>
<ul>
<li>Nothing published yet, e.g., Title — Journal, Year.</li>
<li>One review paper is submitted.</li>
</ul>`,

  cv:`<h2>CV</h2>
<p>Download my latest CV: <a href="cv.pdf" download>cv.pdf</a>. Place your file as /cv.pdf in this repository.</p>`,

  contact:`<h2>Contact</h2>
<p><strong>Email:</strong> <a href="mailto:saifulae20@gmail.com">saifulae20@gmail.com</a></p>
<p><strong>Location:</strong> Mirpur, Dhaka, Bangladesh</p>
<p><strong>Elsewhere:</strong> <a href="https://github.com/YOUR-USERNAME" target="_blank">GitHub</a> · <a href="https://scholar.google.com/citations?user=YOUR-ID" target="_blank">Google Scholar</a> · <a href="https://www.linkedin.com/in/YOUR-USERNAME" target="_blank">LinkedIn</a></p>`
};

// CLICK ON LEFT SIDEBAR TO LOAD CONTENT
const sectionList = document.getElementById('sectionList');
const sectionContent = document.getElementById('sectionContent');

sectionList.querySelectorAll('li').forEach(li=>{
  li.addEventListener('click', ()=>{
    // Remove active class
    sectionList.querySelectorAll('li').forEach(item=>item.classList.remove('active'));
    li.classList.add('active');

    // Load content
    const key = li.getAttribute('data-section');
    sectionContent.innerHTML = sections[key];

    // Scroll into view smoothly
    sectionContent.scrollIntoView({behavior:'smooth'});
  });
});
