// import axios from 'axios'
const axios = require('axios')
const server = require('../app.js')
const supertest = require('supertest')

const request = supertest(server)

// Mock axios
jest.mock('axios')

afterEach(() => {
    axios.mockReset()
})

describe('Login API Test', () => {
    test('should require username and password', async (done) => {

        await request
            .post('/api/login')
            .send()
            .expect(function (res) {
                expect(res.status).toBe(403)
                expect(res.error.text).toBe('Provide Username and Password')
            })
        done()
    })

    it('should require username and password', async (done) => {

        const user = {
            username: '',
            password: ''
        }

        await request
            .post('/api/login')
            .send(user)
            .expect(function (res) {
                expect(res.status).toBe(403)
                expect(res.error.text).toBe('Provide Username and Password')
            })
        done()
    })

    it('should require username', async (done) => {

        const user = {
            username: '',
            password: '123456789'
        }

        await request
            .post('/api/login')
            .send(user)
            .expect(function (res) {
                console.log("Error: ", res.error.text)
                expect(res.status).toBe(403)
                expect(res.error.text).toBe('Provide Username')
            })
        done()
    })

    it('should require password', async (done) => {

        const user = {
            username: 'User',
            password: ''
        }

        await request
            .post('/api/login')
            .send(user)
            .expect(function (res) {
                expect(res.status).toBe(403)
                expect(res.error.text).toBe('Provide Password')
            })
        done()
    })

    it('should require valid username', async (done) => {

        const user = {
            username: '123',
            password: '123456789'
        }

        await request
            .post('/api/login')
            .send(user)
            .expect(function (res) {
                expect(res.status).toBe(403)
                expect(res.error.text).toBe('Invalid Username')
            })
        done()
    })

    it('should require valid password', async (done) => {

        const user = {
            username: 'User',
            password: '123456789'
        }

        await request
            .post('/api/login')
            .send(user)
            .expect(function (res) {
                expect(res.status).toBe(403)
                expect(res.error.text).toBe('Invalid Password')
            })
        done()
    })

    it('should return success message', async (done) => {

        const user = {
            username: 'User',
            password: 'Password'
        }

        await request
            .post('/api/login')
            .send(user)
            .expect(function (res) {
                const body = JSON.parse(res.text)
                expect(res.status).toBe(200)
                expect(body.success).toBe(true)
                expect(body.token).toBe('Token')
            })
        done()
    })
})