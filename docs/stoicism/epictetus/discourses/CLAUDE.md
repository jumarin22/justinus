# CLAUDE.md — Epictetus Discourses

This folder contains the full text of Epictetus' *Discourses* (Matheson translation, 1916), organized by book and chapter.

## Folder Structure

```
discourses/
  index.md              # Work overview page
  _category_.json       # Sidebar: label "Discourses", links to index
  book-{N}/
    index.md            # Book index with thematic summary
    _category_.json     # Sidebar: label "Book N", collapsed, links to index
    discourses-book-{N}-chapter-{N}.md
```

## Chapter File Template

```mdx
---
sidebar_position: {N+1}   # index.md is position 1; chapters start at 2
title: "Discourses — Book {N}, Chapter {N}"
sidebar_label: "Book {N}, Ch. {N}"
---

<div style={{textAlign: 'center'}}>

# Discourses

## Book {N} — Chapter {N}

### {Chapter Title}

</div>
*Translated by P.E. Matheson (Oxford: Clarendon Press, 1916)*


<details open>
<summary>Sonnet 4.6 Summary</summary>

## Sonnet 4.6 Summary

{AI-generated summary}

</details>

<details open>
<summary>Text</summary>

## Text

{Full chapter text}

</details>
```

## Book Index Template

```mdx
---
title: "Discourses — Book {N}"
sidebar_position: 1
---

<div style={{textAlign: 'center'}}>

# Discourses

## Book {N}

</div>

*Translated by P.E. Matheson (Oxford: Clarendon Press, 1916)*

<details open>
<summary>Sonnet 4.6 Summary</summary>

## Sonnet 4.6 Summary

{AI-generated thematic summary of the whole book}

</details>
```

## `_category_.json` Template (per book)

```json
{
  "label": "Book {N}",
  "position": {N},
  "collapsed": true,
  "link": {
    "type": "doc",
    "id": "stoicism/epictetus/discourses/book-{N}/index"
  }
}
```

## AI Summary Convention

- The `<summary>` label should match the model that generated it (e.g., `Sonnet 4.6 Summary`)
- Book index summaries are long-form thematic analyses covering the book's major threads
- Chapter summaries are concise — key argument, supporting examples, conclusion
- Both use `<details open>` so they render expanded by default

## Notes

- Python helper scripts (`add_summaries_b1.py`, etc.) may exist locally for batch generation — not committed
- `dep.txt` is a local scratch file — not committed
- Books 1–4 are complete as of 2026-05
