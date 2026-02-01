import React from 'react'

export default function Filters({ search, setSearch, tagFilters, setTagFilters }) {
    const tags = ['Demand', 'New File', 'Add Events', 'Imaging', 'eFile/discovery']
    const fields = ['Case#', 'Agency/File#', 'Clerk/Docket#', 'Defendant', 'People', 'Bond', 'Date']
    const [selected, setSelected] = React.useState(null);

    const toggleTag = (t) => {
        setTagFilters(prev => {
            if (prev.includes(t)) return prev.filter(x => x !== t)
            return [...prev, t]
        })
    }
    return (
        <aside className="ch-filters-main" >
            <div className="ch-filter">
                <div className="ch-search">
                    <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search" />
                </div>

                <div className="ch-panel">
                    {/* <h4>Filters</h4> */}
                    <div className="filter-fields">
                        {fields.map(f => (
                            <button key={f} className={`filter-field-btn ${selected === f ? "active" : ""}`}
                                onClick={() => setSelected(f)}>{f}</button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="ch-filter">
                <div className="ch-panel-actions">
                    {/* <h4>Action</h4> */}
                    <div className="tag-list">
                        {tags.map(t => (
                            <button
                                key={t} title=''
                                className={`tag ${tagFilters.includes(t) ? 'active' : ''}`}
                                onClick={() => toggleTag(t)}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="ch-filter">

                <div className="ch-panel">
                    <h4>Filters</h4>
                    <div className="filter-fields">
                        <button className="filter-field-btn">Dashboard</button>
                        <button className="filter-field-btn">Reports</button>
                        <button className="filter-field-btn">Settings</button>
                        <button className="filter-field-btn">Logout</button>
                    </div>
                </div>
            </div>

        </aside>
    )
}
