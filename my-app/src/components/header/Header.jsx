
import { IconButton, Toolbar, Typography } from "@material-ui/core";
import  AppBar  from "@material-ui/core/AppBar"
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
    toolbarStyle: {
       display: 'flex',
       flexDirection: 'row',
       flexWrap: 'nowrap',
       justifyContent: 'space-between'
   }
});

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbarStyle}>
                <Typography variant="h6" component="span" >
                    BEER Shop
                </Typography>
                <IconButton color="inherit">
                    <ShoppingCartIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
};


export default Header;