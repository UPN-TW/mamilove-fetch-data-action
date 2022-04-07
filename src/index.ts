import * as core from '@actions/core';
import { fetchLatestCuration, fetchLatestGroupbuy } from './api/mall/api'
import { ActionType } from './action.type';

const actionType = core.getInput("type");
const actionsMap: Record<ActionType, any> = {
  [ActionType.LATEST_GROUPBUY]: fetchLatestGroupbuy,
  [ActionType.LATEST_CURATION]: fetchLatestCuration,
}

const main = async () => {
  try {
    const result = await actionsMap[actionType]() || '';
    core.setOutput("result", result);

  } catch (error) {
    // @ts-ignore
    core.setFailed(error.message);
  }
};

main();
