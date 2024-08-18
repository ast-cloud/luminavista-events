import {Button, Typography, Grid, IconButton, Menu, MenuItem, Box, Avatar, Divider} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Instagram, Facebook, X, LinkedIn, YouTube } from '@mui/icons-material';
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
            <Box sx={{display:{ xs: 'none', md: 'flex' }, height:'20px', flexDirection:'row', justifyContent:'flex-end', alignItems:'center', gap: 5, py:1, pr: 8}}>
                <IconButton onClick={()=>{window.open('https://www.instagram.com/lumina_vista_mentorship?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}} sx={{color:'black'}}>
                    <Instagram/>
                </IconButton>
                <IconButton onClick={()=>{window.open('https://www.facebook.com/profile.php?id=61564007084893&mibextid=LQQJ4d', '_blank')}} sx={{color:'black'}}>
                    <Facebook/>
                </IconButton>
                <IconButton onClick={()=>{window.open('https://www.x.com/', '_blank')}} sx={{color:'black'}}>
                    <X/>
                </IconButton>
                <IconButton onClick={()=>{window.open('https://www.linkedin.com/company/lumina-vista-mentorship-career-counselling/', '_blank')}} sx={{color:'black'}}>
                    <LinkedIn/>
                </IconButton>
                <IconButton onClick={()=>{window.open('https://www.youtube.com/', '_blank')}} sx={{color:'black'}}>
                    <YouTube/>
                </IconButton>
                <Typography component={'a'} onClick={()=>{window.location.href='https://www.lvmentor.com/news-and-articles'}} sx={{cursor:'pointer'}}>News and articles</Typography>
                <Typography component={'a'} onClick={()=>{navigate('/')}} sx={{cursor:'pointer'}}>Events</Typography>                   
            </Box>

            <Grid container sx={{border:'0px solid black', height:'80px', justifyContent:'space-between', alignItems:'center', backgroundColor:'#265D6B', px:{xs:2, sm:4, md:8}, py:1}}>

                <Grid item border={'0px solid red'} xs={6}>
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <Avatar src='/lvlogo.webp' sx={{height:'70px', width:'70px'}}/>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', ml:2}}>
                            <Typography color={'white'} noWrap fontSize={{xs:15, sm:20}} sx={{fontWeight:'bold', mb:0, pb:0}}>LUMINA VISTA</Typography>
                            <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}}}>
                                <Typography color={'white'} noWrap fontSize={{xs:10, sm:15}} sx={{fontWeight:'bold', mt:0, pt:0}} >Illuminating Futures, &nbsp;</Typography>
                                <Typography color={'white'} noWrap fontSize={{xs:10, sm:15}} sx={{fontWeight:'bold', mt:0, pt:0}} >Empowering Journeys</Typography>
                            </Box>
                        </Box>
                        {/* <Card variant='outlined' onClick={function(){}} style={{border:'1px solid red', boxShadow:'none', cursor:'pointer', backgroundColor:'transparent'}}><Typography variant="h4" color='white'>LuminaVista</Typography></Card> */}
                        {/* <Image src={logo} width={100} height={20} alt=''/> */}
                    </Box>
                </Grid>

                <Grid item container xs={6} justifyContent='end' sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button sx={{textTransform:'none', fontSize:15, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){window.location.href=('https://www.lvmentor.com/')}}>Home</Button>

                    <Button id='services-btn' sx={{textTransform:'none', fontSize:15, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){window.location.href=('https://www.lvmentor.com/services')}} >Services</Button>
                    {/* <Menu open={serviceMenuOpen} anchorEl={anchorEl}>
                        <MenuItem>Study in Australia</MenuItem>
                        <MenuItem>Migrate to Australia</MenuItem>
                    </Menu> */}
                    
                    <Button sx={{textTransform:'none', fontSize:15, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){window.location.href=('https://www.lvmentor.com/faq')}} onMouseEnter={(event)=>{
                        setAnchorEl(event.currentTarget);
                        
                    }}>FAQ</Button>
                    <Menu open={false} anchorEl={anchorEl}>
                        <MenuItem>Study in Australia</MenuItem>
                        <MenuItem>Migrate to Australia</MenuItem>
                    </Menu>

                    <Button sx={{textTransform:'none', fontSize:15, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){window.location.href=('https://www.lvmentor.com/about')}}>About</Button>
                    <Button sx={{textTransform:'none', fontSize:15, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){window.location.href=('https://www.lvmentor.com/contact')}}>Contact Us</Button>
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