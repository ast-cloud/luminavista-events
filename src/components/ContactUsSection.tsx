import { Add } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControlLabel, Link, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function ContactUsSection(props:any){

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        pmoc:'',
        hcwh:'',
        aoi:'',
        message:''
    });

    const [formErrors, setFormErrors] = useState({
        name:'',
        email:'',
        phone:'',
        pmoc:'',
        hcwh:'',
        aoi:'',
        message:''
    });

    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleChange = (e: any)=>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const validate = ()=>{
        let errors={} as any;
        
        if(!formData.name)
            errors.name = "Name is required";

        if(!formData.email) {
            errors.email = 'Email is required';
        } 
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = ()=>{
        if(validate()){
            console.log('Form submitted - ' + JSON.stringify(formData));
        }
    }

    return (
        <Box ref={props.reference} sx={{display:'flex', flexDirection:'column', alignItems:'center', mx:'4vw', mb:5, border:'0px solid red'}}>
            <Typography fontSize={'50px'} color={'#265D6B'} mb={'4vw'} lineHeight={1} sx={{fontWeight:2}}>Contact Us</Typography>
            
            <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, alignItems:'start', height:{xs:'auto',md:'82vh'}, width:'100%', gap:2, border:'0px solid red'}}>
                <Box component='form' height={'auto'} width={{xs:'90%', md:'50%'}} sx={{display:'flex', flexDirection:'column', flexBasis:'6', order:{xs:2, md:1}}}>
                    <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, width:'100%', gap:2, mb:2, border:'0px solid red'}}>
                        <TextField id='name' label='Full name *' name="name" value={formData.name} onChange={handleChange} error={!!formErrors.name} helperText={formErrors.name} size="small" fullWidth sx={{fontSize:'60px', '& .MuiOutlinedInput-root':{borderRadius:'8px', '& fieldset':{borderColor:'black'}}}}/>
                        <TextField id='email' label='Email *' name="email" value={formData.email} onChange={handleChange} error={!!formErrors.email} helperText={formErrors.email} size="small" fullWidth sx={{'& .MuiOutlinedInput-root':{borderRadius:'8px', '& fieldset':{borderColor:'black'}}}}/>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, gap:2, mb:2}}>
                            <TextField id='phone' label='Phone' size="small" fullWidth sx={{'& .MuiOutlinedInput-root':{borderRadius:'8px', '& fieldset':{borderColor:'black'}}}}/>
                            <TextField select label='Preferred method of contact' name="pmoc" value={formData.pmoc} onChange={handleChange} InputLabelProps={{sx:{fontSize:'14px'}}} size="small" fullWidth sx={{flexGrow:1, '& .MuiOutlinedInput-root':{borderRadius:'8px', '& fieldset':{borderColor:'black'}}}}>
                                <MenuItem key={'Phone'} value={'Phone'}>Phone</MenuItem>
                                <MenuItem key={'E-mail'} value={'E-mail'}>E-mail</MenuItem>
                            </TextField>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, gap:2, mb:2}}>
                            <TextField select label='How can we help?' name="hcwh" value={formData.hcwh} onChange={handleChange} InputLabelProps={{sx:{fontSize:'14px'}}} size="small" fullWidth sx={{'& .MuiOutlinedInput-root':{borderRadius:'8px', '& fieldset':{borderColor:'black'}}}}>
                                <MenuItem value={'Book my 30 mins free session now'}>Book my 30 mins free session now</MenuItem>
                                <MenuItem value={'Study in Australia'}>Study in Australia</MenuItem>
                                <MenuItem value={'Migrate to Australia'}>Migrate to Australia</MenuItem>
                                <MenuItem value={'Job ready programs'}>Job ready programs</MenuItem>
                                <MenuItem value={'Career counselling'}>Career counselling</MenuItem>
                                <MenuItem value={'Mentorship'}>Mentorship</MenuItem>
                                <MenuItem value={'Internship'}>Internship</MenuItem>
                            </TextField>
                            <TextField select label='Area of interest' name="aoi" value={formData.aoi} onChange={handleChange} InputLabelProps={{sx:{fontSize:'14px'}}} size="small" fullWidth sx={{'& .MuiOutlinedInput-root':{borderRadius:'8px', '& fieldset':{borderColor:'black'}}}}>
                                <MenuItem value={'Engineering and Technology'}>Engineering and Technology</MenuItem>
                                <MenuItem value={'Business and Management'}>Business and Management</MenuItem>
                                <MenuItem value={'Computer Science and IT'}>Computer Science and IT</MenuItem>
                                <MenuItem value={'Finance and accounting'}>Finance and accounting</MenuItem>
                                <MenuItem value={'AI and ML'}>AI and ML</MenuItem>
                                <MenuItem value={'Cybersecurity'}>Cybersecurity</MenuItem>
                                <MenuItem value={'Others (Specify in the message)'}>Others (Specify in the message)</MenuItem>
                            </TextField>
                    </Box>

                    <TextField label='Message' name="message" value={formData.message} onChange={handleChange} helperText='Write your message here' multiline minRows={4} sx={{mb:2, '& .MuiOutlinedInput-root':{borderRadius:'8px', '& fieldset':{borderColor:'black'}}}}/>

                    <FormControlLabel control={<Checkbox size="small" checked={agreeToTerms}  onChange={(e) => setAgreeToTerms(e.target.checked)}/>} label={<Typography>Agree to <Link  href='https://www.lvmentor.com/terms-and-conditions'>Terms and Privacy policy</Link></Typography>}/>
                    <FormControlLabel control={<Checkbox size="small"/>} label='Subscribe to our newsletter and marketing materials'/>

                    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', mt:2, border:'0px solid red'}}>
                        <Box sx={{display:'flex', flexDirection:'column'}}>
                            <Typography color='grey' fontSize={'14px'} mb='4px'>Upload your documents</Typography>
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="raised-button-file"
                                type="file"
                                onChange={()=>{}}
                                />
                            <label htmlFor="raised-button-file">
                                <Button variant="contained" component="span" size="small" sx={{backgroundColor:'black', borderRadius:'10px', fontSize:'15px', textTransform:'none', "&:hover":{backgroundColor:'#404040'}}} startIcon={<Add/>}>File upload</Button>
                            </label>
                        </Box>
                        <Button variant="contained" size="small" sx={{backgroundColor:'black', height:'60%', width:'50%', textTransform:'none', fontSize:'15px', borderRadius:'10px', alignSelf:'end', "&:hover":{backgroundColor:'#404040'}}} onClick={handleSubmit} disabled={!agreeToTerms}>Submit</Button>
                    </Box>
                    
                </Box>
                <Box component='img' src="/ContactUsImage.webp" height={{xs:'70vh', sm:'90vh', md:'100%'}} width={{xs:'90%', md:'50%'}} sx={{objectFit:'cover', borderRadius:'16px', order:{xs:1, md:2}}}/>
            </Box>
            
        </Box>
    );
}
