# Webdriver Assesment

This project contains e2e test for authentication on a website

## How to run?

set on the project folder with your preferred console and run the following commands:

```npm install```

Once all the dependencies are installed:

```./node_modules/.bin/wdio wdio.conf.js --spec authentication```

if you are running on windows:

```."/node_modules/.bin/wdio" wdio.conf.js --spec authentication```

The console will display the logs for the test cases, if everything is OK, it should display something like this

```
Login Form
✓ should have empty fields
✓ should have the correct credentials
✓ should login with correct credentials
3 passing
```