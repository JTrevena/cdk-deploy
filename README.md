This project is an example of deploying a static site to an s3 bucket using AWS CDK. Currently, the deployment can be performed locally using the CLI; the goal of this project is to integrate this step into github actions

## Commands to deploy locally

* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
