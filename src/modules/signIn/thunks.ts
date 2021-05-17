import { buildAbilityFor } from "../authorization";
import { AppThunk } from "../store";
import { sessionCache, SessionData } from "./cache";
import { signInError, signInRequest, signInSuccess, signOut } from "./reducer";

export const signIn =
  (signInAs: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(signInRequest());
      const session = sessionCache();
      let userData: SessionData;

      if (signInAs === "Admin") {
        userData = {
          userId: "c2759e2a-8930-4a5c-8db4-633a8d5bf16a",
          role: "Admin",
        };
      } else {
        userData = {
          userId: "8871668f-be48-42c0-b785-b470679af29",
          role: "Manager",
        };
      }
      session.saveSession(userData);
      buildAbilityFor(userData.role);
      dispatch(signInSuccess(userData));
    } catch (error) {
      const [first] = error.response.data.statuses;
      dispatch(signInError({ errorMessage: first.message }));
    }
  };

export const logOff = (): AppThunk => async (dispatch) => {
  const cache = sessionCache();

  cache.removeSession();
  dispatch(signOut());
};
