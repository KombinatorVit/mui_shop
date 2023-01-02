import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";
import BasketItem from "./BasketItem";
import {OrderType} from "./App";
type BasketPropsType = {
    cartOpen: boolean
    closeCart:()=> void
    order: OrderType[]
    removeFromOrder: (goodsItem: string)=> void
}
const Basket = (props:BasketPropsType) => {
    const {
        cartOpen,
        closeCart,
        order = [],
        removeFromOrder
    } = props;

    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Корзина" />
                </ListItem>
                <Divider />

                {!order.length ? (
                    <ListItem>Корзина пуста!</ListItem>
                ) : (
                    <>
                    {order.map((item) => (
                        <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item} />
                    ))}
                    <Divider />
                    <ListItem>
                        <Typography sx={{fontWeight: 700}}>
                            Общая стоимость:{' '}
                            {order.reduce((acc, item) => {
                            return acc + item.price * item.quantity;
                            }, 0)}{' '}
                            грн.
                        </Typography>
                    </ListItem>
                    </>
                )}

            </List>
        </Drawer>
    )
}

export default Basket
