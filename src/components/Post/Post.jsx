import { IconContext } from "react-icons";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { Li } from "./styled";
import { useState } from "react";
import PropTypes from "prop-types";

export const Post = ({ title, description, data }) => {
  const [isFavorite, setFavorite] = useState(false);

  function markPostAsFavorite() {
    setFavorite(!isFavorite);
  }

  function formatDate(dia, mes, ano) {
    const postDate = new Date(ano, mes - 1, dia)
    const formatter = new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "medium"
    })
    const postDateFormated = formatter.format(postDate)
    return postDateFormated;
  }

  return (
    <Li $isFavorite={isFavorite} onClick={() => markPostAsFavorite()}>
      <div>
        <span>{formatDate(data.dia, data.mes, data.ano)}</span>
        <IconContext.Provider value={{ className: "react-icons" }}>
          {isFavorite ? <GoHeartFill /> : <GoHeart />}
        </IconContext.Provider>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Li>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  data: PropTypes.object
};
