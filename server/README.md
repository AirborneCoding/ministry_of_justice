@MyProjects123456

npm install strapi-plugin-fuzzy-search --legacy-peer-deps
npm install git+https://github.com/<your-username>/strapi-plugin-fuzzy-search.git
npm view strapi-plugin-fuzzy-search versions



{
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/"
        }
    ]
}



{
    "version": 2,
    "builds": [
        {
            "src": "*.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/"
        }
    ]
}


{
  "version": 2,
  "builds": [
    { "src": "/server/src/index.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "index.js" }
  ]
}
