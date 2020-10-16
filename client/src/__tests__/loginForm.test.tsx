import React from "react";

import LoginForm from "../components/LoginForm";
import Login from "../pages/Login"
import DashboardPage from "../pages/DashboardPage"
import App from "../App";
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react'
import fetchMock from 'fetch-mock'

afterEach(() => {
  fetchMock.restore();
})

describe("<LoginForm />", () => {
  test("should display empty login form by default", async () => {
    // ???
    expect(App).toBeDefined()
    const appTree = shallow(<App />)
    expect(appTree.find('LoginForm')).toBeDefined()
  });

  test("should display login Page by default", async () => {
    // ???
    expect(Login).toBeDefined()
    const tree = shallow(<Login />)
    expect(tree.find('LoginForm')).toBeDefined()
    expect(
        tree
            .find('h1')
            .text()
    ).toBe("Login")
  });

  test("should display Dashboard Page by default", async () => {
    // ???
    expect(DashboardPage).toBeDefined()
    const tree = shallow(<DashboardPage />)
    expect(tree.find('h1')).toBeDefined()
    expect(
        tree
            .find('h1')
            .text()
    ).toBe('Dashboard Page')
  });

  test("should display login form, with initial username and password by default", async () => {
    // ???
   
    expect(LoginForm).toBeDefined()
    const tree = shallow(<LoginForm />)
    expect(tree.find('form')).toBeDefined()
    expect(
        tree
            .find('form')
            .find('div')
    ).toBeDefined()
    expect(
        tree
            .find('form')
            .find('div')
            .find('label')
    ).toBeDefined()
    expect(
        tree
            .find('form')
            .find('div')
            .find('input')
    ).toBeDefined()
    expect(
        tree
            .find('form')
            .find('button')
    ).toBeDefined() 
    
    const loginComponent = render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    expect(loginComponent.queryAllByText('User Name')).toHaveLength(1)
    expect(loginComponent.queryAllByText('Password')).toHaveLength(1)
    expect(loginComponent.queryAllByDisplayValue('kcvan')).toHaveLength(1)
    expect(loginComponent.queryAllByDisplayValue('Test1234!')).toHaveLength(1)
  });

  test('should return 403 error when calling login API', async () => {
    const loginComponent = render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fetchMock.post('/api/login', {
      headers: {
        "Content-type": "application/json"
      },
      status: 403
    });

    const btn = loginComponent.getByText('Login')
    fireEvent.click(btn)
  })

  test('should success when calling login API', async () => {
    const loginComponent = render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    const data = {
      token: 'Token',
      success: true
    }

    fetchMock.post('/api/login', data, {
      headers: {
        "Content-type": "application/json"
      },
    });
  
    const btn = loginComponent.getByText('Login')
    const username = loginComponent.getByDisplayValue('kcvan')
    const password = loginComponent.getByDisplayValue('Test1234!')

    fireEvent.change(username, { target: { value: 'User' }})
    fireEvent.change(password, { target: { value: 'Password' }})
    await fireEvent.click(btn)
    console.log("Windows: ", document.body.textContent)
  })
});