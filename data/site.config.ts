/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE CONFIG — the only file with contact details and external URLs.
 *
 * Anything left as an empty string ("") is hidden everywhere on the site
 * instead of rendering a broken link.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Thirukkumaran R",
  nameDisplay: "THIRUKKUMARAN",
  shortName: "Thiru",
  role: "Full-Stack Developer",
  location: "Coimbatore, Tamil Nadu, India",
  url: "https://iamthirukkumaran.github.io/thiru-portfolio",

  email: "kumaranthiru478@gmail.com",

  /**
   * Google Analytics 4 Measurement ID (e.g. "G-XXXXXXXXXX").
   * Can also be overridden via the NEXT_PUBLIC_GA_ID environment variable.
   */
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "G-V7NH8X4JLN",

  /** Public phone number. Left empty on purpose: set it only if you want it on a public page. */
  phone: "", // on your resume as +91 99440 33696

  /**
   * Drop your resume PDF into /public (e.g. /public/thirukkumaran-resume.pdf) and
   * set the path here. While this is "", every "Resume" link stays hidden.
   */
  resumeUrl: "", // TODO: e.g. "/thirukkumaran-resume.pdf"

  links: {
    github: "https://github.com/iamthirukkumaran",
    linkedin: "https://www.linkedin.com/in/thirukkumaran-r-5752b71b4/",
    twitter: "", // optional — hidden while empty
    writing: "", // optional — hidden while empty (e.g. Substack or Medium)
    scrolla: "https://scrolla.in",
    ponkali: "https://ponkali.in/",
  },

  /**
   * Small dot next to the name in the header. Set `show: false` to remove it.
   * Deliberately worded as openness to conversation, not a freelance pitch.
   */
  availability: {
    show: true,
    label: "Open to new opportunities",
  },

  profileImage: {
    src: "/images/profile.jpg",
    alt: "Portrait of Thirukkumaran R",
  },
} as const;

export const mailto = site.email ? `mailto:${site.email}` : "";
