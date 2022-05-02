import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AuthPage from './components/AuthComponents/Auth.component';
import Nav from './components/Navs/Nav.component';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import ProfilePage from './pages/ProfilePage';
import ExplorePage from './pages/ExplorePage';
// import Modal from './components/UI/Modal.ui';
import FeaturesRequestPage from './pages/FeaturesRequestPage';
import CreatePostPage from './pages/CreatePostPage';
import { getAccount, refreshAccount } from './redux/actions/account.actions';
import EditPostPage from './pages/EditPostPage';
import Collections from './components/Collections/ColectionsList.component';
import Modal from './components/UI/Modal.ui';
import { getCollections } from './redux/actions/collections.actions';
import CollectionPage from './pages/CollectionPage';

function App() {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account.account);
  useEffect(() => {
    dispatch(refreshAccount());
    // if (account) {
    //   dispatch(getCollections(account.id));
    // }
  }, []);

  return (
    <Router>
      <div className="flex-row mx-auto h-full ">
        <div
          className="sticky top-0 z-40 bg-white row-span-12 mh-20 mb-10 border
      border-b-black"
        >
          <Nav />

        </div>

        <div className=" row-span-12 ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="create-post" element={<CreatePostPage />} />
            <Route path="sign-auth" element={<AuthPage />} />
            <Route path="feature-request" element={<FeaturesRequestPage />} />
            <Route path="explore" element={<ExplorePage />} />
            <Route path="posts/:postId/edit" element={<EditPostPage />} />
            <Route path="collections/:collectionId/view" element={<CollectionPage />} />

            <Route path="posts/:postId" element={<PostPage />} />
            <Route path="profile/:userId" element={<ProfilePage />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
