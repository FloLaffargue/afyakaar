import { useRef, useEffect, useCallback } from 'react'

const btnClass = 'px-2 py-1 text-sm rounded hover:bg-slate-200 transition-colors border border-transparent'

export default function RichTextEditor({ value, onChange, rows = 3, placeholder = '' }) {
  const editorRef = useRef(null)
  const internalValue = useRef(value || '')

  // Sync from outside only when value changes externally
  useEffect(() => {
    if (editorRef.current && value !== internalValue.current) {
      internalValue.current = value || ''
      editorRef.current.innerHTML = value || ''
    }
  }, [value])

  const exec = useCallback((command) => {
    document.execCommand(command, false, null)
    editorRef.current?.focus()
    if (editorRef.current) {
      internalValue.current = editorRef.current.innerHTML
      onChange(internalValue.current)
    }
  }, [onChange])

  const handleInput = () => {
    if (editorRef.current) {
      internalValue.current = editorRef.current.innerHTML
      onChange(internalValue.current)
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text/plain')
    document.execCommand('insertText', false, text)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'b' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      exec('bold')
    } else if (e.key === 'i' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      exec('italic')
    }
  }

  const minHeight = Math.max(60, rows * 24)

  return (
    <div className="border border-slate-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
      {/* Toolbar */}
      <div className="flex items-center gap-1 px-2 py-1.5 bg-slate-50 border-b border-slate-200">
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => exec('bold')}
          className={btnClass}
          title="Gras (Ctrl+B)"
        >
          <strong>G</strong>
        </button>
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => exec('italic')}
          className={btnClass}
          title="Italique (Ctrl+I)"
        >
          <em>I</em>
        </button>
        <div className="w-px h-5 bg-slate-300 mx-1" />
        <span className="text-xs text-slate-400 ml-auto">Ctrl+B / Ctrl+I</span>
      </div>

      {/* Editable area */}
      <div
        ref={(el) => {
          editorRef.current = el
          if (el && !el.innerHTML && internalValue.current) {
            el.innerHTML = internalValue.current
          }
        }}
        contentEditable
        role="textbox"
        className="w-full px-3 py-2 text-sm focus:outline-none"
        style={{ minHeight }}
        onInput={handleInput}
        onPaste={handlePaste}
        onKeyDown={handleKeyDown}
        suppressContentEditableWarning
        data-placeholder={placeholder}
      />
    </div>
  )
}
