// pm2启动配置文件，模块化项目中此文件需为cjs结尾，否则pm2无法识别
module.exports = {
    apps: [
        {
            name: 'NuxtAppName',
            port: '3001',
            exec_mode: 'cluster',
            instances: '1',
            script: './.output/server/index.mjs',
        }
    ]
}
