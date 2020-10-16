import { History } from 'history';
import * as React from 'react';
import { withRouter } from 'react-router-dom';

interface RouterProps {
  history: History;
  location: {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: string | undefined;
  };
  match: {
    isExact: boolean;
    params: {
      id: string;
    };
    path: string;
    url: string;
  };
}

const LoginForm = (props: RouterProps) => {
  const [username, setUsername] = React.useState<string>('kcvan');
  const [password, setPassword] = React.useState<string>('Test1234!');

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">User Name</label>
        <input type="text" name="username" id="username" onChange={event => setUsername(event.target.value)} value={username} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={event => setPassword(event.target.value)} value={password} />
      </div>
      <button type="submit">Login</button>
    </form>
  );

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formData = {
      username,
      password
    }

    fetch('/api/login', {
      method: 'post',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      localStorage.setItem('myToken', data.token);
      props.history.push('/dashboard');
    })
    .catch(e => {
      console.log("Error Message: ", e.message)
    })
  }
}

export default withRouter(LoginForm);