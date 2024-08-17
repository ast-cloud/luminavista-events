import { Alert, Box, Button, Checkbox, CircularProgress, Divider, FormControlLabel, Link, MenuItem, Snackbar, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default function EventRegistration(){

    const {id, datetime} = useParams();

    return (
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'flex-start', gap:5, my:10}}> 
            <RegistrationForm id={id} datetime={datetime}/>
            <EventDetailBox id={id} datetime={datetime}/>
        </Box>
    );
}

function RegistrationForm({id, datetime}){

    const [agreeToWebinarPolicy, setAgreeToWebinarPolicy] = useState(false);

    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        areaOfInterest:'',
        comment:'',
        registrationDate:''
    });

    const [formErrors, setFormErrors] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        areaOfInterest:'',
        comment:''
    });

    const [snackbarData, setSnackbarData] = useState<any>({
        open: false,
        severity:''
    });

    const handleChange = (e: any)=>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const validate = ()=>{

        let errors={} as any;
        
        if(!formData.firstName)
            errors.firstName = "First Name is required";
        if(!formData.lastName)
            errors.lastName = "Last Name is required";

        if(!formData.email) {
            errors.email = 'Email is required';
        } 
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }

        if(!formData.phone) {
            errors.phone = 'Phone number is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = ()=>{
        if(validate()){
            console.log('Form submitted - ' + JSON.stringify(formData));

            let newobj = {
                firstName:formData.firstName,
                lastName:formData.lastName,
                email:formData.email,
                phoneNumber:formData.phone,
                areaOfInterest:[formData.areaOfInterest],
                comments:formData.comment,
                registrationDate:datetime,
                eventId: id
            }

            fetch('https://lv.aastikyadav.com/userDetails', {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(newobj)
            }).then((res)=>{
                if(res.status==200){
                    setSnackbarData({
                        open: true,
                        severity: 'success'
                    });
                    setFormData({
                        firstName:'',
                        lastName:'',
                        email:'',
                        phone:'',
                        areaOfInterest:'',
                        comment:'',
                        registrationDate:''
                    });
                    setAgreeToWebinarPolicy(false);
                }
                else{
                    setSnackbarData({
                        open: true,
                        severity: 'error'
                    });
                }
                console.log('Response status - ', res.status);
            })
        }
    }

    const handleSnackbarClose = ()=>{
        setSnackbarData({...snackbarData, open:false});
    }
    
    return (
        <>
            <Box sx={{display:'flex', flexDirection:'column', width:'35vw', alignItems:'flex-start', gap:4, border:'0px solid red'}}>
                <Typography variant="h4">Add your details</Typography>
                <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                    <TextField label='Firstname*' name="firstName" value={formData.firstName} onChange={handleChange} error={!!formErrors.firstName} helperText={formErrors.firstName}size="small" sx={{'& .MuiOutlinedInput-root':{'& fieldset':{borderColor:'black'}}}}/>
                    <TextField label='Lastname*' name="lastName" value={formData.lastName} onChange={handleChange} error={!!formErrors.lastName} helperText={formErrors.lastName} size="small" sx={{'& .MuiOutlinedInput-root':{'& fieldset':{borderColor:'black'}}}}/>
                </Box>
                <TextField label='Email*' name="email" value={formData.email} onChange={handleChange} error={!!formErrors.email} helperText={formErrors.email} size="small" fullWidth sx={{'& .MuiOutlinedInput-root':{'& fieldset':{borderColor:'black'}}}}/>
                <TextField label='Phone number*' name="phone" value={formData.phone} onChange={handleChange} error={!!formErrors.phone} helperText={formErrors.phone} size="small" fullWidth sx={{'& .MuiOutlinedInput-root':{'& fieldset':{borderColor:'black'}}}}/>
                <TextField select label='Area of interest' name="areaOfInterest" value={formData.areaOfInterest} onChange={handleChange} InputLabelProps={{sx:{fontSize:'14px'}}} size="small" fullWidth sx={{'& .MuiOutlinedInput-root':{'& fieldset':{borderColor:'black'}}}}>
                    <MenuItem value={'Study in Australia'}>Study in Australia</MenuItem>
                    <MenuItem value={'Migrate to Australia'}>Migrate to Australia</MenuItem>
                    <MenuItem value={'Career Counselling'}>Career Counselling</MenuItem>
                    <MenuItem value={'Job Ready Program'}>Job ready program</MenuItem>
                    <MenuItem value={'Mentorship Program'}>Mentorship program</MenuItem>
                    <MenuItem value={'Internship'}>Internship</MenuItem>
                    <MenuItem value={'Others (Specify in the comment)'}>Others (Specify in the message)</MenuItem>
                </TextField>
                <TextField label='Comments' name="comment" value={formData.comment} onChange={handleChange} multiline minRows={4} fullWidth sx={{mb:2, '& .MuiOutlinedInput-root':{'& fieldset':{borderColor:'black'}}}}/>
                {/* <Typography variant="h4">Event policies</Typography> */}
                <Typography>Please indicate that you’ve read and agree to the event’s policies.</Typography>
                <FormControlLabel control={<Checkbox size="small" checked={agreeToWebinarPolicy} onChange={(e)=>{setAgreeToWebinarPolicy(e.target.checked)}}/>} label={<Typography>I agree to online <Link  href='https://www.lvmentor.com/webinar-policy'>Webinar policy</Link></Typography>}/>
                <Button variant="outlined" onClick={handleSubmit} sx={{borderRadius:'16px', color:'black', borderColor:'black'}} fullWidth disabled={!agreeToWebinarPolicy}>Submit</Button>
            </Box>
            <Snackbar open={snackbarData.open} autoHideDuration={4000} onClose={handleSnackbarClose} message="URL copied for sharing">
                <Alert severity={snackbarData.severity}>
                    {snackbarData.severity==='success'?'Registration successful.':'Error in registration.'}
                </Alert>
            </Snackbar>
        </>
    );
}

function EventDetailBox({id, datetime}){

    const [eventDetails, setEventDetails] = useState<any>(undefined);

    useEffect(()=>{
        const fetchEventDetails = async ()=>{
            let eventData = await axios.get('https://lv.aastikyadav.com/event/'+id);
            if(eventData.status==200){
                setEventDetails(eventData.data.event);
            }
            else{
                setEventDetails(null);
            }
        }
        fetchEventDetails();

    },[]);
    
    if(eventDetails===undefined){
        return <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'20vh'}}>
        <CircularProgress sx={{color:'black'}}/>
      </div>
    }

    let formattedDatetime = ''+(datetime.slice(0,2))+' '+(monthNames[parseInt(datetime.slice(2,4))])+' '+datetime.slice(4,8)+', '+ datetime.slice(8,10)+':'+datetime.slice(10,12)+' - '+datetime.slice(12,14)+':'+datetime.slice(14,16);

    return (
        <Box sx={{display:'flex', flexDirection:'column', p:2, width:'20vw', border:'1px solid black'}}>
            <Typography variant="h6">{eventDetails.eventName} @ Lumina Vista</Typography>
            <Divider sx={{my:2}}/>
            <Typography fontSize={'15px'}>{formattedDatetime}</Typography>
            <Typography fontSize={'15px'}>GMT+9:30</Typography>
            <Typography fontSize={'15px'}>Webinar</Typography>
        </Box>
    );
}