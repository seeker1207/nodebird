import React, {useCallback} from 'react';
import {Card, Avatar, Button} from "antd";
import {useDispatch} from "react-redux";
import {logoutAction} from "../reducer/user";

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">짹쨱 <br />0</div>,
                <div key="followings">팔로워 <br />0</div>,
                <div key="followers">팔로워 <br />0</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>SE</Avatar>}
                title="Seeker"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;