// import { getRequestConfig } from 'next-intl/server';

// export default getRequestConfig(async () => {
//     // Provide a static locale, fetch a user setting,
//     // read from `cookies()`, `headers()`, etc.
//     const locale = 'ar';

//     return {
//         locale,
//         messages: (await import(`../../messages/${locale}.json`)).default
//     };
// });


import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});