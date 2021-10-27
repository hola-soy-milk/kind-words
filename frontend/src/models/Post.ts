import Sender from './Sender'
export default interface Post {
    sender: Sender,
    body: string,
    timestamp: number
}