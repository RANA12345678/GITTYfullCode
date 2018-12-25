interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'Jf4h03068VHfeim1n4Yr8Abemo6evTqY',
  CLIENT_DOMAIN: 'ashu-gitty.auth0.com',
  AUDIENCE: 'https://api.github.com/users',
  REDIRECT: 'https://github.com/Ashutosh552',
  SCOPE: 'openid profile'
};
