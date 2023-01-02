import { Alert, Snackbar } from "@material-ui/core"

type SnackPropsType = {
    isOpen:boolean
    handleClose:()=> void
}
function Snack({isOpen, handleClose}: SnackPropsType) {
    return (
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            autoHideDuration={3000}
        >
            <Alert
                severity="success"
            >Товар добавлен в корзину!</Alert>
        </Snackbar>
    )
}

export default Snack
