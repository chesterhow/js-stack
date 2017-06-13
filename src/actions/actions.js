import {
  FETCH_DEV_TOOLS,
  FETCH_TEST_TOOLS,
  UPVOTE_TOOL,
  DOWNVOTE_TOOL
} from '../constants/action-types';
import devTools from '../json/dev.json';
import testTools from '../json/test.json';

export const fetchDevTools = () => ({
  type: FETCH_DEV_TOOLS,
  data: devTools
});

export const fetchTestTools = () => ({
  type: FETCH_TEST_TOOLS,
  data: testTools
});

export const upvoteTool = (toolId, category) => ({
  type: UPVOTE_TOOL,
  id: toolId,
  category
});

export const downvoteTool = (toolId, category) => ({
  type: DOWNVOTE_TOOL,
  id: toolId,
  category
});
