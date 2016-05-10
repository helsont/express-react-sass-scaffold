# Express React Gulp Sass Scaffold
This project has React setup with gulp to automatically watch your ES6 JSX files
and browserify them. Sass is also gulped. I use Jade as the templating system
to add props to server-side rendered code.

## Usage
Once you've run `npm install`, go ahead and run `gulp` to browserify the files.
You'll see two files have been created: `public/src/bundle.js` and
`public/styles/styles.css`.

The first file is the exported React file. The second is the compiled Sass file.

Run `npm run start` to start the server. Notice in the console that the
client-side React code is being executed too.

This is a very basic project but it's enough to remove the stress of trying to
figure out the madness that is setting up React with server-side rendering.
