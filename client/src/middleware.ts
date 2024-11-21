// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
  // locales: ['ar', 'fr'],
  // defaultLocale: 'ar',
  // localeDetection: false
// });

// export const config = {
//   matcher: ['/', '/(ar|fr)/:path*']
// };

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|fr)/:path*']
};