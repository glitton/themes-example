# Gatsby Themes Example

This is an example of how Gatsby would implement an architecture where multiple teams can independently build and deploy portions of a website. With the power of gatsby-themes it's possible to accomplish this.

In this example, I'm using a Monorepo to link all packages together. When a company needs to have an indepenent release process where deploys need to go through Q&A and such, this use case would use at least two independent repositories. The first contains the main website (company.com) and the second contains all packages that are owned by the individual teams.

Splitting the package monorepo into smaller chunks is also possibl and will depend on how you want to your teams to work.

## Intro

In this example there are three sections:

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
