import { styled } from '@mui/material';
import { ReactNode } from 'react';

interface StyledButtonProps {
    children: ReactNode;
    onClick: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
    const StyledButton = styled('button')(({ theme }) => ({
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: '5px',
        padding: '5px 15px',
        width: '100%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        cursor: 'pointer',
        transition: 'ease-in .1s',
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            border: 'none',
        },
    }));
    return (
        <>
            <StyledButton onClick={onClick}>{children}</StyledButton>
        </>
    );
};

export default StyledButton;
