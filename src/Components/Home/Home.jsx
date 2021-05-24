import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "./Footer"

import ImageSlider from "./ImageSlider/ImageSlider";
import Rows from "./Rows/Rows";
import Recommend from "./Recommend/Recommends";
import Original from "./Original/Originals"
import NewDisney from "./NewDisney/NewDisneys"
import Trending from "./Trending/Trendings"


import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase";
import { setMovies } from "../../redux/features/Movie/movieSlice";
import { selectUsername } from "../../redux/features/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUsername);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImageSlider />
      <Rows></Rows>
      <Recommend rowTitle="Recommended for you" />
      <Original rowTitle="Disney+ Originals" />
      <NewDisney rowTitle="New to Disney+" />
      <Trending rowTitle="Trending Now" />
      <Footer />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  top: 72px;
  text-align: left;

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;

export default Home;
