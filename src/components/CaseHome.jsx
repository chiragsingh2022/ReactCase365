import React, { useMemo, useState } from 'react'
import HeaderTabs from './HeaderTabs'
import Filters from './Filters'
import ResultsTable from './ResultsTable'
import './CaseHome.css'

// mock data
const MOCK = [
    { id: 1, docket: '12312312399', caseName: 'TEST1 CASE', packageName: 'TYREYANA MICHELLE CARTER', reviewers: 'Demart 1', approval: 'Approved' },
    { id: 2, docket: '01002225', caseName: 'TEST1 CASE', packageName: 'Discovery. MHCHELLE CARTER', reviewers: '12/23/2025', approval: 'Reviewed' },
    { id: 3, docket: '01002225', caseName: 'KIRIAN KELLY', packageName: 'e-file_122220050543683', reviewers: 'Created by', approval: 'Approved' },
    { id: 4, docket: 'Test0002326', caseName: 'TEST USER AI', packageName: 'Discovery.081222020511645', reviewers: 'Created by', approval: 'Approved' },
    { id: 5, docket: 'XX001', caseName: 'TEST USER AI', packageName: 'Package_0224202503958', reviewers: 'Created by', approval: 'Approved', highlight: false },
    { id: 6, docket: '12312312940', caseName: 'TEST1 CASE', packageName: 'Package_0224202503949', reviewers: 'Created by', approval: 'Approved' },
    { id: 7, docket: '12131123940', caseName: 'TEST1 CASE', packageName: 'Package_0224202503949', reviewers: 'Approved', approval: 'Approved' },
    { id: 1, docket: '12312312399', caseName: 'TEST1 CASE', packageName: 'TYREYANA MICHELLE CARTER', reviewers: 'Demart 1', approval: 'Approved' },
    { id: 2, docket: '01002225', caseName: 'TEST1 CASE', packageName: 'Discovery. MHCHELLE CARTER', reviewers: '12/23/2025', approval: 'Reviewed' },
    { id: 3, docket: '01002225', caseName: 'KIRIAN KELLY', packageName: 'e-file_122220050543683', reviewers: 'Created by', approval: 'Approved' },
    { id: 4, docket: 'Test0002326', caseName: 'TEST USER AI', packageName: 'Discovery.081222020511645', reviewers: 'Created by', approval: 'Approved' },
    { id: 5, docket: 'XX001', caseName: 'TEST USER AI', packageName: 'Package_0224202503958', reviewers: 'Created by', approval: 'Approved', highlight: false },
    { id: 6, docket: '12312312940', caseName: 'TEST1 CASE', packageName: 'Package_0224202503949', reviewers: 'Created by', approval: 'Approved' },
    { id: 7, docket: '12131123940', caseName: 'TEST1 CASE', packageName: 'Package_0224202503949', reviewers: 'Approved', approval: 'Approved' },
    { id: 1, docket: '12312312399', caseName: 'TEST1 CASE', packageName: 'TYREYANA MICHELLE CARTER', reviewers: 'Demart 1', approval: 'Approved' },
    { id: 2, docket: '01002225', caseName: 'TEST1 CASE', packageName: 'Discovery. MHCHELLE CARTER', reviewers: '12/23/2025', approval: 'Reviewed' },
    { id: 3, docket: '01002225', caseName: 'KIRIAN KELLY', packageName: 'e-file_122220050543683', reviewers: 'Created by', approval: 'Approved' },
    { id: 4, docket: 'Test0002326', caseName: 'TEST USER AI', packageName: 'Discovery.081222020511645', reviewers: 'Created by', approval: 'Approved' },
    { id: 5, docket: 'XX001', caseName: 'TEST USER AI', packageName: 'Package_0224202503958', reviewers: 'Created by', approval: 'Approved', highlight: false },
    { id: 6, docket: '12312312940', caseName: 'TEST1 CASE', packageName: 'Package_0224202503949', reviewers: 'Created by', approval: 'Approved' },
    { id: 7, docket: '12131123940', caseName: 'TEST1 CASE', packageName: 'Package_0224202503949', reviewers: 'Approved', approval: 'Approved' },
    { id: 1, docket: '12312312399', caseName: 'TEST1 CASE', packageName: 'TYREYANA MICHELLE CARTER', reviewers: 'Demart 1', approval: 'Approved' },
    { id: 2, docket: '01002225', caseName: 'TEST1 CASE', packageName: 'Discovery. MHCHELLE CARTER', reviewers: '12/23/2025', approval: 'Reviewed' },
    { id: 3, docket: '01002225', caseName: 'KIRIAN KELLY', packageName: 'e-file_122220050543683', reviewers: 'Created by', approval: 'Approved' },
    { id: 4, docket: 'Test0002326', caseName: 'TEST USER AI', packageName: 'Discovery.081222020511645', reviewers: 'Created by', approval: 'Approved' },
    { id: 5, docket: 'XX001', caseName: 'TEST USER AI', packageName: 'Package_0224202503958', reviewers: 'Created by', approval: 'Approved', highlight: false },
    { id: 6, docket: '12312312940', caseName: 'TEST1 CASE', packageName: 'Package_0224202503949', reviewers: 'Created by', approval: 'Approved' },
    { id: 7, docket: '12131123940', caseName: 'TEST1 CASE', packageName: 'Package_0224202503949', reviewers: 'Approved', approval: 'Approved' },
    { id: 1, docket: '12312312399', caseName: 'TEST1 CASE', packageName: 'TYREYANA MICHELLE CARTER', reviewers: 'Demart 1', approval: 'Approved' },
    { id: 2, docket: '01002225', caseName: 'TEST1 CASE', packageName: 'Discovery. MHCHELLE CARTER', reviewers: '12/23/2025', approval: 'Reviewed' },
    { id: 3, docket: '01002225', caseName: 'KIRIAN KELLY', packageName: 'e-file_122220050543683', reviewers: 'Created by', approval: 'Approved' },
    { id: 4, docket: 'Test0002326', caseName: 'TEST USER AI', packageName: 'Discovery.081222020511645', reviewers: 'Created by', approval: 'Approved' },
    { id: 5, docket: 'XX001', caseName: 'TEST USER AI', packageName: 'Package_0224202503958', reviewers: 'Created by', approval: 'Approved', highlight: false },
    { id: 6, docket: '12312312940', caseName: 'TEST1 CASE', packageName: 'Package_0224202503949', reviewers: 'Created by', approval: 'Approved' },
    { id: 7, docket: '12131123940', caseName: 'TEST1 CASE', packageName: 'Package_0224202503949', reviewers: 'Approved', approval: 'Approved' },
]

