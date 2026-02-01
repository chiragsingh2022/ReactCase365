import React from 'react'

export default function ResultsTable({ items = [], onSelect }) {
  return (
    <div className="ch-results">
      <table>
        <thead>
          <tr>
            <th>Docket #</th>
            <th>Case</th>
            <th>Package Name</th>
            <th>Reviewers</th>
            <th>Approval</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} className={item.highlight ? 'highlight' : ''} onClick={() => onSelect && onSelect(item)}>
              <td className="docket">{item.docket}</td>
              <td>{item.caseName}</td>
              <td>{item.packageName}</td>
              <td>{item.reviewers || ''}</td>
              <td>{item.approval}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
