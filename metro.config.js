module.exports = {
    resolver: {
        sourceExts: ['jsx', 'js']
    },
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false
            }
        }),
        assetPlugins: ['expo-asset/tools/hashAssetFiles']
    }
};
