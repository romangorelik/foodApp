module.exports = {
  apps: [{
    name: 'recipedb1',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-157-37-47.compute-1.amazonaws.com',
      key: '~/Desktop/romanana.pem',
      ref: 'origin/master',
      repo: 'git@github.com:romangorelik/foodApp.git',
      path: '/home/ubuntu/recipedb1',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
