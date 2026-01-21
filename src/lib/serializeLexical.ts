/**
 * Simple Lexical Rich Text to HTML converter
 * Converts Payload's Lexical format to HTML string
 */
export async function serializeLexical(lexicalData: unknown): Promise<string> {
  if (!lexicalData || typeof lexicalData !== 'object') {
    return '';
  }

  const data = lexicalData as { root?: { children?: Array<any> } };

  if (!data.root || !data.root.children) {
    return '';
  }

  return serializeChildren(data.root.children);
}

function serializeChildren(children: Array<any>): string {
  return children
    .map((node) => {
      switch (node.type) {
        case 'paragraph':
          return `<p>${node.children ? serializeChildren(node.children) : ''}</p>`;
        case 'heading':
          const level = node.tag || 'h2';
          return `<${level}>${node.children ? serializeChildren(node.children) : ''}</${level}>`;
        case 'text':
          let text = node.text || '';
          if (node.format) {
            if (node.format & 1) text = `<strong>${text}</strong>`; // bold
            if (node.format & 2) text = `<em>${text}</em>`; // italic
            if (node.format & 4) text = `<u>${text}</u>`; // underline
          }
          return text;
        case 'link':
          return `<a href="${node.url}" ${node.newTab ? 'target="_blank" rel="noopener noreferrer"' : ''}>${
            node.children ? serializeChildren(node.children) : ''
          }</a>`;
        case 'list':
          const tag = node.tag === 'ol' ? 'ol' : 'ul';
          return `<${tag}>${node.children ? serializeChildren(node.children) : ''}</${tag}>`;
        case 'listitem':
          return `<li>${node.children ? serializeChildren(node.children) : ''}</li>`;
        case 'linebreak':
          return '<br />';
        default:
          return node.children ? serializeChildren(node.children) : '';
      }
    })
    .join('');
}
