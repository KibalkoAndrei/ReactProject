import { useState } from "react";
import React from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/button/MyButton";

function PostForm({create}) {
    const [post, setPost] = useState({title:'', body:''});

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {...post, id: Date.now()}
        setPost({title:'', body:'',})
        create(newPost)
        
    };

    return (
            <form>
                <MyInput
                    onChange={e => setPost({...post, title: e.target.value})}
                    value={post.title}
                    type='text'
                    placeholder='название поста'
                />
                <MyInput
                    onChange={e => setPost({...post, body: e.target.value})}
                    value={post.body}
                    type='text'
                    placeholder='Описание поста'
                />
                <MyButton onClick={addNewPost}>создать пост</MyButton>
            </form>
    );
};

export default PostForm