# DENO INSTALLATION AND SETUP

### Command Line Installation Setup

Using Shell (macOS and Linux):

    curl -fsSL https://deno.land/x/install/install.sh | sh

Using PowerShell (Windows):

    iwr https://deno.land/x/install/install.ps1 -useb | iex

Using Scoop (Windows):

    scoop install deno

Using Chocolatey (Windows):

    choco install deno

Using Homebrew (macOS):

    brew install deno

Using Cargo (Windows, macOS, Linux):

    cargo install deno
    
### Direct Download

Deno binaries can also be installed manually, by downloading a zip file at

- https://www.github.com/denoland/deno/releases

After installation check in your command line using

    deno --version
    
Check whether you get the following output :

    deno 1.0.0
    v8 8.4.300
    typescript 3.9.2
    
### If you want to download Typescript manually (Optional)

    npm install -g typescript
    
    Make sure you have npm library installed for the above code to run
    
### Deno Basic Commands

- `deno --version` - For checking the version of Deno
- `deno help` - For Deno related help and actions
- `deno run` - To run the Deno code and make the server up

Use this extension for VSCode only 

- https://marketplace.visualstudio.com/items?itemName=ameerthehacker.deno-vscode

### Quicklinks 

- https://deno.land - Deno Official Website
- https://deno.land/std/ - Deno Standard Library
- https://deno.land/manual/ - Deno Setup Manual
- https://deno.land/x - Deno Third Party Modules

### Update Dependencies

In order to reload a module or all modules you have to use: --reload

For that module specifically:

    deno run --reload=https://deno.land/std/http/server.ts index.js

or just use --reload without any value to reload all modules:

    deno run --reload index.js

You can even select a couple of modules if you pass comma separated modules to --reload

    deno run --reload=module1,moduleN index.js

Or reload all std modules

    deno run --reload=https://deno.land/std index.js

You can use deno cache instead of deno run too. The former will just download the dependencies, while the former download & run the script.
    
    
