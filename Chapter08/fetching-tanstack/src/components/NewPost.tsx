'use client';
import { useState } from 'react';
import { createPost } from '@/data/createPost';

export function NewPost() {
  const [isMutating, setIsMutating] = useState(false);
  const [status, setStatus] = useState<
    'pending' | 'error' | 'success'
  >('pending');
  async function handleClick() {
    setIsMutating(true);
    const result = await createPost(
      'New Post',
      'New Post Description',
    );
    setStatus(result.ok ? 'success' : 'error');
    setIsMutating(false);
  }
  return (
    <div className="actions">
      <button type="button" onClick={handleClick}>
        {isMutating ? 'Creating...' : 'Create New Post'}
      </button>
      {status === 'error' && (
        <span role="alert">
          An unexpected error occurred
        </span>
      )}
      {status === 'success' && (
        <span role="alert" className="success">
          Post successfully created
        </span>
      )}
    </div>
  );
}
