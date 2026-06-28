---
title: "How I Squash Commit"
description: "Three ways to squash Git commits: interactive rebase, git reset, and merge squash."
date: "2025-01-14"
categories:
  - git
tags:
  - git
  - squash
  - rebase
  - version-control
published: true
readingTime: '3 min'
---

## Original

- Using `git rebase -i` then change pick to squash for all commit other than the
  last one. This will result squashed commit in last commit with the same
  subject/commit message but in the commit description there will be all commit
  message of the squashed commit
- Using `git reset --soft HEAD5~` will result with changes in staged editor,
  then run `git commit` and all previous commit messages of squashed commits
  will be gone and can be filled with new commit message
- Last one, using `git merge --squash target-branch`. First create new branch
  from `source branch` of `target branch`. Then run
  `git merge --squash target-branch`, will result with changes in staged editor,
  but when run `git commit`, all previous commit messages will appear with all
  the attributes (hash, author, date, message). Just change subject/commit
  message to `feat(feature-name): squashed commit of x feature`

## Updated

### 1. **Squash Commits Using Interactive Rebase**

- Run `git rebase -i HEAD~N`, where `N` is the number of commits you want to
  squash.
- In the interactive rebase interface, change the word `pick` to `squash` (or
  `s` for short) for all commits except the last one.
- This will combine all the selected commits into a single squashed commit.
- The commit message of the squashed commit will retain the message from the
  last commit, while the full commit history (messages) from the squashed
  commits will appear in the commit description.

### 2. **Squash Commits Using Git Reset**

- To reset your branch and squash commits manually, use
  `git reset --soft HEAD~N`, where `N` is the number of commits you want to
  squash.
- This will move the `HEAD` back by `N` commits, leaving all changes from those
  commits staged for commit.
- Run `git commit` to create a new commit with a clean message.
- **Note**: This method erases all previous commit messages, so you need to
  manually write a new commit message.

### 3. **Squash Commits Using Git Merge with --squash**

- First, create a new branch from the target branch (e.g.,
  `git checkout -b feature/squash target-branch`).
- Next, run `git merge --squash source-branch`.
  - This will stage all changes from the source branch, but no commit will be
    created yet.
- When you run `git commit`, Git will automatically include the commit messages
  from the squashed commits, including details such as the commit hash, author,
  date, and message.
- Modify the commit message subject to something like:

  `feat(feature-name): squashed commit of X feature`

- This gives you a single commit that represents all the changes from the source
  branch.

## What I learned from those 3

- **Interactive Rebase**: Best for keeping the commit history, preserving
  messages from squashed commits in the description.
- **Git Reset**: Useful for completely rewriting commit history with a new
  message, as all old commit messages are discarded.
- **Git Merge with `--squash`**: Useful for merging changes from one branch into
  another while squashing them into a single commit, with the full commit
  history in the description.
