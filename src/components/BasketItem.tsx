import {IconButton, ListItem, Typography} from "@material-ui/core";
import {Close} from "@material-ui/icons";

type BasketItemPropsType = {
    removeFromOrder: (id: string) => void
    id: string
    name: string
    price: number
    quantity: number
}
const BasketItem = ({removeFromOrder, id, name, price, quantity}: BasketItemPropsType) => {
    return (
        <ListItem>
            <Typography
                variant="body1"
            >
                {name} {price}грн x{quantity}
            </Typography>
            <IconButton
                onClick={() => removeFromOrder(id)}
            >
                <Close/>
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;