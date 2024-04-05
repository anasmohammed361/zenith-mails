FROM node:20  AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

RUN mv docker.svelte.config.js svelte.config.js

ENV TURSO_AUTH_TOKEN=your_turso_auth_token
ENV TURSO_DATABASE_URL=your_turso_url
ENV GOOGLE_CLIENT_ID=your_google_client_id
ENV GOOGLE_CLIENT_SECRET=your_google_client_secret
ENV GITHUB_CLIENT_ID=your_github_client_id
ENV GITHUB_CLIENT_SECRET=your_github_client_secret


FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base AS release
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build

EXPOSE 3000
ENV NODE_ENV=production

WORKDIR /app/build

CMD [ "node","." ]