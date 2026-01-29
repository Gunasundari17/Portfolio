# Product Requirements Document (PRD)

## Product Name: Professional Portfolio Website

**Owner:** Guna Sundari S
**Primary Role Showcased:** Business Transformation Associate / Business Analyst
**Tech Focus:** React.js, Responsive Web UI
**Version:** 2.0

---

## 1. Purpose & Objective

The portfolio website aims to:

* Present a **modern, professional digital profile** built using React.js
* Showcase business analysis, transformation, billing, and stakeholder-facing experience
* Demonstrate **product thinking, UI awareness, and technical collaboration capability**
* Act as a single source of truth for recruiters and hiring managers

### Success Metrics

* Recruiter understands profile and value proposition within **30 seconds**
* Projects demonstrate **problem → action → impact**
* Portfolio works seamlessly across **desktop, tablet, and mobile**

---

## 2. Target Users

### Primary Users

* Recruiters (Business Analyst, Consulting, Transformation roles)
* Hiring Managers (Product, Delivery, Business Teams)

### Secondary Users

* Interview panels
* Professional connections via LinkedIn

---

## 3. User Goals

| User           | Goal                                                   |
| -------------- | ------------------------------------------------------ |
| Recruiter      | Quickly assess role fit and skill depth                |
| Hiring Manager | Understand analytical thinking and real project impact |
| Interviewer    | Use case studies as discussion anchors                 |

---

## 4. Scope Definition

### In Scope

* React-based portfolio UI
* Mobile-responsive, enhanced user experience
* Project-based case studies
* Billing & resource management experience
* Resume download and contact access

### Out of Scope

* Blogs or personal opinions
* CMS or admin panels
* Heavy animations or experimental UI patterns

This is a **professional asset**, not a design playground.

---

## 5. Functional Requirements

### 5.1 Technology Stack

* **Frontend Framework:** React.js
* **Styling:** CSS Modules / Styled Components / Tailwind (implementation flexible)
* **Responsive Design:** Mobile-first approach
* **Hosting:** Static deployment (Netlify / Vercel compatible)

---

### 5.2 Homepage / Hero Section

**Description:** First-touch positioning.

**Requirements:**

* Name, role, and professional headline
* CTA buttons:

  * View Projects
  * Download Resume
* Clean layout with responsive scaling
* Optimized for both desktop and mobile viewports

---

### 5.3 About Section

**Description:** Professional summary.

**Requirements:**

* Concise overview of experience in:

  * Business Analysis
  * Transformation initiatives
  * Agile delivery
  * Billing & resource management
* Readable layout with responsive typography
* Max 3–4 short paragraphs

---

### 5.4 Skills Section

**Description:** Structured skill visualization.

**Requirements:**

* Grouped skill categories:

  * Business Analysis
  * Agile & Delivery
  * Billing & Resource Management
  * Tools & Technical Exposure
* Responsive card/grid layout
* No proficiency ratings (avoid subjective claims)

---

### 5.5 Experience Section

**Description:** Professional timeline.

**Requirements:**

* Company, role, duration
* Key responsibilities with impact focus
* Expand/collapse behavior (optional) using React state
* Mobile-friendly vertical layout

---

### 5.6 Projects / Case Studies Section (Core Feature)

**Description:** Primary value driver.

**Mandatory Projects:**

* Ackumen Platform – Buckman
* Nippon – Production Support
* Website Requirements Analysis
* Alelo Mobile App

**Each Case Study Must Include:**

* Problem statement
* Role & responsibilities
* Actions performed
* Deliverables (BRDs, FRDs, user stories, workflows)
* Billing & resource management involvement (where applicable)
* Business outcome / impact

**UI Requirements:**

* Card-based layout
* Click/expand interaction for details
* Smooth transitions (light, non-distracting)

---

### 5.7 Billing & Resource Management (Embedded Feature)

**Description:** Operational credibility.

**Requirements:**

* Integrated into relevant project case studies
* Coverage of:

  * Billing process analysis
  * Resource allocation & utilization tracking
  * Effort tracking and billing requirement documentation
* Clear linkage to business impact and finance collaboration

---

### 5.8 UI & UX Enhancement Requirements

**Description:** Improve clarity and engagement.

**Requirements:**

* Consistent spacing and visual hierarchy
* Clear content flow and section separation
* Accessible font sizes and contrast
* UI inputs aligned with usability best practices
* Optimized layouts for:

  * Desktop
  * Tablet
  * Mobile devices

---

### 5.9 Education & Certifications

**Requirements:**

* MCA with academic performance
* ECBA certification
* Appium Automation Testing certification
* Clean, readable timeline format

---

### 5.10 Contact Section

**Requirements:**

* Email
* LinkedIn
* Resume download
* Simple CTA (no complex forms)

---

## 6. Non-Functional Requirements

### Performance

* Page load time < 3 seconds
* Lazy loading for sections if required

### Responsiveness

* Mobile-first design
* Touch-friendly interactions
* No horizontal scrolling on mobile

### Accessibility

* Semantic HTML
* Keyboard navigability
* Readable contrast ratios

### SEO

* Optimized meta tags
* Structured headings
* Search-friendly project titles

---

## 7. Design Guidelines

* UI Style: Modern, professional, minimal
* Color Palette: White base, muted blues, grey accents
* Typography: Sans-serif, clean, readable
* Animations: Subtle and purposeful only
* Focus: Content clarity > visual decoration

---

## 8. Risks & Mitigation

| Risk                    | Mitigation                        |
| ----------------------- | --------------------------------- |
| UI over-complexity      | Keep interactions minimal         |
| Resume duplication      | Use storytelling via case studies |
| Mobile usability issues | Test layouts across breakpoints   |

---

## 9. Future Enhancements (Optional)

* Project impact metrics visualization
* Downloadable case-study PDFs
* Dark mode toggle (low priority)
