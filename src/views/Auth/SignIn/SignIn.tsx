import { zodResolver } from '@hookform/resolvers/zod'
import { FInput } from '@nextshad/components/molecules'
import { Button } from '@nextshad/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@nextshad/components/ui/card'
import { Form } from '@nextshad/components/ui/form'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

import { loginSchema } from './schema'

function LoginForm() {
  const { push } = useRouter()
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    form.reset()

    push('/dashboard')
  }

  return (
    <Card className='w-full max-w-lg'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>
          Enter your username and password below to login to your account.
        </CardDescription>
      </CardHeader>

      <CardContent className='grid gap-4'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <FInput form={form.control} name='username' label='Username' />

            <FInput.Password form={form.control} name='password' />
            <Button className='w-full' type='submit'>
              Sign in
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

function SignIn() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <LoginForm />
    </div>
  )
}

export default SignIn
