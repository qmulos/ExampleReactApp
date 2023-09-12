# How to get started:

first, clone this repository to your computer. 

Navigate to the base directory of this repository, your path should look something 
like this: `some/base/directory/ExampleReactApp`. You should stay here unless otherwise directed.

Now run
     `yarn install`
  to install the required packages for the app

Then,
     `yarn run build`
 This compresses all the code and outputs it into a `/stage` directory. This lets Splunk run the app more easily, and allows your changes to be shown in Splunk. 

To link our app to Splunk, first we need to move into our package folder. From the base directory, just run 
`cd packages/example-react-app`

Now that we're here, we need to actually link it, and Splunk has given us a nice tool for this.  
`yarn run link:app`
**Warning: This will not work unless you have $SPLUNK_HOME set. To do this, follow the tutorial [here](https://dev.splunk.com/enterprise/tutorials/quickstart_old/setsplunkhome/)**

 The last piece of this puzzle is to make sure Splunk doesn't cache any of our Javascript, and reloads with our changes every time. To do this, run this command:

    `echo -e '[settings]\njs_no_cache = True\ncacheEntriesLimit = 0\nminify_js = False' >> $SPLUNK_HOME/etc/system/local/web.conf` 

*(again, this will not work if $SPLUNK_HOME is not set, so make sure that is set)*

Now, restart Splunk

Finally, go back to the base directory (`cd ../..`), and run this final command:

    yarn run start

Now you can open Splunk, select ExampleReactApp from the list of apps, and see our app running. 

## Tips and Tricks:

-  If you are having issues seeing changes update in Splunk, try reloading outside the cache (Shift-Cmd-R in Chrome)
- If you add a package, make sure you run `yarn install` again in the base directory, otherwise the app will throw errors at you
- Adding pages (and reload-less navigation) is tricky. If you got that far, first of all congratulations! Reach out to me @jack on Slack and I can help you through it. 


