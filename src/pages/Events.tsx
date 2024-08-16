import { ExpandMoreOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactUsSection from "../components/ContactUsSection";

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default function Events(){
    return (
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <EventsSection/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <UpcomingEvents/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <ContactUsSection/>
        </Box>
    );
}

function EventsSection(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', px:4, pt:4}}>
            <Box sx={{display:'flex', flexDirection:{xs:'column', lg:'row'}, gap:2}}>
                <Card sx={{display:'flex', flexDirection:'column', width:{xs:'95%', lg:'50%'}, borderRadius:'16px', pt:4, px:4}}>
                    <Typography variant="h2" color={'#265D6B'} pb={4}>Events</Typography>
                    <Typography pb={4}>Explore our Events to discover exciting opportunities to enhance your career journey. From insightful seminars to hands-on workshops, stay updated on events designed to boost your skills, network with industry professionals, and achieve your goals. Join us and be a part of our vibrant community!</Typography>
                    <Button variant="outlined" size="large" sx={{color:'black', borderColor:'black', borderRadius:'12px', textTransform:'none', width:'200px', px:2, ":hover":{color:'white', backgroundColor:'black'}}}>Book a free session now</Button>
                    <ExpandMoreOutlined sx={{fontSize:'90px', m:0, p:0, textShadow:5}}/>
                </Card>
                <Box component={'img'} src="/Conference.webp" sx={{width:{xs:'100%', lg:'50%'}, borderRadius:'16px'}}/>
            </Box>
        </Box>
    );
}

function UpcomingEvents(){

    const [allEvents, setAllEvents] = useState<any>(undefined);
    const navigate = useNavigate();
    useEffect(()=>{

        const fetchAllEvents = async ()=>{
            let allEventsData = await axios.get('https://lumina-vista-backend.vercel.app/event');
            if(allEventsData.status==200){
                setAllEvents(allEventsData.data);
                console.log('All events - ', allEventsData.data);
            }
            else{
                setAllEvents(null);
            }
        }
        fetchAllEvents();
    },[]);

    if(allEvents===undefined){
        return <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'74vh'}}>
        <CircularProgress sx={{color:'black'}}/>
      </div>
    }
    else{
        console.log('allEvents - ', allEvents.response[0].eventDate[0]);
        return (
            <Card sx={{width:'90vw', display:'flex', flexDirection:'column', alignSelf:'center', py:5}}>
                <Typography variant="h6" sx={{alignSelf:'center'}}>Upcoming Events</Typography>
                <Grid container px={4} mt={5} gap={4} justifyContent={'center'}>
                    {allEvents.response.map((event:any)=>{ 
                        let date = new Date(event.eventDate[0]);
                        console.log(date.getFullYear());
                        return <Grid key={event._id} item sx={{width:'290px'}}>
                        <Card sx={{borderRadius:'16px'}}>
                            <CardMedia image="/Australian_University.webp" sx={{height:'35vh', objectFit:'fill'}}/>
                            <CardContent>
                                <Typography>{event.eventName}</Typography>
                                <Typography>{`${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`}</Typography>
                                <Typography>Webinar</Typography>
                                <Button variant="outlined" size="small" sx={{mt:2, borderRadius:'14px', textTransform:'none', color:'black', borderColor:'black'}} onClick={()=>{navigate('/'+event._id)}}>Register</Button>
                            </CardContent>
                        </Card>
                    </Grid>})}
                </Grid>
            </Card>
        );
    }
}