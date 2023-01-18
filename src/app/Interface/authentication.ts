export interface IAuthentication {
  authentication: {
    userID: string;
    consumerID: string;
    authenticationType: string;
    authenticationData: IauthenticationData[];
  };
  backendUserRequest: {
    userId: string;
    accessCode: string;
    dialogId: string;
  };
}

export interface IauthenticationData {
  idAuthenticationData: string;
  authenticationData: [string];
}
