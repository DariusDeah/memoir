import React from 'react';
import Alert from '../UI/Alert.ui';
import Avatar from '../UI/Avatar.ui';
import Bookmark from '../UI/Icons/Bookmark.icon';
import CommentIcon from '../UI/Icons/Comment.icon';
import Heart from '../UI/Icons/Heart.icon';
import Tags from '../UI/Tags.ui';
import usePostLayout from './PostLayout.hook';
import PostLayoutSkeleton from './ui/PostLayoutSkeleton.ui';

function PostLayout1() {
  const {
    post,
    pending,
    error,
    account,
    likes,
    postData,
    loggedIn,
    likesData,
    data,
    comments
  } = usePostLayout();

  return (
    <article className="prose md:prose-xl max-w-2xl px-6 py-24 mx-auto space-y-12 bg-coolGray-100 text-coolGray-900">
      {postData && loggedIn && (
        <>
          <div className="w-full mx-auto space-y-4 text-center">
            <div className="flex flex-wrap py-6 space-x-5 justify-center mb-10 border-b-2 border-grey-500 ">
              <Tags tags={post.tags} />
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="text-sm text-coolGray-600">
              by
              <p className="underline text-violet-600">
                {/* <span itemProp="name">{post.creator.name}</span> */}
              </p>
              on
              <time dateTime="2021-02-12 15:34:18-0200">{post.createdAt}</time>
            </p>
            <div>
              <Bookmark postId={post._id} />
              <img
                src={post.coverImg}
                alt="post cover"
                className="w-full h-100 sm:h-96 bg-coolGray-500 rounded-xl lg:h-full"
              />
            </div>
          </div>
          <div className="text-coolGray-800">
            {/* POST CONTENT */}
            <p>{post.content}</p>
          </div>
          <div className="flex justify-between w-28">
            {likesData && (
              <Heart accountId={account.id} postId={post._id} likes={likes} />
            )}
            {data && <CommentIcon commentLength={comments.length} />}
          </div>

          <div className="pt-12 pb-12 border-t border-b-2 border-grey-500  border-coolGray-300">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row ">
              {/* <img src={post.authorPhoto} alt="" className="" /> */}
              <Avatar
                photo={post.creator.photo}
                id={post.creator._id}
                styles="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-coolGray-500 border-coolGray-300"
              />
              <div className="flex flex-col text-start sm:text-start">
                <h4 className="text-lg font-semibold">@{post.creator.name}</h4>
                <p className="text-coolGray-600">
                  {post.creator.bio
                    ? post.creator.bio
                    : 'no author bio for this user yet'}
                </p>
              </div>
            </div>
          </div>
          {pending && <PostLayoutSkeleton />}
          {error && <Alert title={error.name} message={error.message} />}
        </>
      )}
    </article>
  );
}

export default PostLayout1;
