import Vue from "vue";

export const Login = async (phone) => {
  const resp = await Vue.axios({
    method: "POST",
    url: "login",
    data: {
      phone,
    },
  });
  return resp.data;
};

export const Register = async (user) => {
  const resp = await Vue.axios({
    method: "POST",
    url: "register",
    data: user,
  });
  return resp.data;
};

export const SaveMessage = async (data) => {
  const resp = await Vue.axios({
    method: "POST",
    url: "v1/store-pqr",
    data,
  });
  return resp.data;
};

export const GetStatus = async () => {
  const resp = await Vue.axios({
    method: "Get",
    url: "v1/get-status-user",
  });
  return resp.data;
};

export const SaveCodes = async (data) => {
  const resp = await Vue.axios({
    method: "POST",
    url: "v1/code-redemptions",
    data,
  });
  return resp.data;
};

export const GetCodes = async () => {
  const resp = await Vue.axios({
    method: "Get",
    url: "v1/code-redemptions",
  });
  return resp.data;
};

export const Ranking = async () => {
  const resp = await Vue.axios({
    method: "Get",
    url: "v1/get-ranking",
  });
  return resp.data;
};

export const CodeDebit = async () => {
  const resp = await Vue.axios({
    method: "Get",
    url: "v1/get-debit",
  });
  return resp.data;
};

export const Activity = async () => {
  const resp = await Vue.axios({
    method: "Get",
    url: "/activity-status",
  });
  return resp.data;
};
