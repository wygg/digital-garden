---
title: 2026-02-17 Antigravity Garden Knowledge Management & URL Strategy
date: 2026-02-18
tags: [public]
---

# 🗂️ Antigravity Garden Knowledge Management & URL Strategy

**Version**: 1.0
**Date**: 2026-02-17
**Core Philosophy**: Balancing **Internal Order** vs. **External Networking**.

---

## 1. Core Contradiction Analysis (The Architect vs. The Gardener)

In Personal Knowledge Management (PKM), two opposing needs exist:
*   **Archiving**: Strict entry based on time, like a traditional library, for easy retrieval.
*   **Presenting**: Interconnected by themes, like Wikipedia, for easy exploration.

## 2. Solution: Hybrid Model

We adopt a dual-layer structure of **"Physical Hierarchical Storage + Logical Flat Publishing."**

### 2.1 Input Side (Obsidian) — Physical Hierarchy
Maintain your existing **Year/Month/Day** folder structure to provide a stable sense of psychological security.

```text
Library/Daily_Note/
├── 2026_Notes/        [Level 1: Year Container]
│   ├── 2026_02/       [Level 2: Month Archive]
│   │   ├── 2026-02-17 Thoughts on Spring Festival.md
│   │   └── ...
```

**Advantages**:
*   **Low Cognitive Load**: Just open the current month's folder every day; no need to think about "which theme to put it under."
*   **Scalability**: Whether you write hundreds of notes a year, the directory remains clear.

### 2.2 Processing Side (Sync Script) — Logical Mapping
Using a Python script for "Dimensional Reduction":

1.  **Recursive Scanning**: The script dives into all subfolders to find notes tagged with `#public`.
2.  **Flattened Transfer**: It ignores the original hierarchy and extracts everything to the root directory of the Digital Garden.
3.  **Renaming Magic**: Converts filenames into URL-friendly formats (see the Slug section below).

### 2.3 Output Side (Astro Garden) — Networking Display
On the final website, folders are no longer shown. Instead, we display:
*   **Timeline**: Automatically sorted by the `date` field.
*   **Knowledge Graph**: Displaying relationships via bidirectional links.
*   **Topic Index**: Clustered by `tags`.

---

## 3. URL Strategy Details — The Slug

**Definition**: A Slug is a short string that uniquely identifies an article in a URL (e.g., `my-first-post`).

### 3.1 Why Slug Matters
*   **Readability**: `wygg.com/garden/digital-garden-manifesto` is more meaningful than a string of garbled Chinese characters.
*   **Stability**: Chinese URLs often become long, truncated, or garbled (like `%E4%B8%80...`) when copied and pasted.
*   **SEO**: Search engines prefer semantic English URLs.

### 3.2 Generation Rules

The script follows these priorities during synchronization:

1.  **Manual Specification (Best)**:
    *   Include `slug: my-custom-url` in the Frontmatter of the Obsidian note.
    *   **Recommended for**: Important project documents, SOPs, long-form essays (e.g., "One Person University Plan").
    
2.  **Automatic Conversion (Default)**:
    *   If no Slug is specified, the script automatically converts the Chinese title to **Pinyin** or **English translation** (LLM integration in the future).
    *   **Recommended for**: Daily journals, fragmented thoughts.
    
    *Example Conversion*:
    *   Original Title: `2026-02-17 Thoughts on Digital Garden.md`
    *   Slug: `2026-02-17-thoughts-on-digital-garden`

---

## 4. Action Items

1.  **Keep Habits**: Continue writing in the `2026_Notes/2026_02` folder.
2.  **Tagging**: Add `#public` to any note you want to publish.
3.  **Add Slug**: For articles you're particularly proud of, manually add `slug: your-english-title` at the beginning.
4.  **Leave it to the Script**: Entrust the rest of the moving and renaming work to `sync_garden.py`.
