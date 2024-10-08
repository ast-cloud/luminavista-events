import {Button, Typography, Grid, IconButton, Menu, MenuItem, Box, Avatar, Divider} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// enum NavbarOpenMenu {
//     Services, Faq, About
// }
export default function Navbar(){

    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null);

    // const [servicesMenuOpen, setServicesMenuOpen] = useState<boolean>(false);
    // const [faqMenuOpen, setFaqMenuOpen] = useState<boolean>(false);
    // const [aboutMenuOpen, setAboutMenuOpen] = useState<boolean>(false);
    // const [navbarOpenMenu, setNavbarOpenMenu] = useState<null|NavbarOpenMenu>(null);
    // const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenuOpen = (event:any) => {
        setAnchorEl(event.currentTarget);
        setMobileMenuOpen(true);
      };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMobileMenuOpen(false);
      };


    // const handleSubmenuClose = (setThisMenuOpen:any)=>{
    //     console.log('Submenu close ran')
    //     setAnchorEl(null);
    //     setThisMenuOpen(false);
    // }

    return (
        <>
            <Box sx={{display:{ xs: 'none', md: 'flex' }, height:'24.5px', flexDirection:'row', justifyContent:'flex-end', alignItems:'center', gap: 5, py:1, pr: 8}}>
                <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                    <IconButton onClick={()=>{window.open('https://www.instagram.com/lumina_vista_mentorship?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}} sx={{color:'black'}}>
                        <Box component={'img'} src='/Instagram_logo.webp' sx={{height:'28px', width:'28px'}}/>
                    </IconButton>
                    <IconButton onClick={()=>{window.open('https://www.facebook.com/profile.php?id=61564007084893&mibextid=LQQJ4d', '_blank')}} sx={{color:'black'}}>
                        <Box component={'img'} src='/Facebook_logo.webp' sx={{height:'28px', width:'28px'}}/>
                    </IconButton>
                    <IconButton onClick={()=>{window.open('https://www.x.com/', '_blank')}} sx={{color:'black'}}>
                        <Box component={'img'} src='/x_logo.webp' sx={{height:'28px', width:'28px'}}/>
                    </IconButton>
                    <IconButton onClick={()=>{window.open('https://www.linkedin.com/company/lumina-vista-mentorship-career-counselling/', '_blank')}} sx={{color:'black'}}>
                        <Box component={'img'} src='/linkedin_logo.webp' sx={{height:'28px', width:'28px'}}/>
                    </IconButton>
                    <IconButton onClick={()=>{window.open('https://www.youtube.com/', '_blank')}} sx={{color:'black'}}>
                        <Box component={'img'} src='/youtube_logo.webp' sx={{height:'28px', width:'28px'}}/>
                    </IconButton>
                </Box>
                <Typography component={'a'} fontSize={17} onClick={()=>{window.location.href='https://www.lvmentor.com/news-and-articles'}} sx={{cursor:'pointer'}}>News & articles</Typography>
                <Typography component={'a'} fontSize={17} onClick={()=>{navigate('/')}} sx={{cursor:'pointer'}}>Events</Typography>                   
            </Box>

            <Grid container sx={{border:'0px solid black', height:'90px', justifyContent:'space-between', alignItems:'center', backgroundColor:'#265D6B', px:{xs:2, sm:4, md:8}, py:1}}>

                <Grid item border={'0px solid red'} xs={6}>
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <Avatar src='/lvlogo.webp' sx={{height:'72.94px', width:'72.94px'}}/>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', ml:2, cursor:'pointer'}} onClick={function(){window.location.href=('https://www.lvmentor.com/')}}>
                            <Typography color={'white'} noWrap fontSize={{xs:15, sm:20}} sx={{fontWeight:'bold', mb:'-2px', pb:0}}>LUMINA VISTA</Typography>
                            <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, mt:'-4px', pt:0}}>
                                <Typography color={'white'} noWrap fontSize={{xs:10, sm:15}} sx={{fontWeight:'bold', mt:0, pt:0}} >Illuminating Futures, &nbsp;</Typography>
                                <Typography color={'white'} noWrap fontSize={{xs:10, sm:15}} sx={{fontWeight:'bold', mt:0, pt:0}} >Empowering Journeys</Typography>
                            </Box>
                        </Box>
                        {/* <Card variant='outlined' onClick={function(){}} style={{border:'1px solid red', boxShadow:'none', cursor:'pointer', backgroundColor:'transparent'}}><Typography variant="h4" color='white'>LuminaVista</Typography></Card> */}
                        {/* <Image src={logo} width={100} height={20} alt=''/> */}
                    </Box>
                </Grid>

                <Grid item container xs={6} gap={1.5} justifyContent='end' sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button sx={{textTransform:'none', fontSize:17, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){window.location.href=('https://www.lvmentor.com/')}}>Home</Button>
                    <Button id='services-btn' sx={{textTransform:'none', fontSize:17, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){window.location.href=('https://www.lvmentor.com/services')}}>Services</Button>                  
                    <Button sx={{textTransform:'none', fontSize:17, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){window.location.href=('https://www.lvmentor.com/faq')}} onMouseEnter={(event)=>{
                        setAnchorEl(event.currentTarget);  
                    }}>FAQs</Button>
                    <Button sx={{textTransform:'none', fontSize:17, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){window.location.href=('https://www.lvmentor.com/about')}}>About</Button>
                    <Button sx={{textTransform:'none', fontSize:17, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){window.location.href=('https://www.lvmentor.com/contact')}}>Contact Us</Button>
                </Grid>

                <Grid item container xs={6} sm={4} justifyContent='flex-end' sx={{display: {xs: 'flex', md: 'none'}}}>
                    <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuOpen} sx={{ color:'white', }}>
                        <MenuIcon fontSize='large'/>
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={mobileMenuOpen} onClose={handleMenuClose} sx={{width:'50vw', border:'0px solid black'}} >
                        <MenuItem onClick={()=>{
                            handleMenuClose();
                            window.location.href=('https://www.lvmentor.com/');
                        }}>Home</MenuItem>
                        <Divider/>
                        <MenuItem onClick={()=>{
                            handleMenuClose();
                            window.location.href=('https://www.lvmentor.com/services');
                        }}>Services</MenuItem>
                        <Divider/>
                        <MenuItem onClick={()=>{
                            handleMenuClose();
                            window.location.href=('https://www.lvmentor.com/faq');
                        }}>FAQs</MenuItem>
                        <Divider/>
                        <MenuItem onClick={()=>{
                            handleMenuClose();
                            navigate('/');
                        }}>Events</MenuItem>
                        <Divider/>
                        <MenuItem onClick={()=>{
                            handleMenuClose();
                            window.location.href=('https://www.lvmentor.com/news-and-articles');
                        }}>News and articles</MenuItem>
                        <Divider/>
                        <MenuItem onClick={()=>{
                            handleMenuClose();
                            window.location.href=('https://www.lvmentor.com/about');
                        }}>About</MenuItem>
                        <Divider/>
                        <MenuItem onClick={()=>{
                            handleMenuClose();
                            window.location.href=('https://www.lvmentor.com/contact');
                        }}>Contact Us</MenuItem>
                    </Menu>
                </Grid>

            </Grid>

        </>
    );
}

// function ServiceButton(){

//     const navigate = useNavigate();

//     const [servicesAnchorEl, setServicesAnchorEl] = useState<null|HTMLElement>(null);

//     function handleSubmenuClose(){
//         setServicesAnchorEl(null);
//     }

//     return (
//         <div style={{border:'1px solid black', alignContent:'center'}}>
//             <Button id='services-btn' sx={{textTransform:'none', fontSize:15, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){navigate('/services')}} onMouseEnter={(event)=>{
//                         setServicesAnchorEl(event.currentTarget);
//                     }} >Services</Button>
//             <Menu open={Boolean(servicesAnchorEl)} anchorEl={servicesAnchorEl} MenuListProps={{onMouseLeave:handleSubmenuClose}}>
//                 <MenuItem>Study in Australia</MenuItem>
//                 <MenuItem>Migrate to Australia</MenuItem>
//             </Menu>
//         </div>
//     );
// }