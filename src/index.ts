import {
  fastifyAuthPrismaPlugin as FastifyAuthPrismaPlugin,
  FastifyAuthPrismaUrlConfig as UrlConfig,
  getAccessTokenFromRequest as GetAccessTokenFromRequest,
} from './fastify-auth-plugin';
import {
  createUserToken as CreateUserToken,
  refreshUserToken as RefreshUserToken,
  removeAllUserTokens as RemoveAllUserTokens,
  removeUserToken as RemoveUserToken,
} from './utils';

export const createUserToken = CreateUserToken;
export const refreshUserToken = RefreshUserToken;
export const removeAllUserTokens = RemoveAllUserTokens;
export const removeUserToken = RemoveUserToken;
export const fastifyAuthPrismaPlugin = FastifyAuthPrismaPlugin;
export const getAccessTokenFromRequest = GetAccessTokenFromRequest;
export type FastifyAuthPrismaUrlConfig = UrlConfig;
