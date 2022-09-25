import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Spinner
} from '@chakra-ui/react';
import "./General.css"
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import Nav from './Nav';
import CopyRight from './CopyRight';
function App() {
  const [load, setload] = useState(false)
  const [loc, setloc] = useState(null)
  const [apidata, setapidata] = useState(null)
  const callfnc = () => {
    const success = (e) => {
      setloc(e)
      fetchApi()

    }
    const error = (e) => {
    }
    navigator.geolocation.getCurrentPosition(success, error)

  }
  useEffect(() => {
    callfnc()

  }, [])
  const fetchApi = () => {

    fetch('https://ipapi.co/json/')
      .then(function (response) {
        response.json().then(jsonData => {
          // console.log(jsonData);
          setapidata(jsonData)
          setload(true)


        });
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  if (load) {

    return (
      <ChakraProvider >

        <Grid w={"99.5vw"} h={"100vh"} >
          <Grid position={"sticky"} mb={"5vh"} top={"0"}>
          <Nav/>
          </Grid>
          <Grid placeContent={"center"}>
            <TableContainer w={"50vw"}>
              <Table variant='striped' colorScheme='teal'>
                <TableCaption>ON MAP</TableCaption>

                <Tbody>
                  <Tr>
                    <Td>IP Address</Td>

                    <Td >{apidata.ip}</Td>
                  </Tr>
                  <Tr>
                    <Td>Network Name</Td>

                    <Td >{apidata.org}</Td>
                  </Tr>
                  <Tr>
                    <Td>lat,lon</Td>

                    <Td >{loc.coords.latitude} , {loc.coords.longitude}</Td>
                  </Tr>
                  <Tr>
                    <Td>City</Td>
                    <Td >{apidata.city}</Td>
                  </Tr>
                  <Tr>
                    <Td>Region</Td>
                    <Td >{apidata.region}</Td>
                  </Tr>
                  <Tr>
                    <Td>Region Code</Td>
                    <Td >{apidata.region_code}</Td>
                  </Tr>
                  <Tr>
                    <Td>Country</Td>
                    <Td >{apidata.country_name}</Td>
                  </Tr>
                  <Tr>
                    <Td>Country Code</Td>
                    <Td >{apidata.country_code_iso3}</Td>
                  </Tr>
                  <Tr>
                    <Td>Country Capital</Td>
                    <Td >{apidata.country_capital}</Td>
                  </Tr>
                  <Tr>
                    <Td>Continent</Td>
                    <Td >{apidata.continent_code}</Td>
                  </Tr>
                  <Tr>
                    <Td>Postal</Td>
                    <Td >{apidata.postal}</Td>
                  </Tr>
                  <Tr>
                    <Td>Timezone</Td>
                    <Td >{apidata.timezone}</Td>
                  </Tr>
                  <Tr>
                    <Td>UTC Offset</Td>
                    <Td >{apidata.utc_offset}</Td>
                  </Tr>
                  <Tr>
                    <Td>Country Calling Code</Td>
                    <Td >{apidata.country_calling_code}</Td>
                  </Tr>
                  <Tr>
                    <Td>Currency</Td>
                    <Td >{apidata.currency}</Td>
                  </Tr>
                  <Tr>
                    <Td>Currency Name</Td>
                    <Td >{apidata.currency_name}</Td>
                  </Tr>
                  <Tr>
                    <Td>Country Area</Td>
                    <Td >{apidata.country_area} km<sup>2</sup></Td>
                  </Tr>
                  <Tr>
                    <Td>Country Population</Td>
                    <Td >{apidata.country_population}</Td>
                  </Tr>

                </Tbody>
              </Table>
            </TableContainer>
          </Grid>
          <MapContainer center={[loc.coords.latitude, loc.coords.longitude]} zoom={20} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[loc.coords.latitude, loc.coords.longitude]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
          <CopyRight/>
        </Grid>
        
      </ChakraProvider>
    );
  }
  else {
    return (
      <ChakraProvider>

        <Grid placeContent={"center"} w={"99.5"} h={"100vh"} placeItems={"center"}>

          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
          <Text textAlign={"center"} color={"blue"} fontSize={"2xl"} fontWeight={"600"}>Please give the permission for location to website in order to proceed</Text>
        </Grid>
      </ChakraProvider>
    )
  }
}

export default App;
