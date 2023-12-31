# Curt's Vite + Vue 3 Starter

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/curtgrimes/curt-vite-vue3-starter?file=src/App.vue&title=Curt's%20Vue%20Starter)

## Features

- [Vite](https://vitejs.dev/)
- [Vue 3](https://vuejs.org/)
- [pnpm](https://pnpm.io/)
- [vue-router](https://router.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- [VueUse](https://vueuse.org/)
- Auto-importing with [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [Material Design Icons](https://icon-sets.iconify.design/mdi/) with [unplugin-icons](https://github.com/antfu/unplugin-icons) (see [StarterMessageLink.vue](src/components/StarterMessageLink.vue) for an example)
- [eslint-config from @antfu](https://github.com/antfu/eslint-config)
## Install and Use

### Option 1: Quick start with Stackblitz

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/fork/github/curtgrimes/curt-vite-vue3-starter?file=src/App.vue&title=Curt's%20Vue%20Starter)

### Option 2: Clone locally

```
# Clone the repository
$ git clone https://github.com/curtgrimes/curt-vite-vue3-starter.git

# Open it
$ cd curt-vite-vue3-starter

# Install packages
$ pnpm install

# Build and serve locally
$ pnpm dev
```

### Option 3: Create GitHub template

Create a new GitHub repository with this template: https://github.com/curtgrimes/curt-vite-vue3-starter/generate

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur if installed)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

### Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
