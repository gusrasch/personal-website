# Personal Website

This is a simple personal website built with React and TypeScript.

## Getting Started

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. Open `http://localhost:3000` in your browser

## Building and Running with Docker

1. Build the Docker image:
```
docker build -t personal-website .
```
2. Run the container:
```
docker run -p 8080:80 personal-website
```
3. Open `http://localhost:8080` in your browser

## Deployment

0. `gcloud auth login`

FOR INFRA CHANGES:
1. `terraform plan`
2. `terraform apply`

FOR SITE CHANGES:
1. `npm run build`
2. `gsutil -m cp -r ./build/* gs://gusras-ch-bucket/`
