import { TextField } from "@material-ui/core";
import {ChangeEvent} from "react";
type SearchPropsType = {
    onChange: (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> void
    value: string
}
const Search = (props: SearchPropsType) => {
    const { onChange, value } = props;

    return <TextField
        label='search'
        variant="standard"
        fullWidth
        type='search'
        value={value}
        onChange={onChange}
        sx={{
            mb:"1.5rem"
        }}
    />;
};

export default Search;