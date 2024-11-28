import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Tab,
  Tabs,
  InputAdornment,
  Typography,
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import SearchIcon from "@mui/icons-material/Search";
import { Home, ShoppingCart } from "@mui/icons-material";
import BlankCard from "../../../components/form-theme/BlankCard";
import CustomFormLabel from "../../../components/form-theme/CustomFormLabel";
import CustomSelect from "../../../components/form-theme/CustomSelect";




const TabSection = () => {
  const dummyDivisions = [
    { _id: "1", name: "Dhaka" },
    { _id: "2", name: "Chattogram" },
    { _id: "3", name: "Khulna" },
  ];

  const dummyDistricts = {
    1: [
      { _id: "1-1", name: "Dhaka City" },
      { _id: "1-2", name: "Gazipur" },
    ],
    2: [
      { _id: "2-1", name: "Chattogram City" },
      { _id: "2-2", name: "Cox's Bazar" },
    ],
    3: [
      { _id: "3-1", name: "Khulna City" },
      { _id: "3-2", name: "Jessore" },
    ],
  };

  const dummyThanas = {
    "1-1": [
      { _id: "1-1-1", name: "Dhanmondi" },
      { _id: "1-1-2", name: "Gulshan" },
    ],
    "1-2": [
      { _id: "1-2-1", name: "Tongi" },
      { _id: "1-2-2", name: "Kaliakoir" },
    ],
    "2-1": [
      { _id: "2-1-1", name: "Pahartali" },
      { _id: "2-1-2", name: "Halishahar" },
    ],
  };

  const dummySubAreas = {
    "1-1-1": [
      { _id: "1-1-1-1", name: "Road 1" },
      { _id: "1-1-1-2", name: "Road 2" },
    ],
    "1-1-2": [
      { _id: "1-1-2-1", name: "Road 3" },
      { _id: "1-1-2-2", name: "Road 4" },
    ],
    "2-1-1": [
      { _id: "2-1-1-1", name: "Block A" },
      { _id: "2-1-1-2", name: "Block B" },
    ],
  };

  const [tabValue, setTabValue] = useState("1");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [thana, setThana] = useState("");
  const [subArea, setSubArea] = useState("");
  const [districts, setDistricts] = useState([]);
  const [thanas, setThanas] = useState([]);
  const [subAreas, setSubAreas] = useState([]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleDivisionChange = (event) => {
    const divisionId = event.target.value;
    setDivision(divisionId);
    setDistrict("");
    setThana("");
    setSubArea("");
    setDistricts(dummyDistricts[divisionId] || []);
  };

  const handleDistrictChange = (event) => {
    const districtId = event.target.value;
    setDistrict(districtId);
    setThana("");
    setSubArea("");
    setThanas(dummyThanas[districtId] || []);
  };

  const handleThanaChange = (event) => {
    const selectedThanaId = event.target.value;
    setThana(selectedThanaId);
    setSubArea("");
    setSubAreas(dummySubAreas[selectedThanaId] || []);
  };

  const handleSubAreaChange = (event) => {
    const selectedSubAreaId = event.target.value;
    setSubArea(selectedSubAreaId);
  };

  const isSearchDisabled = !(division && district && thana && subArea);
  return (
    <BlankCard>
      <TabContext value={tabValue}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: (theme) => theme.palette.divider,
            px: 3,
          }}
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="Property Tabs"
            variant="scrollable"
            scrollButtons="auto"
            TabIndicatorProps={{
              style: { backgroundColor: "#FFA500" },
            }}
            sx={{
              "& .MuiTab-root": {
                minHeight: 48,
                fontWeight: 500,
                fontSize: 14,
                color: "#333",
                // "&.Mui-selected": {
                //   color: "#FFA500",
                // },
              },
            }}
          >
            <Tab
              icon={<SearchIcon />}
              iconPosition="start"
              label="Find Tour Guide"
              value="1"
            />
          </Tabs>
        </Box>

        <TabPanel value="1">
          <Grid container spacing={2} sx={{ p: 2 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs>
                <TextField
                  variant="outlined"
                  placeholder="Search by name"
                  fullWidth
                  // value={searchTerm}
                  // onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  // onClick={() => handleOpen()}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={2.5}>
              <CustomFormLabel htmlFor="ft-division">Division</CustomFormLabel>
              <CustomSelect
                value={division}
                onChange={handleDivisionChange}
                fullWidth
                variant="outlined"
              >
                {dummyDivisions.map((division) => (
                  <MenuItem key={division._id} value={division._id}>
                    {division.name}
                  </MenuItem>
                ))}
              </CustomSelect>
            </Grid>

            <Grid item xs={12} sm={6} md={2.5}>
              <CustomFormLabel htmlFor="ft-district">District</CustomFormLabel>
              <CustomSelect
                value={district}
                onChange={handleDistrictChange}
                fullWidth
                variant="outlined"
                disabled={!division}
              >
                {districts.map((district) => (
                  <MenuItem key={district._id} value={district._id}>
                    {district.name}
                  </MenuItem>
                ))}
              </CustomSelect>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <CustomFormLabel htmlFor="ft-thana">Area/Thana</CustomFormLabel>

              <CustomSelect
                value={thana}
                onChange={handleThanaChange}
                fullWidth
                variant="outlined"
                disabled={!district || thanas.length === 0}
              >
                {
                  thanas.map((thana) => (
                    <MenuItem key={thana._id} value={thana._id}>
                      {thana.name}
                    </MenuItem>
                  ))
                }
              </CustomSelect>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <CustomFormLabel htmlFor="ft-subarea">Sub/Area</CustomFormLabel>

              <CustomSelect
                value={subArea}
                onChange={handleSubAreaChange}
                fullWidth
                variant="outlined"
                disabled={!thana || subAreas.length === 0}
              >
                {
                  subAreas.map((subArea) => (
                    <MenuItem key={subArea._id} value={subArea._id}>
                      {subArea.name}
                    </MenuItem>
                  ))
                }
              </CustomSelect>
            </Grid>

            <Grid item xs={12} sm={6} md={0.5}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 4.5 }}
                disabled={isSearchDisabled}
              >
                {/* <SearchIcon /> */}
                <SearchIcon /> 
              </Button>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value="2">
          <Typography>Tab 2 Content</Typography>
        </TabPanel>
      </TabContext>
    </BlankCard>
  );
};

export default TabSection;