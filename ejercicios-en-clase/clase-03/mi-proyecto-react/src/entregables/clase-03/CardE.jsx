const CardE = ({children}) => {
     return (
        <div style={{
    padding: 16,
    borderRadius: 12,
    background: '#111827',
    color: '#e5e7eb',
    display: 'grid',
    gap: 12,
    maxWidth: 360 }}>
            {children}
        </div>
    )
}


export default CardE