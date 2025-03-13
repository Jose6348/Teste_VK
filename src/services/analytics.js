import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'

export const initAnalytics = (app) => {
  // Initialize Sentry for error tracking
  Sentry.init({
    app,
    dsn: process.env.VUE_APP_SENTRY_DSN,
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(app),
      }),
      new Sentry.Replay({
        maskAllText: false,
        blockAllMedia: true,
      }),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  })

  // Initialize Google Analytics
  initializeAnalytics(process.env.VUE_APP_GA_ID)
}

export const trackEvent = (category, action, label = null, value = null) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', process.env.VUE_APP_GA_ID, {
      page_path: path,
    })
  }
}

export const trackError = (error, context = {}) => {
  Sentry.captureException(error, {
    extra: context,
  })
}

export const trackPerformance = (metric) => {
  if (window.gtag) {
    window.gtag('event', 'performance_metric', {
      metric_name: metric.name,
      value: metric.value,
      unit: metric.unit,
    })
  }
}

// Função para inicializar o Google Analytics
export function initializeAnalytics(measurementId) {
  // Adiciona o script do Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Inicializa o dataLayer e configura o gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', measurementId);

  // Expõe o gtag globalmente
  window.gtag = gtag;
} 