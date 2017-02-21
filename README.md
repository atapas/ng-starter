# ng-starter

ng-starter is a simple angularJS based project that can help you to get started with development quickly. This project is based on angular 1.x support.

# How to use it

The below section explains the ways this project could be used:

## Getting Started with development

To get you started you can simply clone the repository and install the dependencies:

### Prerequisites

* You need git to clone the ng-starter repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

* We also use a number of node.js tools to initialize and test the project. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

* We use [Sass](http://sass-lang.com/install) to keep our CSS Modular. Sass can be installed using ruby gem. Hence install ruby and add it to your os classpath. Once ruby is installed, install sass using the command `gem install sass' (You may have to use sudo in unix)

### Clone ng-starter

Clone the ng-starter repository using [git][git]:

```
git clone https://github.com/atapas/ng-starter.git
cd ng-starter
```

### Install Dependencies

We have preconfigured `npm`, so we can simply do:

```
npm install
```

Behind the scenes this will do lots house keeping jobs like,

* Downloading the dependencies.
* Running `grunt` job.
* Creating output js as `ng-starter.min.js`
* Starting an `http-server` and deploy the app.
* You must see a folder called `node_modules` that contains the npm packages for the tools we need

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/`.
If you are running the application in debug mode, please run the app at `http://localhost:8000/index-debug.html`.

### Build the Application

We use Grunt as Task runner and created two main grunt targets, i.e, 'grunt dev' and 'grunt prod' respectively.

```
grunt dev
```
Developers should run `grunt dev` command to build the application. If you are running the application using `npm start` command, you do not need 'grunt dev' at all.

If you are a developer who is contributing to this project, you should be doing followings:

* Browse to `ng-starter` folder. 
* Open a command prompt and do `npm start`. Wait for the application to get deployed and http-server to get started. You will be prompted with a url to access the app. You will have to use this url to launch the app using a web browser.

As long as the command prompt is running successfully, you will be able to change any code and just refresh the browser to see the changes.

```
grunt prod
```
For production build, you should run 'grunt prod' command to build the application. If you are just doing development, you no need to run this command ever.

## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend serving the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.

### Running the App during Development

The ng-starter project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `ng-starter/` directory.

### Packaging & Delivering as a node module(npm)

The `ng-starter` project supports packaging your code as a node module in form of `npm`. You have following ways of doing it:

* Execute the following commands - `grunt prod` will make the build and `npm pack` will create the tar ball package for you.

```
grunt prod & npm pack
```

* Alternatively, you can execute the scripts available for windows and linux operating systems.

Windows:
```
package.bat
```

Linux:
```
./package.sh
```

## Contact

For any more informaion please contact 
* [Tapas Adhikary](tapas.adhikary@gmail.com)

For detailed technical information on 

* AngularJS please check out http://angularjs.org/
* Twitter Bootstrap please check out http://getbootstrap.com/
* SASS please check out http://sass-lang.com/
* Bourbon please check out http://bourbon.io/

