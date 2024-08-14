import {RiUser3Line} from 'react-icons/ri';
import { Message } from '../chatbot';

export default function UserMessage({role, content}: Message) {
    return (
        <div className='flex w-full my-2'>
            <div className='flex justify-center p-1 w-8 h-8 border border-1 border-black rounded-full mr-2'>
                <RiUser3Line size={18}/>
            </div>

            <div>
                <div className='font-bold'>{role}</div>
                <p>{content}</p>
            </div>
        </div>
    ) 
}