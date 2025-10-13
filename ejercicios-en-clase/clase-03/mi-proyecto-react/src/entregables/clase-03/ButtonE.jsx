export const ButtonE = ({Text = "Me la suda", children, disabled = false, color = '#3b82f6'}) => (
    <button
      disabled={disabled}
    style={{
      padding: '10px 14px',
      borderRadius: 10,
      border: 0,
      backgroundColor: disabled ? '#94a3b8' : color,
      color: '#fff',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }}
    >
      {children}
      {Text}
    </button>
  );

