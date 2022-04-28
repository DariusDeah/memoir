import React from 'react';
import { useSelector } from 'react-redux';
import DottedDropdown from '../UI/DottedDropdown.ui';

function Comment({ commentData }) {
  const account = useSelector((state) => state.account.account);
  // const user_id = '123';
  // const commentData = [
  //   {
  //     id: 1,
  //     content: 'random text',
  //     createdAt: '8/22/21',
  //     creator: {
  //       _id: '567',
  //       name: 'Random name',
  //       photo: 'https://source.unsplash.com/40x40/?portrait'
  //     }
  //   },
  //   {
  //     id: 2,

  //     content: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quisquam cumque autem temporibus quia non ipsum itaque distinctio doloribus explicabo ullam fugiat cum unde, ducimus necessitatibus architecto vitae pariatur! Similique.
  //     Corrupti voluptas animi nostrum fugiat ad. Iusto porro et tempore eum ipsum ea non tenetur consectetur labore, quas magnam distinctio, corrupti, quaerat quasi? Modi voluptatem, delectus ab minima ad nostrum.
  //     Temporibus velit nihil aliquid reprehenderit aut magnam at explicabo quidem consequatur, officiis quod placeat deserunt qui tempore recusandae odit sit laborum? Soluta iure quia dolorem adipisci unde nostrum rem sed?
  //     Ipsam id ea ex aut? Quisquam accusantium officia, fugit doloribus iusto accusamus placeat quibusdam eaque tempora consequatur iste labore laborum blanditiis earum tenetur quasi autem deleniti officiis eligendi consectetur? Libero.
  //     Dolores sint illo velit illum facilis consequuntur, vero ratione perferendis excepturi laborum, voluptas praesentium? Cumque assumenda ipsa, adipisci hic fugit autem ad doloribus officia? Quam incidunt animi aliquid fugiat dignissimos!
  //     Dolore aliquam velit minus explicabo inventore, tempore soluta ab quasi dicta autem quidem libero eius consequuntur error corporis. Dolorum culpa iste eligendi repellat, beatae accusamus perspiciatis ducimus nulla officiis. Suscipit?
  //     Quas architecto odit, cupiditate expedita esse alias voluptas, quam voluptatem, ut accusamus laudantium omnis magnam dolorem facilis quasi. Quisquam officia dicta ad quis cum velit molestiae laborum numquam magni impedit!
  //     Libero enim aliquam ea minima dolor repudiandae id perspiciatis, natus repellendus ex amet illum ad animi rem beatae hic nulla eveniet quis iure non quos. Eveniet error aperiam assumenda velit.
  //     Cupiditate repudiandae, sunt consequatur ut ipsum excepturi veritatis voluptate eligendi repellendus velit! Mollitia aperiam dolore omnis assumenda, quibusdam hic reiciendis doloremque dolorum reprehenderit pariatur voluptates, qui labore, eaque nobis exercitationem?
  //     Cum vitae nobis a quas quibusdam tempora, impedit dolore vero modi aspernatur rem molestias saepe laboriosam minus aliquam sed cumque corrupti, ab magnam iusto fuga? Facere, consequatur? Nemo, fugiat natus!`,
  //     createdAt: '8/22/21',
  //     creator: {
  //       _id: '123',
  //       name: 'Random name',
  //       photo: 'https://source.unsplash.com/40x40/?portrait'
  //     }
  //   },
  //   {
  //     id: 3,

  //     content: 'random text',
  //     createdAt: '8/22/21',
  //     creator: {
  //       _id: '567',
  //       name: 'Random name',
  //       photo: 'https://source.unsplash.com/40x40/?portrait'
  //     }
  //   }
  // ];
  const items = [
    { id: 0, title: 'Edit' },
    { id: 1, title: 'Delete' }
  ];

  return (
    <>
      {commentData
        ? commentData.map((comment) => (
            <div
              className="max-w-2xl px-8 py-4  my-9 mx-auto bg-white rounded-lg shadow-md "
              key={comment._id}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-light text-black ">
                  {new Date(comment.createdAt)
                    .toDateString()
                    .substring(4, comment.createdAt.length)}
                </span>
              </div>
              <div className="mt-2 mb-10">
                <p className="mt-2 text-gray-600  text-left">
                  {comment.content}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <img
                    className=" object-cover w-10 h-10 mx-4 rounded-full sm:block"
                    src={comment.creator.photo}
                    alt="avatar"
                  />
                  <a className="font-bold text-black cursor-pointer ">
                    {comment.creator.name}
                  </a>
                </div>
                <div className="">
                  {account.id === comment.creator._id ? (
                    <DottedDropdown items={items} />
                  ) : (
                    ''
                  )}
                  <button className="text-blue-400 lg:px-4 py-4 hover:bg-blue-50 rounded-md p-3 border-blue-400">
                    View Replies
                  </button>
                </div>
              </div>
              {account.id !== comment.creator._id ? (
                <div className="mt-4">
                  <p>Reply to @{comment.creator.name}</p>{' '}
                  <input className="h-12 w-full border-2 border-black rounded-lg" />
                  <button className="text-blue-400 hover:bg-blue-50 rounded-md p-3">
                    Reply
                  </button>
                </div>
              ) : (
                ''
              )}
            </div>
          ))
        : ''}
    </>
  );
}

export default Comment;
