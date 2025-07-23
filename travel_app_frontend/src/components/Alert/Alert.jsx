import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useAlert } from "../../context";

export const Alert = () => {

    const { alert, setAlert } = useAlert();

    const hanldeClose = (event, reason) => {
        if(reason === 'clickway') {
            return;
        }
        setAlert({open: false});
    };

    return (
        <Snackbar open={alert.open} autoHideDuration={2500} onClose={hanldeClose}>
            <MuiAlert onClose={hanldeClose} severity={alert.type} elevation={10} variant='filled'>
                {alert.message}
            </MuiAlert>
        </Snackbar>
    );
}