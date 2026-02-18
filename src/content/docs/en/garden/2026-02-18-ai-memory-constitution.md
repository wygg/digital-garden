---
date: 2026-02-18
tags:
  - Life/Journal
  - AI/Agent
  - Project/Antigravity
title: "Fighting AI Amnesia: On the Constitution and Heritage of Antigravity OS"
---

# 📅 2026-02-18 Fighting AI Amnesia: On the Constitution and Heritage of Antigravity OS

## 🎯 Focus
- [x] Solve the issue of AI forgetting project specifications due to loss of dialogue context.
- [x] Establish the "Constitution" of Antigravity OS (`.cursorrules`).
- [x] Solidify Obsidian journal templates to standardize human-AI collaboration.

## 🧠 Study
> Today's Inputs:

During the process of using AI to assist in building Antigravity OS, I discovered a **fatal hidden danger**:
AI memory is based on a "Context Window." Once I close the dialogue window or the dialogue becomes too long, the AI becomes a "newborn baby," completely forgetting the architectural specifications we painstakingly agreed upon (e.g., journals should be in `Library_Study-Think`, publishing depends on `#public`).

If I have to re-educate the AI every time about what "One Person University" is, then this is not called "Antigravity"—it's called "Increasing Gravity."

## 💡 Think
> Today's Reflections:

How to make a **Fluid Intelligence** obey a **Crystallized Order**?

The answer is not to rely on the AI's conscience or memory, but on **Code as Law**.
We need to bury a "stone tablet" in the project, engraved with unshakable laws. No matter which generation of AI takes over this project, the first thing it must see is this tablet.

Thus, we introduced **`.cursorrules` (AI Constitution)**.

This is not just a configuration file; it is a **soul backup of Antigravity OS**. It defines:
1.  **Physical Laws**: Where are files stored? (Path specifications)
2.  **Interaction Laws**: How to publish? (Sync script + Git Push)
3.  **Core Values**: What can be public? (Only those with `#public` can be)

## 🌟 Summary
> Today's Full Panoramic Review:

Today, we completed an epic **"Four-Dimensional Leap"** in the construction of Antigravity OS:
1.  **Technical Dimension**: Opened the automated deployment pipeline from GitHub to Vercel, achieving code in the cloud.
2.  **Architecture Dimension**: Established a dual-track physical isolation of "Private Large Library + Public Sub-Library," solving the contradiction between security and sharing.
3.  **Cultural Dimension**: Deeply reflected on the history of renaming Git `Master` to `Main`, integrating the concept of technical equity into engineering practice.
4.  **Protocol Dimension**: Promulgated `.cursorrules` (Human-AI Protocol) and Obsidian templates, using the "Constitution" to fight AI amnesia and ensure the long-term vitality of the system.
5.  **Architecture Dimension (Architecture & File Sovereignty)**: Clarified the flow and purification process of files in Antigravity OS. To combat garbled characters and uncertainty in URLs, we designed a strict "Three-Level Folder Division of Labor":
    *   **The Womb**: `Library_Study-Think` (Obsidian Vault). Allows **Chinese filenames**, which is the natural language of human thought. Permissions are fully private; only files with the `#public` tag are eligible for "birth."
    *   **The Buffer**: `801_Public_Staging (Buffer)`. As the **middle layer** of the publishing pipeline, its core function is **Filename Sanitization**. Through `sync_garden.py`, it forces the conversion of Chinese filenames into **URL-friendly English Slugs**, ensuring absolute stability in static site building. It is the bridge connecting "Sensory Thinking (Chinese)" and "Rational Code (English)."
    *   **The Output**: `800_Digital_Garden (Output)`. As the Astro frontend project codebase, it contains only purified Markdown with English filenames. **Astro should only read pure data from the Buffer**, thereby ensuring zero errors in the build process. This tiered architecture is a key design to prevent system entropy: **leave the dirty work to the Python script, and let the frontend framework only be responsible for elegance.**

This is a complete reconstruction from code to soul.
