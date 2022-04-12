import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import useSWR from 'swr';
import axios from 'axios';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);

const Profile = function () {
  const { me } = useSelector((state) => state.user);

  const { data: followersData, error: followerError } = useSWR('http://localhost:3065/user/followers', fetcher);
  const { data: followingsData, error: followingError } = useSWR('http://localhost:3065/user/followings', fetcher);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);

  if (!me) {
    return '내 정보 로딩중...';
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return <div>팔로잉/팔로워 로딩 중 에러가 발생합니다.</div>;
  }

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={followingsData} />
        <FollowList header="팔로워" data={followersData} />

      </AppLayout>
    </>

  );
};

export default Profile;
