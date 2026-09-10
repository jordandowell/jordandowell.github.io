# Dowell Research Group website

The lab website uses Hugo 0.135.0 (extended) and the existing pinned Hugo Blox modules. It publishes to GitHub Pages when changes are pushed to `main`. The deployment and BibTeX import workflows are unchanged.

## Everyday editing

Edit Markdown files on GitHub or locally. Text between the first two `---` lines is page metadata; text below it is the page body.

| Content | Location |
| --- | --- |
| Homepage headline and introduction | `content/_index.md` |
| Research themes | `content/research/<project>/index.md` |
| People, roles, biographies, links | `content/authors/<person>/_index.md` |
| Portraits | `content/authors/<person>/avatar.jpg` |
| Publications | `content/publication/<paper>/index.md` |
| Lab photo album | `data/lab_life.json` and `assets/media/lab-life/` |
| News | `content/post/<story>/index.md` |
| Joining the lab | `content/opportunities/_index.md` |
| Contact and appointment link | `content/contact/index.md` |
| Courses and syllabi | `content/teaching/<course>/` |
| Navigation | `config/_default/menus.yaml` |

### Add a news item

Create `content/post/short-title/index.md`:

```yaml
---
title: Your news headline
date: 2026-09-10
summary: A short description of the news.
draft: false
image:
  alt: A description of the photograph.
  caption: Photo credit and context.
---
Write the news here.
```

Add a picture named `featured.jpg` (or `featured.png`) in the same folder. Use the event or announcement date for retrospective stories, and identify archive photos in the caption.

Published news automatically appears on the news page and homepage. With no published posts, the news page shows an honest empty state and the homepage omits that section. Future-dated content remains hidden until a build after that date.

### Add a person

Copy an existing author folder, change the name, biography, role, email, social links, and `user_groups`, and replace the portrait. Use the new folder name in the `authors` field. Only mark the principal investigator `superuser: true`; they appear first. Check copied education and affiliation fields carefully. Profiles are linked from the people page automatically.

### Add a publication

Copy one of the real publication folders, update the title, author list, date, DOI, abstract, and journal. An author folder name such as `admin` resolves to the person's display name. Put the paper PDF and `.bib` citation alongside `index.md`; links are generated automatically. Existing automated BibTeX import remains available through the GitHub workflow.

Demo posts, papers, and the example opportunity have `draft: true`. They are retained for reference but excluded from production. Do not publish them as lab content.

## Design and preview

The local templates in `layouts/` and stylesheet in `assets/css/lab.css` provide the shared design. Images are processed by Hugo; source images remain unchanged. Search runs locally in the visitor's browser and needs no service or API key. Mobile navigation remains available without JavaScript.

Install the extended Hugo version **0.135.0** and Go, then run:

```sh
hugo server --bind 127.0.0.1
```

Build exactly as GitHub Pages does:

```sh
HUGO_ENVIRONMENT=production hugo --minify --baseURL https://jordandowell.github.io/
```

Review the local site, then commit and push the intended files to `main` to publish. Do not commit `public/`, `resources/`, or `work/`.

## Content to review

The redesign retains the existing lab biographies, roles, affiliations, education, research descriptions, and contact details. Confirm these are up to date before publishing. No current funded vacancies or new achievements have been invented. Add verified news and any additional publications when ready.

## Publication sources and figures

The publication list was expanded on September 10, 2026 using the local CV, Crossref publisher records, and the Agronomy Research institutional record. Google Scholar could not be read directly; its supplied URL is linked from Publications. There are ten journal articles and two separately labeled preprints. Submitted manuscripts without public records are not included. New publication files record `metadata_source` and `verified_on`; dates with only a year or month use the first day for sorting. The Agronomy Research article is cited under its 2023 issue year (online December 2022).

New paper pages use short editorial overviews, not copied abstracts. Preprint titles and author lists follow deposited DOI metadata. The former HyPhy entry now reflects the published SkelPy article (March 24, 2026), preserving its original page address and a link to the earlier preprint. Confirm later journal publication status when updating records.

The signaling diagram is Figure 2 from Thomas et al. (2023), extracted without alteration from the PDF already in the repository. It is CC BY 4.0 with a source link and credit shown next to the image; the figure license overrides the general site footer license. Full-size viewing keeps labels legible on smaller screens. Other pre-existing images have not been reattributed.

### Research theme order and related papers

Set `weight` in each research page to control both its homepage order and theme number: macroevolution of plant chemodiversity (1), plant ecophysiology and chemical diversity (2), chemical defenses (3), and fungal ecophysiology and quantitative genetics (4). Each theme's `related_publications` list contains a publication `page` path and a short `relevance` explanation. The shared template pulls the title, authors, DOI, available downloads, and preprint status from the publication itself. One paper may appear under multiple themes. The fungal ecophysiology and quantitative genetics theme links related methods and a broader review; phylogenomics provides the framework for comparing genetic–trait relationships across lineages.

## Lab photo archive and retrospective news

The September 2026 update adds 17 retrospective news entries, with event or announcement dates supported by lab Discord messages, and a 44-photo Lab life album. The accessible general-channel history begins August 19, 2024; the photo search was reviewed from oldest to newest. New stories cover a visiting scientist, presentations, student research, fieldwork, greenhouse work, and social gatherings. They do not assert awards or findings that were not supported by the source material.

Images in `assets/media/lab-life/` are optimized local copies of reviewed lab photographs; visitors do not need Discord access and the site does not depend on expiring attachment links. Original downloads and source notes are in ignored `work/discord-photos/`. `data/lab_life.json` controls the album categories, captions, and alternative text. Photos are credited collectively to the lab archive because the person who shared a photograph is not necessarily its photographer. Photo-sharing dates are used when the capture date is unverified.

A news item's `image.src` can reference an image in `assets/`, and `gallery` can contain additional objects with `src`, `caption`, and `alt`. If no `image.src` is given, the existing `featured.*` convention still works. Linked images open the larger version. News galleries and the album load thumbnails lazily.

The “Do plants have something to say?” illustration supplied by Jordan appears intact on the homepage and Join the lab page. Its source is `assets/media/plants-have-something-to-say.jpeg`; `layouts/partials/plant-communication-art.html` controls both placements, responsive image sizes, and the full-image link. The original artwork and signature remain unchanged.

Two user-supplied photos of Lori Pradhan’s Fungal Genetics 2026 talk appear in the conference news entry and the Lab life album. The talk title follows the visible title slide.

Four additional user-supplied Botany 2025 presentation photos appear in the Palm Springs news story and the Lab life album. Captions describe visible scientific topics without inferring new results.

The March 5, 2025 GC–MS installation story uses the installation date, Agilent/GERSTEL configuration, and photograph provided directly by Jordan.
