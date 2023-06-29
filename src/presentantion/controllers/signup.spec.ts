import { SignUpController } from './signup'

describe('Signup Controller', () => {
  teste('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest) 
    expct(httpResponse.statusCode).toBe(400)
  })
})