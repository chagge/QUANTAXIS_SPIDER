# QUANTAXIS_SPIDER 可视化爬虫
### QUANTAXIS 3.5 重构版本的爬虫部分
![build](https://img.shields.io/badge/Build-passing-green.svg)
![author](https://img.shields.io/badge/Powered%20by-%20%20yutiansut-red.svg)
![license](https://img.shields.io/badge/License-%20MIT-brightgreen.svg)


-------------
## Stack
```
nodejs
express
childprocess
webpack
vue.js
vue-blu
python-scrapy-selenium-webdriver
mongodb
redis
```
## Usage
* 安装python,nodejs,python-pip
* 安装Quantaxis_Spider
```
git clone https://github.com/yutiansut/QUANTAXIS_SPIDER.git
cd QUANTAXIS_SPIDER
cd backend
npm install
cd ../frontend/quantaxisSpider
npm install
cd ../../childprocess
python -m pip install -r requirements.txt
```
* 安装mongodb-启动Mongo服务
```
windows
linux
```

## Features

## Todolists
### 热刷新问题
ajax去请求数据异步刷新模块这些没问题,下一步是反向注入json任务给运行中的python和matlab核心去做热刷新
在前端和爬虫和分析核中间也构建一个MVVM

### 一键部署/安装  使用powershell

### 技术栈
![技术栈](https://github.com/yutiansut/QUANTAXIS_SPIDER/blob/dev-visualCraw/todo.png)
### Start页面
![Start页面](https://github.com/yutiansut/QUANTAXIS_SPIDER/blob/dev-front/pic/start.gif)
### 前端设计
![前端设计](https://github.com/yutiansut/QUANTAXIS_SPIDER/blob/dev-front/pic/HomePage-design.png)
### 爬取到的数据
![爬到的数据](https://github.com/yutiansut/QUANTAXIS_SPIDER/blob/dev-front-back-Craw/pic/craw.png)
## 数据库查重
![数据库查重](https://github.com/yutiansut/QUANTAXIS_SPIDER/blob/dev-front-back-Craw/pic/findsame.png)
### 从数据库索引中爬取
![从数据库文章索引爬取](https://github.com/yutiansut/QUANTAXIS_SPIDER/blob/dev-front-back-Craw/pic/getfromdatabase.png)
## 后端api做restful
![后端api做restful](https://github.com/yutiansut/QUANTAXIS_SPIDER/blob/dev-front-back-Craw/pic/backend-restful.png)
### 前端拿到api
![前端拿到api](https://github.com/yutiansut/QUANTAXIS_SPIDER/blob/dev-front-back-Craw/pic/front-getapi.png)