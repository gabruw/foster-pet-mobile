module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false
            }
        }),
        assetPlugins: ['expo-asset/tools/hashAssetFiles']
    },
    resolver: {
        sourceExts: ['jsx', 'js', 'ts', 'tsx']
    }
};
