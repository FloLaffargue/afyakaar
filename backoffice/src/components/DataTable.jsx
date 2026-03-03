import { Pencil, Trash2 } from 'lucide-react'

export default function DataTable({ columns, rows, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 font-semibold text-slate-600">
                {col.label}
              </th>
            ))}
            {(onEdit || onDelete) && (
              <th className="px-4 py-3 font-semibold text-slate-600 text-right">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length + 1} className="px-4 py-8 text-center text-slate-400">
                Aucun élément
              </td>
            </tr>
          )}
          {rows.map((row, i) => (
            <tr key={row.id} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-slate-700">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
              {(onEdit || onDelete) && (
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    {onEdit && (
                      <button
                        onClick={() => onEdit(row)}
                        className="p-1.5 text-slate-400 hover:text-indigo-600 rounded hover:bg-indigo-50"
                      >
                        <Pencil size={16} />
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => onDelete(row)}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
