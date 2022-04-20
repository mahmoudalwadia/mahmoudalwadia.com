export const GA_TRACKING_ID = process.env.GA_MEASUREMENT_ID ?? '';

export const gTagPageView = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

type GTagEventProps = {
  action: string;
  category: string;
  label: string;
  value?: string;
};

export const gTagEvent = ({
  action,
  category,
  label,
  value,
}: GTagEventProps) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
