# basic-Node.js-Postman-App
## Requirements
Building the client library requires:
1.  Node.js [Installation][1]

[1]: https://nodejs.org/en/download/

> ⚠️  _Make sure that there is also added a variable to the PATH: [Node.js - Environment Setup][2]._
>
[2]: https://www.tutorialspoint.com/nodejs/nodejs_environment_setup.htm


## Installation
To copy the client to your computer copy link of the repository, open Command Prompt, go to the location where project will be copied and execute git clone command:
```shell
git clone https://github.com/OlhaLevko/basic-Node.js-Postman-App.git
```
Open the project folder via command prompt, for example:
```shell
cd basic-Node.js-Postman-App
```
Select the desired Collection in Postman, authenticate through "Get token." request and run the request that you want to provide in the Application.
If the request works, copy code from Postman:

![code.png](code.png)

In "Code snippet", proceed to the dropdown list with different programming languages, where "cURL" is set by default, and choose "NodeJs - Axios" from the list. There, copy the snippet without axios(config) promise to clipboard:

![copy.png](copy.png)

Open the .../app.js file with any text redactor and input your piece of code:

![input.png](input.png)

Install module axios in the project folder via Terminal:
```shell
npm install axios
```

Run the project in Terminal in the root folder of cloned app:
```shell
node app.js
```
If everything was done accordingly with provided steps, you will get the result printed in the command prompt.