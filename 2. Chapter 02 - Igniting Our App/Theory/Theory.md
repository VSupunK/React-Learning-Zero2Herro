# _Chapter 02 - Igniting Our App_

## Q: What is `npm`?

A: `npm` (Node Packege Manager) is the world's largest software registry, used by developers to manage and share code packages for JavaScript applocations. It allows easy installation and management of project dependencies. `npm init` initializes a new project by creating a `package.json` file.

## Q: What is `Parcel/Webpack`? Why do we need it?

A: `Parcel` and `webpack` are module bundlers that he;p bundle JavaScript codes and assets, minify, and optimize them for production. These tools help reduce loading time, combine multiple files, and remove unnecessary code elements like whitespace, comments, etc., while keeping functionality intact(without changing).

### installation commands:

- Install:

```
npm install -D parcel
```

`-D` is used for development and as a development dependency.

- Parcel Commands :
  - For development build:
  ```
  npx parcel <entry_point>
  ```
  - For production build :
  ```
  npx parcel build <entry_point>

## Why is `.parcel-cache`?

The `.parcel-cache` folder is used by Parcel to store cached information about your project's files and assets. Its purpose is to speed up subsequent builds by reusing previously processed files, avoiding the need to recompile everything from scatch. This reduces the overall build time significuntly, especially for large projects, by using cashed results from earlier compilations. 

## Q: What is `npx`?

A: `npx` is a Node.js package runner that allows you to execute npm packages without installing them globally on your machine. It's useful for running a package temporarily. 

## Q: What is the difference between `dependencies` vs `devDependencies`?

A: 
- `dependencies`: Packages needed to run rhe app in production (e.g. React).

- `devDependencies`: Packages only required for local evelopment (e.g., Parcel, testing tools).

## Q: What is Tree Shaking?

A: `Tree Shaking` also known as `dead code elimination`, is a feature that automatically removes unused code from the final bundle, reducing the size of the output file. 

## Q: What is Hot Module Replacement?

A: `Hot Module Replacement(HRM)` allows modules to be updated in the browser without a full page reload, preserving application state and speeding up development. 

## Q: List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.

- `Zero Configuration`: Parcel requires no setup to get started.

- `Hot Module Replacement(HMR)`: Changes in code are reflected without reloading the page. 

- `Tree Shaking`: Automatically removes unused code from the final bundl. 

- `Minification`: Compresses code to reduce bundle size.

- `Code Splitting`: Automatically splits the code into smaller chunks to load resources as needed.

and some of more cool features of Parcel are:

- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different Build for dev and prod bundles

## Q: What is `.gitignore`? What should we add and not add into it?

A: `.gitignore` is a file that specifies which files or derectories Git should ignore. You should add files that are not necessary for source control like n`ode_modules`, .`parcel-cache`, and build artifacts. Avoid adding files critical for the project's structure or configuration. 

## Q: What is the difference between `package.json` and `package-lock.json` files?

A: `package.json` contains metadata and project dependencies, while `package-lock.json` locks the versions of dependencies to ensure reproducible builds.

## Q: Why should I not modify `package-lock.json`?

A: Modifiying `package-lock.json` can break dependency resolution and cause inconsistencies across environment. This file is auto-generated and ensures precise control over dependency versions. 

## Q: What is `node_modules`? Is it a good idea to push that on Git?

A: `node_modules` contains installed packages, and it is not recommended to push it to Git due to its large size and ease of regeneration via `package.json`.

## Q: What is the `dist` folder?

A: The `dist` folder contains the production-ready, minified version of your application. This folder is used for deployment purposes.

## Q: What is `browserlists`?

A: `Browserslist` is a tool that allows specifying which browsers a project should support, ensuring compatibility across targeted browsers.

## Q: Read about: `^-caret` and `~-tilde`
`Caret (^)`: Allows updates for patches and minor versions.
`Tilde (~)`: Allows updates only for patches, locking the minor version.