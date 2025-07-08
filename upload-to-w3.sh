#!/bin/sh

# upload-to-w3.sh - 将构建好的 dist 文件上传到 W3 存储
# 作者: yuanquanke
# 创建日期: 2025-07-08

# 严格模式
set -e

# 检查必要的环境变量
if [ -z "$AWS_ACCESS_KEY_ID" ] || [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
  echo "错误: 未设置 AWS 凭证环境变量"
  echo "请设置 AWS_ACCESS_KEY_ID 和 AWS_SECRET_ACCESS_KEY"
  exit 1
fi

# 检查目录是否存在
if [ ! -d "$DIST_DIR" ]; then
  echo "错误: 构建目录 $DIST_DIR 不存在"
  echo "请确保已成功构建项目"
  exit 1
fi

# 配置 AWS CLI
echo "配置 AWS CLI..."
aws configure set default.s3.addressing_style path
aws configure set default.s3.payload_signing_enabled true

# 上传文件到 S3
echo "正在上传文件到 W3 存储..."
echo "目标: s3://$S3_BUCKET/$S3_PREFIX"

# 使用 AWS CLI 同步文件
aws s3 sync "$DIST_DIR/" "s3://$S3_BUCKET/$S3_PREFIX" \
  --delete \
  --cache-control "max-age=3600" \
  --endpoint-url "$S3_ENDPOINT"

# 检查上传结果
if [ $? -eq 0 ]; then
  echo "✅ 上传成功!"
  echo "访问地址: $S3_ENDPOINT/$S3_BUCKET/$S3_PREFIX"
else
  echo "❌ 上传失败，请检查错误信息"
  exit 1
fi
