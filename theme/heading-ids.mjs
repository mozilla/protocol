import { marked } from 'marked';

// marked dropped automatic heading ids in v8. This restores the ids Fractal
// generated with marked 2.1.3 so existing deep links keep working. It registers
// on the shared marked instance because Fractality's markdown filter (used for
// component notes) accepts no config. `marked` must dedupe with
// @fractality/core's copy for this to take effect.

let seen = {};

function unescape(html) {
    return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, (_, n) => {
        n = n.toLowerCase();
        if (n === 'colon') {
            return ':';
        }
        if (n.charAt(0) === '#') {
            return n.charAt(1) === 'x'
                ? String.fromCharCode(parseInt(n.substring(2), 16))
                : String.fromCharCode(+n.substring(1));
        }
        return '';
    });
}

function slug(value) {
    const originalSlug = value
        .toLowerCase()
        .trim()
        .replace(/<[!/a-z].*?>/gi, '')
        .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
        .replace(/\s/g, '-');
    let result = originalSlug;
    let count = 0;
    if (Object.prototype.hasOwnProperty.call(seen, originalSlug)) {
        count = seen[originalSlug];
        do {
            count++;
            result = `${originalSlug}-${count}`;
        } while (Object.prototype.hasOwnProperty.call(seen, result));
    }
    seen[originalSlug] = count;
    seen[result] = 0;
    return result;
}

marked.use({
    hooks: {
        preprocess(src) {
            seen = {};
            return src;
        }
    },
    extensions: [
        {
            name: 'heading',
            renderer(token) {
                const text = this.parser.parseInline(token.tokens);
                const raw = unescape(this.parser.parseInline(token.tokens, this.parser.textRenderer));
                return `<h${token.depth} id="${slug(raw)}">${text}</h${token.depth}>\n`;
            }
        }
    ]
});
