import * as Sentry from "@sentry/node";

export default {
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  integrations: [
    Sentry.expressIntegration()
  ],
  tracesSampleRate: 1.0,
};
