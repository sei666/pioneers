import React, {Fragment} from 'react';
import './App.css';

import { Community } from './components/community/community';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';


import {
  Routes,
  Route,
} from "react-router-dom";
import { PostViewer } from './components/postViewer/postViewer';

function App() {


  const postItem = [
    {
        id: 0,
        title: "Local sendmail as email send provider",
        subTitle: "For small environments it would be nice to be able to send emails with local sendmail and not over SMTP or Mailgun.",
        postLike: 34,
        countComments: 8,
        userNameCreatorPost: 'Jenny Wilson',
        data: 'October 19, 2017',
        comment: [
          {
            id: 0,
            userNameCreatorComment: 'Amelia Taylor',
            text: 'To prevent a leak of infotmation, please, make possible to hide names of users!',
            data: 'October 12, 2018',
          },
          {
            id: 1,
            userNameCreatorComment: 'Thomas Harris',
            text: 'One summers day a Grasshopper was hopping about in the field, singing and chirping to its hearts content. An Ant passed by, carrying with great effort an ear of corn he was taking to his home. «Why not come and have a chat with me» the Grasshopper said, «instead of fussing all day long?». «I am busy saving up food for the winter» the Ant said, «and that would be better for you to do the same.» «Why bother about cold?» the Grasshopper answered; «we have got a lot of food at present.» But the Ant went on its supply. When the winter came the Grasshopper got very cold and hungry while it kept watching the ants replete with corn and grain from the stores they had collected and saved in the summer. Then the Grasshopper understood…',
            data: 'November 23, 2020',
          },
          {
            id: 2,
            userNameCreatorComment: 'Oscar 	Lewis',
            text: '«Why bother about cold?» the Grasshopper answered; «we have got a lot of food at present.» But the Ant went on its supply. When the winter came the Grasshopper got very cold and hungry while it kept watching the ants replete with corn and grain from the stores they had collected and saved in the summer. Then the Grasshopper understood…',
            data: 'October 11, 2021',
          }
        ]
    },
    {
        id: 1,
        title: "Moderation Queue",
        subTitle: "Allow moderators the ability to actively permit posts",
        postLike: 20,
        countComments: 2,
        userNameCreatorPost: 'Jack Brown',
        data: 'October 20, 2017',
        comment: [
          {
            id: 0,
            userNameCreatorComment: 'David Brown',
            text: 'To prevent a leak of infotmation, please, make possible to hide names of users!',
            data: 'October 12, 2018',
          },
          {
            id: 1,
            userNameCreatorComment: 'Ryan Harris',
            text: 'One summers day a Grasshopper was hopping about in the field, singing and chirping to its hearts content. An Ant passed by, carrying with great effort an ear of corn he was taking to his home. «Why not come and have a chat with me» the Grasshopper said, «instead of fussing all day long?». «I am busy saving up food for the winter» the Ant said, «and that would be better for you to do the same.» «Why bother about cold?» the Grasshopper answered; «we have got a lot of food at present.» But the Ant went on its supply. When the winter came the Grasshopper got very cold and hungry while it kept watching the ants replete with corn and grain from the stores they had collected and saved in the summer. Then the Grasshopper understood…',
            data: 'November 23, 2020',
          },
          {
            id: 2,
            userNameCreatorComment: 'Austin Lewis',
            text: '«Why bother about cold?» the Grasshopper answered; «we have got a lot of food at present.» But the Ant went on its supply. When the winter came the Grasshopper got very cold and hungry while it kept watching the ants replete with corn and grain from the stores they had collected and saved in the summer. Then the Grasshopper understood…',
            data: 'October 11, 2021',
          }
        ]
    },
    {
        id: 2,
        title: "Private ideas",
        subTitle: "We have staff submit ideas and these should be able to be set 'Private', so they can be reviewed and released to the public. This would be an extension of the 'Private' site idea.",
        postLike: 48,
        countComments: 5,
        userNameCreatorPost: 'Agata Wilson',
        data: 'October 20, 2017',
    },
    {
        id: 3,
        title: "Close Comments",
        subTitle: "It would be great to close comments on an item. Especially when it is declined or merged as a dublicate.",
        postLike: 27,
        countComments: 12,
        userNameCreatorPost: 'Agata Wilson',
        data: 'October 20, 2017',
    }


]



  return (
      <Fragment>

        <Header />

          <Routes>
              <Route path="/" element={<Community/>}></Route>
              <Route path="/post-viewer/:postId" element={<PostViewer postItem={postItem}/>}></Route>
          </Routes>

        <Footer/>

      </Fragment>
  );
}

export default App;
