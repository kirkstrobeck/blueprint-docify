
# Blueprint docify

Autogenerate API blueprint documentation with CI for Github pages access.


### Getting started

Make great docs for each branch with an API blueprint on your Github repo.

See the [branches](https://github.com/renewablefunding/blueprint-docify/branches) on this repo and the following related docs:

- http://renewablefunding.github.io/blueprint-docify/gist-fox-api/
- http://renewablefunding.github.io/blueprint-docify/real-world-api/
- http://renewablefunding.github.io/blueprint-docify/simplest-api/

1. [Create a team](https://github.com/orgs/your-org/new-team) on your organization named `apibot` with [admin access](http://cl.ly/WTMu) to the repos you want to docify. This team will help to limit access by being intentional about what repos are added.

2. Create a new [Github](https://github.com/) account for your *api bot* (ie. [renewableapibot](https://github.com/renewableapibot)). Use your email with *+bot*, like *name+bot@domain.com* so you can verify your account, which is a prerequisite to publishing [Github pages](https://pages.github.com/).

3. Add *api bot* write access (optional, recommended to limit repo access). Limit the repo access by adding it to an *api bot* team, but remember when configuring the team you need to allow [admin access](http://cl.ly/WTMu) (not sure why).  ie. [renewableapibot](https://github.com/renewableapibot) for this repo. Use your email with a `+bot`, like `name+bot@domain.com` so that way you can recieve the verification email (account verification is required for Github pages deploy).

4. Log in to github as the bot.

5. Create the [orphan](http://stackoverflow.com/a/4288660) branch `gh-pages` on your repo.
  - Use `git checkout --orphan gh-pages`
  - Delete all of the files in the directory (except `.git` obviously)
  - Add an empty file with the name `.gitignore`. (run `touch .gitignore`)
  - Commit, then push to `gh-pages` with `git push --set-upstream origin gh-pages`

6. Create a new [Shippable](https://www.shippable.com/) account as the bot ([login with Github](http://cl.ly/WTQH)). Add your repo on the [settings](https://www.shippable.com/settings) page.

7. Copy the Shippable [deployment key](https://www.shippable.com/settings/keys) and add it as an [SSH key](https://github.com/settings/ssh) in Github.


### Equip your repo

1. Pull down this repo and copy the following files to the repo you want to equip:

    ```bash
    blueprint-docify
    package.json
    shippable.yml
    ```

    If you already have a `package.json` then run the following:

    ```bash
    npm install aglio@1.14 --save
    npm install async@0.9 --save
    npm install lodash@2.4 --save
    npm install node-fs@0.1 --save
    ```

2. Modify [line 63](https://github.com/renewablefunding/blueprint-docify/blob/master/blueprint-docify/compile_docs.sh#L63) of `blueprint-docify/compile_docs.sh` in the repo you want to equip.

Now you should be connected to Shippable and it should build out your API documentation on push. If you don’t want to run Shippable on a specific push, include `[skip ci]` in your commit message.

Add your API spec as `api.apib` in the root of your repo and push!

Your documents will be available at `http://org.github.io/repo/branch`, ie. http://projectdx.github.io/apib/master


### Overview

[API blueprint](http://apiblueprint.org/) is a great new [flavor](http://daringfireball.net/projects/markdown/) of [Markdown](http://daringfireball.net/projects/markdown/) for clear API spec. We were using [Apiary](http://apiary.io/) for a bit, it’s a great place to get started with `apib`, but it fell short as a production-ready tool for any stack.

Problems with Apiary or any other tool like it:

- No way to signify if the response or endpoint is *a hopeful mock*, *old and should be deleted*, *in production*, *in beta*, *wont do*, etc.
- Can’t [test against](https://github.com/apiaryio/dredd) API spec with custom conditional notes, etc. What stage is each endpoint, etc.
- Maintain *n* number of apiairys per-branch * per-repo * per-org where *n* is way too many (more than 1). Where is the documentation with these links? How do you handle elegant naming conventions when it is a shared namespace, ie. `http://docs.notelegant.apiary.io/`
- It’s is slow, sometimes down, etc. (it’s another external dependency)
- Is github our source of truth? or where do I look? Is that up to date? Where’s the changelog!
- Please show me the diff between this API and that one (different branches)
- Apiary only lets me write one file per repo! I have other branches, each with a unique API spec, because the API is in development!


### FAQ

- Private repos will write [public pages](http://stackoverflow.com/questions/10748082/private-pages-for-a-private-github-repo) :D
- We used the example API blueprint from [API Blueprint Examples](https://github.com/apiaryio/api-blueprint/tree/master/examples)
- If you already have an api bot in your Github organization (someone else followed these steps already), then simply give it accesss to the required repo(s) and try to add it to the same CI account (doesn’t make sense to speard out CI implementations).

<hr>

Thank you API blueprint [contributors](https://github.com/apiaryio/api-blueprint/graphs/contributors)!

*A [renewable](https://renewfund.com) solution.*
