---
date: 2026-02-18
tags:
- git
- architecture
- study
- antigravity
title: Git & Ag-OS Architecture Practical Review Manual
---

# 🛡️ Git & Antigravity-OS Dual-Track Architecture Practical Review

## 1. Core Architecture Design: Why the "Dual-Track" system?

When building Antigravity-OS, we faced a core contradiction:
*   **Privacy**: My journals (`000_Daily_Note`) and reflections (`Library_Study-Think`) are strictly personal and cannot be public.
*   **Publicity**: I want to publicly publish a selection of content (`800_Digital_Garden (Output)`) as a website to share with the world.

To resolve this, we adopted a physical isolation scheme called **"Nested Repository."**

### 📊 Architectural Diagram

```plaintext
[Antigravity-OS (Private Repository)]
├── .git/ (Private history)
├── Library_Study-Think/
│   ├── 000_Daily_Note/  🔒 (Secure)
│   ├── ...
│   └── 800_Digital_Garden (Output)/ 🌍
│       ├── .git/ (Public history - exists independently!)
│       ├── src/
│       ├── package.json
│       └── ...
└── Lab_Action/
```

**Why do this?**
1.  **Physical Isolation**: There is an outer large repository and an inner small repository. The outer `.gitignore` typically ignores the inner folder (or you manage it manually).
2.  **Permission Separation**:
    *   **Outer** (`Antigravity-OS`) -> Pushed to GitHub **Private** repository.
    *   **Inner** (`Digital-Garden`) -> Pushed to GitHub **Public** repository.
3.  **No Interference**: Any `git commit` you make in the inner folder (`800_...`) is only recorded in the inner `.git` and does not pollute the outer one.

---

## 2. Practical Operation Review: Step-by-Step Breakdown

This afternoon, we completed the initialization and publication process for the inner public repository. Here is a deep dive into each step.

### Phase 1: Base Construction (Init)

**Operational Commands**:
```bash
cd "Library_Study-Think/800_Digital_Garden (Output)"
git init
```

**What happened?**
Git created a hidden `.git` folder in the current directory.
*   **Before**: This folder was just ordinary files on your computer.
*   **After**: It became a "time capsule" monitored by Git, capable of recording all changes to files.

**Why change the name to main?**
```bash
git branch -M main
```
*   **Reason**: The default branch name in Git used to be `master`. However, to align with the global standard (which changed to `main` as seen on GitHub for technical and cultural reasons), we use `main`. New repositories on GitHub also default to `main`. Having `master` locally would create unnecessary ambiguity during push.

### Phase 2: Defense Works (.gitignore)

**Operation & Check**:
We confirmed the existence of a `.gitignore` file containing `node_modules/`.

**Reason**:
*   **Size Explosion**: `node_modules` contains thousands of tiny files and is massive.
*   **Meaningless**: This code consists of libraries downloaded by npm from the internet, not code you wrote. As long as `package.json` exists, anyone can reinstall them (`npm install`), so there's no need to store them in your Git.
*   **Git Crash**: If you don't ignore it, `git status` might hang or crash.

### Phase 3: Staging & Committing (Add & Commit)

**Operational Commands**:
```bash
git add .
git commit -m "feat: first launch of digital garden"
```

**Principle Analysis**:
This is the core Git trilogy:
1.  **Workspace**: Where you write code.
2.  **Staging Area** (`git add`): It's like picking out files and placing them in a "to-be-shipped" box.
3.  **Repository** (`git commit`): You seal the box, attach a tracking number (Commit ID), and save it permanently.

**Why two steps?**
Sometimes you modify 10 files but only want to commit 3 of them (perhaps the other 7 aren't finished). `git add` gives you the power to choose.

### Phase 4: Connecting to the Cloud (Remote Add)

**Operational Commands**:
```bash
git remote add origin https://github.com/wygg/digital-garden.git
```

**Analysis**:
*   **Remote**: An alias for the remote repository.
*   **Origin**: This is a Git convention representing the "source" or "default remote repository."
*   It's like saving that long URL as a contact named "origin" in your local address book.

### Phase 5: Ignition and Launch (Push)

**Operational Commands**:
```bash
git push -u origin main
```

**Analysis**:
*   **Push**: Upload local "commit records" to the cloud.
*   **-u (upstream)**: This is a "binding" action.
    *   **Result**: It tells Git, "From now on, whenever I type `git push` (without parameters), treat `origin`'s `main` branch as the default destination." It saves typing effort later.

---

## 3. Looking to the Future (Next Steps)

Your architecture is ready. The daily workflow is now:

1.  **Write Articles**: Write journals in Obsidian and tag them with `#public`.
2.  **Sync**: Run `python scripts/sync_garden.py`.
3.  **Publish**:
    ```bash
    cd "Library_Study-Think/800_Digital_Garden (Output)"
    git add .
    git commit -m "feat: new post"
    git push
    ```
4.  **Auto-Deployment**: Vercel monitors GitHub for changes and automatically builds the new website.

🎉 **Congratulations! You are now not just a writer, but an engineer in control of your own data flow.**
