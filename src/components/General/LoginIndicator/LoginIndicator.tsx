import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, ButtonBase, Typography, Avatar, Popover,MenuList } from "@material-ui/core";

const LoginIndicator = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    const renderLoginButton = () => {
        return (
            <Button variant="contained" onClick={loginWithRedirect} style={{ backgroundColor: '#c7f0db' }}>
                <Typography style={{ color: '#464159', fontWeight: 600, fontSize: 13 }}>Login</Typography>
            </Button>
        )
    }

    const LogoutButton = () => {
        const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };


        const open = Boolean(anchorEl);
        const id = open ? 'simple-popover' : undefined;

        console.log('user :>> ', user);
        return (
            <div>
                <ButtonBase onClick={handleClick}>
                    <Avatar alt={user.name} src={user.picture}>
                    </Avatar>
                    {/* <Typography style={{color:'white'}}>Log Out {user.given_name}</Typography> */}
                </ButtonBase>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <MenuList>
                    <Typography onClick={() => logout()}>The content of the Popover.</Typography>

                    </MenuList>
                </Popover>
            </div>
        )
    }

    return isAuthenticated ? <LogoutButton/> : renderLoginButton();
};

export default LoginIndicator;