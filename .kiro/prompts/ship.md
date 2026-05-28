---
description: Commit and push changes — optionally on a new branch
---

Ask the user: "Do you want to commit on the **current branch** (`{{ current_branch }}`) or create a **new branch**?"

- If new branch: create a descriptive branch name based on the changes, check it out, then commit and push with `-u origin <branch>`
- If current branch: commit all changes and push to origin

Use a concise, conventional commit message based on what changed.
