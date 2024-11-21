'use strict';

/**
 * article controller
 */

// const { createCoreController, } = require('@strapi/strapi').factories;
// module.exports = createCoreController('api::article.article');

const { factories } = require('@strapi/strapi');

// module.exports = factories.createCoreController('api::article.article', ({ strapi }) => ({
//     async findOne(ctx) {
//         const { id, locale } = ctx.params;

//         const entity = await strapi.db.query("api::article.article").findOne({
//             where: { slug: id, locale },
//             populate: ["image"]
//         });

//         const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

//         return this.transformResponse(sanitizedEntity);
//     },
// }));


module.exports = factories.createCoreController('api::article.article', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const { locale } = ctx.query;

        const entity = await strapi.db.query("api::article.article").findOne({
            where: { slug: id, locale: locale },
            populate: ["image"]
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    },
}));
