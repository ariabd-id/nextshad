import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@nextshad/components/ui/form'
import { Input } from '@nextshad/components/ui/input' // Assuming Input component is imported from here
import React from 'react'

// Interface for FInputProps, extending from InputHTMLAttributes and adding form, name, and label
export interface FInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  form: any // Replace `any` with the specific form control type you're using, e.g., `Control` from `react-hook-form`
  name: string
  label: string
}

// FInput as a function component
export function FInput({ form, name, label, ...props }: FInputProps) {
  return (
    <FormField
      control={form}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <FormControl>
            <Input id={name} placeholder={label} {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

FInput.Password = function PasswordInput(
  props: Omit<Omit<FInputProps, 'type'>, 'label'>
) {
  return <FInput type='password' {...props} label='Password' />
}
