import React from 'react'

export default function Loadingbox() {
    return (
        <div className="loading-overlay">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
