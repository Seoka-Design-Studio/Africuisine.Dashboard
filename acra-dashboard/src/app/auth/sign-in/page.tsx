'use client'
import { BaseResponse } from "@/types/res/base-response.type";
import { useRouter } from 'next/navigation';
import { Fragment, useState } from "react";
import { AuthService } from '@/services/auth.service'
import { Login } from "@/types/sign-in.type";
import { Spinner } from "@/loaders/spinner/spinner";
import axios, { AxiosError } from "axios";
import { ErrorAlert } from "@/alerts/error/error-alert";
import { AuthResponse } from "@/types/res/auth-response.type";
import { User } from "@/types/users.type";


const SignInForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<BaseResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)
    const body: Login = { username, password }
    const auth = new AuthService()
    auth.signInWithUserNameAndPassword(body).then((response) => {
      console.log('Successful login attempt =>', response.user.fullName);
      localStorage.setItem('session_token_id', response.token);
      router.push('/dashboard/statistics')
    }).catch((err) => {

      let res: BaseResponse = { message: 'An unexpected error occured while attempting to sign in', succeeded: false }
      setIsSubmitting(false);
      if (err instanceof AxiosError && typeof err.response !== 'undefined') {
        const json: string = err.response.data
        const response = JSON.parse(json.toLowerCase())
        res.message = response.message
        console.log(res.message)
      }
      if (!axios.isAxiosError(err)) {
        console.log(res.message)
      }
      setError(res)
    })
  }

  return (
    <Fragment>
      {error && <ErrorAlert message={error.message} />}
      <h2 className="text-2xl font-bold text-gray-900">Sign In To Your Account</h2>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">

        <div>
          <label className="form-label" htmlFor="username">Username:</label>
          <input type="email" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label className="form-label" htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
        </div>
        <div className="flex items-start">
          <a href="#" className="ml-auto text-sm text-gray-700 hover:text-orange-600 hover:font-semibold">Lost Password?</a>
        </div>
        {isSubmitting ? (
          <Spinner />
        ) : (
          <button className="w-full px-5 py-3 text-base font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 sm:w-auto" type="submit">Access Your Account</button>)}

      </form>
    </Fragment>
  )
}
export default SignInForm
