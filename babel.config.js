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
            ]
        ],
        presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset']
    };
};
