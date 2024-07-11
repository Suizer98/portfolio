# Sui Zer's Portfolio

This is a Sublime Text Editor style with Mariana themed portfolio website.
My portfolio can be accessible on:
https://suizer98.github.io/portfolio/

Tech stacks:

![Tech stacks](https://skillicons.dev/icons?i=react,js,tailwind,css,html,github,githubactions)

## Local Development

### To install all dependencies from `package.json`

If you have `nvm` or `npm` available, simply run:

```
npm install
```

### Runs the app in the development mode

```
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### To fix format lintings for all codes using `prettier`

Usual terminal commands such as:

```
npm run format
```

## Github Pages Deployment

### Using `gh-pages` package

1. You need to make sure you install `gh-pages`:

```
npm install --save-dev gh-pages
```

2. Add these lines to your `package.json` as below:

```
  "scripts": {
    ....
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
```

3. After that, run command below will create a new branch called `gh-pages` as well as on your github repo:

```
npm run deploy
```

4. Finally when you go to **Settings** > **Pages** > **Branch**, you choose `gh-pages` branch to deploy.

5. You don't need to modify the branch manually, make sure you run this command everytime when you want to publish the latest results.
