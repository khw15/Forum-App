const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  const putAccessToken = (token) => localStorage.setItem('accessToken', token);

  const getAccessToken = () => localStorage.getItem('accessToken');

  const _fetchWithAuth = async (url, options = {}) => fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  async function register({name, email, password}) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, password}),
    });

    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') throw new Error(message);

    const {
      data: {user},
    } = responseJson;

    return user;
  }

  async function login({email, password}) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password}),
    });

    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') throw new Error(message);

    const {
      data: {token},
    } = responseJson;

    return token;
  }

  async function getAllUsers() {
    const response = await fetch(`${BASE_URL}/users`);
    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') throw new Error(message);

    const {
      data: {users},
    } = responseJson;

    return users;
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`);
    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') throw new Error(message);

    const {
      data: {user},
    } = responseJson;

    return user;
  }

  async function createThread({title, body, category = ''}) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title, body, category}),
    });

    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') throw new Error(message);

    const {
      data: {thread},
    } = responseJson;

    return thread;
  }

  async function getAllThreads() {
    const response = await fetch(`${BASE_URL}/threads`);
    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') throw new Error(message);

    const {
      data: {threads},
    } = responseJson;

    return threads;
  }

  async function getThreadDetail(id) {
    const response = await fetch(`${BASE_URL}/threads/${id}`);
    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') throw new Error(message);

    const {
      data: {detailThread},
    } = responseJson;

    return detailThread;
  }

  async function createComment(threadId, content) {
    const response = await _fetchWithAuth(
        `${BASE_URL}/threads/${threadId}/comments`,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({content}),
        },
    );

    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') throw new Error(message);

    const {
      data: {comment},
    } = responseJson;

    return comment;
  }

  async function upVoteThread(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${id}/up-vote`, {
      method: 'POST',
    });

    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') throw new Error(message);

    const {
      data: {vote},
    } = responseJson;

    return vote;
  }

  async function downVoteThread(id) {
    const response = await _fetchWithAuth(
        `${BASE_URL}/threads/${id}/down-vote`,
        {
          method: 'POST',
        },
    );

    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') throw new Error(message);

    const {
      data: {vote},
    } = responseJson;

    return vote;
  }

  async function neutralizeThreadVote(id) {
    const response = await _fetchWithAuth(
        `${BASE_URL}/threads/${id}/neutral-vote`,
        {
          method: 'POST',
        },
    );

    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') throw new Error(message);

    const {
      data: {vote},
    } = responseJson;

    return vote;
  }

  async function upVoteComment(threadId, commentId) {
    const response = await _fetchWithAuth(
        `${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
        {
          method: 'POST',
        },
    );

    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') throw new Error(message);

    const {
      data: {vote},
    } = responseJson;

    return vote;
  }

  async function downVoteComment(threadId, commentId) {
    const response = await _fetchWithAuth(
        `${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
        {
          method: 'POST',
        },
    );

    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') throw new Error(message);

    const {
      data: {vote},
    } = responseJson;

    return vote;
  }

  async function neutralizeCommentVote(threadId, commentId) {
    const response = await _fetchWithAuth(
        `${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
        {
          method: 'POST',
        },
    );

    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') throw new Error(message);

    const {
      data: {vote},
    } = responseJson;

    return vote;
  }

  async function getLeaderboards() {
    const response = await fetch(`${BASE_URL}/leaderboards`);
    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') throw new Error(message);

    const {
      data: {leaderboards},
    } = responseJson;

    return leaderboards;
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getAllUsers,
    getOwnProfile,
    createThread,
    getAllThreads,
    getThreadDetail,
    createComment,
    upVoteThread,
    downVoteThread,
    neutralizeThreadVote,
    upVoteComment,
    downVoteComment,
    neutralizeCommentVote,
    getLeaderboards,
  };
})();

export default api;
