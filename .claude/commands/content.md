---
name: project:content
description: Generate or refine copy for pages. Use anytime during homepage or pages phase.
disable-model-invocation: true
---

# Generate Content

## Usage

- `/project:content` - Generate content for all pages needing it
- `/project:content about` - Generate content for specific page
- `/project:content --refine` - Improve existing content

## Process

1. Read intake/INTAKE.md for brand voice and key messages
2. Read existing page content if refining
3. Run Content Writer agent with context
4. Apply generated content to page files
5. Report what was generated/changed
