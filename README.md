# Quick Copy a DOI link in Zotero

## What is this for?

The `doi-link-quickcopy.js` file in this repository will enable a new QuickCopy
functionality in [Zotero](https://www.zotero.org), analogous to "Copy Selected
Items to Clipboard" and "Copy Selected Items Citations to Clipboard" (that are
both present by default). The functionality consists of copying to the OS
clipboard the DOI links of all selected items in the main pane.

I copy DOI links from Zotero many times a day to paste them in emails and notes.
For such short writings performed in applications that automatically make links
clickable, the citation and bibliography generation facilities of Zotero are
overkill, and I find myself constantly right-clicking to copy DOI links. A
keyboard shortcut is a lot faster to use, and implementing this functionality
with an [export translator](https://www.zotero.org/support/dev/translators) also
automatically makes it possible to copy not only one DOI link of one selected
item, but also *a list of DOI links of several selected items*.

## Installation

Unfortunately, installation is not user-friendly at all.

1. If Zotero is running, quit it.
2. Download [`doi-link-quickcopy.js`](https://raw.githubusercontent.com/Guillawme/zotero-doi-link-quickcopy/master/doi-link-quickcopy.js) from this repository and place it into [`$ZOTERO_DATA_DIR/translators`](https://www.zotero.org/support/zotero_data).
3. Start Zotero.
4. If you don't already have the Zutilo extension, [install it](https://github.com/willsALMANJ/Zutilo#installation).
5. Open Zotero preferences, go to the `Advanced` tab and the `General` sub-tab, click on `Config Editor` to open the advanced configuration options, accept the disclaimer.
6. In the advanced configuration editor's search bar, enter `extensions.zutilo.quickcopy_alt1` (or `alt2`, in case you already use `alt1`; if you already use both, you'll have to make a decision regarding which one to overwrite). Double-click on the blank `Value` field, enter the following value and validate: `export=d5bb4cc3-8334-4bbc-a5f0-fe66317c88e8`.
7. Open Zutilo preferences, go to the `Shortcuts` tab, find the shortcut called `Quick Copy items (alt 1)` (or `alt 2` to match the one you set up in step 6 above) and choose a keyboard shortcut for it. I like using `Cmd + Shift + D` because it is similar to `Cmd + Shift + C` (Copy Selected Items to Clipboard) and has a "D" as in "DOI".

