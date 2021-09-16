import { createAction } from '@reduxjs/toolkit';

export const areYouSureActionOpen = createAction('areYouSureModal/open');
export const areYouSureActionClose = createAction('areYouSureModal/close');
