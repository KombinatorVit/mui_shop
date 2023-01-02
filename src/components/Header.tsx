import {AppBar, Badge, IconButton, Toolbar, Typography} from "@material-ui/core"
import {ShoppingBasket} from "@material-ui/icons"

type HeaderPropsType = {
    handleCart: () => void
    orderLen: number
}

function Header({handleCart, orderLen}: HeaderPropsType) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{flexGrow: 1}}
                >
                    MY MUI Shop
                </Typography>
                <IconButton
                    color="inherit"
                    onClick={handleCart}
                >
                    <Badge
                        color="secondary"
                        badgeContent={orderLen}
                    >
                        <ShoppingBasket/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header
