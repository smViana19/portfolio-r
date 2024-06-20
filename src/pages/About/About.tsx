import NavBar from '../../components/NavBar/NavBar';
import { SiTypescript, SiJavascript, SiReact, SiAndroid } from 'react-icons/si';

import {
    Container,
    Grid,
    styled,
    Typography,
    Paper,
    ListItem,
    List,
} from '@mui/material';


const AboutMe: React.FC = () => {
    return <Paper elevation={3} style={{ padding: '20px' }}></Paper>;
};

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
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" color="primary.contrastText">
                            I'm a 17-year-old currently working as an intern in
                            programming. I work with TypeScript, JavaScript,
                            Java, PHP, and MySQL.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/* You can add additional information or media here */}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    
                </Grid>
                <Grid item xs={12} sm={6}>
                    <List dense >
                        <ListItem>
                            <SiTypescript size="32px" color="#3178c6" />
                        </ListItem>
                        <ListItem>
                            <SiJavascript size="32px" color="#f0db4f" />
                        </ListItem>
                        <ListItem>
                        </ListItem>
                        <ListItem>
                            <SiReact size="32px" color="#61dafb" />
                        </ListItem>
                        <ListItem>
                            <SiAndroid size="32px" color="#a4c639" />
                        </ListItem>

                    </List>
                    </Grid>
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
