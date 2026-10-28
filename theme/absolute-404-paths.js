'use strict';

// Netlify serves dist/docs/404.html for any missing URL without changing the
// address, so the builder's page-relative paths only resolve from /docs/*.
// Rewrite them as root-absolute paths so the page works at any depth.

const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'dist', 'docs', '404.html');
const pageUrl = 'https://protocol.invalid/docs/404.html';

const html = fs.readFileSync(file, 'utf8').replace(/\b(href|src)="(\.\.?\/[^"]*)"/g, (match, attr, value) => {
    const url = new URL(value, pageUrl);
    return `${attr}="${url.pathname}${url.search}${url.hash}"`;
});

fs.writeFileSync(file, html);
