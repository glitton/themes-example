# Gatsby company

This is an example of how Gatsby would implement the multiple team problem at company. With the power gatsby-themes it's possible to accomplish what you want.

In this example, I'm using a Monorepo to link all packages together. company wants a more manual release process where deploys need to go through Q&A. For that use case I would go for at least two repositories. One that contains the website (company.com) and another one that contains all packages that are owned by seperate teams. Splitting the package monorepo into smaller chunks is up to you, it depends how you want to work.

## Intro

In this example I've created three sections:

- company.com
- design-system
- company-themes

### company.com

This will be the main website that will be built on gatsbyjs.com and be deployed on every change. We'll have an atomic deployment of all parts of the site. Every release, the team will need to bump package.json to get the correct version of their theme. This allows upgrading each section at a time or all at once.

### Design system

A React package that contains building blocks that's used by multiple teams to create their layouts. This

### company-themes

This is a collection of plugins that are owned by a team inside company. A theme is a gatsby mini-site that can run on its own. It can contain plugins, pages, .... In the end, everything is stitched together by the company.com package.

In the demo, the @company/product (company-themes/company-product) package contains the product detail page. The @company/category (company-themes/company-category) package contains the category page. They both use company-plugin-sourcing to get the relavant GraphQL data.

## How to run the demo

Install all dependencies

```bash
yarn
```

Run the site

```bash
yarn develop
```
