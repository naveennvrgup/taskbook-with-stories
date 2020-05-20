import React from 'react'

export default function tasks({
    task: {id, title, state},
    onArchiveTask,
    onPinTask
}) {
    return (
        <div className='list-item'>
            <input type="text" value={title} readOnly={true} />
        </div>
    )
}
