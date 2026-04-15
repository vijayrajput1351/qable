module.exports = {
  apps: [
    {
      name: 'vijay-nodejs',
      script: 'app.js',
      node_args: '--require ./instrumentation.js',
      cwd: '/home/vijay/Documents/apm/nodejs',
      env: {
        MW_API_KEY: 'ammeyevndgfnuexkyplledmgwredjvyuyqum',
      },
    },
  ],
};
