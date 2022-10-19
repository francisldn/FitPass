import * as React from 'react';
import { formatDate, formatStartEndTime } from '../utils/time';
import { Post } from '../../../globalTypes/Post'


export default function GymClassItemSmall (post: Post) {
  const { exerciseName, studioName, postPic, classDate, duration, desc } = post
  return (
    <div className="rounded-2xl flex w-[95%] overflow-hidden mt-[3%] h-[10rem] max-w-4xl">
      <div className="w-52 h-full overflow-hidden">
        <img src={postPic} alt={exerciseName} className="object-cover h-full w-full"/>
      </div>
      <div className="flex flex-col gap-5 bg-[#6F87F5] w-full pl-4">
        <div className="flex flex-1 flex-col text-white gap-2">
            <h2 className="text-[1rem] font-bold text-xl uppercase mt-px pt-2">{studioName}</h2>
            <p className='mt-[-1rem] font-bold text-sm'>{formatDate(classDate)}</p>
            <p className='mt-[-0.8rem] text-sm'>{formatStartEndTime(classDate, duration)}</p>
            <h2 className="text-[1rem] font-bold mt-[-0.2rem] text-lg uppercase">{exerciseName}</h2>
            <p className='mt-[-0.6rem] text-sm multiline-text'>{desc}</p>
        </div>
      </div>
    </div>
  );
} 