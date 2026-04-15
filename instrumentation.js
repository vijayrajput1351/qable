const tracker = require('@middleware.io/node-apm');
tracker.track({
  serviceName: "vijay-nodejs",
  accessToken: "ammeyevndgfnuexkyplledmgwredjvyuyqum",
  customResourceAttributes: {
    "vcs.repository_url": "https://github.com/vijayrajput1351/qable",
    "vcs.commit_sha": "98a709d",
    "app.version": "1.0.0",
  },
});
