import { Container, styled, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
    const StyledFooter = styled('footer')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(3, 2),
    }));

    return (
        <>
            <StyledFooter>
                <Container maxWidth="lg">
                    <Typography>
                        Desenvolvido por Samuel © {new Date().getFullYear()}
                    </Typography>
                    <Typography>
                        <GitHubIcon />
                        <LinkedInIcon />
                    </Typography>
                </Container>
            </StyledFooter>
        </>
    );
};

export default Footer;
