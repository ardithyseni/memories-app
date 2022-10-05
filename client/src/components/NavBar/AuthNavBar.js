import { Avatar, Typography, Button } from "@mui/material";

const AuthNavBar = ({user, logout}) => {
    return (
        <div className="profile" style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '300px',
            alignItems: 'center',
        }}  >
            <Avatar
                className="purple"
                alt={user.result.name}
                src={user.result.picture}
            >
            {user.result.name.charAt(0)}
            </Avatar>
            <Typography className="userName" variant="h6">{user.result.name}</Typography>
            <Button variant="contained" sx={{ marginLeft: '10px' }} color="secondary" onClick={logout} >Logout</Button>
        </div>
    )
}

export default AuthNavBar;