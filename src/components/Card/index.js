import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { FaHeartBroken, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ID_FAVS, REMOVE_ID_FAVS } from "../../redux/actions/actionTypes";
import { getFavsFilms } from "../../redux/actions/main";

export const Card = ({ film, fav }) => {
  const { id, title, cover } = film;
  const dispatch = useDispatch();
  const { data, favsId } = useSelector((state) => state.mainReducer);
  

  useEffect(() => {
    dispatch(getFavsFilms(data, favsId));
  }, [favsId]);

  const handleAddIdFavs = () => {
    dispatch({
      type: ADD_ID_FAVS,
      payload: id,
    });
    //dispatch(getFavsFilms(data, favsId));
  };
  const handleRemoveIdFavs = () => {
    dispatch({
      type: REMOVE_ID_FAVS,
      payload: id,
    });
    // dispatch(getFavsFilms(data, favsId));
  };

  return (
    <>
      {film && (
        <div className={styles.container}>
          <img className={styles.image} src={cover} alt={`${title} cover`} />
          <div className={styles.controls}>
            <span className={styles.title}>{title}</span>
            <span className={styles.btnContainer}>
              <input className={styles.input} type='checkbox' id='cb1' />
              <label className={styles.label} htmlFor='cb1'>
                {!fav ? (
                  <FaHeart onClick={handleAddIdFavs} />
                ) : (
                  <FaHeartBroken onClick={handleRemoveIdFavs} />
                )}
              </label>
              <Link to={`/player/${id}`}>
                <Button option={"card"}>INFO</Button>
              </Link>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

Card.propTypes = {
  fav: PropTypes.bool,
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    duration: PropTypes.number,
    url: PropTypes.string,
    section: PropTypes.string,
  }),
};