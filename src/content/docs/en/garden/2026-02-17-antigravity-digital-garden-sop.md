---
title: 2026-02-17 Antigravity Digital Garden Architecture & SOP
date: 2026-02-18
tags: [public]
---

# 🌌 Antigravity Digital Garden Architecture & SOP: From Blog to Digital Living Entity

**Version**: 1.0
**Date**: 2026-02-17
**Status**: In Progress
**Core Goal**: To build a "Cyborg-style" personal digital life system, achieving a perfect separation between "heavy weaponry production" (local) and "lightweight presentation" (mobile).

---

## 1. Core Concept Upgrade: The Garden
*   **More than just a Blog**: Move away from "timeline" narratives toward "knowledge network" narratives.
*   **Bi-directional Linking**: Like neural networks, allow knowledge points to interconnect.
*   **Growth Mechanism**: Enable the publishing of "seeds" (stubs) that grow as thoughts deepen, rather than just finished products.

## 2. Architectural Design: Antigravity OS (The Stack)

A futurist workflow where AI Agents are deeply involved, eliminating the need for constant VS Code interaction.

*   **🧠 Brain (Writing & Thinking)**: **Obsidian**
    *   The most powerful local Markdown editor for deep thinking and note entry.
    *   Maintaining a "WYSIWYG" thinking environment.
*   **🛠️ Factory (Coding & Processing)**: **Antigravity + Claude Code**
    *   **Antigravity (Google)**: Chief architect and commander. Responsible for project architecture, file handling, and environment configuration.
    *   **Claude Code (Anthropic)**: The special forces. Responsible for writing specific scripts and generating code snippets.
*   **🌍 Presentation (Presentation)**: **Astro Digital Garden**
    *   **Engine**: Astro (extremely lightweight + static generation).
    *   **Styling**: Tailwind CSS (responsive + minimalist design).
    *   **Features**: Native support for Obsidian `[[WikiLinks]]` and integration of a Knowledge Graph.
*   **📱 Control (Mobile Command)**: **Discord + OpenClaw** (Future planning)
    *   Mobile console for triggering remote publishing and recording inspiration.

---

## 3. Physical Architecture

Adopting a **"Double Buffer"** mechanism to ensure publishing security.

```text
myAntigravity/ (Local Repository)
├── .git/                  # (Root Git) Private history, strictly non-public
├── Library/               # 📚 Knowledge Base (Obsidian Vault)
│   ├── Inbox/             # Collection box
│   ├── One Person University/ # Project documents
│   │
│   └── 🟢 Public_Staging/ # [Buffer A]: Staging area
│       # This is an Obsidian folder.
│       # Purpose: Acts as a temporary helipad for "to-be-published" content.
│       # Operation: Drag notes to be published here or tag with #public for script fetching.
│
6. └── 🚀 DigitalGarden/      # [Buffer B]: Public Astro project
7.     # This is an independent Astro project and a separate Git repo
8.     # GitHub: wygg/digital-garden (Public)
9.     ├── .git/              # (Public Git) Public history
10.    ├── src/
11.    │   └── content/
12.    │       └── garden/    # Sanitized .md files (secrets removed, links converted)
13.    ├── public/
14.    │   └── images/        # Public images
15.    └── astro.config.mjs   # Site configuration
```

---

## 4. Standard Operating Procedure (SOP) — The Workflow

### Phase 1: Select — In Obsidian
1.  Write notes in `Library`.
2.  When deciding to publish, move it to `Library/Public_Staging/`.
3.  **Security Check**: Confirm no private keys, passwords, or unsuitable private emotions are included.

### Phase 2: Sync & Review — In Terminal
1.  **Call Antigravity**: Execute the sync script.
    *   *Antigravity Action*: Scan Staging area -> Sanitize sensitive info -> Convert `[[WikiLinks]]` format -> Transfer images -> Write to `DigitalGarden`.
2.  **Start Preview**:
    ```bash
    cd DigitalGarden
    npm run dev
    ```
3.  **Human Audit**: Open browser to `http://localhost:4321`.
    *   Check: Is the formatting correct? Are images showing? Are links working?
    *   **This is the last line of defense.**

### Phase 3: Deploy — After verification
1.  **Commit Code**:
    ```bash
    cd DigitalGarden
    git add .
    git commit -m "garden update: [summary of changes]"
    git push origin main
    ```
2.  **Wait for Launch**: GitHub Actions auto-build,生效 in 1-2 minutes globally.

---

## 5. Initial Construction Checklist

- [ ] **Infrastructure**:
    - [x] Create `Library/Public_Staging` directory.
    - [x] Rename and initialize `PublicGarden` as `DigitalGarden`.
- [ ] **Core Feature Development**:
    - [ ] Configure `astro.config.mjs` for `[[WikiLinks]]`.
    - [ ] Develop `sync_garden.py` (sync script).
    - [ ] Design minimalist theme (Tailwind).
- [ ] **Visual Components**:
    - [ ] Integrate Knowledge Graph (Graph View).
    - [ ] Implement Backlinks panel.
