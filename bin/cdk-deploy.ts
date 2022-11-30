#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment"
import { Construct } from 'constructs';

export class S3BucketStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket2', {
        websiteIndexDocument: 'index.html',
        publicReadAccess: true,
      });
      
      new s3deploy.BucketDeployment(this, 'DeployWebsite', {
        sources: [s3deploy.Source.asset('./example-react-app/build')],
        destinationBucket: websiteBucket,
      });
  }
  
}

const app = new cdk.App();
new S3BucketStack(app, 'S3BucketStack');
app.synth();
