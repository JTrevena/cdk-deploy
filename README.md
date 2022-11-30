# CDK Deployment Example

This repo is set up as an example of using AWS CDK alongside github actions to deploy a static site to an s3 bucket. 

</br>

Two jobs are defined in the GitHub actions file `.github/workflows/main.yml`:
- The first job, `build_app`, builds the react app in `example-react-app` to the `build/` folder. It then archives this directory for use in the second job.
- The second job, `aws_cdk_deploy`, downloads the archived `build/` directory and then runs the cdk deployment process.

</br>

The steps taken during the cdk deployment are determined by the contents of `bin/cdk-deploy.ts`.</br>
In this particular project, this file gives instructions for the setup of an s3 bucket containing the contents of `build/` with public view and static site hosting enabled. 

</br>

In this way, changes made to the content of this repo are reflected automatically in the deployed version of the site.
