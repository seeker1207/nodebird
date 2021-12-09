export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '찌훈손',
    },
    content: '첫 번쨰 게시글 #해시태그#익스프레스',
    Images: [{
      src: 'https://cdn.mhns.co.kr/news/photo/202104/505253_608814_626.jpg',
    }, {
      src: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E',
    }, {
      src: 'https://img1.daumcdn.net/thumb/C300x430/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ff2d3ee4afbc78b44e34534037e17f7f382e1b65c',
    }],
    Comments: [{
      User: {
        nickname: 'nero',
      },
      content: '우와 포켓몬 영화구나~',
    }, {
      User: {
        nickname: 'hero',
      },
      content: '우와 고양이가 귀엽네요~',
    }, {
      User: {
        nickname: 'kero',
      },
      content: '강아지종이 뭔가요?',
    }],
  }],

  imagePaths: [],

  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  addCommentsLoading: false,
  addCommentsDone: false,
  addCommentsError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = (data) => ({
  id: 2,
  User: {
    nickname: '제로손',
  },
  content: data,
  Images: [],
  Comments: [],
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentsLoading: true,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentsLoading: false,
        addCommentsDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        addCommentsLoading: false,
        addCommentsError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
