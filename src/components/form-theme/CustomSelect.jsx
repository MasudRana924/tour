import { styled, Select } from "@mui/material";

const CustomSelect = styled((props) => (
  <Select
    MenuProps={{
      disableScrollLock: true,
    }}
    {...props}
  />
))();

export default CustomSelect;