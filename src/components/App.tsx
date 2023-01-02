import {ChangeEvent, useState} from 'react';

import Basket from './Basket';
import Header from './Header';
import GoodsList from './GoodsList';
import Search from './Search';
import Snack from './Snack';

import {goods, GoodsType} from '../data/goods';
import {Container} from '@material-ui/core';


export type OrderType = {
    id: string,
    name: string
    price: number
    quantity: number
}
const App = () => {
    const [order, setOrder] = useState<OrderType[]>([]);
    const [search, setSearch] = useState<string>('');
    const [products, setProducts] = useState<GoodsType[]>(goods);
    const [isCartOpen, setCartOpen] = useState<boolean>(false);
    const [isSnackOpen, setSnackOpen] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!e.target.value) {
            setProducts(goods);
            setSearch('');
            return;
        }

        setSearch(e.target.value);
        setProducts(
            products.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
    };

    const addToOrder = (goodsItem: any) => {
        let quantity = 1;

        const indexInOrder = order.findIndex(
            (item) => item.id === goodsItem.id
        );

        if (indexInOrder > -1) {
            quantity = order[indexInOrder].quantity + 1;

            setOrder(order.map((item) => {
                    if (item.id !== goodsItem.id) return item;

                    return {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity,
                    };
                }),
            );
        } else {

            setOrder([
                    ...order,
                    {
                        id: goodsItem.id,
                        name: goodsItem.name,
                        price: goodsItem.price,
                        quantity,
                    },
                ],
            );
        }

        setSnackOpen(true);
    };

    const removeFromOrder = (goodsItem:string) => {
        setOrder(order.filter((item: any) => item.id !== goodsItem));
    };

    return (
        <>
            <Header
                handleCart={() => setCartOpen(true)}
                orderLen={order.length}
            />
            <Container
                sx={{
                    mt: '1rem'
                }}
            >
                <Search
                    value={search}
                    onChange={handleChange}
                />
                <GoodsList
                    goods={products}
                    setOrder={addToOrder}
                />
            </Container>
            <Basket
                order={order}
                removeFromOrder={removeFromOrder}
                cartOpen={isCartOpen}
                closeCart={() => setCartOpen(false)}
            />
            <Snack
                isOpen={isSnackOpen}
                handleClose={() => setSnackOpen(false)}
            />
        </>
    );
}

export default App;
