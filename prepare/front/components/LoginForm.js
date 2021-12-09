import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useinput';
import { loginRequestAction } from '../reducer/user';

const ButtonWrapper = styled.div`
    color: red;
    margin-top: 10px;
`;
const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = function () {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { loginLoading } = useSelector((state) => state.user);

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id"> 이메일</label>
        <br />
        <Input name="user-id" value={email} type="email" onChange={onChangeEmail} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={loginLoading}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
