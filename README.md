# About it

## Step 1.

AWS Amplify to deploy static resources or a React Front-end

## Step 2.

AWS Lambda - A serverless function that can be invoked and scaled individually on-demand- is triggered based on a specific event

## Step 3.

Amazon API Gateway is used to create a RESTful API that will allow us to make calls to our Lambda function from our Front-end application. API Gateway will act as a middle layer between the React client/Front-end we created in Step 1 and the serverless back-end we created in Step 2. Now, we can trigger our lambda function with an API call.

## Step 4(a).

Created a DynamoDB table that enable our Lambda function to store data in it.It has consistent performance at any scale and there are no servers to manage when using it.

## Step 4(b).

Additionally, we will use the AWS Identity and Access Management (IAM) service to securely give our services the required permissions to interact with each other. Specifically, we are going to allow the Lambda function we created in Step 2 to write to our DynamoDB table, created in Step4, using an IAM policy(A document that defines what AWS resources an entity (e.g., service, user, group) has access to). In order to do this, AWS SDK was used (JavaScript) from our Lambda function.
So, in Step 4(a) and 4(b, )we added two services: DynamoDB (for storage) and IAM (for managing permissions securely). Both are connected to our Lambda function, so that it can write to our database.

## Step 5.

In this step, we modify our static website, created in Step 1, to invoke ourAPI and display custom inputted text.
