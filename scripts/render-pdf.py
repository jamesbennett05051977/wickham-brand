#!/usr/bin/env python
"""Render brand-system.md -> wickham-brand-system.pdf with on-brand styling.
Uses python-markdown + PyMuPDF's Story engine. Run from the repo root:
    python scripts/render-pdf.py
"""
import os
import markdown
import fitz  # PyMuPDF

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "brand-system.md")
OUT = os.path.join(ROOT, "wickham-brand-system.pdf")

CSS = """
* { font-family: sans-serif; }
body { font-size: 10pt; color: #0F1729; line-height: 1.45; }
h1 { font-size: 20pt; color: #0E4F8B; margin: 4pt 0 8pt; }
h2 { font-size: 14pt; color: #0B3C6B; margin: 16pt 0 6pt;
     border-bottom: 2px solid #06B6D4; padding-bottom: 3pt; }
h3 { font-size: 11.5pt; color: #0E4F8B; margin: 12pt 0 4pt; }
p  { margin: 0 0 6pt; }
ul, ol { margin: 0 0 6pt; }
li { margin: 0 0 3pt; }
strong { color: #0B3C6B; }
code { font-family: monospace; font-size: 9pt; background: #eef4fb; color: #0B3C6B; }
pre { font-family: monospace; font-size: 8.5pt; background: #0A0F1C; color: #E2E8F0;
      padding: 8pt; margin: 0 0 8pt; border-radius: 4pt; }
table { border-collapse: collapse; width: 100%; margin: 0 0 10pt; font-size: 9pt; }
th, td { border: 1px solid #cbd5e1; padding: 4pt 6pt; text-align: left; vertical-align: top; }
th { background: #0E4F8B; color: #ffffff; }
hr { border: none; border-top: 1px solid #cbd5e1; margin: 12pt 0; }
a { color: #0E4F8B; }
blockquote { margin: 0 0 8pt; padding: 4pt 12pt; border-left: 4px solid #06B6D4;
             background: #eef4fb; }
.logo { margin: 0 0 10pt; }
"""

with open(SRC, "r", encoding="utf-8") as fh:
    md_text = fh.read()

body = markdown.markdown(md_text, extensions=["tables", "fenced_code", "sane_lists"])
header = '<p class="logo"><img src="web/lockup-light.png" width="240"></p>'
html = f"<html><head><meta charset='utf-8'></head><body>{header}{body}</body></html>"

story = fitz.Story(html=html, user_css=CSS, archive=fitz.Archive(ROOT))
writer = fitz.DocumentWriter(OUT)
mediabox = fitz.paper_rect("a4")
where = mediabox + (50, 45, -50, -45)

more, pages = 1, 0
while more:
    dev = writer.begin_page(mediabox)
    more, _ = story.place(where)
    story.draw(dev)
    writer.end_page()
    pages += 1
writer.close()
print(f"Wrote {OUT} ({pages} pages)")
