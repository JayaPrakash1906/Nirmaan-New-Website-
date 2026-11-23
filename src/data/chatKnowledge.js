/** Knowledge base for Nirmaan's Assistant (FAQ + program Q&A) */

export const chatKnowledge = [
  {
    keys: ['hello', 'hi', 'hey', 'help', 'start'],
    answer:
      "Hi! I can help with Pratham & Akshar, grants, scholarships (UG-FIR / KGMG), media & outreach, and how to reach the Nirmaan team. What would you like to know?",
  },
  {
    keys: ['pratham', 'phase 1', 'phase01', 'foundations'],
    answer:
      'Pratham is Phase 01 — a 6-month foundations program. Teams learn business, finance, and market strategy, with focus on idea validation, Business Model Canvas, and prototyping. Top performers advance to Akshar.',
  },
  {
    keys: ['akshar', 'phase 2', 'phase02', 'mvp'],
    answer:
      'Akshar is Phase 02 — 6 months focused on MVP development, pricing, sales, and marketing, with a pathway to the IITM Research Park Incubation Cell.',
  },
  {
    keys: ['funding', 'grant', 'money', 'financial', '₹', 'rupee', 'support'],
    answer:
      'Nirmaan supports teams through mentorship, workspace, and structured Pratham & Akshar phases. For current funding or fellowship details (UG-FIR / KGMG), use the Contact page or email the team — policy may change per NIRMAAN guidelines.',
  },
  {
    keys: ['ug-fir', 'ugfir', 'ug fir', 'founder-in-residence', 'fellowship', 'stipend'],
    answer:
      'UG Founder-in-Residence (UG-FIR) supports recent IIT Madras undergraduate founders with about ₹20,000/month for 6 months (extendable to 1 year), plus accommodation, mentorship, and Nirmaan resources. Preference for Nirmaan pre-incubated teams.',
  },
  {
    keys: ['kgmg', 'pg-fir', 'pgfir', 'scholarship', 'ganesh', 'phd', 'ms scholar'],
    answer:
      'The K. Ganesh & Meena Ganesh (KGMG) Scholarship / PG-FIR helps MS & PhD scholars commercialise research after synopsis: MS ~₹25K/month, PhD ~₹30K/month (6+6 months); MS(E) ~₹20K/month up to 2 years.',
  },
  {
    keys: ['apply', 'application', 'join', 'register', 'how to join', 'eligibility', 'pre-incubation', 'preincubation'],
    answer:
      'Apply to Nirmaan’s pre-incubation with your idea/team. Selection leads into Pratham, then Akshar for top teams. For fellowships (UG-FIR / KGMG), watch open calls from SIE / Nirmaan. Use Contact us on this site or email nirmaan@smail.iitm.ac.in.',
  },
  {
    keys: ['contact', 'email', 'mail', 'phone', 'address', 'reach'],
    answer:
      'Email: nirmaan@smail.iitm.ac.in · 1st Floor, Sudha & Shankar Innovation Hub, IIT Madras, Chennai – 600036, India. Use the Contact page on this site for a quick message.',
  },
  {
    keys: ['workspace', 'hub', 'space', 'office', 'cfi', 'infrastructure'],
    answer:
      'Nirmaan provides co-working at the Sudha & Shankar Innovation Hub, plus access to tools, mentorship, workshops, and networking — subject to availability.',
  },
  {
    keys: ['pia', 'agreement', 'pre-incubation agreement', 'contract'],
    answer:
      'The Pre-Incubation Agreement (PIA) formalises support between IIT Madras (NIRMAAN) and the team. Only teams that progress to the Akshar phase are eligible to sign the PIA — not at the initial Pratham stage.',
  },
  {
    keys: ['ip', 'intellectual property', 'patent', 'equity'],
    answer:
      'During pre-incubation, IP is owned by IIT Madras; after incorporation it may be licensed exclusively to the startup. If you incorporate outside the IITM ecosystem within 3 years of graduation, inform NIRMAAN — typically a minimum 1% equity (fully diluted) to IIT Madras applies.',
  },
  {
    keys: ['reimbursement', 'invoice', 'vendor', 'purchase'],
    answer:
      'Get prior approval from the manager for purchases, then email finance.ie@imail.iitm.ac.in (cc manager.ie@imail.iitm.ac.in) with proper invoices and justification.',
  },
  {
    keys: ['demo day', 'event', 'delta', 'expo'],
    answer:
      'Flagship moments include Nirmaan Demo Day and Delta Expo — showcases for student startups, investors, and industry. Check the Events and Media pages for recent coverage.',
  },
  {
    keys: ['mentor', 'mentorship', 'advisor'],
    answer:
      'Nirmaan offers faculty and industry mentors. See Mentors & Advisors (faculty and business mentors) on this site.',
  },
  {
    keys: ['podcast', 'innosphere', 'youtube', 'magazine', 'blog', 'medium', 'media'],
    answer:
      'Outreach: Innosphere Podcast on YouTube, Innosphere Magazine (two PDF editions on the Media page), and the Nirmaan blog on Medium. Open the Media page for links.',
  },
];

export const quickPrompts = [
  'How can Nirmaan help my startup idea?',
  'What support and funding is available?',
  'Am I eligible to apply?',
  'How do I contact you?',
];

export function answerFromKnowledge(input) {
  const q = (input || '').toLowerCase().trim();
  if (!q) {
    return 'Ask me about Pratham, Akshar, funding, scholarships, or contact details.';
  }

  let best = null;
  let bestScore = 0;
  for (const item of chatKnowledge) {
    let score = 0;
    for (const key of item.keys) {
      if (q.includes(key)) score += key.length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  if (best && bestScore > 0) return best.answer;

  return "I'm not sure about that yet. Try Pratham, Akshar, UG-FIR, KGMG, media/outreach, or contact. You can also use Contact us for a human reply.";
}