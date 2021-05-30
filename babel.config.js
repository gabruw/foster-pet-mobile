module.exports = function (api) {
    api.cache(true);

    return {
        env: {
            production: {
                plugins: ['transform-remove-console']
            }
        },
        plugins: [
            ['@babel/plugin-proposal-optional-chaining'],
            [
                'module-resolver',
                {
                    root: ['./src']
                }
            ],
            [
                'module:react-native-dotenv',
                {
                    safe: false,
                    path: '.env',
                    blacklist: null,
                    whitelist: null,
                    moduleName: '@env',
                    allowUndefined: true
                }
            ]
        ],
        presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset']
    };
};
