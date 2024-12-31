import {create} from 'zustand';
import { persist } from 'zustand/middleware';
interface Comment {
  id: number;
  name:string;
  comment: string;
}

interface CommentState {
  comments: Comment[];
  addComment: (newComment: Comment) => void;
  removeComment: (id: number) => void;
}

const useCommentStore = create<CommentState>()(
    persist(
      (set) => ({
        comments: [],
        addComment: (newComment) =>
          set((state) => ({
            comments: [...state.comments, newComment],
          })),
        removeComment: (id) =>
          set((state) => ({
            comments: state.comments.filter((comment) => comment.id !== id),
          })),
      }),
      {
        name: 'comment-storage', // Key in localStorage
      }
    )
  );
export default useCommentStore;
