import React, { useCallback, useMemo } from 'react';
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useinput';
import { CHANGE_NICKNAME_REQUEST } from '../reducer/user';

const NicknameEditForm = function () {
  const { me } = useSelector((state) => state.user);
  const [nickName, onChangeNickname] = useInput(me?.nickname || '');
  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickName,
    });
  }, [nickName]);
  const style = useMemo(() => ({ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px' }), []);

  return (
    <Form style={style}>
      <Input.Search
        value={nickName}
        onChange={onChangeNickname}
        addonBefore="닉네임"
        enterButton="수정"
        onSearch={onSubmit}
      />
    </Form>
  );
};

export default NicknameEditForm;
