# Miscellaneous Notes

## Globally installed NPM tools

To see whih tools are globally installed call: ```npm list -g --depth 0```

**NOTE:** Apparently you no longer need to do ```npm install -g``` to install tools (globally).  You can us ```npx``` to run them without installation.  But the downside is that npx would use the latest version, whereas with the original way, you have it installed and you don't have to change it if needed.

The current tools are:
- ```create-react-app``` (creates the react project in the first place)
- ```create-react-component-folder``` (creates a new component in a subfolder of the "components" folder, creating that "components" folder if necessary) - note that you call it with ```crcf```
- ```eslint``` (JS static linter)
- ```eslint-plugin-react``` (linting for react)
- ```gh-pages``` (for deploymet to Github Pages from a build on the development machine)

Tools that were removed:
- ```add-react-component``` (as ```create-react-component-folder``` is newer and probably more flexible)