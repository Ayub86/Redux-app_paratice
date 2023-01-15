import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPost, deletePost } from "./store/reducers/lorem/PostSlice";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

const Posts = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.post);
  // const [postData, setpostData] = useState([]);

  // useEffect(() => {
  //   setpostData(data)
  // }, [data])


  console.log("data------>", data)
  console.log("postdata---->", data);

  // const handleDelete = (id) => {
  //      dispatch(deletePost());
  //     window.alert("Post Deleted !");
  // };
  
  const handleDelete = (id) => {
      // console.log("postData>>",postData)
      //  let newList = postData.filter((post) => post.id !== id);
      // console.log("postData>>1",newList)
    // setpostData([...newList])

    dispatch(deletePost({id}))
  };

  useEffect(() => {
    dispatch(getPost());
  }, []);
  if (loading) return <p>.......Loading</p>
  return (
    <>
      <h2> Posts</h2>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>

          {(data || []).map((post) => (
            <>
              <tr key={post.id}>
                <td >{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td><button type="button" className="btn btn-primary">Edit</button></td>
                <td><button type="button" onClick={() => handleDelete(post.id)} className="btn btn-dark">Delete</button></td>
              </tr>
            </>
          ))}

        </tbody>
      </table>

    </>
  )
}

export default Posts
