/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Post {
    title: String;
    body: String;
}

let postsCollection: [Post] = [
    {
        title: "Hello",
        body: 'I am a message'
    }
]

// getting all posts
const getPosts = (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    let posts: [Post] = postsCollection;
    return res.status(200).json({
        message: posts
    });
};

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let title: string = req.body.title;
    let body: string = req.body.body;
    let newPost: Post = {
        title: title,
        body: body
    };
    postsCollection.push(newPost);
    // return response
    return res.status(200).json({
        message: "Thanks for posting"
    });
};

export default { getPosts, getPost, updatePost, deletePost, addPost };
