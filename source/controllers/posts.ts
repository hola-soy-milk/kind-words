/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Sender {
    name: String;
    handle: String;
}

interface Post {
    sender: Sender;
    body: String;
}

let postsCollection: [Post] = [
    {
        sender: {
            name: 'Ramon',
            handle: 'hola_soy_milk'
        },
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
    let name: string = req.body.sender.name;
    let handle: string = req.body.sender.handle;
    let body: string = req.body.body;
    let newPost: Post = {
        sender: {
            name: name,
            handle: handle
        },
        body: body
    };
    postsCollection.push(newPost);
    // return response
    return res.status(200).json({
        message: "Thanks for posting"
    });
};

export default { getPosts, addPost };
