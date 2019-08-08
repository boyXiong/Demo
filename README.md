【译】使用 React，TypeScript 和 Webpack 开始一个项目
原文：Getting Started with React TypeScript and Webpack
作者：Grant
译者：博轩
我会通过这篇文章，为大家讲述，如何使用 React，TypeScript 和 Webpack 来构建一个项目。

开始
这是一篇关于如何使用 React，TypeScript 和 Webpack 来构建一个非常基础的项目的教程。您可以继续阅读，或者直接在 github 上面查看示例代码。

译注：create-react-app 已经提供了关于 TypeScript 开箱即用的支持，也可以使用 react-scripts 或者 react-app-rewired 完成对于 Webpack 配置的扩展。本文也只是聊一聊如何从 0 构建一个项目，大家了解一下就好 🤣
设置项目
为你的项目创建一个文件夹
mkdir your-folder-name && cd your-folder-name && npm init --yes复制代码
为项目安装 React 和 React-DOM 的依赖
npm install react && npm install react-dom复制代码
根据我们的项目配置需求，我们需要 TypeScript
npm install typescript --save-dev复制代码
安装 React 和 React-DOM 的类型
npm install @types/react --save-dev && npm install @types/react-dom --save-dev复制代码
接下来，我们可以初始化我们的 TypeScript 项目。您应该 tsconfig.json 文件被创建。
tsc --init复制代码
打开 tsconfig.json，之后添加一个 include
数组 compilerOptions 。这将告诉 TypeScript 在哪找到我们的代码。
{
    "compilerOptions": {
    },
    "include":[ 
        "./src/**/*"
    ]
}复制代码
现在创建一个 src 文件夹，并在里面创建一个 App.ts 文件。
export class App
{
    constructor()
    {
        console.log("Hello app!");
    }
}复制代码
测试 TypeScript 是通过 tsc 命令在终端中运行编译。如果成功，您应该看到 src 文件夹下面出现 App.js 的文件。完成后，我们删除 .js 文件，继续后续操作。
让 TypeScript 和 React 一起工作
现在，让我们看看 TypeScript 是否可以编译 React 文件。

让我们更新 tsconfig.json 文件，内容如下。
{
    "compilerOptions": {
        "target": "es5", /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */
        "lib": ["es5", "es6", "dom"], /* Specify library files to be included in the compilation. */
        "module": "commonjs", /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
        "jsx": "react", /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
        "sourceMap": true, /* Generates corresponding '.map' file. */
        "outDir": "./dist/", /* Redirect output structure to the directory. */
        "removeComments": true, /* Do not emit comments to output. */
        "noImplicitAny": true, /* Raise error on expressions and declarations with an implied 'any' type. */
        "allowSyntheticDefaultImports": true, /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
        "esModuleInterop": true, /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
        "preserveConstEnums": true
    },
    "include": [
        "./src/**/*"
    ]
}复制代码
为了测试 TypeScript 是否可以转换 React 文件，我们将在 src 文件夹中添加一个新文件 Main.tsx 。
import * as React from 'react';
import { App } from './App';

export interface IMainProps
{
    app: App;
}

export class Main extends React.Component<IMainProps, {}>
{
    public render(): JSX.Element
    {
        return (
            <>
                <h1>Hello main</h1>
            </>
        );
    }
}复制代码
在终端运行 tsc ，您现在应该看到生成了一个 dist文件夹，切该目录下有一个 Main.js 文件，这意味着 TypeScript 现在也可以处理 React TypeScript 文件！（.tsx）
整合 Webpack
现在，我们需要将 TypeScript 和 React 结合在一起开发。接下来，我们会使用 Webpack 进行打包，并在浏览器中提供服务。

首先，我们按照Webpack 官方文档 在本地安装 Webpack 。

