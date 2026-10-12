# Gather & Sing

A Christmas carol songbook made from CarolSongsfinal.pdf, with all 13 songs in booklet order and transposable chord charts. Designed for phones, tablets, and laptops.

## Run locally

Requires Node.js 18 or newer. No dependencies to install.

```sh
npm start
```

Open http://localhost:4173. Stop with Ctrl+C. Run `npm test` for transposition and content integrity checks. To share the website later, upload index.html, styles.css, app.js, music.js, and songs.js to a static website host. The local preview is only accessible on your computer.

## Using the songbook

- Search by title or any lyric; select one of the 13 carols.
- Choose a key or use − / + to move by a semitone. All chord roots and slash bass notes transpose; chord qualities stay intact.
- Keys are saved per song in this browser. Reset restores the source key.
- Turn off Chords for a lyrics-only view. A− / A+ adjusts reading size.
- Print song prints the current song in its selected key and view.
- Each song has a shareable fragment, such as `#4` for Silent night.

This transposes chord notation; it does not play or transpose recorded audio. Long chord/lyric lines scroll horizontally on small screens to preserve alignment. Lyrics-only text wraps.

## Christmas color palette

| Color | Hex | Purpose |
| --- | --- | --- |
| Evergreen | `#153F35` | Hero, selected song, primary controls |
| Deep pine | `#103129` | Reserved dark accent |
| Warm ivory | `#F7F4EC` | Page background |
| Candlelight white | `#FFFDF8` | Song sheet and inputs |
| Cranberry | `#9B3443` | Chords, small headings, focus indicators |
| Antique gold | `#D7B66F` | Stars, tree detail, decorative accents |
| Forest ink | `#243B34` | Main text |
| Sage gray | `#64736A` | Secondary text |
| Soft stone | `#DEDFD5` | Borders and dividers |

Gold is decorative, rather than small text on an ivory background. System serif headings and monospaced chord charts need no external fonts. The decorative tree uses CSS, with no external images or network requests.

## Content and editing

Edit title, key, and body in `songs.js`. Chord lines sit above lyric lines; preserve spaces to retain chord positions. Section labels use `[Verse 1]`, `[Chorus]`, etc. Chord parsing supports sharps/flats, minor, major, diminished, augmented, sus/add, numbered chords, slash bass, and N.C.

The source PDF is arranged for booklet printing. Its columns were reconstructed into song order, including continuation pages. Lyrics and arrangements are retained as supplied, including verse numbering and spelling. No member roster or last year's prayer assignments are included.

Source notes:
- Home For The Holidays is labeled G in the PDF, but the supplied arrangement is in C. This app uses C as its original key so transposition matches its chords.
- Hark the herald angels sing and Angels from the realms of glory omit key labels; G and D respectively are inferred from their chord charts.
- No missing verses or new chord arrangements have been invented.

## Project structure and Git

`index.html` supplies the accessible page, `styles.css` the responsive/print theme, `app.js` the interface, `music.js` transposition, and `songs.js` editable content. `server.js` provides a local preview. `music.test.js` checks musical transformations and booklet continuity.

The initial implementation is committed to Git. Use `git status` to inspect changes, then `git add` and `git commit` when making updates. No remote repository or public deployment is configured.
