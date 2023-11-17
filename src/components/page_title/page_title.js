import React from "react";

export default function PageTitle({title}) {
    return (
        <div style={{paddingTop: '80px'}}>
            <div style={{
                display: "flex",
                width: '100%',
                justifyContent: 'center',
                padding: '2rem 0',
            }}>
                <div className={'title'}>{title}</div>
            </div>

            <div style={{
                display: "flex",
                width: '100%',
                justifyContent: 'center',
                padding: '0 0 2rem 0',
            }}>
                <div style={{
                    padding: '1px 0',
                    width: '50%',
                    backgroundColor: '#000'
                }}/>
            </div>
        </div>
    )
}