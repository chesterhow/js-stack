import { FETCH_DEV_TOOLS, FETCH_TEST_TOOLS, UPVOTE_TOOL, DOWNVOTE_TOOL } from '../constants/action-types';

export const devTools = (state = [], action) => {
  switch (action.type) {
    case FETCH_DEV_TOOLS:
      return action.data;

    case UPVOTE_TOOL:
      if (action.category === 'dev') {
        return state.map((tool) => {
          if (tool.id === action.id) {
            return {
              ...tool,
              votes: tool.votes + 1
            };
          }
          return tool;
        });
      }
      return state;

    case DOWNVOTE_TOOL:
      if (action.category === 'dev') {
        return state.map((tool) => {
          if (tool.id === action.id) {
            return {
              ...tool,
              votes: tool.votes - 1
            };
          }
          return tool;
        });
      }
      return state;

    default:
      return state;
  }
};

export const testTools = (state = [], action) => {
  switch (action.type) {
    case FETCH_TEST_TOOLS:
      return action.data;

    case UPVOTE_TOOL:
      if (action.category === 'test') {
        return state.map((tool) => {
          if (tool.id === action.id) {
            return {
              ...tool,
              votes: tool.votes + 1
            };
          }
          return tool;
        });
      }
      return state;

    case DOWNVOTE_TOOL:
      if (action.category === 'test') {
        return state.map((tool) => {
          if (tool.id === action.id) {
            return {
              ...tool,
              votes: tool.votes - 1
            };
          }
          return tool;
        });
      }
      return state;

    default:
      return state;
  }
};

export const getDevTools = (state) => state.devTools;
export const getTestTools = (state) => state.testTools;
