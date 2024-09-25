import * as Sentry from '@sentry/remix'

Sentry.init({
	dsn: 'https://da3088821fd80a440bfff6dc0cf9e2aa@o4506059059167232.ingest.us.sentry.io/4508013614465024',
	tracesSampleRate: 1,
	autoInstrumentRemix: true,
})