在终端运行以下命令
npm install webpack --save-dev && 
npm install webpack-cli --save-dev && 
npm install webpack-dev-server --save-dev && 
npm install awesome-typescript-loader --save-dev && 
npm install html-webpack-plugin --save-dev复制代码
现在，除了 Webpack ，我们还安装了另外4个开发依赖。

Webpack-cli - 在终端提供有用的 Webpack 命令。
Webpack dev server - 为我们的应用提供服务端的支持，如果我们修改代码，可以帮我们刷新浏览器的页面。
Awesome Typescript Loader - 使用 tsconfig.json 帮助 Webpack 编译我们的 TypeScript 代码。
HTML Webpack Plugin - 简化HTML文件的创建，为 Webpack 提供打包服务。
让我们在根目录创建 webpack.config.js 文件。
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/App.ts'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html"
        })
    ]
};复制代码
代码解析
我们的入口对象 entry 包含 App.ts 的文件路径。
入口对象 entry 还包含 verder 数组，React 和 React-Dom 是我们唯一的库，所以我们在这里添加它们。如果要添加其他库，则应将其添加到此，以便 Webpack 了解项目中所需要的依赖。
output 对象告诉 webpack 在哪里打包我们的应用程序，当前的例子是在 dist 文件夹里面。
在 module 下我们添加了 awesome-type-script-loader。
在 plugins 数组下，我们使用 HtmlWebPackPlugin 添加了 index.html 源文件。压缩后的 html 文件将放在我们的 dist 文件夹中，同时引用我们打包后的js文件。
接下来，新创建一个 index.html 文件并将其添加到我们的src文件夹中。并确保<div id="app"></div>已被添加在 index.html 文件中。这是我们的React应用程序将要渲染的位置。

打开 App.ts 并在文件的最底部添加 new App() ;
export class App
{
    constructor()
    {
        console.log("Hello app!");
    }
}

new App();复制代码
现在，使用终端，在项目的根目录下，运行：
node_modules/.bin/webpack-dev-server --mode development复制代码
你现在应该会有一个成功的构建，并在 http://localhost:8080/ 可以看到 Web 服务已经启动。
检查开发控制台，您还应该在控制台中看到我们的日志：
“Hello app！”
使用更多的 React
现在我们已经完成了React，TypeScript 和 Webpack的组合，让我们看一个更加实用一些的 React 示例。

创建一个 Main.tsx 文件：
import * as React from 'react';
import { App } from './App';

export interface IMainProps
{
    app: App; // Reference to our App.ts class
}

export class Main extends React.Component<IMainProps, {}>
{
    constructor(props: IMainProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {
        return (
            <>
                Main app
            </>
        );
    }
}复制代码
打开 App.ts 文件，并粘贴如下内容：
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Main } from './Main';

export class App
{
    constructor()
    {
        this.render();
    }

    private render(): void
    {
        ReactDOM.render(React.createElement(Main, { app: this }), document.getElementById("app"));
    }
}

new App();复制代码
代码解析
使用 Main.tsx 类作为渲染的 React UI 的入口。
我们将对App类的引用作为 props 传递。可能会在以后的App类中执行或访问这些内容。
通过 app id 属性定位 index.html 文件。这也将是React呈现的位置。
现在，如果我们回到浏览器，我们应该在页面上看到

“Main app”
。当我们更改了一些代码，您的浏览器应该已经自动重新加载。现在 React 已经出现在我们的网页中了。
整合发布
使用 ./node_modules/.bin/webpack-dev-server --mode development 运行项目不是那么友好。我们可以使用更加便捷的 node 命令。

修改 package.json 如下：

{
    "scripts": {
        "dev": "webpack-dev-server --mode development",
        "build": "webpack --mode production"
    }
}复制代码
我们现在可以在终端上运行上面的命令：

npm run dev 就是我们之前输入的内容：./node_modules/.bin/webpack-dev-server --mode development
npm run build 将告诉 webpack 编译我们的应用程序用于生产。它将压缩并打包所有内容到我们的 dist 文件夹中，准备上传到网络
