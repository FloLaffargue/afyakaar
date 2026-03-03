/**
 * Sanitizes HTML to only allow safe inline formatting tags.
 * Strips all attributes and disallowed tags.
 */
function sanitize(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const allowed = new Set(['B', 'STRONG', 'I', 'EM', 'BR', 'P', 'DIV'])

  function clean(node) {
    const children = Array.from(node.childNodes)
    for (const child of children) {
      if (child.nodeType === Node.TEXT_NODE) continue
      if (child.nodeType === Node.ELEMENT_NODE) {
        // Remove all attributes
        while (child.attributes.length > 0) {
          child.removeAttribute(child.attributes[0].name)
        }
        if (allowed.has(child.tagName)) {
          clean(child)
        } else {
          // Replace disallowed tag with its text content
          child.replaceWith(document.createTextNode(child.textContent))
        }
      } else {
        child.remove()
      }
    }
  }

  clean(doc.body)
  return doc.body.innerHTML
}

/**
 * Renders rich text (HTML with bold/italic/line breaks) safely.
 * Falls back to plain text if no HTML tags are detected.
 */
export default function RichText({ html, className = '', as: Tag = 'p' }) {
  if (!html) return null

  // If the content has no HTML tags, render as plain text
  if (!/<[a-z][\s\S]*>/i.test(html)) {
    return <Tag className={className}>{html}</Tag>
  }

  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitize(html) }}
    />
  )
}
