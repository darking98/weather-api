import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const api = {
    weatherApi: {
      key: "d355671dd4ee8898100b7f1969362cd6",
      base: "http://api.weatherstack.com/current",
    },
    unsplashApi: {
      key: "qh-b4-wEIqKayiSN-tKQ5JP8opkjnI6-YeoYqj_smnU",
      base: "https://api.unsplash.com/search/photos?query=",
    },
  };

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [background, setBackground] = useState({});

  const search = (e) => {
    e.preventDefault();

    fetch(
      `${api.weatherApi.base}?access_key=${api.weatherApi.key}&query=${city}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        setCity("");
        console.log(data);
      });

    fetch(`${api.unsplashApi.base}${city}&client_id=${api.unsplashApi.key}`)
      .then((response) => response.json())
      .then((data) => {
        setBackground(data.results);
        console.log(background);
      });
  };

  return (
    <Container
      background={
        background ? background[Math.floor(Math.random() * 10)].urls.full : ""
      }
    >
      <Search onSubmit={search}>
        <input
          type="text"
          placeholder='By example "London"'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {typeof weather.current !== "undefined" && background[0] ? (
          [
            <Info>
              <h2>{weather.request.query}</h2>
              <p>{weather.location.localtime}</p>
              <TempContainer>
                <Temp>
                  <h1>{weather.current.temperature}°C/</h1>
                  <h3>FL {weather.current.feelslike}°C</h3>
                </Temp>
                <TempIcons>
                  <img src={weather.current.weather_icons[0]} alt="" />
                </TempIcons>
                <TempDetails>
                  <p>{weather.current.weather_descriptions[0]}</p>
                  <p>Humidity {weather.current.humidity}%</p>
                </TempDetails>
              </TempContainer>
            </Info>,
            <Flex />,
          ]
        ) : (
          <DefaultInfo>
            <p>
              Enter the name of any city above to see the temperature and the
              time.
            </p>
          </DefaultInfo>
        )}
      </Search>

      <Footer background={background[0]}>
        <p>
          Developed with ❤️ by{" "}
          <a href="https://github.com/darking98" target="_blank">
            Diego Rodriguez
          </a>
        </p>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: black;
  background: ${(props) =>
    props.background
      ? `url("${props.background}") no-repeat center center fixed`
      : "#2B2B3D"};
  background-size: cover;
  transition: 2s ease-out;
`;

const Search = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 750px;
  text-align: center;

  @media (max-width: 800px) {
    width: 375px;
  }
  input {
    width: 500px;
    padding: 5px 20px;
    margin: 0px 0px 80px 0px;
    border-radius: 0px 0px 10px 10px;
    background: #fff;
    border: none;
    outline: none;
    @media (max-width: 800px) {
      width: 100%;
      margin: 0px 0px 50px 0px;
    }
  }
`;
const Info = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  color: white;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 800px) {
    justify-content: center;
    flex: 0;
  }
  h2 {
    font-size: 50px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
    padding: 20px;

    @media (max-width: 800px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 30px;
    color: #ccc;
    font-style: italic;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);

    @media (max-width: 800px) {
      font-size: 15px;
    }
  }
`;

const TempContainer = styled.div`
  font-size: 50px;
  color: #fff;
  padding: 30px;
  border-radius: 10px;
  transition: all 2s ease-out;

  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

const Temp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TempDetails = styled.div`
  display: flex;
  justify-content: center;

  p {
    padding: 20px;
  }
`;

const TempIcons = styled.div`
  display: flex;
  justify-content: center;
`;

const DefaultInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Footer = styled.div`
  font-size: 15px;
  color: ${(props) => (props.background ? "white" : "white")};
  text-shadow: ${(props) => (props.background ? "0px 0px 10px #000" : "0")};

  a {
    color: ${(props) => (props.background ? "white" : "white")};
    text-decoration: none;
    transition: 0.4s ease;
    :hover {
      color: #ccc;
    }
  }
`;

const Flex = styled.div`
  flex: 2;

  @media (max-width: 800px) {
    display: none;
  }
`;
export default App;
