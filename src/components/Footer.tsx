import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Avatar, Box, Collapse, Grid, Typography } from "@mui/material";
import { useState } from "react";


export default function Footer(){
    const [servicesOpen, setServicesOpen] = useState<boolean>(false);
    const [faqsOpen, setFaqsOpen] = useState<boolean>(false);
    const [aboutOpen, setAboutOpen] = useState<boolean>(false);
    return (
      <Box height='auto' py='75px' px='7vw' sx={{backgroundColor:'#265D6B', display:'flex', flexDirection:'column', gap:5}}>
        <Box sx={{display:'flex', flexDirection:{xs:'column',lg:'row'}, justifyContent:'space-around', gap:{xs:4,lg:20}}}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', gap:2, cursor:'pointer', border:'0px solid yellow'}} onClick={function(){window.location.href=('https://www.lvmentor.com/')}}>
                <Avatar src="/lvlogo.webp" sx={{height:'90px', width:'90px'}}></Avatar>
                <Typography color={'white'} fontWeight={'bold'} noWrap>LUMINA VISTA</Typography>
            </Box>
            <Grid container columnGap={{sm:4,md:10,lg:10,xl:24}} rowGap={5} sx={{justifyContent:{xs:'center',sm:'start',lg:'center',xl:'center'}, border:'0px solid red'}}>
                <Grid item sx={{display:'flex', border:'0px solid white', flexDirection:'row', gap:{xs:8,sm:8,md:8,lg:7,xl:22}}}>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography color='white' mb='12px' fontSize='20px'>COMPANY</Typography>
                        <Typography component={'a'} color='white' sx={{cursor:'pointer'}} onClick={function(){window.location.href=('https://www.lvmentor.com/')}}>Home</Typography>
                        <Box onClick={()=>{setServicesOpen(!servicesOpen)}} sx={{display:'flex', flexDirection:'row', cursor:'pointer', border:'0px solid red', justifyContent:'space-between'}}>
                            <Typography color='white'>Services</Typography>
                            &nbsp;&nbsp;
                            {servicesOpen?<ExpandLess sx={{color:'white'}}/>:<ExpandMore sx={{color:'white'}}/>}
                        </Box>
                        <Collapse in={servicesOpen}>
                            <Typography color='white' fontSize='14px' sx={{cursor:'pointer'}} onClick={function(){window.location.href=('https://www.lvmentor.com/study-in-australia')}}>&nbsp;Study in Australia</Typography>
                            <Typography color='white' fontSize='14px' sx={{cursor:'pointer'}} onClick={function(){window.location.href=('https://www.lvmentor.com/migrate-to-australia')}}>&nbsp;Migrate to Australia</Typography>
                            <Typography color='white' fontSize='14px' sx={{cursor:'pointer'}} onClick={function(){window.location.href=('https://www.lvmentor.com/job-ready-programs')}}>&nbsp;Job ready programs</Typography>
                            <Typography color='white' fontSize='14px' sx={{cursor:'pointer'}} onClick={function(){window.location.href=('https://www.lvmentor.com/career-counselling')}}>&nbsp;Career counselling</Typography>
                            <Typography color='white' fontSize='14px' sx={{cursor:'pointer'}} onClick={function(){window.location.href=('https://www.lvmentor.com/mentorship')}}>&nbsp;Mentorship</Typography>
                            <Typography color='white' fontSize='14px' sx={{cursor:'pointer'}} onClick={function(){window.location.href=('https://www.lvmentor.com/internship')}}>&nbsp;Internship</Typography>
                        </Collapse>
                        <Box onClick={()=>{setFaqsOpen(!faqsOpen)}} sx={{display:'flex', flexDirection:'row', cursor:'pointer', border:'0px solid red', justifyContent:'space-between'}}>
                            <Typography color='white'>FAQs</Typography>
                            &nbsp;&nbsp;
                            {faqsOpen?<ExpandLess sx={{color:'white'}}/>:<ExpandMore sx={{color:'white'}}/>}
                        </Box>
                        <Collapse in={faqsOpen}>
                            <Typography color='white' fontSize='14px'>&nbsp;Watch</Typography>
                            <Typography color='white' fontSize='14px'>&nbsp;Read</Typography>
                        </Collapse>
                        <Box onClick={()=>{setAboutOpen(!aboutOpen)}} sx={{display:'flex', flexDirection:'row', cursor:'pointer', justifyContent:'space-between'}}>
                            <Typography color='white'>About</Typography>
                            &nbsp;&nbsp;
                            {aboutOpen?<ExpandLess sx={{color:'white'}}/>:<ExpandMore sx={{color:'white'}}/>}
                        </Box>
                        <Collapse in={aboutOpen}>
                            <Typography color='white' fontSize='14px'>&nbsp;Mission</Typography>
                            <Typography color='white' fontSize='14px'>&nbsp;Our story</Typography>
                            <Typography color='white' fontSize='14px'>&nbsp;Our team</Typography>
                            <Typography color='white' fontSize='14px'>&nbsp;Partners</Typography>
                            <Typography color='white' fontSize='14px'>&nbsp;Testimonials</Typography>
                        </Collapse>
                        <Typography color='white' sx={{cursor:'pointer'}} onClick={function(){window.location.href=('https://www.lvmentor.com/contact')}}>Contact Us</Typography>
                    </Box>
                {/* </Grid>
                <Grid item> */}
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography color='white' mb='12px' fontSize='20px'>LEGAL</Typography>
                        <Typography component={'a'} color='white' sx={{cursor:'pointer'}} onClick={()=>{window.location.href='https://www.lvmentor.com/terms-and-conditions'}}>Terms and conditions</Typography>
                        <Typography component={'a'} color='white' sx={{cursor:'pointer'}} onClick={()=>{window.location.href='https://www.lvmentor.com/privacy-policy'}}>Privacy policy</Typography>
                    </Box>
                </Grid>
                <Grid item sx={{display:'flex', border:'0px solid white', flexDirection:'row', gap:{xs:16,sm:14,md:10,lg:10,xl:22}, mr:{xs:1, xm:0}}}>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography color='white' mb='12px' fontSize='20px'>SOCIAL</Typography>
                        <Typography color='white' sx={{cursor:'pointer'}} onClick={()=>{window.open('https://www.linkedin.com/company/lumina-vista-mentorship-career-counselling/', '_blank')}}>LinkedIn</Typography>
                        <Typography color='white' sx={{cursor:'pointer'}} onClick={()=>{window.open('https://www.facebook.com/profile.php?id=61564007084893&mibextid=LQQJ4d', '_blank')}}>Facebook</Typography>
                        <Typography color='white' sx={{cursor:'pointer'}} onClick={()=>{window.open('https://www.instagram.com/lumina_vista_mentorship?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}}>Instagram</Typography>
                        <Typography color='white' sx={{cursor:'pointer'}} onClick={()=>{window.open('https://www.x.com/', '_blank')}}>X</Typography>
                    </Box>
                {/* </Grid>
                <Grid item> */}
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography color='white' mb='12px' fontSize='20px' sx={{cursor:'pointer'}} onClick={()=>{window.location.href=('https://www.lvmentor.com/contact')}}>CONTACT</Typography>
                        <Typography color='white'>info@lvmentor.com</Typography>
                        <Typography color='white'>Tel:1300941827</Typography>
                        <Typography color='white' sx={{cursor:'pointer'}} onClick={()=>{window.location.href=('https://www.lvmentor.com/contact')}}>Australia | India</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Typography color='white' fontSize='12px'>© 2024 All rights reserved by Lumina Vista™</Typography>
      </Box>  
    );
}