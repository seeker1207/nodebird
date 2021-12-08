import React, {useCallback} from 'react';
import {Card, Avatar, Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {logoutRequestAction} from "../reducer/user";

const UserProfile = () => {
    const dispatch = useDispatch();
    const { me, logOutLoading } = useSelector((state) => state.user);

    const onLogOut = useCallback(() => {
        dispatch(logoutRequestAction());
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">짹쨱 <br />{me.Posts.length}</div>,
                <div key="followings">팔로워 <br />{me.Followings.length}</div>,
                <div key="followers">팔로워 <br />{me.Followers.length}</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;