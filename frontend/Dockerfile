FROM node:20

# 作業ディレクトリの指定
WORKDIR /frontend

# package.jsonとyarn.lockをコピー
COPY package*.json yarn.lock ./

# 依存関係をインストール
RUN yarn install

# ソースコードをコピー
COPY . .

# デフォルトの実行コマンド（docker-compose で上書き可能）
CMD ["yarn", "dev"]


##本番時
# ARG NEXT_PUBLIC_BACKEND_URL

# RUN NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL yarn build

# CMD ["yarn", "start"]