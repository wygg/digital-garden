---
title: Antigravity OS Bilingual Architecture Manual
date: 2026-02-19
tags:
  - Project/Antigravity
  - System/Architecture
  - i18n
---

# 🌌 Antigravity OS Bilingual Architecture Manual

> **Version**: 2.0 (i18n Edition)  
> **Date**: 2026-02-19  
> **Core Definition**: A personal digital life system based on the philosophy of "Unity of Knowledge and Action," hosted by an AI Agent, supporting automated bilingual (Chinese/English) publishing.

---

## 1. Physical Architecture

The system adopts a "Three-Tier Funnel" model to achieve automatic layering from private creation to global publishing.

```text
myAntigravity/ (Local Repository - Private)
├── .cursorrules           # 📜 AI Constitution: Rules for translation and publishing
├── Library_Study-Think/   # 🧠 Brain: Obsidian Knowledge Base (Private)
│   ├── 000_Daily_Note/    # Raw Journals: Chinese filenames allowed for fragmented thought
│   └── ...
├── scripts/               # ⚙️ Factory: Python automation scripts (e.g., sync_garden.py)
└── 800_Digital_Garden/    # 🌍 Presentation: Astro Starlight project (Public Repo)
    ├── src/content/docs/
    │   ├── (root)         # 🇨🇳 Chinese Main Site (e.g., garden/, blog/)
    │   └── en/            # 🇺🇸 English Site (Folder isolation)
    └── astro.config.mjs   # Core site configuration (i18n logic)
```

---

## 2. Internationalization (i18n) Core Implementation

To ensure global users can understand your thoughts, we have established a robust translation mapping.

### 2.1 Routing Rules
*   **Chinese (Root)**: `digital-garden.vercel.app/`
*   **English (Locale)**: `digital-garden.vercel.app/en/`

### 2.2 Site Configuration (Starlight)
Defined in `astro.config.mjs`:
*   **Multi-language Support**: Root path for Simplified Chinese, `/en/` path for English.
*   **Sidebar Translation**: Uses the `translations` field to ensure interface labels (e.g., "数字花园" $\leftrightarrow$ "Digital Garden") switch automatically with the language.

---

## 3. Automated Publishing Pipeline

The soul of Antigravity OS, transforming tedious "translation + mapping + deployment" into single commands.

### 3.1 Step-by-Step SOP
1.  **Write**: Write in Chinese in Obsidian, tagging with `#public` at the end.
2.  **Command**: Issue a "Publish Garden" command to the AI.
3.  **Sync**: AI runs the script to move eligible files to `800_Digital_Garden`.
4.  **Translate**: **[Agent Hosted]** AI automatically reads new Chinese content and generates natural English versions in the `en/` directory.
5.  **Deploy**: AI automatically executes Git Push, triggering Vercel cloud build and global CDN distribution.

---

## 4. Infrastructure

*   **Image Processing**: Integrated with **Cloudflare R2**. Local filenames are sanitized into English Slug links during upload.
*   **Search**: Powered by **Pagefind**. Supports full-text search in both languages (Cmd+K).
*   **Security**: Guarded by the **`.env`** wall. Keys are never stored in the repo; data sovereignty belongs to the user.

---

## 5. AI Agent Protocol (The Constitution)

Explicitly stated in `.cursorrules`:
- **Translation Obligation**: The Agent MUST sync the English version during publishing.
- **Sanitization Obligation**: Chinese characters are forbidden in output directories; they must be converted to English Slugs.
- **Layering Obligation**: Explicit exclusion of the private vault `999_Private_Vault`.

---

## 🌟 Summary

**Antigravity OS** is not just a blog; it is an "exoskeleton" for your thinking. You handle the emotional, natural Chinese reflection, while the system (AI) purifies, translates, and presents it to the world using top-tier web technology.

> **"Leave the dirty work to the AI, leave the deep thoughts to the human."**

---
#public
