import React, { useState } from 'react'
import layoutStyles from '../styles/Layout.module.css'
  

const AddTimekeepingForm = () => {
    const [employeeName, setEmployeeName] = useState('')
    const [employeeId, setemployeeId] = useState('')

    const submitData = async e => {
        e.preventDefault()
        try {
        const body = { employeeId, employeeName }
        await fetch(`/api/timekeeping`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
        // await Router.push('/drafts')
        } catch (error) {
        console.error(error)
        }
  }

    return (
        <div className = {layoutStyles.container}>
            <div className="page">
                <form
                onSubmit={submitData}>
                <h1>Create Checkin</h1>
                <input
                    autoFocus
                    onChange={e => setEmployeeName(e.target.value)}
                    placeholder="Name"
                    type="text"
                    value={employeeName}
                />
                <input
                    onChange={e => setemployeeId(e.target.value)}
                    placeholder="ID"
                    type="text"
                    value={employeeId}
                />
                <input
                    disabled={!employeeId || !employeeName}
                    type="submit"
                    value="Checkin"
                />
                </form>
            </div>
            <style jsx>{`
                .page {
                background: white;
                padding: 3rem;
                display: flex;
                justify-content: center;
                align-items: center;
                }

                input[type='text'],
                textarea {
                width: 100%;
                padding: 0.5rem;
                margin: 0.5rem 0;
                border-radius: 0.25rem;
                border: 0.125rem solid rgba(0, 0, 0, 0.2);
                }

                input[type='submit'] {
                background: #ececec;
                border: 0;
                padding: 1rem 2rem;
                }

                .back {
                margin-left: 1rem;
                }
            `}</style>
    </div>
    )
  }
export default AddTimekeepingForm

