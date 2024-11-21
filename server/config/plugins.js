module.exports = ({ env }) => ({

    // ImageKit
    upload: {
        config: {
            provider: "strapi-provider-upload-imagekit",
            providerOptions: {
                publicKey: env('IMAGEKIT_PUBLIC_KEY'),
                privateKey: env('IMAGEKIT_PRIVATE_KEY'),
                urlEndpoint: env('IMAGEKIT_ENDPOINT'),
                params: {
                    folder: env('IMAGEKIT_FOLDER')
                }
            }
        }
    },

    //* fuzzy search
    "fuzzy-search": {
        enabled: true,
        config: {
            contentTypes: [
                {
                    uid: "api::article.article",
                    modelName: "articles",
                    transliterate: true,
                    fuzzysortOptions: {
                        characterLimit: 500,
                        threshold: -1000,
                        // limit: 10,
                        keys: [
                            {
                                name: "title",
                                weight: 100,
                            },
                            {
                                name: "content",
                                weight: 100,
                            },
                        ],
                    },
                },
                {
                    uid: "api::publication.publication",
                    modelName: "publications",
                    fuzzysortOptions: {
                        characterLimit: 500,
                        threshold: -1000,
                        keys: [
                            {
                                name: "title",
                                weight: 100,
                            },
                            {
                                name: "category",
                                weight: 50,
                            },
                        ],
                    },
                },
            ],
        },
    },

});
