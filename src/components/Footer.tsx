import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Avatar, Box, Collapse, Grid, Typography } from "@mui/material";
import { useState } from "react";


export default function Footer(){
    const [servicesOpen, setServicesOpen] = useState<boolean>(false);
    const [faqsOpen, setFaqsOpen] = useState<boolean>(false);
    const [aboutOpen, setAboutOpen] = useState<boolean>(false);
    return (
      <Box height='auto' py='35px' px='8vw' sx={{backgroundColor:'#265D6B', display:'flex', flexDirection:'column', gap:5}}>
        <Box sx={{display:'flex', flexDirection:{xs:'column',lg:'row'}, justifyContent:'space-between', gap:{xs:4,lg:0}}}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', gap:2, border:'0px solid yellow'}}>
                <Avatar src="/lvlogo.webp" sx={{height:'90px', width:'90px'}}></Avatar>
                <Typography color={'white'} fontWeight={'bold'} noWrap>LUMINA VISTA</Typography>
            </Box>
            <Grid container columnGap={10} rowGap={5} sx={{justifyContent:{xs:'center',sm:'start',lg:'end'}, border:'0px solid red'}}>
                <Grid item>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography color='white' mb='5px' fontSize='20px'>COMPANY</Typography>
                        <Typography color='white'>Home</Typography>
                        <Box onClick={()=>{setServicesOpen(!servicesOpen)}} sx={{display:'flex', flexDirection:'row', cursor:'pointer'}}>
                            <Typography color='white'>Services</Typography>
                            &nbsp;&nbsp;
                            {servicesOpen?<ExpandLess sx={{color:'white'}}/>:<ExpandMore sx={{color:'white'}}/>}
                        </Box>
                        <Collapse in={servicesOpen}>
                            <Typography color='white' fontSize='14px'>&nbsp;Study in Australia</Typography>
                            <Typography color='white' fontSize='14px'>&nbsp;Migrate to Australia</Typography>
                            <Typography color='white' fontSize='14px'>&nbsp;Job ready programs</Typography>
                            <Typography color='white' fontSize='14px'>&nbsp;Career counselling</Typography>
                            <Typography color='white' fontSize='14px'>&nbsp;Mentorship</Typography>
                            <Typography color='white' fontSize='14px'>&nbsp;Internship</Typography>
                        </Collapse>
                        <Box onClick={()=>{setFaqsOpen(!faqsOpen)}} sx={{display:'flex', flexDirection:'row', cursor:'pointer'}}>
                            <Typography color='white'>FAQs</Typography>
                            &nbsp;&nbsp;
                            {faqsOpen?<ExpandLess sx={{color:'white'}}/>:<ExpandMore sx={{color:'white'}}/>}
                        </Box>
                        <Collapse in={faqsOpen}>
                            <Typography color='white' fontSize='14px'>&nbsp;Watch</Typography>
                            <Typography color='white' fontSize='14px'>&nbsp;Read</Typography>
                        </Collapse>
                        <Box onClick={()=>{setAboutOpen(!aboutOpen)}} sx={{display:'flex', flexDirection:'row', cursor:'pointer'}}>
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
                        <Typography color='white'>Contact Us</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography color='white' mb='5px' fontSize='20px'>LEGAL</Typography>
                        <Typography component={'a'} color='white' sx={{cursor:'pointer'}} onClick={()=>{window.location.href='https://www.lvmentor.com/terms-and-conditions'}}>Terms and conditions</Typography>
                        <Typography component={'a'} color='white' sx={{cursor:'pointer'}} onClick={()=>{window.location.href='https://www.lvmentor.com/privacy-policy'}}>Privacy policy</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography color='white' mb='5px' fontSize='20px'>SOCIAL</Typography>
                        <Typography color='white'>LinkedIn</Typography>
                        <Typography color='white'>Facebook</Typography>
                        <Typography color='white'>Instagram</Typography>
                        <Typography color='white'>X</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography color='white' mb='5px' fontSize='20px'>CONTACT</Typography>
                        <Typography color='white'>info@lumvista.com.au</Typography>
                        <Typography color='white'>Tel:123-456-7890</Typography>
                        <Typography color='white'>Adelaide, Brisbane,</Typography>
                        <Typography color='white'>Melbourne, Sydney</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Typography color='white' fontSize='12px'>© 2024 All rights reserved by Lumina Vista™</Typography>
      </Box>  
    );
}