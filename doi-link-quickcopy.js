{
    "translatorID": "d5bb4cc3-8334-4bbc-a5f0-fe66317c88e8",
    "label": "DOI link quick copy",
    "creator": "Guillaume Gaullier",
    "target": "txt",
    "minVersion": "5.0.82",
    "maxVersion": "",
    "priority": 100,
    "inRepository": false,
    "translatorType": 2,
    "browserSupport": "gcsbv",
    "configOptions": {"getCollections": false},
    "displayOptions": {"exportCharset": "UTF-8", "exportNotes": false, "exportFileData": false, "useJournalAbbreviation": false},
    "lastUpdated": "2020-02-19 14:22:12"
}

/*

  MIT License

  Copyright (c) 2020 Guillaume Gaullier

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

*/

function doExport() {
    var item;
    while (item = Zotero.nextItem()) {
        if (item.DOI) {
            var doiLink = "https://doi.org/" + item.DOI + "\n";
            Zotero.write(doiLink);
        } else {
            Zotero.write("This item's DOI field is empty, or this item type does not have a DOI field.\n")
        }
    }
}
