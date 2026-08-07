const internships = [
  {id:1, title:"Software Development", count:420, category:"tech", icon:"</>", color:"#E8F5E9"},
  {id:2, title:"Data Analytics", count:186, category:"tech", icon:"◐", color:"#FFF8E1"},
  {id:3, title:"Digital Marketing", count:258, category:"marketing", icon:"↗", color:"#E3F2FD"},
  {id:4, title:"Finance & Banking", count:132, category:"finance", icon:"$", color:"#FFF3E0"},
  {id:5, title:"Cybersecurity", count:94, category:"tech", icon:"◍", color:"#FCE4EC"},
  {id:6, title:"Healthcare Technology", count:67, category:"health", icon:"✚", color:"#E8F5E9"},
  {id:7, title:"Renewable Energy", count:52, category:"engineering", icon:"☀", color:"#FFFDE7"},
  {id:8, title:"Engineering", count:276, category:"engineering", icon:"⚙", color:"#E3F2FD"},
  {id:9, title:"Agriculture Tech", count:41, category:"engineering", icon:"♣", color:"#F1F8E9"},
  {id:10, title:"Logistics & Supply Chain", count:78, category:"business", icon:"☰", color:"#FFF8E1"},
  {id:11, title:"Media & Creative Arts", count:105, category:"creative", icon:"◎", color:"#FCE4EC"},
  {id:12, title:"Human Resources", count:89, category:"business", icon:"◍", color:"#F3E5F5"}
];

const internshipListings = [
  {id:101, title:"Frontend Developer Intern", company:"Paystack", location:"Lagos", category:"tech", duration:"3-6", level:"Beginner", type:"Paid", salary:"₦120k/mo", posted:"2 days ago"},
  {id:102, title:"Product Design Intern", company:"Flutterwave", location:"Remote", category:"tech", duration:"3-6", level:"Intermediate", type:"Paid", salary:"₦150k/mo", posted:"1 day ago"},
  {id:103, title:"Data Analyst Intern", company:"Andela", location:"Lagos", category:"tech", duration:"6-12", level:"Beginner", type:"Paid", salary:"₦100k/mo", posted:"3 days ago"},
  {id:104, title:"Digital Marketing Intern", company:"Cowrywise", location:"Abuja", category:"marketing", duration:"1-3", level:"Beginner", type:"Paid", salary:"₦80k/mo", posted:"5 days ago"},
  {id:105, title:"Finance Intern", company:"Access Bank", location:"Lagos", category:"finance", duration:"6-12", level:"Intermediate", type:"Paid", salary:"₦110k/mo", posted:"1 week ago"},
  {id:106, title:"Cybersecurity Trainee", company:"MTN Nigeria", location:"Lagos", category:"tech", duration:"3-6", level:"Advanced", type:"Paid", salary:"₦130k/mo", posted:"2 days ago"},
  {id:107, title:"HR & Talent Intern", company:"Interswitch", location:"Port Harcourt", category:"business", duration:"3-6", level:"Beginner", type:"Paid", salary:"₦70k/mo", posted:"4 days ago"},
  {id:108, title:"Content Creator Intern", company:"Zikoko", location:"Remote", category:"creative", duration:"1-3", level:"Beginner", type:"Paid", salary:"₦60k/mo", posted:"6 days ago"},
  {id:109, title:"Renewable Energy Intern", company:"Daystar Power", location:"Abuja", category:"engineering", duration:"6-12", level:"Intermediate", type:"Paid", salary:"₦90k/mo", posted:"1 week ago"}
];

