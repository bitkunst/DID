const { default: axios } = require('axios');
const { pool } = require('../../db');

const getPoint = async (userCode, clientId) => {
  try {
    const sql = `SELECT connected.a_idx, application.name, pointRouter
                FROM connected
                LEFT JOIN user
                ON connected.u_idx=user.idx
                LEFT JOIN application
                ON connected.a_idx=application.idx
                LEFT JOIN pointRouters
                ON connected.a_idx=pointRouters.a_idx
                WHERE user.userCode="${userCode}" AND application.usePoint="1" AND NOT APIKey="${clientId}"`;

    const [result] = await pool.query(sql);
    const routers = result.map((v) => v.pointRouter);
    const points = [];
    for await (const router of routers) {
      const response = await axios.post(router, { userCode });
      points.push(response.data.pt);
    }
    points.forEach((point, i) => {
      result[i].pt = point;
      delete result[i].pointRouter;
    });
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const usePoint = async (userCode, points) => {
  const idxList = Object.keys(points);

  const sql = `
  SELECT pointUseRouter 
  FROM pointRouters
  WHERE a_idx IN (${idxList.map((v) => JSON.stringify(v)).join()})`;
  try {
    const [result] = await pool.query(sql);
    const routers = result.map((v) => v.pointUseRouter);
    for await (const [i, router] of routers.entries()) {
      await axios.post(router, {
        userCode,
        point: points[idxList[i]],
      });
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = { getPoint, usePoint };
