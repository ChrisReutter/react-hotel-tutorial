import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms" subtitle="Enjoy our magnificent rooms!">
          <Link to="/" className="btn-primary">
            return to main page
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};
export default Rooms;
