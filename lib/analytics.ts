// Declare global gtag and dataLayer for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

/**
 * Log a pageview to Google Analytics 4
 */
export const pageview = (url: string, gaId?: string) => {
  const targetId = gaId || GA_TRACKING_ID;
  if (typeof window !== "undefined" && typeof window.gtag === "function" && targetId) {
    window.gtag("config", targetId, {
      page_path: url,
    });
  }
};

/**
 * Log a custom event to Google Analytics 4
 */
export const event = (
  action: string,
  params: Record<string, string | number | boolean | undefined> = {}
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
};

/**
 * Log case study modal views
 */
export const trackCaseStudyView = (projectId: string, projectName: string) => {
  event("view_case_study", {
    project_id: projectId,
    project_name: projectName,
  });
};

/**
 * Log outbound link clicks (GitHub, LinkedIn, Storefronts, Resume)
 */
export const trackOutboundClick = (destination: string, label: string) => {
  event("click_outbound", {
    destination,
    label,
  });
};
