export interface UserProfile {
  financierId: string;
  fullName: string;
  email: string;
}

export interface SessionInfo {
  token: string;
  userProfile: UserProfile;
}
