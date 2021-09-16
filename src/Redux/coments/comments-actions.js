import { createAction } from '@reduxjs/toolkit';

export const fetchCommentsByIdAction = createAction('comments/fetchById');
export const deleteCommentAction = createAction('comments/delete');
