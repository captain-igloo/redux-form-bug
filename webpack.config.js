
module.exports = {
    mode: 'development',
    entry: ['./src/index.ts'],
    resolve: {
        modules: ['node_modules', '.'],
        extensions: [".js", ".ts"],
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
        }],
    },
};