const mentors = [
  {id:201, name:"Dr. Amara Oti", company:"Andela", role:"Head of Talent", field:"tech", rating:4.9, sessions:124, image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop", bio:"8 years in talent development, ex-Google"},
  {id:202, name:"Tunde Alabi", company:"Paystack", role:"Senior Engineer", field:"tech", rating:5.0, sessions:98, image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop", bio:"Full-stack mentor, helps with interviews"},
  {id:203, name:"Ngozi Adeyemi", company:"Google", role:"Product Manager", field:"product", rating:4.8, sessions:210, image:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop", bio:"Product thinking, CV reviews"},
  {id:204, name:"Chinedu Okoro", company:"Cowrywise", role:"Finance Lead", field:"finance", rating:4.9, sessions:76, image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop", bio:"Finance & investment banking guidance"},
  {id:205, name:"Aisha Bello", company:"Interswitch", role:"HR Director", field:"tech", rating:4.9, sessions:156, image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop", bio:"Career switching, salary negotiation"},
  {id:206, name:"Emeka Udo", company:"Flutterwave", role:"Data Lead", field:"data", rating:4.8, sessions:89, image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop", bio:"Python, SQL, data storytelling"}
];

const testimonials = [
  {name:"Chidi Okafor", role:"Data Analytics Intern, Flutterwave", school:"University of Lagos", text:`kwarter completely changed my trajectory. Within three months of joining, I had secured a data analytics internship at a fintech company. The mentor matching is genuinely intelligent — my mentor had worked in the exact role I was targeting.`},
  {name:"Ngozi Adeyemi", role:"Senior Engineer, Google - Volunteer Mentor", school:"Mentor", text:`I was a mentor skeptic until I joined kwarter. The platform makes it so easy to connect with motivated students. I've mentored 12 people this year, and watching them land roles is incredibly rewarding.`},
  {name:"Aisha Bello", role:"Head of HR, Interswitch Group", school:"Employer", text:`We've hired 8 interns through kwarter in the past year, and the quality has been consistently better than any other hiring channel we've used. The candidates come prepared and genuinely motivated.`}
];

function getSavedIds(){
  const saved = localStorage.getItem(`savedInternships`);
  if(saved){
    return JSON.parse(saved);
  }
  return [];
}

function saveInternship(id){
  let saved = getSavedIds();
  if(saved.includes(id)){
    saved = saved.filter((itemId) => itemId !== id);
  } else {
    saved.push(id);
  }
  localStorage.setItem(`savedInternships`, JSON.stringify(saved));
  displayIndustries(document.getElementById(`industrySearch`)?.value || ``);
  if(document.getElementById(`internshipGrid`)){
    displayInternshipListings();
  }
  displaySavedListings();
  updateSavedCount();
}

function updateSavedCount(){
  const countEl = document.getElementById(`savedCount`);
  if(countEl){
    const count = getSavedIds().length;
    countEl.textContent = `${count} saved`;
    if(count > 0){
      countEl.style.display = `inline-flex`;
    } else {
      countEl.style.display = `none`;
    }
  }
}

function displayInternshipListings(){
  const grid = document.getElementById(`internshipGrid`);
  if(!grid) return;
  const searchVal = document.getElementById(`jobSearch`)?.value.toLowerCase() || ``;
  const indFilter = document.getElementById(`industryFilter`)?.value || `all`;
  const locFilter = document.getElementById(`locationFilter`)?.value || `all`;
  const durFilter = document.getElementById(`durationFilter`)?.value || `all`;

  let filtered = internshipListings.filter((job) => {
    const matchSearch = !searchVal || job.title.toLowerCase().includes(searchVal) || job.company.toLowerCase().includes(searchVal);
    const matchInd = indFilter === `all` || job.category === indFilter;
    const matchLoc = locFilter === `all` || job.location === locFilter;
    const matchDur = durFilter === `all` || job.duration === durFilter;
    return matchSearch && matchInd && matchLoc && matchDur;
  });

  const savedIds = getSavedIds();
  grid.innerHTML = ``;
  if(filtered.length === 0){
    grid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--text-light)">No internships found for your filters. Try clearing filters.</p>`;
  } else {
    filtered.forEach((job) => {
      const isSaved = savedIds.includes(job.id);
      const card = document.createElement(`div`);
      card.className = `job-card`;
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:start">
          <div class="company">${job.company.charAt(0)}</div>
          <button onclick="saveInternship(${job.id})" aria-label="save internship" style="border:none; background:none; cursor:pointer; font-size:0.75rem; font-weight:700; color:${isSaved ? `var(--primary)` : `var(--text-light)`}">${isSaved ? `★ SAVED` : `☆ SAVE`}</button>
        </div>
        <h3>${job.title}</h3>
        <p style="font-size:0.8rem; color:var(--text-light)">${job.company} • ${job.posted}</p>
        <div class="job-meta">
          <span>${job.location}</span>
          <span>${job.duration} months</span>
          <span>${job.level}</span>
          <span class="paid">${job.type} • ${job.salary}</span>
        </div>
        <button class="btn btn-primary" style="margin-top:8px; width:100%; padding:8px" onclick="applyForJob('${job.title}')">Apply Now</button>
      `;
      grid.appendChild(card);
    });
  }
  const countEl = document.getElementById(`listingCount`);
  if(countEl){
    countEl.textContent = `${filtered.length} of ${internshipListings.length} internships showing${searchVal ? ` for "${searchVal}"` : ``}`;
  }
}

function displaySavedListings(){
  const grid = document.getElementById(`savedGrid`);
  const noSaved = document.getElementById(`noSaved`);
  if(!grid) return;
  const savedIds = getSavedIds();
  const savedJobs = internshipListings.filter((job) => savedIds.includes(job.id)).concat(
    internships.filter((i) => savedIds.includes(i.id)).map((i) => ({id:i.id, title:i.title, company:`Multiple`, location:`Various`, category:i.category, duration:`Various`, level:`Various`, type:`Industry`, salary:`${i.count} roles`, posted:`Category`}))
  );
  grid.innerHTML = ``;
  if(savedJobs.length === 0){
    if(noSaved) noSaved.style.display = `block`;
  } else {
    if(noSaved) noSaved.style.display = `none`;
    savedJobs.forEach((job) => {
      const card = document.createElement(`div`);
      card.className = `job-card`;
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between"><strong style="font-size:0.9rem">${job.title}</strong><button onclick="saveInternship(${job.id})" style="border:none; background:none; cursor:pointer; color:var(--primary); font-size:0.8rem">✕ Remove</button></div>
        <p style="font-size:0.8rem; color:var(--text-light)">${job.company || ``} ${job.location ? `• ${job.location}` : ``}</p>
      `;
      grid.appendChild(card);
    });
  }
}

function applyForJob(title){
  const applied = JSON.parse(localStorage.getItem(`appliedJobs`) || `[]`);
  if(!applied.includes(title)){
    applied.push(title);
    localStorage.setItem(`appliedJobs`, JSON.stringify(applied));
  }
  alert(`Application submitted for ${title}! Saved to localStorage.`);
}

function setupInternshipFilters(){
  const ids = [`jobSearch`, `industryFilter`, `locationFilter`, `durationFilter`];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if(el){
      el.addEventListener(`input`, displayInternshipListings);
      el.addEventListener(`change`, displayInternshipListings);
    }
  });
  const clearBtn = document.getElementById(`clearFilters`);
  if(clearBtn){
    clearBtn.addEventListener(`click`, () => {
      ids.forEach((i) => {
        const e = document.getElementById(i);
        if(e){
          if(e.tagName === `SELECT`){
            e.value = `all`;
          } else {
            e.value = ``;
          }
        }
      });
      displayInternshipListings();
    });
  }
}

function displayIndustries(filterText = ``){
  const grid = document.getElementById(`industryGrid`);
  if(!grid) return;
  const lower = filterText.toLowerCase();
  let filtered = internships;
  if(lower){
    filtered = internships.filter((item) => {
      return item.title.toLowerCase().includes(lower) || item.category.toLowerCase().includes(lower);
    });
  }
  const savedIds = getSavedIds();
  grid.innerHTML = ``;
  filtered.forEach((item) => {
    const isSaved = savedIds.includes(item.id);
    const card = document.createElement(`div`);
    card.className = `ind-card`;
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center">
        <div class="ic" style="background:${item.color}">${item.icon}</div>
        <button aria-label="save" onclick="saveInternship(${item.id})" style="border:none; background:none; cursor:pointer; font-size:0.7rem; color:${isSaved ? `var(--primary)` : `var(--text-light)`}">${isSaved ? `★ SAVED` : `☆ SAVE`}</button>
      </div>
      <strong style="font-size:0.85rem">${item.title}</strong>
      <small>${item.count} internships</small>
    `;
    grid.appendChild(card);
  });
  const resultText = document.getElementById(`resultCount`);
  if(resultText){
    resultText.textContent = `${filtered.length} opportunities found${filterText ? ` for "${filterText}"` : ``}`;
  }
}

function filterIndustries(){
  const input = document.getElementById(`industrySearch`);
  if(!input) return;
  input.addEventListener(`input`, (e) => {
    const value = e.target.value;
    displayIndustries(value);
  });
}

function setupFAQ(){
  const buttons = document.querySelectorAll(`.faq-q`);
  buttons.forEach((btn) => {
    btn.addEventListener(`click`, () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains(`open`);
      document.querySelectorAll(`.faq-item`).forEach((i) => i.classList.remove(`open`));
      if(!isOpen){
        item.classList.add(`open`);
      }
    });
  });
}

function setupMobileMenu(){
  const ham = document.getElementById(`hamburger`);
  const nav = document.getElementById(`mainNav`);
  if(!ham || !nav) return;
  ham.addEventListener(`click`, () => {
    nav.classList.toggle(`open`);
    const expanded = nav.classList.contains(`open`);
    ham.setAttribute(`aria-expanded`, `${expanded}`);
  });
}

function animateCounters(){
  const counters = document.querySelectorAll(`[data-count]`);
  if(!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        const el = entry.target;
        const target = parseInt(el.getAttribute(`data-count`), 10);
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if(current >= target){
            clearInterval(timer);
            el.textContent = `${target.toLocaleString()}+`;
          } else {
            el.textContent = `${Math.floor(current).toLocaleString()}`;
          }
        }, 16);
        observer.unobserve(el);
      }
    });
  }, {threshold:0.5});
  counters.forEach((c) => observer.observe(c));
}

function updateLastModified(){
  const el = document.getElementById(`lastModified`);
  if(el){
    el.textContent = `Last Modified: ${document.lastModified}`;
  }
  const yearEl = document.getElementById(`currentYear`);
  if(yearEl){
    yearEl.textContent = `${new Date().getFullYear()}`;
  }
}

function handleCTAForm(){
  const form = document.getElementById(`ctaForm`);
  if(!form) return;
  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const email = document.getElementById(`ctaEmail`).value;
    if(email && email.includes(`@`)){
      localStorage.setItem(`kwarterEmail`, email);
      const btn = form.querySelector(`button`);
      btn.textContent = `✓ Joined!`;
      setTimeout(() => {
        window.location.href = `internships.html`;
      }, 800);
    }
  });
}

function displayMentors(filterText = ``, fieldFilter = `all`){
  const grid = document.getElementById(`mentorGrid`);
  if(!grid) return;
  const lower = filterText.toLowerCase();
  let filtered = mentors;
  if(lower){
    filtered = filtered.filter((m) => {
      return m.name.toLowerCase().includes(lower) || m.company.toLowerCase().includes(lower) || m.bio.toLowerCase().includes(lower);
    });
  }
  if(fieldFilter !== `all`){
    filtered = filtered.filter((m) => m.field === fieldFilter);
  }
  grid.innerHTML = ``;
  filtered.forEach((mentor) => {
    const card = document.createElement(`div`);
    card.className = `mentor-card`;
    card.innerHTML = `
      <img src="${mentor.image}" alt="Photo of ${mentor.name}" loading="lazy" width="64" height="64">
      <h3 style="font-size:1rem">${mentor.name}</h3>
      <p style="font-size:0.8rem; color:var(--text-light)">${mentor.role} @ ${mentor.company}</p>
      <p style="font-size:0.75rem; margin-top:6px">${mentor.bio}</p>
      <div style="display:flex; gap:8px; justify-content:center; margin-top:10px; font-size:0.7rem">
        <span>★ ${mentor.rating}</span><span>•</span><span>${mentor.sessions} sessions</span>
      </div>
      <button class="btn btn-outline" style="margin-top:12px; width:100%; padding:8px; font-size:0.8rem" onclick="connectMentor('${mentor.name}')">Connect</button>
    `;
    grid.appendChild(card);
  });
}

function connectMentor(name){
  const connections = JSON.parse(localStorage.getItem(`mentorConnections`) || `[]`);
  if(!connections.includes(name)){
    connections.push(name);
    localStorage.setItem(`mentorConnections`, JSON.stringify(connections));
  }
  alert(`Connection request sent to ${name}! Saved to localStorage.`);
}

function setupMentorFilters(){
  const search = document.getElementById(`mentorSearch`);
  const field = document.getElementById(`mentorField`);
  if(search){
    search.addEventListener(`input`, (e) => {
      const fieldVal = document.getElementById(`mentorField`)?.value || `all`;
      displayMentors(e.target.value, fieldVal);
    });
  }
  if(field){
    field.addEventListener(`change`, (e) => {
      const searchVal = document.getElementById(`mentorSearch`)?.value || ``;
      displayMentors(searchVal, e.target.value);
    });
  }
}

function handleMentorForm(){
  const form = document.getElementById(`mentorForm`);
  if(!form) return;
  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const data = {
      firstName: document.getElementById(`firstName`).value,
      lastName: document.getElementById(`lastName`).value,
      email: document.getElementById(`email`).value,
      company: document.getElementById(`company`).value,
      role: document.getElementById(`role`).value,
      experience: document.getElementById(`experience`).value,
      field: document.getElementById(`field`).value,
      commitment: document.querySelector(`input[name="commitment"]:checked`)?.value || ``,
      bio: document.getElementById(`bio`).value,
      date: new Date().toISOString()
    };
    if(!data.commitment){
      alert(`Please select time commitment`);
      return;
    }
    const existing = JSON.parse(localStorage.getItem(`mentorApplications`) || `[]`);
    existing.push(data);
    localStorage.setItem(`mentorApplications`, JSON.stringify(existing));
    const msg = document.getElementById(`formMessage`);
    if(msg){
      msg.style.color = `var(--primary)`;
      msg.textContent = `Thank you ${data.firstName}! Your application for ${data.field} mentorship has been saved. We have ${existing.length} applications in localStorage.`;
    }
    form.reset();
  });
}

function handleContactForm(){
  const form = document.getElementById(`contactForm`);
  if(!form) return;
  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const name = document.getElementById(`contactName`).value;
    const email = document.getElementById(`contactEmail`).value;
    const message = document.getElementById(`contactMsg`).value;
    const contact = {name, email, message, date:new Date().toISOString()};
    const contacts = JSON.parse(localStorage.getItem(`contactMessages`) || `[]`);
    contacts.push(contact);
    localStorage.setItem(`contactMessages`, JSON.stringify(contacts));
    const msgEl = document.getElementById(`contactMessage`);
    if(msgEl){
      msgEl.textContent = `Thanks ${name}! Your message has been saved (${contacts.length} total).`;
      msgEl.style.color = `var(--primary)`;
    }
    form.reset();
  });
}

document.addEventListener(`DOMContentLoaded`, () => {
  displayIndustries(``);
  filterIndustries();
  displayInternshipListings();
  displaySavedListings();
  setupInternshipFilters();
  displayMentors(``, `all`);
  setupMentorFilters();
  handleMentorForm();
  handleContactForm();
  setupFAQ();
  setupMobileMenu();
  animateCounters();
  updateLastModified();
  updateSavedCount();
  handleCTAForm();
});
