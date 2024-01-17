import { Post } from "../Post/Post";
import { Ul } from "./styled";
import { useEffect, useState } from "react";

export const PostsLists = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./posts.json");
      const data = await response.json();

      setPostList(data.sort((a , b) => compareDatas(a.data, b.data)))
    };
    fetchData()
  }, []);

  return (
    <Ul>
      {postList.map((post, index) => {
        return <Post key={index} title={post.titulo} description={post.descricao} data={post.data}/>
      })}
    </Ul>
  );
};

function compareDatas(data1, data2) {
  const a = new Date(data1.ano, data1.mes - 1, data1.dia, 0, 0, 0, 0)
  const b = new Date(data2.ano, data2.mes - 1, data2.dia ,0, 0, 0, 0)

  if (a.getTime() < b.getTime()) {
    return 1
  } else if (a.getTime() > b.getTime()) {
    return -1
  } else {
    return 0
  }
}