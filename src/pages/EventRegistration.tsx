import { Alert, Box, Button, Checkbox, Divider, FormControlLabel, MenuItem, Snackbar, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function EventRegistration(){
    return (
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'flex-start', gap:5, my:10}}> 
            <RegistrationForm/>
            <Box sx={{display:'flex', flexDirection:'column', p:2, width:'20vw', border:'1px solid black'}}>
                <Typography variant="h6">Study In Australia @ Lumina Vista</Typography>
                <Divider sx={{my:2}}/>
                <Typography fontSize={'15px'}>11 Aug 2024, 5:00 pm – 6:00 pm</Typography>
                <Typography fontSize={'15px'}>GMT+9:30</Typography>
                <Typography fontSize={'15px'}>Webinar</Typography>
            </Box>
        </Box>
    );
}

function RegistrationForm(){

    const [agreeToWebinarPolicy, setAgreeToWebinarPolicy] = useState(false);

    const {id, datetime} = useParams();

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

            fetch('http://localhost:3000/userDetails', {
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
                <Typography variant="h4">1. Add your details</Typography>
                <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                    <TextField label='Firstname*' name="firstName" value={formData.firstName} onChange={handleChange} error={!!formErrors.firstName} helperText={formErrors.firstName}size="small" />
                    <TextField label='Lastname*' name="lastName" value={formData.lastName} onChange={handleChange} error={!!formErrors.lastName} helperText={formErrors.lastName} size="small" />
                </Box>
                <TextField label='Email*' name="email" value={formData.email} onChange={handleChange} error={!!formErrors.email} helperText={formErrors.email} size="small" fullWidth/>
                <TextField label='Phone number*' name="phone" value={formData.phone} onChange={handleChange} error={!!formErrors.phone} helperText={formErrors.phone} size="small" fullWidth/>
                <TextField select label='Area of interest' name="areaOfInterest" value={formData.areaOfInterest} onChange={handleChange} InputLabelProps={{sx:{fontSize:'14px'}}} size="small" fullWidth>
                    <MenuItem value={'Engineering and Technology'}>Engineering and Technology</MenuItem>
                    <MenuItem value={'Business and Management'}>Business and Management</MenuItem>
                    <MenuItem value={'Computer Science and IT'}>Computer Science and IT</MenuItem>
                    <MenuItem value={'Finance and accounting'}>Finance and accounting</MenuItem>
                    <MenuItem value={'AI and ML'}>AI and ML</MenuItem>
                    <MenuItem value={'Cybersecurity'}>Cybersecurity</MenuItem>
                    <MenuItem value={'Others (Specify in the message)'}>Others (Specify in the message)</MenuItem>
                </TextField>
                <TextField label='Comments' name="comment" value={formData.comment} onChange={handleChange} multiline minRows={4} sx={{mb:2}} fullWidth/>
                <Typography variant="h4">2. Event policies</Typography>
                <Typography>Please indicate that you’ve read and agree to the event’s policies.</Typography>
                <FormControlLabel control={<Checkbox size="small" checked={agreeToWebinarPolicy} onChange={(e)=>{setAgreeToWebinarPolicy(e.target.checked)}}/>} label='I Agree to online webinar policy'/>
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