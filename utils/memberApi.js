import { apiClient } from "./apiClient";
export const getMember = () => apiClient.get("/member/accountList");
export const updateAccount = (updateObj) =>
  apiClient.put("member/updateAccount", updateObj);
export const deleteAccount = (id) =>
  apiClient.delete("/member/deleteAccount", id);