export default function CaseHome() {
    const [activeTab, setActiveTab] = useState('recent')
    const [search, setSearch] = useState('')
    const [tagFilters, setTagFilters] = useState([])

    const counts = useMemo(() => ({ recent: 13, recentE: 0, referrals: 118 }), [])

    const filtered = useMemo(() => {
        const s = search.trim().toLowerCase()
        return MOCK.filter(it => {
            if (s) {
                const hay = `${it.docket} ${it.caseName} ${it.packageName}`.toLowerCase()
                if (!hay.includes(s)) return false
            }
            if (tagFilters.length > 0) {
                // simple demo: filter by presence in packageName
                if (!tagFilters.some(t => it.packageName.toLowerCase().includes(t.toLowerCase()))) return false
            }
            return true
        })
    }, [search, tagFilters])

    const handleSelect = (item) => {
        // For demo, just alert; you can open details panel here
        alert(`Selected docket ${item.docket} - ${item.caseName}`)
    }

    return (
        <div className="case-home">
            <div className="case-main">
                <div className="left">
                    <Filters search={search} setSearch={setSearch} tagFilters={tagFilters} setTagFilters={setTagFilters} />
                </div>

                <div className="right">
                    <HeaderTabs counts={counts} active={activeTab} onChange={setActiveTab} />

                    <div className="results-header">
                        <h2>Results ({filtered.length} of {MOCK.length})</h2>
                    </div>

                    <div className="results-table-container">
                        <ResultsTable items={filtered} onSelect={handleSelect} />
                    </div>
                </div>
            </div>
        </div>
    )
}