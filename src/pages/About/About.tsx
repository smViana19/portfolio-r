import NavBar from '../../components/NavBar/NavBar';
import { Container, Grid, styled, Typography } from '@mui/material';

const AboutHero = () => {
    const StyledAboutHero = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('xs')]: {
            paddingTop: '100px',
        },
    }));
    return (
        <>
            <StyledAboutHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Typography
                                color="primary.contrastText"
                                variant="h1"
                                textAlign="center"
                                pb={2}
                            >
                                About me
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </StyledAboutHero>
        </>
    );
};

const About = () => {
    return (
        <>
            <NavBar />
            <AboutHero />
        </>
    );
};

export default About;
