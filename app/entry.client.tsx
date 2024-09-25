import * as Sentry from '@sentry/remix'
import { RemixBrowser, useLocation, useMatches } from '@remix-run/react'
import { startTransition, useEffect } from 'react'
import { hydrateRoot } from 'react-dom/client'

Sentry.init({
	dsn: 'https://da3088821fd80a440bfff6dc0cf9e2aa@o4506059059167232.ingest.us.sentry.io/4508013614465024',
	tracesSampleRate: 1,

	integrations: [
		Sentry.browserTracingIntegration({
			useEffect,
			useLocation,
			useMatches,
		}),
		Sentry.replayIntegration({
			maskAllText: true,
			blockAllMedia: true,
		}),
	],

	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1,
})

if (ENV.MODE === 'production' && ENV.SENTRY_DSN) {
	void import('./utils/monitoring.client.tsx').then(({ init }) => init())
}

startTransition(() => {
	hydrateRoot(document, <RemixBrowser />)
})
