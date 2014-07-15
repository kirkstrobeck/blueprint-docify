
![](http://cl.ly/WYzj/Blueprint-Concept2%20copy.jpg)


# Blueprint docify

**Autogenerate testable and pretty API docs**


### TL;DR

**Add your API spec as `api.apib` in the root of your repo and push!**

It will make great API docs for each branch that has an API blueprint ([`.apib`](http://apiblueprint.org/)). Your documents will be available at `http://org.github.io/repo/branch`. See the [branches](https://github.com/renewablefunding/blueprint-docify/branches) on this repo and thier related docs:

***These are for visual purposes only, do not read as spec***

- http://renewablefunding.github.io/blueprint-docify/gist-fox-api/
- http://renewablefunding.github.io/blueprint-docify/real-world-api/
- http://renewablefunding.github.io/blueprint-docify/simplest-api/


### Getting started

1. Login to Github as yourself

2. [Create a team](https://github.com/orgs/your-org/new-team) on your organization named `apibot` with [admin access](http://cl.ly/WTMu) to the repos you want to docify. This team will help to limit access by being intentional about what repos are added. ie. [renewableapibot](https://github.com/renewableapibot) for this repo.

3. Create a new [Github](https://github.com/) account for your *api bot* (ie. [renewableapibot](https://github.com/renewableapibot)). If you're using Google email, append the first part of your email with *+bot*, like *name+bot@domain.com* so you can verify your account, which is a prerequisite to publishing [Github pages](https://pages.github.com/).

4. Create the [orphan](http://stackoverflow.com/a/4288660) branch `gh-pages` on your repo.
  - Use `git checkout --orphan gh-pages`
  - Delete all of the files in the directory (except `.git` obviously)
  - Add an empty file with the name `.gitignore`. (run `touch .gitignore`)
  - Commit, then push to `gh-pages` with `git push --set-upstream origin gh-pages`

5. Login to Github as the bot

6. Create a new [Shippable](https://www.shippable.com/) account as the bot ([login with Github](http://cl.ly/WTQH)). Add your repo on the [settings](https://www.shippable.com/settings) page.

7. Copy the Shippable [deployment key](https://www.shippable.com/settings/keys) and add it as an [SSH key](https://github.com/settings/ssh) in Github (not under the repo, under the bot’s account).


### Equip your repo

1. Login to Github as yourself

2. Pull down this repo and copy the following files to the repo you want to equip:

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

3. Modify [line 63](https://github.com/renewablefunding/blueprint-docify/blob/master/blueprint-docify/compile_docs.sh#L63) of `blueprint-docify/compile_docs.sh` in the repo you want to equip.

Now, because of `shippable.yml`, you should be ready to rock. Shippable should build out your API documentation on push. If you don’t want to run Shippable on a specific push, include `[skip ci]` in your commit message.


### Why we made it

[API blueprint](http://apiblueprint.org/) is a great new [flavor](http://daringfireball.net/projects/markdown/) of [Markdown](http://daringfireball.net/projects/markdown/) for clear API spec. We were using [Apiary](http://apiary.io/) for a bit, it’s a great place to get started with `apib`, but it fell short as a production-ready tool for any stack.

Problems with Apiary or any other tool like it:

- No way to signify if the response or endpoint is *a hopeful mock*, *old and should be deleted*, *in production*, *in beta*, *wont do*, etc.
- Can’t [test against](https://github.com/apiaryio/dredd) API spec with custom conditional notes, etc. What stage is each endpoint, etc.
- Maintain *n* number of apiary’s per-branch * per-repo * per-org where *n* is way too many (more than 1). Where is the documentation with these links? How do you handle elegant naming conventions when it is a shared namespace, ie. `http://docs.notelegant.apiary.io/`
- It’s is slow, sometimes down, etc. (it’s another external dependency)
- Is Github our source of truth? or where do I look? Is that up to date? Where’s the changelog!
- Please show me the [diff](https://github.com/renewablefunding/blueprint-docify/compare/2109e40f1cfc0a50ca87cdc08389f7ef93cb5037...6dfb5bea8f74ed0e76a069264662c530c6bf0ff6) between this API and that one (different branches)
- Apiary only lets me write one file per repo! I have other branches, each with a unique API spec, because the API is in development!


### Notes

- Do not use `/` in your branch name if you want it to publish (ie. `feature/awesome`). If you want to fix this V1 issue then please do, it sounds like a great PR to me.
- This repository follows [git flow](https://github.com/nvie/gitflow) as a [branching model](http://nvie.com/posts/a-successful-git-branching-model/).


### FAQ

##### Q: Can a private repo write a public Github page?
Private repos will write [public pages](http://stackoverflow.com/questions/10748082/private-pages-for-a-private-github-repo) :D

##### Q: So how does this publish multiple branches docs at once? multiple github pages?
It actually pulls gh-pages from your repo to the CI and overwrites the folder with the name of the branch you are pushing to the CI from

##### Q: So one rendered branch at a time?
Yah, when you update an api spec and push, it writes the docs for that branch

##### Q: What if there’s already an api bot on my repo?
If you already have an api bot in your Github organization (someone else followed these steps already), then simply give it access to the required repo(s) and try to add it to the same CI account (doesn’t make sense to spread out CI implementations).

##### Q: What is this API I see in the examples?
We used the example API blueprint from [API Blueprint Examples](https://github.com/apiaryio/api-blueprint/tree/master/examples)

##### Q: how many emails you'll get?
I believe its just for the Github account confirmation. if the email is in the bot’s public profile on Github, Shippable will grab it and use that email for pass/fail messages.


### Whats coming

- [Dredd](https://github.com/apiaryio/dredd) integration
- [API mock](https://github.com/localmed/api-mock)
- A Postman integration, either [apiary2postman](https://github.com/thecopy/apiary2postman) or [Blueman](https://github.com/pixelfusion/blueman)


### Thank you!

- API blueprint [contributors](https://github.com/apiaryio/api-blueprint/graphs/contributors)!
- [Aglio](https://github.com/danielgtaylor/aglio) - An API Blueprint renderer with theme support that outputs static HTML
- Graphic hacked from [google image search](https://www.google.com/search?q=blueprint&espv=2&source=lnms&tbm=isch&sa=X&ei=v2PAU5PjG6PiiwLM4oD4DQ&ved=0CAYQ_AUoAQ&biw=1360&bih=1084#facrc=_&imgdii=_&imgrc=XwAScrKiGeTnNM%253A%3BzagLXKX-nWP_aM%3Bhttp%253A%252F%252Fsparknodemedia.com%252Fwp-content%252Fuploads%252F2012%252F07%252FBlueprint-Concept2.jpg%3Bhttp%253A%252F%252Fsparknodemedia.com%252Fportfolio%252Fsummer-spectacular-2012-blueprint%252F%3B1200%3B776)

<hr>

*A [renewable](https://renewfund.com) solution*
