This repo is set up as an example of using AWS CDK alongside github actions to deploy a static site to an s3 bucket. 

`bin/cdk-deploy.ts` gives instructions for the setup of an s3 bucket containing the contents of `dist/` with public view and static site hosting enabled. 
A github action (defined in `.github/workflows/main.yml`) runs the cdk deployment process according to the instructions in the above file.

In this way, changes made to the content of this repo is reflected automatically in the deployed version of the site.
