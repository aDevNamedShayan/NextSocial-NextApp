'use client'

import { useFormStatus } from "react-dom";

export default function LoadingFormButton() {
  const { pending } = useFormStatus()

  // if(pending) {
  //   return <p>Creating post...</p>
  // }

  return (
    <>
      <button type="reset" disabled={pending}>Reset</button>
      <button disabled={pending}>{pending ? 'Creating...' : 'Create Post'}</button>
    </>
  );
}