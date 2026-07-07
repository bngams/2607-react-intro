import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import navItems from "../routes";
import { Link } from "react-router";

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Mini eshop
                </Typography>
                {navItems.filter(item => item.inMenu).map((item) => (
                    <Button key={item.path} color="inherit" component={Link} to={item.path}>
                        {item.label}
                    </Button>
                ))}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Header;