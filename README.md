
# Blueprint docify

Autogenerate API blueprint documentation with CI for Github pages access.

### Getting started

Make great docs like [THIS]() for each branch on your Github repo.

1. Create a new [Github](https://github.com/) account for your *api bot* and give it write access (optional, recommended to limit repo access). Limit the repo access by adding it to an *api bot* team, but remember when configuring the team you need to allow [admin access](http://cl.ly/WTMu) (not sure why).  ie. [renewableapibot](https://github.com/renewableapibot) for this repo. Use your email with a `+bot`, like `name+bot@domain.com` so that way you can recieve the verification email (account verification is required for Github pages deploy).

2. Log in to github as the bot.

3. Create a new [Shippable](https://www.shippable.com/) account as the bot ([login with Github](http://cl.ly/WTQH)). Add your repo on the [settings](https://www.shippable.com/settings) page.

4. Copy the Shippable [deployment key](https://www.shippable.com/settings/keys) and add it as an [SSH key](https://github.com/settings/ssh) in Github.

### Equipping your repo

Copy the following files to your repo:

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
