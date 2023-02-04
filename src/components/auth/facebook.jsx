import React, { useState } from "react";
import FacebookLogin from 'react-facebook-login';

const FaceBook = () => {
    const [accessToken, setAccessToken] = useState('');

    const componentClicked = (data) => {
        //console.log(data);
    }
    const responseFacebook = (response) => {
        console.log(response);
    }
    return <React.Fragment>
        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <FacebookLogin
                appId="1252313545390634"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile,user_birthday,user_friends,user_likes,user_link,user_photos,user_posts,user_videos"
                onClick={componentClicked}
                callback={responseFacebook} />,
        </div>
    </React.Fragment >
}

export default FaceBook;