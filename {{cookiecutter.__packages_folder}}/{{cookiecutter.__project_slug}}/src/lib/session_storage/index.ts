import { SessionInfo } from '@custom_types/lib/session_storage/session.interface';
import { decryptStringAES, encryptStringAES } from '@lib/crypto';

const SESSION_KEY: string = 'styles';

const AES_KEY = String(process.env.AES_KEY);
const AES_SIGNATURE = String(process.env.AES_SIGNATURE);

export const getSession = (): SessionInfo | null => {
  const sessionInfo: string | null = localStorage.getItem(SESSION_KEY);

  if (!sessionInfo) {
    return null;
  }

  const deserializedSessionInfo = JSON.parse(sessionInfo) as SessionInfo;

  const decriptedSessionInfo: SessionInfo = {
    ...deserializedSessionInfo,
    // userProfile: {
    //   ...deserializedSessionInfo.userProfile,
    //   fullName: decryptStringAES(
    //     deserializedSessionInfo.userProfile.fullName,
    //     AES_KEY,
    //     AES_SIGNATURE,
    //   ),
    //   email: decryptStringAES(
    //     deserializedSessionInfo.userProfile.email,
    //     AES_KEY,
    //     AES_SIGNATURE,
    //   ),
    // },
  };

  return decriptedSessionInfo;
};

export const deleteSession = (): void => {
  localStorage.removeItem(SESSION_KEY);
};

export const saveSession = (sessionInfo: SessionInfo): void => {
  const encriptedSessionInfo: SessionInfo = {
    ...sessionInfo,
    // userProfile: {
    //   ...sessionInfo.userProfile,
    //   fullName: encryptStringAES(
    //     sessionInfo.userProfile.fullName,
    //     AES_KEY,
    //     AES_SIGNATURE,
    //   ),
    //   email: encryptStringAES(
    //     sessionInfo.userProfile.email,
    //     AES_KEY,
    //     AES_SIGNATURE,
    //   ),
    // },
  };

  const serializedSession = JSON.stringify(encriptedSessionInfo);

  localStorage.setItem(SESSION_KEY, serializedSession);
};
