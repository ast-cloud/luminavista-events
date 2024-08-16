import { Box, Button, Card, CircularProgress, Dialog, DialogTitle, Divider, List, ListItem, ListItemButton, ListItemText, Snackbar, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default function Event(){

    const {id} = useParams();

    const navigate = useNavigate();
    
    const [urlCopiedSnackbarOpen, setUrlCopiedSnackbarOpen] = useState(false);

    const [eventDetails, setEventDetails] = useState<any>(undefined);
    
    const [selectedDateIndex, setSelectedDateIndex] = useState(0);
    const [dateSelectDialogOpen, setDateSelectDialogOpen] = useState(false);

    useEffect(()=>{
        const fetchEventDetails = async ()=>{
            let eventData = await axios.get('https://lumina-vista-backend.vercel.app/event/'+id);
            if(eventData.status==200){
                setEventDetails(eventData.data.event);
            }
            else{
                setEventDetails(null);
            }
        }
        fetchEventDetails();

    },[]);

    const handleShare = ()=>{
        navigator.clipboard.writeText(location.href);
        console.log('here');
        setUrlCopiedSnackbarOpen(true);
    }

    const handleSnackbarClose = ()=>{
        setUrlCopiedSnackbarOpen(false);
    }

    const handleDateSelectDialogClose = (value: number)=>{
        setDateSelectDialogOpen(false);
        setSelectedDateIndex(value);
    }

    if(eventDetails===undefined){
        return <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'74vh'}}>
        <CircularProgress sx={{color:'black'}}/>
      </div>
    }
    else{
        console.log('Time - ',eventDetails.eventTime);
        let date = new Date(eventDetails.eventDate[selectedDateIndex]);
        let formattedDateString = `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;
        let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        let month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
        let year = date.getFullYear();
        let startHours = eventDetails.eventTime.slice(0,2), startMinutes = eventDetails.eventTime.slice(3,5), endHours = eventDetails.eventTime.slice(6,8), endMinutes = eventDetails.eventTime.slice(9);
        let SelectedDateTime = ''+day+month+year+startHours+startMinutes+endHours+endMinutes+'0930';
        return (
            <Box sx={{display:'flex', flexDirection:'column', width:'98vw', alignItems:'center'}}>
                <Card sx={{display:'flex', flexDirection:'column', width:'90%', my:5, pt:5, backgroundColor:'white', boxShadow:5, alignItems:'center', borderRadius:'16px'}}>
                    <Typography fontSize={{}}>{formattedDateString} | Webinar</Typography>            
                    <Typography variant="h4" my={2}>{eventDetails.eventName}</Typography>
                    <Typography width={{xs:'80%', sm:'75%', md:'65%', lg:'50%'}} textAlign={'center'}>Discover world-class education and vibrant culture in Australia at our seminar! Don't miss out on this opportunity.</Typography>
                    <Button variant='outlined' sx={{borderRadius:'16px', color:'black', borderColor:'black', textTransform:'none', width:'90px', my:5, ":hover":{color:'white', backgroundColor:'black'}}} onClick={()=>{navigate('/'+id+'/register/'+SelectedDateTime)}}>Register</Button>
                    <Box component={'img'} src="/Australian_University.webp" width={{xs:'80%', sm:'75%', md:'65%', lg:'50%'}} sx={{borderRadius:'16px'}}/>
                    <Box sx={{display:'flex', flexDirection:'column', width:{xs:'80%', sm:'75%', md:'65%', lg:'50%'}, mt:5, border:'0px solid black'}}>
                        <Typography fontSize={'28px'} sx={{}}>Time & Location</Typography>
                        <Typography my={1}>{(eventDetails.eventDate.length>1)? ( (eventDetails.eventDate.length-1)+' more dates') : '...'}</Typography>
                        <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, justifyContent:'space-between', gap:{xs:2, sm:0}}}>
                            <Typography my={1}>{formattedDateString}, {eventDetails.eventTime} GMT+9:30</Typography>
                            <Button variant="outlined" size="small" sx={{borderRadius:'16px', textTransform:'none', color:'black', borderColor:'black', height:'auto', Width:'150px', ":hover":{color:'white', backgroundColor:'black', borderColor:'black'}}} onClick={()=>{setDateSelectDialogOpen(true)}}>Select Different Date</Button>
                        </Box>
                        <Divider sx={{my:5, width:'95%'}}/>
                        <Typography fontSize={'25px'}>About the event</Typography>
                        <Typography>Join us for an insightful seminar on studying in Australia! Learn about world-class universities, diverse courses, visa processes, and scholarship opportunities. Hear from experts and alumni about their experiences and get all your questions answered. This event is your gateway to a bright future Down Under. Don't miss it!</Typography>
                        <Button variant="outlined" size="medium" sx={{width:'90px', textTransform:'none', borderRadius:'16px', my:5, color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black', borderColor:'black'}}} onClick={()=>{navigate('/'+id+'/register/'+SelectedDateTime)}}>Register</Button>
                        <Button onClick={handleShare} variant="outlined" sx={{width:'140px', textTransform:'none', borderRadius:'16px', mb:5, color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black', borderColor:'black'}}}>Share this event</Button>
                    </Box>
                </Card>
                <Snackbar open={urlCopiedSnackbarOpen} autoHideDuration={4000} onClose={handleSnackbarClose} message="URL copied for sharing"/>
                <DateSelectDialog open={dateSelectDialogOpen} datesArray={eventDetails.eventDate} onClose={handleDateSelectDialogClose} selectedValue={0}/>
            </Box>
        );
    }
}


export interface DateSelectDialogProps {
    open: boolean;
    datesArray : Date[];
    selectedValue: number;
    onClose: (value: number) => void;
  }
function DateSelectDialog(props: DateSelectDialogProps) {

    const { onClose, selectedValue, open, datesArray } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value: number) => {
      onClose(value);
    };
  
    return (
        <Dialog onClose={handleClose} open={open} sx={{}}>
          <DialogTitle>Other dates :</DialogTitle>
          <List sx={{ pt: 0, minWidth:'250px'}}>
            {datesArray.map((date, index) => {
              let formattedDate = new Date(date);
              let formattedDateString = `${formattedDate.getDate()} ${monthNames[formattedDate.getMonth()]}, ${formattedDate.getFullYear()}`;
              return <ListItem disableGutters key={formattedDate.getUTCDate()} sx={{m:0}}>
                <ListItemButton onClick={() => handleListItemClick(index)}>
                  <ListItemText primary={formattedDateString} />
                </ListItemButton>
              </ListItem>;
            })}
          </List>
        </Dialog>
    );
  }
  
//   function SimpleDialogDemo() {
//     const [open, setOpen] = useState(false);
//     const [selectedValue, setSelectedValue] = useState(emails[1]);
  
//     const handleClickOpen = () => {
//       setOpen(true);
//     };
  
//     const handleClose = (value: string) => {
//       setOpen(false);
//       setSelectedValue(value);
//     };
  
//     return (
//       <div>
//         <Typography variant="subtitle1" component="div">
//           Selected: {selectedValue}
//         </Typography>
//         <br />
//         <Button variant="outlined" onClick={handleClickOpen}>
//           Open simple dialog
//         </Button>
//         <SimpleDialog
//           selectedValue={selectedValue}
//           open={open}
//           onClose={handleClose}
//         />
//       </div>
//     );
//   }