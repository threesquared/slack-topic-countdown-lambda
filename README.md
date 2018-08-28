# slack-topic-countdown-lambda

Lambda function to update a Slack channel topic counting down to a date

# Usage

Install dependencies and package up for Lambda:

* `$ npm install`
* `$ npm package`

Set the `SLACK_TOKEN` and `SLACK_CHANNEL` environment vars and edit the date and message in `index.js`

Then set up a [scheduled event](https://docs.aws.amazon.com/lambda/latest/dg/with-scheduled-events.html) to trigger
the Lambda.
