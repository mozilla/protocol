---
title: Contributing
order: 2
---

We've done our best to make the barrier of entry to contributing code
to Protocol as low as possible. You can even do a lot of stuff directly
through GitHub without actually installing Protocol locally, but if you
want to do any complex coding work you'll eventually need to set up a
local development environment.

<ul class="mzp-u-list-styled">
  <li>You'll need a GitHub account.
    <ul>
      <li>https://github.com/join</li>
      <li>https://help.github.com/articles/set-up-git/</li>
    </ul>
  </li>
  <li>You'll need to install Git.
    <ul>
      <li>https://git-scm.com/downloads</li>
      <li>https://git-scm.com/book/en/v2/Getting-Started-Installing-Git</li>
    </ul>
  </li>
  <li>You'll need to install Node and npm.
    <ul>
      <li>https://docs.npmjs.com/downloading-and-installing-node-js-and-npm</li>
    </ul>
  </li>
</ul>

With those prerequisites met:

<ol class="mzp-u-list-styled">
  <li>Fork the [Protocol GitHub repository](https://github.com/mozilla/protocol/)
      to your personal account.
    <ul>
      <li>https://help.github.com/articles/fork-a-repo/</li>
    </ul>
  </li>
  <li>Clone that remote repo to your computer.
    <ul>
      <li>https://help.github.com/articles/cloning-a-repository/</li>
    </ul>
  </li>
  <li>On your computer’s command line, navigate to the folder to which you just
      cloned the Protocol repo.</li>
  <li>Within that folder, run `npm start`. This will install all the dependencies
      and launch a local server.</li>
</ol>

You now have a local instance of the Protocol site running on your
computer. You can load the site in a browser at http://localhost:3000.
As you edit files they will update automatically and you can see your
changes "live" on your local development environment.

<ol class="mzp-u-list-styled">
  <li>Make whatever edits you need to make, ideally in a fresh branch.
    <ul>
      <li>https://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging</li>
      <li>https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/</li>
    </ul>
  </li>
  <li>When you're done, commit your changes and push them to your GitHub remote repository.
    <ul>
      <li>https://help.github.com/articles/pushing-to-a-remote/</li>
    </ul>
  </li>
  <li>Submit a pull request from your fork to the Mozilla repo.
    <ul>
      <li>https://help.github.com/articles/creating-a-pull-request-from-a-fork/</li>
    </ul>
  </li>
</ol>

You can also [make some edits directly on github.com](https://help.github.com/en/articles/editing-files-in-another-users-repository)
without installing the site locally. For that you don't even have to install
Git or Node, you just need a GitHub account. This is fine for updating docs or
minor tweaks that don’t need extensive testing or review, but for any serious
coding you really should have a local instance running so you can see your work
as it progresses.

### Requesting New or Updated Components

If you would like to request changes to a component or a new component be added to Protocol,
please [submit an issue on Github](https://github.com/mozilla/protocol/issues) using the appropriate
issue template. Please make sure to fill out this template as thoroughly as possible,
as this will help the team triage effectively.

### Reporting Bugs

To report an error you’ve discovered in Protocol, [submit an issue on Github](https://github.com/mozilla/protocol/issues)
with a detailed description of the error and steps to reproduce. If possible,
include a link to a live example and/or a screenshot of the bug in effect. Also
be sure to mention the browser (and version) and operating system.

You should search for similar issues in case it’s already been reported. In
some cases a bug may have been fixed but the fix may not have been deployed, so
it’s a good idea to search through closed issues as well.


