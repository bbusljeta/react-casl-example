export interface SessionData {
  userId: string;
  role: string;
}

export function sessionCache() {
  const key = "session";

  const saveSession = (data: unknown) => {
    localStorage.setItem(key, JSON.stringify(data));
    return;
  };

  const removeSession = () => {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  };

  const updateSession = (data: SessionData) => {
    let existingSession = getSession();

    if (!existingSession) {
      saveSession(data);
      return;
    }

    existingSession = {
      ...data,
    };

    saveSession(existingSession);
  };

  const getSession = () => {
    let session = sessionStorage.getItem(key);

    if (!session) {
      session = localStorage.getItem(key);
    }

    if (session) {
      return JSON.parse(session) as SessionData;
    } else {
      return null;
    }
  };
  return {
    saveSession,
    removeSession,
    getSession,
    updateSession,
  };
}
