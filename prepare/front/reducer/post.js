export const initialState = {
    mainPosts: [{
        id:1,
        User: {
            id:1,
            nickname: '찌훈손',
        },
        content: '첫 번쨰 게시글 #해시태그',
        Images: [{
            src: 'https://cdn.mhns.co.kr/news/photo/202104/505253_608814_626.jpg',
        }, {
            src: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E',
        }, ],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우와 포켓몬 영화구나~',
        },{
            User: {
                nickname: 'hero',
            },
            content: '우와 고양이가 귀엽네요~',
        },{
            User: {
                nickname: 'kero',
            },
            content: '강아지종이 뭔가요?',
        }]
    }],
    imagePaths: [],
    postAdded: false, // 게시글 추가가 완료됐을때
};

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}
const dummyPost = {
    id: 2,
    User: {
        nickname: '제로손',
    },
    content: '더미 데이터입니다',
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
        return  {
            ...state,
            mainPosts: [dummyPost, ...state.mainPosts],
            postAdded: true,
        }
        default:
            return state;
    }
}

export default reducer;