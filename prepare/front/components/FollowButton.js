import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const FollowButton = function ({ post }) {
  return <Button>팔로우</Button>;
};

FollowButton.prototype = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;
