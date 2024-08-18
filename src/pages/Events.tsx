// import { ExpandMoreOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import ContactUsSection from "../components/ContactUsSection";
// import WhiteDownArrow from '/whiteDownArrow.svg';

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const eventsImages = ['/Australian_University.webp', '/OperaHouse.webp', '/Two_Businessmen.webp', '/Female_Developers.webp', '/Job_Interview.webp']

export default function Events(){

    // const contactSectionRef = useRef<HTMLDivElement>(null);
    // const scrollToContactSection = () => {
    //     window.location.href = 'https://www.lvmentor.com/contact';
    //     contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    //   };

    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <EventsSection />
            <Divider sx={{mt:2, mb:5, width:'90vw', alignSelf:'center'}}/>
            <UpcomingEvents/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            {/* <ContactUsSection reference={contactSectionRef}/> */}
        </Box>
    );
}

function EventsSection(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'start', width:'90vw', ml:{md:5, lg:4}, mr:{md:2,lg:4}, pt:4, border:'0px solid black'}}>
            <Box sx={{display:'flex', flexDirection:{xs:'column', lg:'row'}, width:{xs:'auto',lg:'auto'}, gap:2}}>
                <Card sx={{display:'flex', flexDirection:'column', gap:{xl:4}, width:{xs:'auto', lg:'50%'}, borderRadius:'16px', pt:2, mx:0, boxShadow:0}}>
                    <Typography variant="h2" color={'#265D6B'} pb={2} fontSize={{xs:'32px',sm:'45px',lg:'65px'}}>Events</Typography>
                    <Typography pb={4} fontSize={{xl:'20px'}}>Explore our Events to discover exciting opportunities to enhance your career journey. From insightful seminars to hands-on workshops, stay updated on events designed to boost your skills, network with industry professionals, and achieve your goals. Join us and be a part of our vibrant community!</Typography>
                    
                    {/* <ExpandMoreOutlined sx={{fontSize:'90px', m:0, p:0, textShadow:5}}/> */}
                    {/* <img src="/whiteDownArrow.svg" alt="" style={{height:'90px', width:'90px', backgroundColor:'red', border:'1px solid black'}}/> */}
                </Card>
                {/* <Box component={'img'} src="/Conference.webp" sx={{width:{xs:'100vw', lg:'50%'}, borderRadius:'16px'}}/> */}
            </Box>
        </Box>
    );
}

function UpcomingEvents(){

    const [allEvents, setAllEvents] = useState<any>(undefined);
    const navigate = useNavigate();
    useEffect(()=>{

        const fetchAllEvents = async ()=>{
            let allEventsData = await axios.get('https://lv.aastikyadav.com/event');
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
            <Card sx={{width:'90vw', display:'flex', flexDirection:'column', alignSelf:'center', pt:5, pb:8, boxShadow:5, borderRadius:'16px'}}>
                <Typography variant="h6" sx={{alignSelf:'center'}}>Upcoming Events</Typography>
                <Grid container px={4} mt={5} gap={4} justifyContent={'center'}>
                    {allEvents.response.map((event:any, index:number)=>{
                        let upcomingEventDates = getUpcomingEventDatesArray(event.eventDate); 
                        let date = new Date(upcomingEventDates[0]);
                        console.log(date.getFullYear());
                        return <Grid key={event._id} item sx={{width:'290px'}}>
                        <Card sx={{borderRadius:'16px', boxShadow:5}}>
                            <CardMedia image={eventsImages[index]} sx={{height:'170px', objectFit:'fill'}}/>
                            <CardContent>
                                <Typography fontWeight={'bold'}>{event.eventName}</Typography>
                                <Typography>{`${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`}</Typography>
                                <Typography>Webinar</Typography>
                                <Button variant="outlined" size="small" sx={{mt:2, borderRadius:'8px', textTransform:'none', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}} onClick={()=>{navigate('/'+event._id)}}>Register</Button>
                            </CardContent>
                        </Card>
                    </Grid>})}
                </Grid>
            </Card>
        );
    }
}

function getUpcomingEventDatesArray(eventDates: any){
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let upcomingEventDates = eventDates.filter((ed)=>{
        let edate = new Date(ed);
        edate.setHours(0,0,0,0);
        return edate>today;
    });
    upcomingEventDates.sort((a, b) => a - b);
    return upcomingEventDates;
}