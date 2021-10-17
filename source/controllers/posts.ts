/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Post {
    sender: String;
    body: String;
}

let postsCollection: [Post] = [
    {
        sender: 'Ramón',
        body: 'You rule!'
    }
]

// getting all posts
const getPosts = (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    let posts: [Post] = postsCollection;
    return res.status(200).json(posts);
};

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let sender: string = req.body.sender;
    let body: string = req.body.body;
    let newPost: Post = {
        sender: sender,
        body: body
    };
    postsCollection.push(newPost);
    // return response
    return res.status(200).json({
        message: "Thanks for posting"
    });
};

export default { getPosts, addPost };
