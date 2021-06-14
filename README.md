# Gatsby Hallmark

This is an example of how Gatsby would implement the multiple team problem at Hallmark. With the power gatsby-themes it's possible to accomplish what you want.

In this example, I'm using a Monorepo to link all packages together. Hallmark wants a more manual release process where deploys need to go through Q&A. For that use case I would go for at least two repositories. One that contains the website (hallmark.com) and another one that contains all packages that are owned by seperate teams. Splitting the package monorepo into smaller chunks is up to you, it depends how you want to work.

## Intro

In this example I've created three sections:

- hallmark.com
- design-system
- hallmark-themes

### Hallmark.com

This will be the main website that will be built on gatsbyjs.com and be deployed on every change. We'll have an atomic deployment of all parts of the site. Every release, the team will need to bump package.json to get the correct version of their theme. This allows upgrading each section at a time or all at once.

### Design system

A React package that contains building blocks that's used by multiple teams to create their layouts. This

### Hallmark-themes

This is a collection of plugins that are owned by a team inside Hallmark. A theme is a gatsby mini-site that can run on its own. It can contain plugins, pages, .... In the end, everything is stitched together by the Hallmark.com package.

In the demo, the @hallmark/product (hallmark-themes/hallmark-product) package contains the product detail page. The @hallmark/category (hallmark-themes/hallmark-category) package contains the category page. They both use hallmark-plugin-sourcing to get the relavant GraphQL data.

## How to run the demo

Install all dependencies

```bash
yarn
```

Run the site

```bash
yarn develop
```
