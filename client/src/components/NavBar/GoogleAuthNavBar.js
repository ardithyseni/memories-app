import { Avatar, Typography, Button } from "@mui/material";

const GoogleAuthNavBar = ({user, logout}) => {

    return (
        <div className="profile" style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '300px',
            alignItems: 'center',
        }}  >
            <Avatar
                className="purple"
                alt={user.token.name}
                src={user.token.picture}
            >
            {user.token.name.charAt(0)}
            </Avatar>
            <Typography className="userName" variant="h6">{user.token.name}</Typography>
            <Button variant="contained" sx={{ marginLeft: '10px' }} color="secondary" onClick={logout} >Logout</Button>
            
            {/* <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button> */}
        </div>
    ) 
    
}

export default GoogleAuthNavBar;