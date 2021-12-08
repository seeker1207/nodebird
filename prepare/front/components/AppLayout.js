import React, { useState } from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
  `;

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`
const AppLayout = ({ children }) => {
    const { me } = useSelector((state) => state.user);
    return (
        <div>
            <Global />
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6} >
                    {me ? <UserProfile /> : <LoginForm />}
                    </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer" >구글로 이동</a>
                </Col>
            </Row>

        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;