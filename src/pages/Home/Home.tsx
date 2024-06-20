import { Box, Container, Grid, styled, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '../../assets/images/iconPerfil.svg';
import StyledButton from '../../components/StyledButton/StyledButton';
import { AnimatedBackground } from '../../components/AnimatedBackground/AnimatedBackground';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const Hero = () => {
    const StyledHero = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('xs')]: {
            paddingTop: '100px',
        },
    }));

    const StyledImg = styled('img')(() => ({
        width: '80%',
        borderRadius: '40%',
    }));
    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box
                                    position="absolute"
                                    width={'100%'}
                                    top={-100}
                                    right={0}
                                >
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} alt="" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography
                                color="primary.contrastText"
                                variant="h1"
                                textAlign="center"
                                pb={2}
                            >
                                Samuel Filipe Viana
                            </Typography>
                            <Typography
                                color="primary.contrastText"
                                variant="h3"
                                textAlign="center"
                            >
                                I'm Full Stack Developer
                            </Typography>
                            <Grid
                                container
                                display="flex"
                                justifyContent="center"
                                spacing={3}
                                pt={3}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    md={4}
                                    display="flex"
                                    justifyContent="center"
                                >
                                    <StyledButton
                                        onClick={() => console.log('download')}
                                    >
                                        <DownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={4}
                                    display="flex"
                                    justifyContent="center"
                                >
                                    <StyledButton
                                        onClick={() => console.log('download')}
                                    >
                                        <EmailIcon />
                                        Contact me
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    );
};

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Footer />
        </>
    );
};

export default Home;
