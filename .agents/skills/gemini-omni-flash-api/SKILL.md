---
name: gemini-omni-flash-api
description: Use this skill for generative video editing, text-to-video, image-referenced video generation, first-frame-to-video, first-and-last-frame transitions, and video extensions using Gemini Omni 1.1 Flash (gemini-omni-1.1-flash) via the official google-genai SDK.
---

# Gemini Omni Flash Skill

This skill uses the Gemini Omni 1.1 Flash model (`gemini-omni-1.1-flash`) to perform text to video generation, image to video generation (first frame and last frame transitions), video extensions (up to 40s), and video editing.

## Core capabilities

1. **Text to video**: Generating videos from a text prompt.
2. **First frame to video**: Generating videos from a starting image (`--first-frame`).
3. **First and last frame transition**: Generating videos interpolating between a starting image and a final image.
4. **Video extensions**: Extending existing videos by up to 10 seconds per turn, up to a total length of 40 seconds.
5. **Video editing and refinement**: Editing existing videos, applying stylistic changes.
