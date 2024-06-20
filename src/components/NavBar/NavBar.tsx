import { AppBar, MenuItem, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    const StyledToolBar = styled(Toolbar)(() => ({
        display: 'flex',
        justifyContent: 'space-evenly',
    }));
    const StyledLink = styled(Link)(({ theme }) => ({
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    }));

    return (
        <>
            <AppBar position="absolute">
                <StyledToolBar>
                    <MenuItem>
                        <StyledLink to={'/'}>Home</StyledLink>
                    </MenuItem>
                    <MenuItem>
                        <StyledLink to={'/sobre'}>About</StyledLink>
                    </MenuItem>
                    <MenuItem>
                        <StyledLink to={'/projetos'}>Projects</StyledLink>
                    </MenuItem>
                </StyledToolBar>
            </AppBar>
        </>
    );
};

export default NavBar;
