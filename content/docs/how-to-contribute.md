---
id: how-to-contribute
title: How to Contribute
layout: contributing
permalink: docs/how-to-contribute.html
next: codebase-overview.html
---

Aviacommerce is an open source initiative of Avaibird technologies. We’re still working out the kinks to make contributing to this project as easy and transparent as possible, but we’re not quite there yet. In fact, we are a long way. Hopefully this document makes the process for contributing clear and answers some questions that you may have.

### Open Source development 

All the work on aviacommerce happens directly on [Github](https://github.com/aviacommerce/avia). Core contributors send pull requests which go through a process of review process.

### Branch Organisation

We try our best to keep the `master` branch as stable as possible. We only update it from time to time.

Most fresh code goes to `develop` branch and it should not be considered as a stable version. 

If you send a pull request, please do it against the `develop` branch. We aim to maintain stable branches for major versions separately.

### Versioning 

Avia follows semantic versioning. We release patch versions for bugfixes, minor versions for new features, and major versions for any breaking changes.

> Note: update changelog file link

Every significant change is documented in the changelog file.

### Bugs

#### Where to Find Known Issues
We are using GitHub Issues for our public bugs. We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn’t already exist.

#### Reporting New Issues
The best way to get your bug fixed is to open a bug with clear description and development environment.

### How to get in Touch

* Gitter: [#support channel](https://gitter.im/avia-commerce/support)
* Email: hello@aviabird.com

### Proposing a Change

If you intend to change the public API, or make any non-trivial changes to the implementation, we recommend filing an issue. This lets us reach an agreement on your proposal before you put significant effort into it.

If you’re only fixing a bug, it’s fine to submit a pull request right away but we still recommend to file an issue detailing what you’re fixing. This is helpful in case we don’t accept that specific fix but want to keep track of the issue.


### Your First Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/aviacommerce/avia/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) that contain bugs that have a relatively limited scope. This is a great place to get started.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.

If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take it over but you should still leave a comment.

### Sending a Pull Request

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation. We’ll do our best to provide updates and feedback throughout the process.

**Before submitting a pull request**, please make sure the following is done:

1. Fork [the repository](https://github.com/aviacommerce/avia) and create your branch from the `develop` branch.
2. Make sure you have added relevant tests for it. Anything you do which relates to code needs test.
3. Add relevant docs for your changes.
4. Ensure that test suite passes(`mix test`). Remember to run it inside umbrealla application.
5. Always format your code with `mix format` otherwise CI would fail.

### Contributions Prerequisits

* You have Elixir/Erlang installed.
* You are familiar with Git.


### Style Guide

We use inbuilt elixir formatter for code styling. This is without exception so far. We'll list anything if needed in this section in future.

### License
By contributing to Aviacommerce, you agree that your contributions will be licensed under its MIT license.

